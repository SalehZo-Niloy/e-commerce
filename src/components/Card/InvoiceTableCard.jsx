import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { specific_product } from '../../api/api_url';

const InvoiceTableCard = ({ item }) => {
    const { _id, price, count } = item;
    const [productName, setProductName] = useState('');

    useEffect(() => {
        fetchProductName(_id);
    }, [_id]);

    const fetchProductName = async (_id) => {
        try {
            const res = await axios.get(`${specific_product}${_id}`);
            if (res) {
                setProductName(res?.data?.title);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="p-4">
            <div className="flex">
                <div className="w-3/5">
                    <p className="font-semibold">{
                        productName
                    }</p>
                </div>
                <div className="w-1/5 text-center">
                    <p>{price}</p>
                </div>
                <div className="w-1/5 text-center">
                    <p>{count}</p>
                </div>
                <div className="w-1/5 text-right">
                    <p>{price * count}</p>
                </div>
            </div>
        </div>
    );
};

export default InvoiceTableCard;