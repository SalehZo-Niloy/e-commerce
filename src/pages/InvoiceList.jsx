import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getInvoice_url } from '../api/api_url';
import InvoiceCard from '../components/Card/InvoiceCard';

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        fetchInvoices();
    }, []);

    const fetchInvoices = async () => {
        try {
            const res = await axios.get(getInvoice_url);

            if (res) {
                setInvoices(res?.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-10/12 mx-auto'>
            <h3 className='text-2xl text-center my-4'>Invoice list</h3>

            {
                invoices?.length !== 0 ?
                    <div className='flex flex-col gap-10'>
                        {
                            invoices.map(item => <InvoiceCard item={item} key={item?._id}></InvoiceCard>)
                        }
                    </div>
                    :
                    undefined
            }
        </div>
    );
};

export default InvoiceList;