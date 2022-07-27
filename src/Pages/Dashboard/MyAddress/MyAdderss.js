import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BillingModals from './Modals/BillingModals';

const MyAddress = () => {
const [isOpen , setIsOpen]= useState(null)
const bill = useSelector(state => state.billing)

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
                    <label onClick={()=>setIsOpen(true)} for="my-modal" class=" modal-button text-[#3BB77E] mt-2 hover:text-yellow-600">Edit</label>

                    {/* <button className='text-[#3BB77E] mt-2 hover:text-yellow-600'>Edit</button> */}
                </div>
            </div>

            <div className=''>
                <h1 className='text-2xl font-medium text-[#253D4E]'>Shipping Address</h1>
                <div className='font-medium mt-6 text-gray-800'>
                    <p>4299 Express Lane
                    </p>
                    <p>Sarasota</p>
                    <p>FL 34249 USA

                    </p>
                    <p>Phone: 1.941.227.4444

                    </p>
                    <p>Sarasota
                    </p>
                    <button className='text-[#3BB77E] mt-2 hover:text-yellow-600'>Edit</button>
                </div>
            </div>
            {isOpen && <BillingModals setIsOpen={setIsOpen} />}

        </div>
    );
};

export default MyAddress;