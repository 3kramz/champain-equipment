import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
const user = true
      const li = <>
        <li><Link to="/dashboard">My Appointment</Link></li>
        <li><NavLink to="/dashboard/add-admin">Add Admin</NavLink></li>
        <li><NavLink to="/dashboard/all-admin">All Admin</NavLink></li>
        {user &&<li><NavLink to="/dashboard/all-user">All User</NavLink></li>}      
    </>
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
              <Outlet/>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {li}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;