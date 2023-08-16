import React from 'react';

const Hero = () => {
    return (
        <section className='mx-auto mt-5 w-10/12'>
            <div className="carousel w-full bg-white rounded-2xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='w-3/4'>
                        <h1 className='text-primary text-6xl font-bold text-center mt-36'>New Arrival</h1>
                    </div>
                    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/41e147d8-6410-4b75-b46c-567b0d5903ca/air-max-270-mens-shoes-KkLcGR.png" className="w-1/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='w-3/4'>
                        <h1 className='text-primary text-6xl font-bold text-center mt-36'>New Arrival</h1>
                    </div>
                    <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/41e147d8-6410-4b75-b46c-567b0d5903ca/air-max-270-mens-shoes-KkLcGR.png" className="w-1/4" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;