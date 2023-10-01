import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { specific_product } from '../../api/api_url';

const OrderListCard = ({ item }) => {
    const { _id, count } = item;
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetchProduct();
    }, [_id]);

    const fetchProduct = async () => {
        try {
            const res = await axios.get(`${specific_product}${_id}`);

            if (res) {
                const productData = res?.data;
                setProduct(productData)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="card w-full text-white bg-base-100 shadow-xl">
            <div className="card-body">
                {
                    product?.title ?
                        <h2 className="card-title">Product Title: {product?.title}</h2>
                        :
                        undefined
                }
                {
                    count ?
                        <p>ordered product count: {count}</p>
                        :
                        undefined
                }

            </div>
        </div>
    );
};

export default OrderListCard;