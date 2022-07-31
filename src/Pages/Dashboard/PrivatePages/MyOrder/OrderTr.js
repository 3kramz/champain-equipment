import React from 'react';

const OrderTr = ({order}) => {
    const {name, _id, status, date}=order;
    const clr = () => {
        switch (status) {
            case "Unpaid": return "error"
            case "Paid": return "secondary"
            case "Shifted": return "success"
            case "Delivared": return "success"
            case "Order Canceled": return "error"
            default: return "warning"
        }
    }
    const btnColour = clr()
    return (
            <tr>
                <td className="px-6 py-4">
                  { _id}
                </td>

                <td className="px-6 py-4">
                   {date}
                </td>

                <td className="px-6 py-4 font-semibold">
                    {name}
                </td>
                <td className={`px-6 py-4 text-${btnColour}`}>
                    {status}
                </td>
               
               
               
            </tr>
    );
};

export default OrderTr;