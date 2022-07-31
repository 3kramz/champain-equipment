import React from 'react';

const OrderTr = ({order}) => {
    const {name,_id, status, date}=order;
    console.log(order)
    return (
            <tr>
                <td className="px-6 py-4">
                  {_id}
                </td>

                <td className="px-6 py-4">
                   {date}
                </td>

                <td className="px-6 py-4 font-semibold">
                    {name}
                </td>
                <td className="px-6 py-4 text-scale1">
                    {status}
                </td>
               
               
               
            </tr>
    );
};

export default OrderTr;