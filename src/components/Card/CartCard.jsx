import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { specific_product } from '../../api/api_url';
import { removeFromCart } from '../../utils/commonFunctions';

const CartCard = ({ item, cartUpdater }) => {
    const { _id, count } = item;
    const [product, setProduct] = useState(null);


    const getProductDetails = async () => {
        try {
            const res = await axios.get(`${specific_product}${_id}`);
            // console.log(res);

            if (res?.data) {
                setProduct(res?.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProductDetails();
    }, [_id]);

    return (
        <div className="card card-side bg-base-100 shadow-xl mb-10">
            <figure className='overflow-hidden'><img className='h-44' src={product?.image} alt="Movie" /></figure>
            <div className="card-body">
                <div className='grid grid-cols-2'>
                    <div>
                        <h2 className="card-title text-white">{product?.title}</h2>
                        <p className='mt-2 font-medium'>Per Unit Price: <span className='text-primary'>{product?.price}</span></p>
                    </div>
                    <div>
                        <p className='text-end font-medium'>Unit Ordered: <span className='text-primary'>{count}</span></p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => {
                        removeFromCart(_id);
                        cartUpdater();
                    }} className="btn btn-error">Remove from Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;