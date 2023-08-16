import React from 'react';
import Hero from '../components/HeroSection/Hero';
import ProductCard from '../components/Card/ProductCard';

const Home = () => {

    const product = ['nike', 'adidas', 'puma', 'nike', 'adidas', 'puma', 'nike', 'adidas', 'puma', 'nike', 'adidas', 'puma'];

    return (
        <>
            <Hero />
            <section className='w-11/12 mx-auto mt-10 flex gap-4'>
                <div className='w-1/4 bg-gray-500'>
                    <h1 className='text-4xl'>This is filter section</h1>
                </div>
                <div className='w-3/4 grid grid-cols-3 gap-4'>
                    {
                        product.map((item) =>
                            <ProductCard
                                item={item}></ProductCard>
                        )
                    }
                </div>
            </section>

        </>
    );
};

export default Home;