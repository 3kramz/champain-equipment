import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="p-12 bg-primary text-white nav-custom-font">
            <div className='lg:flex items-baseline '>
                <p className='text-3xl pr-2'>Need Help?</p>
                <p className=''> We are available to help 24 hours a day, 7 days a week.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 text-primary text-xl font-bold my-10 border-b-4 border-base-500 pb-10">

                <button class="bg-accent mt-5 mx-2 lg:m-10 rounded font-bold py-2">Help center</button>
                <button class="bg-accent mt-5 mx-2 lg:m-10 rounded font-bold py-2">+880 1845517376</button>
                <button class="bg-accent mt-5 mx-2 lg:m-10 rounded font-bold py-2">Mail Us</button>
                <button class="bg-accent mt-5 mx-2 lg:m-10 rounded font-bold py-2">Order Parts</button>
            </div>

            <footer class="footer  text-white">
                <div>
                    <span class="footer-title text-2xl">Services</span>
                    <Link to="/" class="link link-hover">Branding</Link>
                    <Link to="/" class="link link-hover">Design</Link>
                    <Link to="/" class="link link-hover">Marketing</Link>
                    <Link to="/" class="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span class="footer-title text-2xl">Company</span>
                    <Link to="/" class="link link-hover">About us</Link>
                    <Link to="/" class="link link-hover">Contact</Link>
                    <Link to="/" class="link link-hover">Jobs</Link>
                    <Link to="/" class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title text-2xl">Legal</span>
                    <Link to="/" class="link link-hover">Terms of use</Link>
                    <Link to="/" class="link link-hover">Privacy policy</Link>
                    <Link to="/" class="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;