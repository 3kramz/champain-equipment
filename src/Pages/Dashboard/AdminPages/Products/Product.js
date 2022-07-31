import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { setTools } from '../../../../Redux/Actions/toolsActions';
import httpLink from '../../../../ServerLink/serverLink';

const Product = ({ tool }) => {
    const {_id, img, name, price, sold } = tool;
    const dispatch = useDispatch();
    
    const handleDelete=()=>{
        fetch(`${httpLink}/tool-delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id})
        }).then(res => res.json()).then(() => {
            fetch(`${httpLink}/tools`).then(res => res.json()).then(data =>{
                swal("Deleted!", "Tool has been deleted.", "success");
                dispatch(setTools(data))
                }).catch(err => console.log(err))
        }).catch(err => console.log(err))

}


    return (
        <tr className='border my-2'>
            <td className="px-6 py-4">
                <img className='w-[100px]' src={img} alt={name} />
            </td>

            <td className="px-6 py-4">
                {name}
            </td>

            <td className="px-6 py-4 font-semibold">
                ${price}
            </td>
            <td className="px-6 py-4 text-scale1">
                {sold} Unit
            </td>
            <td className="px-6 py-4 ">
                <button onClick={()=>handleDelete()} className='btn btn-outline bg-red'>Delete</button>
            </td>

        </tr>
    );
};

export default Product;