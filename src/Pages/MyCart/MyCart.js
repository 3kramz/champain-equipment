import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiCheckbox } from "react-icons/bi";
import { BsBoxArrowRight } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";
import { FiRefreshCcw } from "react-icons/fi";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../Redux/Actions/cartActions";
import Footer from "../../Components/Footer";
import httpLink from "../../ServerLink/serverLink";


const MyCart = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const carts = useSelector(state => state.cart)
    const area = useSelector(state => state.shipping);


    useEffect(() => {
        fetch(`${httpLink}/cart/${user?.email}`).then(res => res.json()).then(data => dispatch(setCart(data.cart))).catch(err => console.log(err))
    }, [user,dispatch])




    let subtotal = 0
    carts.forEach(element => { subtotal = subtotal + parseFloat(element.price) });

    const clearCart = () => {
        fetch(`${httpLink}/cart/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify([])
        })
            .then(res => res.json())
            .then(data => {
                fetch(`${httpLink}/cart/${user?.email}`).then(res => res.json()).then(data => dispatch(setCart(data.cart)))
            })
    }

    const reloadeCart = () => fetch(`${httpLink}/cart/${user?.email}`).then(res => res.json()).then(data => dispatch(setCart(data.cart)))

    return (
        <>
            <div className="xxl:max-w-7xl md-w-full mt-16 px-5 mx-auto">
                <h1 className="text-4xl font-main text-textHeading font-bold mb-5"> Your Cart</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="col-span-3">
                        <div className="flex justify-between font-main text-base font-bold text-textBody mb-10">
                            <p> These are <span className="text-brandColor2  text-2xl">{carts.length}</span> products in your cart </p>
                            <p onClick={() => clearCart()} className="flex items-center gap-2 cursor-pointer"> <RiDeleteBin6Line /> Clear Cart</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-5 gap-y-5">
                    <div className="col-span-4">
                        <div>
                            <div className=" overflow-x-auto rounded-sm">
                                <table className="w-full text-sm text-left">
                                    <thead className="font-main text-textBody font-bold text-base bg-[#F5F5F5]">
                                        <tr>
                                            <th className="px-6 py-4 text-xl"><BiCheckbox /></th>
                                            <th className="px-6 py-4">Products</th>
                                            <th className="px-6 py-4">Unit Price</th>
                                            <th className="px-6 py-4">Quantity</th>
                                            <th className="px-6 py-4">Subtotal</th>
                                            <th className="px-6 py-4">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-main text-base font-bold text-textHeading">

                                        {carts && carts.map((cart, i) => <CartProduct cart={cart} key={i} />)}



                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="border rounded p-3">
                            <div className="flex justify-between border-b-2">
                                <p className="font-main font-bold text-textBody">Subtotal</p>
                                <p className="text-brandColor2 text-2xl font-main font-bold mb-5">${subtotal}</p>
                            </div>
                            <div className="flex justify-between mt-5">
                                <p className="font-main font-bold text-textBody">Shipping</p>
                                <p className="text-textHeading text-xl font-main font-bold mb-5">Free Shipping</p>
                            </div>
                            <div className="flex justify-between mt-5 border-b-2">
                                <p className="font-main font-bold text-textBody">Estimate for</p>
                                <p className="text-textHeading text-xl font-main font-bold mb-5">{area.area}</p>
                            </div>
                            <div className="flex justify-between mt-5">
                                <p className="font-main font-bold text-textBody">Total</p>
                                <p className="text-brandColor2 text-2xl font-main font-bold mb-5">${subtotal}</p>
                            </div>
                        </div>
                        <Link aria-disabled to={'/checkout'} className="mt-5 bg-black flex items-center justify-center gap-3 font-main w-full py-3 font-semibold text-xl text-white rounded-md hover:text-black hover:bg-accent transition duration-500">Proceed to Checkout <BsBoxArrowRight /></Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 mt-16">
                    <div className="col-span-4">
                        <div className="flex justify-between font-main text-base font-medium text-white mb-10">
                            <Link to={"/home"} className="bg-black px-3 py-2 rounded flex justify-center items-center gap-3 hover:text-black hover:bg-accent transition duration-500"><HiArrowLeft />Continue Shopping</Link>
                            <button onClick={() => reloadeCart()} className="bg-black px-3 py-2 rounded flex justify-center items-center gap-3 hover:text-black hover:bg-accent transition duration-500"><FiRefreshCcw />Update Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default MyCart;
