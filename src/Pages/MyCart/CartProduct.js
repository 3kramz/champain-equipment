import React from 'react';
import { ImCancelCircle } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../Redux/Actions/cartActions';


const CartProduct = ({ cart }) => {
    const { img, name, price, minOrder, _id } = cart

    const user =  useSelector(state => state.user);
    const carts = useSelector(state => state.cart)
    
    const dispatch = useDispatch();
    const removeTools = (id) => {
        const filredTools = carts?.filter(tool => tool["_id"] !== id)

        fetch(`http://localhost:5000/cart/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(filredTools)
        })
            .then(res => res.json())
            .then(data => {
                fetch(`http://localhost:5000/cart/${user?.email}`).then(res => res.json()).then(data => dispatch(setCart(data.cart)))
            })

    }



    return (
        <tr>
            <td className="px-6 py-4 text-textBody">
                <input type="checkbox" name="checkbox" />
            </td>
            <td className="px-4 py-4">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-3">
                    <img className="w-20 border p-2 rounded" src={img} alt="" />
                    <p className="text-justify"><small>{name}</small></p>
                </div>
            </td>
            <td className="px-6 py-4 text-textBody text-2xl">
                ${price}
            </td>
            <td className="px-6 py-4">
                <input className="border rounded text-center outline-brandColor2 w-20 py-2" type="number" name="quantity" value={minOrder} />
            </td>

            <td className="px-6 py-4 text-2xl">
                ${parseFloat(price) * parseInt(minOrder)}
            </td>
            <td onClick={() => removeTools(_id)} className="px-6 py-4 text-textBody">
                <ImCancelCircle className="cursor-pointer mx-auto" />
            </td>
        </tr>
    );
};

export default CartProduct;