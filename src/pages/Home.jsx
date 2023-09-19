import React, { useEffect, useState } from 'react';
import Hero from '../components/HeroSection/Hero';
import ProductCard from '../components/Card/ProductCard';
import axios from 'axios';
import { product_url } from '../api/api_url';

const Home = () => {
    const [products, setProducts] = useState([]);

    // console.log(products.length);
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get(product_url);
            // console.log(res);

            if (res?.data) {
                setProducts(res?.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Hero products={products} />
            <section className='w-11/12 mx-auto mt-10 flex gap-4'>
                <div className='w-1/4 bg-gray-500'>
                    <h1 className='text-4xl'>This is filter section</h1>
                </div>
                <div className='w-3/4 grid grid-cols-4 gap-6'>
                    {
                        products.length > 0 ?
                            products.map((item) =>
                                <ProductCard
                                    item={item} key={item?._id}></ProductCard>
                            )
                            :
                            undefined
                    }
                </div>
            </section>

        </>
    );
};

export default Home;