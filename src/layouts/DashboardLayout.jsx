import React from 'react';
import Navbar from '../components/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const DashboardLayout = () => {
    return (
        <div>

            <Navbar />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center">
                    <Outlet></Outlet>
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <Link to='/dash-dashboard' className='text-xl p-4'>Orders</Link>
                        <Link to='/dash-dashboard/add-product' className='text-xl p-4'>Add Product</Link>
                        <Link to='/dash-dashboard/all-product' className='text-xl p-4'>All Product</Link>
                        <Link to='/dash-dashboard/invoice-list' className='text-xl p-4'>Invoice List</Link>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;