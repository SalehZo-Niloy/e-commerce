import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { register_url } from '../api/api_url';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;

        if (!username || !email || !phone || !password) {
            toast.error('Please fill up required fields');
            return;
        } else {
            try {
                const res = await axios.post(register_url, {
                    username,
                    email,
                    phone,
                    password
                });

                console.log(res);
            } catch (error) {
                console.error(error);
                toast.error("User already exits or something went wrong");

            }
        }
    }

    return (
        <div className="hero min-h-[90vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-8 lg:mb-0 lg:mr-10">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input name='username' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input name='phone' type="text" placeholder="phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className='text-center mb-4'>Already have an account? Then <Link to='/login'><button className="btn btn-link">Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;