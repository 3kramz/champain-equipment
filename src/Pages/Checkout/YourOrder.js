import React from 'react';
import ProductCart from './ProductCart';
import { useSelector } from 'react-redux';

const YourOrder = () => {
    const carts = useSelector(state => state.cart);
    let subtotal = 0
    carts.forEach(element => { subtotal = subtotal + parseFloat(element.price) });



    return (
        <div className='lg:w-1/2 px-5 mt-5 lg:mt-0'>
            <div className='flex justify-between items-center'>
                <h1 className='heading-4'>Your Order </h1>
                <p className='heading-6 text-[#B6B6B6]'>Subtotal: <span className='text-black font-bold text-xl'>${subtotal}</span></p>
            </div>
           {carts.map((tool,i)=> <ProductCart tool={tool} key={i} />)}
           
        </div>
    );
};

export default YourOrder;