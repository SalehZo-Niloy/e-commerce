import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { admin_url } from '../api/api_url';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [userRole, setUserRole] = useState('');
    const [loading, setLoading] = useState(true);
    const userEmail = JSON.parse(localStorage.getItem('ecom_credentials'))?.email;
    console.log(userEmail);

    useEffect(() => {
        adminChecker();
    }, [userEmail]);

    const adminChecker = async () => {
        try {
            const res = await axios.post(admin_url, {
                email: userEmail
            })

            if (res) {
                const userData = res?.data;
                setUserRole(userData?.role);
                setLoading(false);
            }

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    if (loading) {
        return <div className='w-10/12 mt-5 mx-auto flex justify-center items-center h-40'>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div>
    }
    if (userRole === 'admin') {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;