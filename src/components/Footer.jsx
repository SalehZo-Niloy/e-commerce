import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 mt-10 bg-neutral text-primary">
            <nav className="grid grid-flow-col gap-4">
                <Link to='/about'><p className="link link-hover">About us</p></Link>
                <Link to='/about#contact'><p className="link link-hover">Contact</p></Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com/ZanTechBD' target='_blank' className='text-2xl'><FaFacebookF /></a>
                    <a href='https://www.instagram.com/zantechbd/' target='_blank' className='text-2xl'><FaInstagram /></a>
                    <a href='https://www.linkedin.com/company/zantechbd/' target='_blank' className='text-2xl'> <FaLinkedinIn /></a>


                </div>
            </nav>
            <aside>
                <p>Copyright © 2023 - All right reserved by ZAN Tech</p>
            </aside>
        </footer>
    );
};

export default Footer;