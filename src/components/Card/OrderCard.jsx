import React from 'react';
import OrderListCard from './OrderListCard';

const OrderCard = ({ item, completeOrder }) => {
    const { _id, userEmail, username, userPhone, orderList, receiverAddress, receiverPhone, totalPrice, transactionId, paymentMethod, orderCompleted } = item;
    return (
        <div className="card w-full bg-primary text-black shadow-xl">
            <div className="card-body">
                <h2 className="card-title">User Email: {userEmail}</h2>
                <p className='text-xl'>User Name: {username}</p>
                <p className='text-xl'>User Phone: {userPhone}</p>
                <p className='text-xl'>Receiver Phone: {receiverPhone}</p>
                <p className='text-xl'>Receiver Address: {receiverAddress}</p>
                <p className='text-2xl'>Total Price: {parseFloat(totalPrice).toFixed(2)}</p>
                <p className='text-xl'>Payment Method: {paymentMethod}</p>
                {
                    (transactionId === '' || !transactionId) ?
                        undefined
                        :
                        <p className='text-xl'>Transaction Id: {transactionId}</p>

                }
                {
                    orderList?.lenght !== 0 ?
                        <div className='flex flex-col gap-6'>
                            <div className='text-xl'>Order List:</div>
                            {
                                orderList.map(item => <OrderListCard item={item} key={item?._id}></OrderListCard>)
                            }
                        </div>
                        :
                        undefined
                }
                <div className="card-actions justify-end">
                    {
                        orderCompleted ?
                            <button disabled className="btn btn-neutral">Order Completed</button>
                            :
                            <button onClick={() => {
                                const confirm = window.confirm("Have you completed the order?")
                                console.log(confirm);
                                if (confirm) {
                                    completeOrder(_id)
                                }
                            }} className="btn btn-neutral">Complete Order</button>

                    }
                </div>
            </div>
        </div>
    );
};

export default OrderCard;