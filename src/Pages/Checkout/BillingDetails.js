import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { setCart } from '../../Redux/Actions/cartActions';
import httpLink from '../../ServerLink/serverLink';

const BillingDetails = () => {
    const { register, handleSubmit, reset } = useForm();
    const cart = useSelector(state => state.cart);
    const email = useSelector(state => state.user.email);
    const dispatch = useDispatch()


    const onSubmit = info => {
        const dateObj = new Date();
        
        cart.forEach(item => {
            item.id = item["_id"]
            delete item["_id"]
            item.date=dateObj.toDateString()
            item.status="unpaid"
            item.info = info
            item.email = email

            fetch(`${httpLink}/order/${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(item),
            }).then(res => res.json())
                .then(data => { })
                .catch(err => console.log(err))
        })


        fetch(`${httpLink}/cart/${email}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify([])
        }).then(res => res.json())
            .then(data => dispatch(setCart([])))

        swal("Successfull", "Order Placed successfully", "success");
        reset()
    }

    return (
        <div className='lg:w-1/2 px-5'>
            <h1 className='heading-4 text-textHeading mb-4'>Billing Details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='lg:flex gap-5'>
                    <div className='py-1'>
                        <input class="input input-bordered w-full pl-4 p-7 rounded-lg h-9 border" type="text" placeholder='First name*' {...register("first-name")} required />
                    </div>
                    <div className='py-1'>
                        <input class="input input-bordered w-full pl-4 p-7 rounded-lg h-9 border" type="text" placeholder='Last name*' {...register("last-name")} required />

                    </div>
                </div>
                <div className='lg:flex gap-5'>
                    <div className='py-1'>
                        <input className="input input-bordered w-full pl-4 p-7 rounded-lg h-9 border" type="text" placeholder='Phone*' {...register("phone", "required")} />

                    </div>
                    <div className='py-1'>
                        <input className="input input-bordered w-full pl-4 p-7 rounded-lg h-9 border" type="email" placeholder='Email*' {...register("email")} required />

                    </div>
                </div>
                <div className='lg:flex gap-5'>
                    <div className='py-1'>
                        <input className="input input-bordered w-full pl-4 p-7 rounded-lg h-9 border" type="text" placeholder='Address*' required {...register("address")} />

                    </div>
                    <div className='py-1'>
                        <input className="input input-bordered w-full pl-4 p-7 rounded-lg h-9 border" type="text" placeholder='Address Line*' required {...register("address-lane")} />

                    </div>
                </div>
                <div className='lg:flex gap-5'>
                    <div className='py-1'>
                        <input className="input input-bordered w-full pl-4 p-7 rounded-lg h-9 border" type="text" placeholder='City / Town*' required {...register("city")} />

                    </div>
                    <div className='py-1'>
                        <input className="input input-bordered w-full pl-4 p-7 rounded-lg h-9 border" type="text" placeholder='State*' required {...register("State")} />

                    </div>
                </div>
                <div>
                    <div className='text-medium  mt-10'>

                        <h1 className='heading-4 mb-5'>Payment</h1>

                        <input type="radio" id="bank" name="payment" value="bank" />
                        <label className='pl-4' for="bank">Direct Bank Transfer</label><br />

                        <input type="radio" id="cash" name="payment" value="cash" />
                        <label className='pl-4' for="cash">Cash on delivery</label><br />

                        <input onClick={(e) => handleSubmit(e)} className='bg-textHeading text-white  hover:bg-accent hover:text-black ease-in duration-300 rounded-lg my-10 w-40 h-12' type="submit" value="Place an order" />

                    </div>

                </div>
            </form>

        </div>
    );
};

export default BillingDetails;