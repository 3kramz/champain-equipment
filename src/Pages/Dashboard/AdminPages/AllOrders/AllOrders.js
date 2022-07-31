import React, { useEffect } from 'react';
import httpLink from '../../../../ServerLink/serverLink';
import Order from './Order';
import { useDispatch, useSelector } from 'react-redux';
import { setAllOrderInfo } from '../../../../Redux/Actions/orderActions';

const AllOrders = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`${httpLink}/order`).then(res => res.json()).then(data => { dispatch(setAllOrderInfo(data.reverse())) }).catch(err => console.log(err))
    }, [dispatch])

    const allOrderInfo = useSelector(state => state.allOrder)


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th> Name</th>
                            <th>Product Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrderInfo?.map((order, index) => <Order order={order} key={index} index={index} />)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;