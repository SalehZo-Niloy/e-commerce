import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { specific_product } from '../api/api_url';
import axios from 'axios';
import { addToCart } from '../utils/commonFunctions';

const ProductDetails = () => {
    const params = useParams();
    const productId = params?.id;
    const [productDetails, setProductDetails] = useState({});

    console.log(specific_product, productId);

    const getProductDetails = async () => {
        try {
            const res = await axios.get(`${specific_product}${productId}`);
            console.log(res);

            if (res?.data) {
                setProductDetails(res?.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProductDetails();
    }, [productId]);

    return (
        <>
            <section className='w-10/12 mx-auto grid gap-10 grid-cols-2 mt-4'>
                <h3 className='col-span-2 text-3xl text-center text-white font-semibold mb-4'>{productDetails?.title}</h3>
                <div>
                    <img className='w-full rounded' src={productDetails?.image} />
                </div>
                <div>
                    <h4 className='text-xl text-white font-semibold'>Description:</h4>
                    <p className='mt-4'>{productDetails?.description}</p>
                    <h4 className='text-xl text-white font-semibold mt-10'>Price: {productDetails?.price}</h4>
                    <button onClick={() => addToCart(productDetails?._id, productDetails?.price)} className="btn btn-primary mt-10">Add To Cart</button>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;