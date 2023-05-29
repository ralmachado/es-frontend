import React from 'react'
import Order from '../models/Order'

interface IOrderProps{
    order: Order
}


const OrderComponent: React.FC<IOrderProps> = ({order}) => {
    const lmao = true; 
    return (
        <tr className="mx-auto"> 
            <td className="py-3 px-6">{order.id}</td>
            <td className="py-3 px-6">{order.name}</td>
            <td className="py-3 px-6">{order.status}</td>
            {lmao && <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 
                hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">Click</button>}
        </tr>
        ) 
}

export default OrderComponent