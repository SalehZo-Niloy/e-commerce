import React from 'react';
import useTitle from '../hooks/useTitle';

const About = () => {
    useTitle('About');


    return (
        <div className='w-9/12 mx-auto mt-10'>
            <h3 className='text-3xl text-start text-white font-semibold mb-4'>About us</h3>

            <p className='w-10/12 mt-6 text-xl'>ZAN Tech, one of the subsidiaries of ZAN IT, specializes in developing and delivering advanced technological solutions. With a team of skilled engineers and developers, ZAN Tech creates software applications, builds robust IT infrastructure, and offers system integration services to optimize business operations and enhance productivity.Also Sell IoT Products and Sensors and many more necessary Components.
            </p>
            <h3 id='contact' className='text-3xl text-start text-white font-semibold mb-4 mt-20'>Contact us</h3>

            <p className='w-10/12 my-6 text-xl'>Location: Bashundara R/A <br />
                Phone: 01619996782, 01627199815 <br />
                Email: zantechbd@gmail.com
            </p>
        </div>
    );
};

export default About;