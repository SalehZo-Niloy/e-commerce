import React from 'react';

const DashboardProductCard = ({ item, inStock, outOfStock, handleDeleteProduct }) => {
    const { _id, title, inStock: stock } = item;

    return (
        <div className="card w-full bg-primary text-primary-content">
            <div className="card-body">
                {
                    title ?
                        <h2 className="card-title">Product Title : {title}</h2>
                        :
                        undefined
                }
                <div className="card-actions justify-end">
                    <button onClick={() => handleDeleteProduct(_id)} className='btn btn-error'>Delete Product</button>
                    {
                        stock ?
                            <button onClick={() => {
                                const confirm = window.confirm("Set Product Out of Stock?")
                                console.log(confirm);
                                if (confirm) {
                                    outOfStock(_id);
                                }
                            }} className="btn btn-error">Out of Stock</button>
                            :
                            <button onClick={() => {
                                const confirm = window.confirm("Set Product In Stock?")
                                console.log(confirm);
                                if (confirm) {
                                    inStock(_id)
                                }
                            }} className="btn btn-success">In Stock</button>

                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardProductCard;