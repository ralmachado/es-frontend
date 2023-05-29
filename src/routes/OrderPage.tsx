import { useEffect, useState } from "react";
import Menu from "../components/Menu"
import OrderComponent from "../components/OrderComponent";
import Order from "../models/Order";
import { apiInstance } from '../services/apiService';

const OrderPage = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const api = apiInstance();
    const getOrders = async () => {
        const orders1: Order[] = []
        try{
            const response = await api.get("/orders");
            response.data.result.forEach((order: Order) => {
                orders1.push(order);
            })
            orders1.sort((a, b) => {
                const id_a = Number(a.order_id);
                const id_b = Number(b.order_id);
                if (id_a < id_b) {
                    return 1;
                }
                if (id_a > id_b) {
                    return -1;
                }
                return 0;
            })
            setOrders(orders1)
        } catch (err) {
            console.log("Error: ", err);
        }
    };
    useEffect(() => {
        getOrders();
    }, [])
    
    return (
        <div>  
            <Menu />
            <div className="flex flex-col mt-24 rounded-lg items-center">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3x mb-11">Payment Completed</h3>
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3x mb-11">Orders</h3>
            <table className="w-auto table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-6">ID</th>
                        <th className="py-3 px-6">Date</th>
                        <th className="py-3 px-6">Status</th>
                        <th className="py-3 px-6">Conclude</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                        {
                            orders.map((order: Order) =>(
                                <OrderComponent order={order}/>),
                            )
                        }
                </tbody>
            </table>
            </div>
        </div>
    )
}
          

export default OrderPage;