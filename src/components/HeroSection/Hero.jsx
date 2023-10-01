import React, { useEffect, useRef, useState } from 'react';

const Hero = ({ products }) => {
    const [loading, setLoading] = useState(true);

    const slide1Ref = useRef(null);
    const slide2Ref = useRef(null);
    const slide3Ref = useRef(null);

    const scrollToSlide = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const product1 = products[1];
    const product2 = products[3];
    const product3 = products[5];

    useEffect(() => {
        if (products?.length === 0) {
            setLoading(true);
        } else setLoading(false);
    }, [products]);

    if (loading) {
        return <div className='w-10/12 mt-5 mx-auto flex justify-center items-center h-40'>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div>
    }

    return (
        <section className='mx-auto mt-5 w-10/12'>
            <div className="carousel w-full bg-white rounded-2xl">
                <div id="slide1" ref={slide1Ref} className="carousel-item relative w-full">
                    <div className='w-3/4'>
                        <h1 className='text-primary text-6xl font-bold text-center mt-36'>New Arrival</h1>
                    </div>
                    <img src={product1?.image} className="w-1/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a onClick={(e) => { e.preventDefault(); scrollToSlide(slide3Ref); }} href="#slide3" className="btn btn-circle">❮</a>
                        <a onClick={(e) => { e.preventDefault(); scrollToSlide(slide2Ref); }} href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" ref={slide2Ref} className="carousel-item relative w-full">
                    <div className='w-3/4'>
                        <h1 className='text-primary text-6xl font-bold text-center mt-36'>New Arrival</h1>
                    </div>
                    <img src={product2?.image} className="w-1/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a onClick={(e) => { e.preventDefault(); scrollToSlide(slide1Ref); }} href="#slide1" className="btn btn-circle">❮</a>
                        <a onClick={(e) => { e.preventDefault(); scrollToSlide(slide3Ref); }} href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" ref={slide3Ref} className="carousel-item relative w-full">
                    <div className='w-3/4'>
                        <h1 className='text-primary text-6xl font-bold text-center mt-36'>New Arrival</h1>
                    </div>
                    <img src={product3?.image} className="w-1/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a onClick={(e) => { e.preventDefault(); scrollToSlide(slide2Ref); }} href="#slide2" className="btn btn-circle">❮</a>
                        <a onClick={(e) => { e.preventDefault(); scrollToSlide(slide1Ref); }} href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;