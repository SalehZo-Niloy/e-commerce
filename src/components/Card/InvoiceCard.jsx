import React from 'react';
import { Link } from 'react-router-dom';

const InvoiceCard = ({ item }) => {
    const { _id } = item;
    return (
        <div className="card bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Invoice Number : {_id}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/invoice/${_id}`} className="btn">View Invoice</Link>
                </div>
            </div>
        </div>
    );
};

export default InvoiceCard;