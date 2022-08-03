import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="p-12 bg-primary text-white nav-custom-font">
            <div className='lg:flex items-baseline '>
                <p className='text-3xl pr-2'>Need Help?</p>
                <p className=''> We are available to help 24 hours a day, 7 days a week.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 text-primary text-xl font-bold  border-b-4 border-base-500 mb-5">

                <button className="bg-accent mt-5 mx-2 lg:m-5 rounded font-bold py-2">Help center</button>
                <button className="bg-accent mt-5 mx-2 lg:m-5 rounded font-bold py-2">+880 1845517376</button>
                <button className="bg-accent mt-5 mx-2 lg:m-5 rounded font-bold py-2">Mail Us</button>
                <button className="bg-accent mt-5 mx-2 lg:m-5 rounded font-bold py-2">Order Parts</button>
            </div>

            <footer className="footer  text-white">
                <div>
                    <span className="footer-title text-2xl">Services</span>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title text-2xl">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title text-2xl">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;