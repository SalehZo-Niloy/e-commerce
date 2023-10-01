import React, { useEffect, useState } from 'react';
import { deleteProduct_url, inStock_url, outOfStock_url, product_url } from '../api/api_url';
import axios from 'axios';
import DashboardProductCard from '../components/Card/DashboardProductCard';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get(product_url);
            // console.log(res);

            if (res?.data) {
                setProducts(res?.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const inStock = async (_id) => {
        try {
            const res = await axios.put(`${inStock_url}${_id}`);
            // console.log(res);

            if (res?.data) {
                fetchProducts();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const outOfStock = async (_id) => {
        try {
            const res = await axios.put(`${outOfStock_url}${_id}`);
            // console.log(res);

            if (!res?.data) {
                fetchProducts();
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleDeleteProduct = async (_id) => {
        const confirm = window.confirm('Want to Delete this Product?');
        if (!confirm) {
            return;
        }
        try {
            const res = await axios.delete(`${deleteProduct_url}${_id}`);
            if (res?.data) {
                fetchProducts();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='w-10/12'>
            {
                products?.length !== 0 ?
                    <div className='flex flex-col gap-10'>
                        {
                            products.map(item => <DashboardProductCard item={item} key={item?._id} inStock={inStock} outOfStock={outOfStock} handleDeleteProduct={handleDeleteProduct}></DashboardProductCard>)
                        }
                    </div>
                    :
                    undefined
            }
        </div>
    );
};

export default AllProducts;