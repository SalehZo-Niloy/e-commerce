import React, { useContext, useEffect, useState } from 'react';
import CartCard from '../components/Card/CartCard';
import { removeFromCart } from '../utils/commonFunctions';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { order_url } from '../api/api_url';
import useTitle from '../hooks/useTitle';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [updateCounts, setUpdateCounts] = useState(0);
    const [total, setTotal] = useState(0);
    const { userLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showTrx, setShowTrx] = useState(false);
    const [trxId, setTrxId] = useState('');
    useTitle('Cart');
    const [paymentMethodState, setPaymentMethodState] = useState('cash');

    const cartUpdater = () => {
        setUpdateCounts(updateCounts + 1);
    }

    const confirmOrder = async (e) => {
        e.preventDefault();
        const form = e.target;
        const phone = form.phone.value;
        const address = form.address.value;
        const paymentMethod = form.paymentMethod.value;
        console.log(phone, address, paymentMethod,);

        if (!phone || phone === '' || !address || address === '') {
            toast.error('please fill up the required fields');
        }

        if (paymentMethod === 'bkash' || paymentMethod === 'nagad') {
            setTrxId(form.transactionId.value);
            setPaymentMethodState(paymentMethod);
        }
        else {
            setTrxId('');
            setPaymentMethodState('cash');
        }

        console.log(paymentMethod);


        if (userLoggedIn) {
            const confirm = window.confirm('Confirm order?');
            if (confirm) {
                const user = JSON.parse(localStorage.getItem('ecom_credentials'));
                const order = {
                    userEmail: user?.email,
                    username: user?.username,
                    userPhone: user?.phone,
                    receiverPhone: phone,
                    receiverAddress: address,
                    paymentMethod: paymentMethodState,
                    transactionId: trxId,
                    orderList: cart,
                    totalPrice: total
                }
                try {
                    const res = await axios.post(order_url, order);

                    console.log(res);
                    if (res) {
                        toast.success('Order placed successfully');
                        document.getElementById('confirm_modal').close();
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        } else {
            toast.error('Please Login First');
            navigate('/login');
        }
    }

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('ecom-cart'));
        if (cart) {
            setCart(cart);
            console.log(cart);
        }
    }, [updateCounts]);

    useEffect(() => {
        const individualProductTotalArray = cart?.map(item => item?.price * item?.count);

        if (individualProductTotalArray.length > 0) {
            const AllProductTotal = individualProductTotalArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            setTotal(AllProductTotal);
        }
    }, [cart]);


    return (
        <>
            <h3 className='text-3xl text-center text-white font-semibold mb-4'>Your Cart</h3>

            {
                cart.length !== 0 ?
                    <section className='grid gap-6 grid-cols-3 w-10/12 mx-auto mt-10'>
                        <div className='col-span-2'>
                            {
                                cart?.length !== 0 ?
                                    cart.map(item => <CartCard item={item} key={item?._id} cartUpdater={cartUpdater}></CartCard>)
                                    :
                                    <div>You haven't added any product on your Cart</div>
                            }
                        </div>
                        <div className='bg-gray-800 rounded-lg p-4'>
                            <h3 className='text-center text-white text-xl font-semibold mt-4 underline'>Total Price</h3>
                            <div className="overflow-x-auto">
                                <table className="table">

                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td className='text-lg'>All Product Total:</td>
                                            <td className='text-lg text-end'>{total.toFixed(2)}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td className='text-lg'>Vat:</td>
                                            <td className='text-lg text-end'>0</td>
                                        </tr>
                                        <tr>
                                            <td className='text-lg'>Delivery Charge:</td>
                                            <td className='text-lg text-end'>100</td>

                                        </tr>
                                        <tr>
                                            <td className='text-lg'>Total:</td>
                                            <td className='text-lg text-end'>{(total + 100).toFixed(2)}</td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='flex justify-end'>
                                <button onClick={() => document.getElementById('confirm_modal').showModal()} className='btn btn-success mt-10'>Confirm Order</button>
                            </div>
                        </div>
                    </section>
                    :
                    <div className='text-center text-lg mt-10 h-[90vh]'>You haven't added any product on your Cart</div>
            }
            <dialog id="confirm_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center">Confirm Order</h3>
                    <div className="divider"></div>

                    <form onSubmit={confirmOrder}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Receiver's Phone Number</span>
                            </label>
                            <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full " required />
                        </div>

                        <div className="form-control w-full mt-2">
                            <label className="label">
                                <span className="label-text">Receiver's Address</span>
                            </label>
                            <input name='address' type="text" placeholder="Address" className="input input-bordered w-full " required />
                        </div>

                        <div className='mt-4'>
                            <div onClick={() => setShowTrx(false)} className="flex justify-start items-center">
                                <input id='cash' type="radio" value='cash' name="paymentMethod" className="radio checked:bg-blue-500" defaultChecked />
                                <label
                                    className="ml-2 hover:cursor-pointer"
                                    htmlFor="cash">
                                    Cash on delivery
                                </label>
                            </div>
                            <div onClick={() => setShowTrx(true)} className="flex justify-start items-center mt-4">
                                <input id='bkash' type="radio" value='bkash' name="paymentMethod" className="radio checked:bg-blue-500" />
                                <label
                                    className="ml-2 hover:cursor-pointer"
                                    htmlFor="bkash">
                                    Bkash
                                </label>
                            </div>
                            <div onClick={() => setShowTrx(true)} className="flex justify-start items-center mt-4">
                                <input id='nagad' type="radio" value='nagad' name="paymentMethod" className="radio checked:bg-blue-500" />
                                <label
                                    className="ml-2 hover:cursor-pointer"
                                    htmlFor="nagad">
                                    Nagad
                                </label>
                            </div>
                        </div>
                        {showTrx ?
                            <div className="form-control w-full mt-4">
                                <p className='text-primary'>Send Money to 016xxxxxxxx and provide the Transaction Id below</p>
                                <label className="label">
                                    <span className="label-text">Transaction Id</span>
                                </label>
                                <input onChange={(e) => setTrxId(e.target.value)} name='transactionId' type="text" placeholder="Transaction Id" className="input input-bordered w-full " required />
                            </div>
                            :
                            undefined
                        }
                        <div className='mt-4'>
                            <button type='submit' className="btn btn-primary w-full">Place Order</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default Cart;