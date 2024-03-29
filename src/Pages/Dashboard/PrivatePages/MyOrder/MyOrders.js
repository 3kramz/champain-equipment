import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrderInfo } from '../../../../Redux/Actions/orderActions';
import httpLink from '../../../../ServerLink/serverLink';
import OrderTr from './OrderTr';

const MyOrders = () => {
const orders = useSelector(state => state.order);
const user = useSelector(state => state.user);
const dispatch= useDispatch();
useEffect(()=>{
    fetch(`${httpLink}/order/${user.email}`).then(res => res.json())
        .then(data =>dispatch(setOrderInfo(data)))
        .catch(err => console.log(err))
},[user,dispatch])

    return (
        <div>
            <div>
            <div className='border-b-2 border-slate-100 mb-4'>
                <h1 className='text-2xl mt-5 font-bold font-serif text-center'>My Order's</h1>
            </div>
            <div className=" overflow-x-auto rounded-md">
                <table className="w-full text-sm text-left">
                    <thead className=" bg-[#F5F5F5]">
                        <tr>
                            <th className="px-6 py-4"> 
                                Order ID
                            </th>

                            <th className="px-6 py-4">
                                Date
                            </th>

                            <th className="px-6 py-4">
                                Name
                            </th>
                            <th className="px-6 py-4">
                                Status
                            </th> 
                        </tr>
                    </thead>
                    <tbody>
                       {orders?.map((order, i )=><OrderTr order={order} key={i}/>)}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyOrders;