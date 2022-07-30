import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Logo from './Logo'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase.init"
import Loading from './Loading';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const carts = useSelector(state => state.cart)

    const li = <>
        <li><NavLink to="/home">HOME</NavLink></li>
        <li><Link to="/home#services">SERVICES</Link></li>
        <li>{user ? <NavLink to="/dashboard">DESHBOARD</NavLink> : <NavLink to="/login">LOGIN</NavLink>}</li>
        <li>{user && <NavLink className='flex gap-3 items-center relative' to="/cart "> <span className='absolute text-xs top-[4px] left-[25px] bg-black rounded-lg px-1 text-white'>{carts.length}</span><AiOutlineShoppingCart /> Cart </NavLink>}
         </li>
    
    </>

if(loading){return <Loading/>}

    return (
        <div class="navbar bg-accent lg:px-12 nav-custom-font">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 gap-4  bg-accent">
                        {li}
                    </ul>
                </div>
                <NavLink to="/" class="btn btn-ghost normal-case text-xl">
                    {Logo}
                    </NavLink>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 ">
                    {li}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;