import React from 'react';
import httpLink from '../../../../ServerLink/serverLink';
import { useDispatch } from 'react-redux';
import { setAllOrderInfo } from '../../../../Redux/Actions/orderActions';

const UpdateStatus = ({ order, setIsOpen }) => {
    const { _id, name, status } = order
    const dispatch = useDispatch()


    const handleUpdate = status => {
        fetch(`${httpLink}/order-status/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status })
        }).then(res => res.json()).then(() => {
            fetch(`${httpLink}/order`).then(res => res.json()).then(data => { dispatch(setAllOrderInfo(data.reverse())); setIsOpen(false) }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }






    return (
        <div>
            <input type="checkbox" id={_id} class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for={_id} class="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-2xl font-bold">{name}</h3>
                    <h3 class=""> Current Order Status is - {status}</h3>

                    <div className='flex gap-5 mt-5'>
                        <label onClick={() => handleUpdate("Unpaid")} className=" flex justify-center gap-3 btn btn-xs btn-error btn-outline "> Unpaid</label>
                        <label onClick={() => handleUpdate("Paid")} className=" flex justify-center gap-3 btn btn-xs btn-secondary btn-outline "> Paid </label>
                        <label onClick={() => handleUpdate("Shifted")} className=" flex justify-center gap-3 btn btn-xs btn-success btn-outline"> Shifted </label>
                        <label onClick={() => handleUpdate("Delivared")} className=" flex justify-center gap-3 btn btn-xs btn-primary btn-outline"> Delivared</label>
                        <label onClick={() => handleUpdate("Order Canceled")} className=" flex justify-center gap-3 btn btn-xs btn-error btn-outline"> Order cancel</label>
                    </div>





                </div>
            </div>
        </div >
    );
};

export default UpdateStatus;