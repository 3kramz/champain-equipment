import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import httpLink from '../../../../ServerLink/serverLink';

const MyReviews = () => {

    const { register, handleSubmit} = useForm();
    const onSubmit = info => {
// console.log(data)
        fetch(fetch(`${httpLink}/order-status/${info.order}`).then(res => res.json())
        .then(data =>{swal(`${data.status}`, `your order status is ${data.status}`, )})
        .catch(err => console.log(err)))

    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-textHeading'>Orders tracking
            </h1>
            <p className='mt-6 text-gray-500'>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>


            <form className='md:w-2/4 w-full mt-6' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className='font-medium' htmlFor="">Order ID</label>
                    <input className='border focas:border-scale2 py-4 pl-3 mt-1 w-full rounded-md' type="text" placeholder='Found in your order fom My order list'  {...register("order")} required />
                </div>
                <button className='btn btn-primary py-3 w-[130px] font-medium text-white rounded-md mt-6'>Track</button>
            </form>
        </div>
    );
};

export default MyReviews;