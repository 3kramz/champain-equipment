import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const role = useSelector(state => state.role);
    let navigate = useNavigate();

    return (
        <>
            <hr />
            <label tabIndex="1" htmlFor="dashboard-drawer" className="flex justify-end btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>



            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <h2 className='text-3xl text-center'>DASHBOARD</h2>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        {/* User Contents */}
                        {role === "user" && <>
                            <li><Link to="/dashboard">Profile</Link></li>
                            <li><Link to="/dashboard/review">Reviews</Link></li>
                            <li><Link to="/dashboard/my-history">History</Link></li>
                            <li><Link to="/dashboard/my-orders">My Order</Link></li>
                            <li><button onClick={() => {signOut(auth);   navigate("/login")} }>Log out</button></li>
                        </>}

                        {/* Admin Contents */}
                        {role === "admin" && <>
                            <li><Link to="/dashboard">My Profile</Link></li>
                            <li><NavLink to="/dashboard/all-products">Products</NavLink></li>
                            <li><NavLink to="/dashboard/add-products">Add Products</NavLink></li>
                            <li><NavLink to="/dashboard/all-orders"> All Orders</NavLink></li>
                            <li><NavLink to="/dashboard/all-users">Users</NavLink></li>
                           <li><button onClick={() => {signOut(auth);   navigate("/login")} }>Log out</button></li>
                        </>}

                    </ul>
                </div>
            </div>
        </>

    );
};

export default Dashboard;