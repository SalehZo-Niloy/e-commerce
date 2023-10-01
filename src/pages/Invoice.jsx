import React from 'react';
import logo from '../assets/logo1.png'

const Invoice = () => {
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
                                <p className="text-sm">Invoice #3488</p>
                                <p className="text-sm">Date: 08/Jan/2022</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="font-semibold">Bill To</p>
                            <p className="font-bold text-lg">Alex Deo</p>
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
                    <div className="p-4">
                        <div className="flex">
                            <div className="w-3/5">
                                <p className="font-semibold">Web Design</p>
                            </div>
                            <div className="w-1/5 text-center">
                                <p>$350</p>
                            </div>
                            <div className="w-1/5 text-center">
                                <p>2</p>
                            </div>
                            <div className="w-1/5 text-right">
                                <p>$700.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 mt-6">
                        <div className="flex justify-between">
                            <div>
                                {/* Payment Method */}
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">
                                    <span>TOTAL </span>
                                    <span> $700</span>
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
                                    <span> $700.0</span>
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