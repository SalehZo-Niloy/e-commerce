import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import logo from '../assets/logo1.png'

const Navbar = () => {
    const { userLoggedIn, logout } = useContext(AuthContext);
    const [user, setUser] = useState({});

    useEffect(() => {
        if (userLoggedIn) {
            const userData = JSON.parse(localStorage.getItem('ecom_credentials'));
            setUser(userData);
        }
    }, [userLoggedIn]);

    const menu = <>
        <Link to='/'> <button className='btn btn-ghost'>Home</button></Link>
        <Link to='/cart'> <button className='btn btn-ghost'>Cart</button></Link>
    </>;

    return (
        <div className="navbar bg-base-100 px-10 py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/'><img className='h-28 p-2 bg-primary rounded-xl' src={logo} /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <input type="text" placeholder="Search" className="input input-bordered input-primary border-2 w-full text-primary mr-2" /> */}

                {
                    userLoggedIn ?
                        <>
                            <span className='mr-4'>{user?.email}</span>
                            <button onClick={logout} className="btn btn-error">Logout</button>
                        </>
                        :
                        <Link to='/login'> <button className="btn btn-primary">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;