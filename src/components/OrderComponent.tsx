import React from 'react'
import Order from '../models/Order'
import { apiInstance } from '../services/apiService';

interface IOrderProps{
    order: Order
}


const OrderComponent: React.FC<IOrderProps> = ({order}) => {
    const api = apiInstance();
    const confirmOrder = async () => {
        try{
            const response = await api.post("/confirm-order", order.order_id);
            if (response.status === 200)
                window.location.reload();
        } catch (err) {
            console.log("Error: ", err);
        }
    }; 
    return (
        <tr className="mx-auto"> 
            <td className="py-3 px-6">{order.order_id}</td>
            <td className="py-3 px-6">{order.timestamp}</td>
            <td className="py-3 px-6">{order.order_status}</td>
            {order.order_status === "Waiting confirmation" && <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 
                hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" onClick={confirmOrder}>Click</button>}
        </tr>
        ) 
}

export default OrderComponent