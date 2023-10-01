import axios from 'axios';
import React from 'react';
import { addProduct_url } from '../api/api_url';
import toast from 'react-hot-toast';

const AddProduct = () => {

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const photoUrl = form.photoUrl.value;
        const description = form.description.value;

        console.log(title, price, photoUrl, description);
        const confirm = window.confirm('Want to add this product?');
        if (!confirm) {
            return;
        }
        try {
            const product = {
                title,
                price,
                image: photoUrl,
                description,
                inStock: true
            }

            const res = await axios.post(addProduct_url, product);
            if (res?.data) {
                toast.success('Product added successfully');
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");

        }
    };

    return (
        <div className="w-10/12 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Add Product</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddProduct} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Title</span>
                            </label>
                            <input name='title' type="text" placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input name='price' type="text" placeholder="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Photo URL</span>
                            </label>
                            <input name='photoUrl' type="text" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea name='description' type='text' className="textarea textarea-bordered h-48" placeholder="description" required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;