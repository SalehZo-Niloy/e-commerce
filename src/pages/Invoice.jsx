import React, { useEffect, useState } from 'react';
import logo from '../assets/logo1.png'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { specificInvoice_url } from '../api/api_url';
import InvoiceTableCard from '../components/Card/InvoiceTableCard';

const Invoice = () => {
    const params = useParams();
    const invoiceId = params?.id;
    const [invoice, setInvoice] = useState({});
    const [formattedDate, setFormatedDate] = useState();

    useEffect(() => {
        fetchInvoiceData();
    }, [invoiceId]);

    const fetchInvoiceData = async () => {
        try {
            const res = await axios.get(`${specificInvoice_url}${invoiceId}`);

            console.log(res);
            if (res) {
                setInvoice(res?.data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const isoDateString = invoice?.createdAt;
        const dateObject = new Date(isoDateString);

        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = dateObject.toLocaleDateString('en-US', options);

        setFormatedDate(formattedDate);
    }, [invoice]);

    return (
        <div className="bg-black min-h-screen text-black font-sans overflow-x-hidden flex justify-center items-center">
            <div className="container mx-auto p-8">
                <div className="border border-primary border-8 max-w-2xl mx-auto bg-white">
                    <div className="p-8">
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <img src={logo} alt="code logo" className="w-12 h-12" />
                                <div className="ml-4">
                                    <p className="text-2xl font-semibold">ZAN Tech</p>
                                    <p className="text-sm">Awaken your hidden talent.</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-4xl font-semibold">INVOICE</p>
                                <p className="text-sm">Invoice : {invoice?._id}</p>
                                <p className="text-sm">Date: {formattedDate ? formattedDate : undefined}</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="font-semibold">Bill To</p>
                            <p className="font-bold text-lg">{invoice?.username}</p>
                            <p className="">Phone : {invoice?.receiverPhone}</p>
                            <p className="">Address : {invoice?.receiverAddress}</p>
                        </div>
                    </div>
                    <div className="bg-primary text-white p-4">
                        <div className="flex">
                            <div className="w-3/5">
                                <p className="font-semibold">ITEM NAME</p>
                            </div>
                            <div className="w-1/5">
                                <p className="font-semibold text-center">PRICE</p>
                            </div>
                            <div className="w-1/5">
                                <p className="font-semibold text-center">QTY</p>
                            </div>
                            <div className="w-1/5">
                                <p className="font-semibold text-right">TOTAL</p>
                            </div>
                        </div>
                    </div>
                    {
                        invoice?.orderList ?
                            <div>
                                {
                                    invoice.orderList.map(item => <InvoiceTableCard item={item} key={item?._id}></InvoiceTableCard>)
                                }
                            </div>
                            :
                            undefined
                    }
                    <div className="p-4 mt-6">
                        <div className="flex justify-between">
                            <div>
                                {/* Payment Method */}
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">
                                    <span>TOTAL </span>
                                    <span> {invoice?.totalPrice}</span>
                                </p>
                                <p>
                                    {/* Tax Vat 18% */}
                                </p>
                                <p className="font-semibold">
                                    <span>PAID </span>
                                    <span> 0</span>
                                </p>
                                <p className="font-semibold">
                                    <span>Grand Total </span>
                                    <span> {invoice?.totalPrice}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-8">
                        <p className="text-xl font-semibold">Thank you and Best Wishes</p>
                        <div className="mt-4">
                            For questions concerning this invoice, please contact <br />
                            Email Address: zantechbd@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invoice;