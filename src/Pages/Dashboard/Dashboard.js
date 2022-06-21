import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from '../../Components/Loading'
import useRole from '../../Role/useRole'

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const role = useRole(user?.email)
    if (loading) { return <Loading /> }
    const adminDashboard = <>
        <li><Link to="/dashboard">My Profile</Link></li>
        
        <li><NavLink to="/dashboard/products">Products</NavLink></li>
        <li><NavLink to="/dashboard/add-products">Add Products</NavLink></li>
        <li><NavLink to="/dashboard/all-orders"> All Orders</NavLink></li>
        <li><NavLink to="/dashboard/all-users">Users</NavLink></li>
        <li><button onClick={() => signOut(auth)}>Log out</button></li>
    </>
    const userDashboard = <>
        <li><Link to="/dashboard">My Profile</Link></li>
        <li><NavLink to="/dashboard/my-orders">My orders</NavLink></li>
        
        <li><button onClick={() => signOut(auth)}>Log out</button></li>
    </>
   


    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {role==="admin"? adminDashboard : userDashboard}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;