import React, { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { login_url } from '../api/api_url';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { saveLoginCredentials } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            toast.error('Please fill up required fields');
            return;
        } else {
            try {
                const res = await axios.post(login_url, {
                    email,
                    password
                });

                console.log(res);
                if (res) {
                    saveLoginCredentials(res);
                    toast.success('Login successful');
                }
            } catch (error) {
                console.error(error);
                toast.error("Invalid credentials or something went wrong");

            }
        }
    }

    return (
        <div className="hero min-h-[90vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-8 lg:mb-0 lg:mr-10">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
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
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='text-center mb-4'>Don't have an account? Then <Link to='/register'><button className="btn btn-link">Register</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;