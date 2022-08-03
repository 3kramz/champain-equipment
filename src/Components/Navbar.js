import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Logo from './Logo'
import { useSelector } from 'react-redux';


const Navbar = () => {

    const user = useSelector(state => state.user)
    const role = useSelector(state => state.role)
  
    const li = <>
        <li><NavLink to="/home">HOME</NavLink></li>
        <li><Link to="/home#services">SERVICES</Link></li>
        <li>{user ? <NavLink to="/dashboard">DESHBOARD</NavLink> : <NavLink to="/login">LOGIN</NavLink>}</li>
        <li>{role === 'user' && <NavLink className='flex gap-3 items-center relative' to="/cart"> <AiOutlineShoppingCart /> Cart </NavLink>}</li>
    </>


    return (
        <div className="navbar bg-accent lg:px-12 nav-custom-font">
            <div className="navbar-start">
                <div className="dropdown">
                    <label  tabIndex="0" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"     strokeLinejoin="round"    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul  tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 gap-4  bg-accent">
                        {li}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost normal-case text-xl">
                    {Logo}
                </NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {li}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;