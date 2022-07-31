import React from 'react';

const Product = ({ tool }) => {
    const { img, name, price, sold } = tool;
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
                <button className='btn btn-outline bg-red'>Delete</button>
            </td>

        </tr>
    );
};

export default Product;