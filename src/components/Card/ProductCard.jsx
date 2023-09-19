import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../utils/commonFunctions';

const ProductCard = ({ item }) => {
    const { _id, title, description, price, image } = item;
    return (
        <div className="card w-full bg-base-100 shadow-xl border border-primary">
            <figure><img className='h-60 w-full' src={image} alt="Shoes" /></figure>
            <div className="p-3">
                <div className='h-28'>
                    <h2 className="card-title">{title}</h2>
                    <p>Price: {price}</p>
                </div>
                <div className="card-actions grid grid-cols-2 justify-end">
                    <Link to={`/product/${_id}`}> <button className="btn btn-success">View Details</button></Link>
                    <button onClick={() => addToCart(_id, price)} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;