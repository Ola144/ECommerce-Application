import React, { useContext } from "react";
import MyContext from "../../context/myContext";

function OrderDetails() {
  const context = useContext(MyContext);
  const { getAllOrder, formatCurrency, deleteOrder } = context;

  return (
    <div>
      <div>
        <div className="py-5">
          <h1 className="text-xl text-pink-300 font-bold">All Order</h1>
        </div>

        <div className="w-full overflow-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
            <thead>
              <tr>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  S/N
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Order ID
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Image
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Title
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Category
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Price
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Quantity
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Total Price
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Status
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Name
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Address
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Pincode
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Phone Number
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Email
                </th>
                <th className="h-12 px-6 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {getAllOrder.map((order) => {
                return (
                  <>
                    {order.cartItems?.map((item, index) => {
                      return (
                        <tr key={index} className="text-pink-300">
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {index + 1}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {item.id.slice(0, 10)}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            <img
                              src={item.productImgUrl}
                              alt={item.productImgUrl}
                              className="w-20"
                            />
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {item.title.slice(0, 20)}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {item.category}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {formatCurrency(item.price)}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {item.quantity}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {formatCurrency(item.price * item.quantity)}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase text-green-600">
                            {order.status}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {order.addressInfo.name}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {order.addressInfo.address}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500">
                            {order.addressInfo.pincode}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {order.addressInfo.mobileNumber}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                            {order.email}
                          </td>
                          <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-pink-100 stroke-slate-500 text-red-600 text-lg cursor-pointer" onClick={() => deleteOrder(order.id)}>
                            <i className="fa fa-trash"></i>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
