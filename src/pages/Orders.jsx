import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { addInvoice_url, allOrder_url, completeOrder_url } from '../api/api_url';
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
            console.log(res);
            if (res) {
                const orderData = res?.data;
                if (orderData) {
                    fetchOrders();
                    const invoice = {
                        username: orderData?.username,
                        userPhone: orderData?.userPhone,
                        userEmail: orderData?.userEmail,
                        transactionId: orderData?.transactionId,
                        paymentMethod: orderData?.paymentMethod,
                        totalPrice: orderData?.totalPrice,
                        receiverPhone: orderData?.receiverPhone,
                        receiverAddress: orderData?.receiverAddress,
                        orderList: orderData?.orderList,
                        orderCompleted: orderData?.orderCompleted,
                    }
                    const res = await axios.post(`${addInvoice_url}`, invoice);
                    if (res) {
                        return;
                    }
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