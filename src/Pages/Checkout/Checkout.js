import React from 'react';
import Footer from "../../Components/Footer"
import BillingDetails from './BillingDetails';
import YourOrder from './YourOrder';

const Checkout = () => {
    return (<>
        <div className='px-4'>
            <h2 className='text-3xl font-bold  text-textHeading mt-[45px]'>Checkout</h2>
            <h6 className='text-xl  font-semibold text-textBody mt-5'> These are <span className='text-brandColor2'>3</span> products in your cart</h6>
            <div className='lg:flex items-center mt-12 gap-10 px-5'>
                <form className="flex items-center mt-5 lg:mt-0 ">
                    <div className="w-full">
                        <input type="text" className="border border-1 border-black focus:border-success  text-gray  rounded-l-lg     pl-5 py-[11px] " placeholder="Enter coupon code.." />
                    </div>
                    <button type="button" className="bg-textHeading text-white  hover:bg-accent hover:text-black ease-in duration-300 rounded-r-lg ml-[-43px] w-40 h-12">Apply Coupon </button>
                </form>
            </div>
            <div className='lg:flex mt-10'>
                <BillingDetails />
                <YourOrder />
            </div>
        </div>
        <Footer />
    </>
    );
};

export default Checkout;