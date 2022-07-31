import React from 'react';
import UpdateStatus from './UpdateStatus';

const Order = ({ order, index }) => {


    const [isOpen, setIsOpen] = React.useState(false);

    const { _id, date, info, minOrder, name, status } = order
    const clr = () => {
        switch (status) {
            case "Unpaid": return "error"
            case "Paid": return "secondary"
            case "Shifted": return "success"
            case "Delivared": return "primary"
            case "Order Canceled": return "error"
            default: return "warning"
        }
    }
    const btnColour = clr()

    return (
        <>
            <tr className="hover">
                <th>{index + 1}</th>
                <td>{info["first-name"]}</td>
                <td>{name}</td>
                <td><label onClick={() => setIsOpen(true)} for={_id} className={`modal-button flex justify-center gap-3 btn btn-xs btn-${btnColour} btn-outline`}> {status}  </label></td>
                <td>{date}</td>
                <td>{minOrder}</td>
                <td>{info["address-lane"]}</td>
                <td>{info["phone"]}</td>
            </tr>
            {isOpen && <UpdateStatus order={order} key={_id} setIsOpen={setIsOpen} />}
        </>

    );
};

export default Order;