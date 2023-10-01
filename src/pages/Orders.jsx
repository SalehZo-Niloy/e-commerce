import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { allOrder_url, completeOrder_url } from '../api/api_url';
import OrderCard from '../components/Card/OrderCard';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await axios.get(allOrder_url);
            if (res) {
                const orders = res?.data;
                setOrders(orders);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const completeOrder = async (_id) => {
        try {
            const res = await axios.put(`${completeOrder_url}${_id}`)
            if (res) {
                const orderCompleted = res?.data;
                if (orderCompleted) {
                    fetchOrders();
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-10/12 mx-auto'>
            {
                orders?.length === 0 ?
                    <div>There is no order to Complete</div>
                    :
                    <div className='w-full flex flex-col gap-10'>
                        {
                            orders.map(item => <OrderCard item={item} key={item?._id} completeOrder={completeOrder}></OrderCard>)
                        }
                    </div>
            }
        </div>
    );
};
export default Orders; 