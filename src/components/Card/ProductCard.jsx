import React from 'react';

const ProductCard = ({ item }) => {
    console.log(item)
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item}</h2>
                <p>Description:</p>
                <p>Price: $80</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;