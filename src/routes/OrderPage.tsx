import Menu from "../components/Menu"
import OrderComponent from "../components/OrderComponent";
import Order from "../models/Order";

const OrderPage = () => {
    const orders: Order[] = [{id: 0, name: "lmao", status: "lmaolmao"}, {id: 1, name: "lmao2", status: "lmaolmao"},
                                {id: 2, name: "lmao3", status: "lmaolmao"}]
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
                        <th className="py-3 px-6">Name</th>
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