import React, { useEffect, useState } from 'react';
import Hero from '../components/HeroSection/Hero';
import ProductCard from '../components/Card/ProductCard';
import axios from 'axios';
import { minMax_url, product_url, search_url } from '../api/api_url';
import toast from 'react-hot-toast';
import useTitle from '../hooks/useTitle';

const Home = () => {
    const [products, setProducts] = useState([]);
    useTitle('Home');

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

    const handleSearch = async (e) => {
        e.preventDefault();
        const form = e.target;
        const searchInput = form.searchInput.value;

        console.log(searchInput);
        if (!searchInput || searchInput === '') {
            toast.error('Please Enter Product Name');
            return;
        } else {
            try {
                const res = await axios.get(`${search_url}${searchInput}`);

                console.log(res);
                if (res) {
                    const searchedProducts = res?.data;
                    setProducts(searchedProducts);
                }
            } catch (error) {
                console.error(error);
                toast.error("Invalid credentials or something went wrong");

            }
        }
    }

    const handleFilter = async (e) => {
        e.preventDefault();
        const form = e.target;
        const min = form.min.value;
        const max = form.max.value;

        console.log(min, max);
        if (!min || min === '' || !max || max === '') {
            toast.error('Please Enter Both Min and Max Price');
            return;
        } else {
            try {
                const res = await axios.get(`${minMax_url}minPrice=${min}&maxPrice=${max}`);

                console.log(res);
                if (res) {
                    const filteredProducts = res?.data;
                    setProducts(filteredProducts);
                }
            } catch (error) {
                console.error(error);
                toast.error("Invalid credentials or something went wrong");

            }
        }
    }

    return (
        <>
            <Hero products={products} />
            <section className='w-11/12 mx-auto mt-10 flex gap-4'>
                <div className='w-1/4 bg-gray-500 rounded-xl max-h-60'>
                    <h1 className='text-2xl text-white text-center font-semibold p-4'>Filter Products by Price</h1>
                    <form onSubmit={handleFilter} >
                        <div className='flex justify-center items-center mt-2'>
                            <input name='min' type="text" placeholder="Min" className="input input-bordered w-full max-w-xs mx-2" />
                            <p> - </p>
                            <input name='max' type="text" placeholder="Max" className="input input-bordered w-full max-w-xs mx-2" />
                        </div>
                        <div className='mt-6 flex justify-end items-center'>
                            <button type='submit' className='btn btn-primary m-4 w-1/2'>Filter</button>
                        </div>
                    </form>
                </div>
                <div className='w-3/4 flex flex-col gap-10'>
                    <form onSubmit={handleSearch} className="form-control w-full text-primary">
                        <div className="input-group w-full">
                            <input name='searchInput' type="text" placeholder="Search for products..." className="input input-bordered border-primary w-3/4" />
                            <button type='submit' className="btn btn-primary btn-square w-1/4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </form>
                    <div className='w-full grid grid-cols-4 gap-6'>
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
                </div>
            </section>

        </>
    );
};

export default Home;