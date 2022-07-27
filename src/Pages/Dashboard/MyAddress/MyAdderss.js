import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserBillingInfo, setUserShipingInfo } from '../../../Redux/Actions/userActions';
import BillingModals from './Modals/BillingModals';
import ShippingInfo from './Modals/ShippingInfo';

const MyAddress = () => {
    const [isOpenBilling, setIsOpenBilling] = useState(null)
    const [isOpenShipping, setIsOpenShipping] = useState(null)
    const bill = useSelector(state => state.billing)
    const Shipping = useSelector(state => state.shipping)
    const email = useSelector(state => state.user.email)
    const dispatch = useDispatch()

    fetch(`http://localhost:5000/user/bill/${email}`, { method: 'GET' }).then(res => res.json()).then(data => dispatch(setUserBillingInfo(data.bill ))).catch(err => console.log(err))
    fetch(`http://localhost:5000/user/shipping/${email}`, { method: 'GET' }).then(res => res.json()).then(data => dispatch(setUserShipingInfo(data.shipping ))).catch(err => console.log(err))





    return (
        <div className='md:flex gap-64 m-16'>
            <div className=''>
                <h1 className='text-4xl font-bold text-[#253D4E]'>Billing Address</h1>
                <div className='font-medium mt-6 text-gray-800'>
                    <p>{bill.lane}</p>
                    <p>{bill.area}</p>
                    <p>{bill.city}</p>
                    <p>{bill.State}</p>
                    <p>{bill.country}</p>
                    <label onClick={() => setIsOpenBilling(true)} for="my-modal" class=" modal-button text-[#3BB77E] mt-2 hover:text-yellow-600">Edit</label>

                    {/* <button className='text-[#3BB77E] mt-2 hover:text-yellow-600'>Edit</button> */}
                </div>
            </div>

            <div className=''>
                <h1 className='text-2xl font-medium text-[#253D4E]'>Shipping Address</h1>
                <div className='font-medium mt-6 text-gray-800'>
                    <p>{Shipping.lane}</p>
                    <p>{Shipping.area}</p>
                    <p>{Shipping.city}</p>
                    <p>{Shipping.State}</p>
                    <p>{Shipping.phone}</p>
                    <p>{Shipping.country}</p>
                    <label onClick={() => setIsOpenShipping(true)} for="my-modal" class=" modal-button text-[#3BB77E] mt-2 hover:text-yellow-600">Edit</label>
                </div>
            </div>
            {isOpenBilling && <BillingModals setIsOpen={setIsOpenBilling} />}
            {isOpenShipping && <ShippingInfo setIsOpen={setIsOpenShipping} />}

        </div>
    );
};

export default MyAddress;