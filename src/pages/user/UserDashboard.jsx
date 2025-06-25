import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/loader";

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem("users"));
  // console.log(user);

  const context = useContext(myContext);
  const { loading, getAllOrder, formatCurrency } = context;

  return (
    <Layout>
      {loading && <Loader />}
      <div className="container mx-auto px-4 py-5 lg:py-8">
        <div className="top">
          <div className="bg-pink-50 rounded-xl border border-pink-100">
            <div className="flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJv_DB8rALX7h051ivxfSpmaIWvdXZ-Hw6-w&s"
                alt=""
                className="w-20 my-3 rounded-full"
              />
            </div>
            <div className="">
              <h1 className="text-center text-lg">
                <span className="font-bold">Name: </span>
                {user?.name}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Email: </span>
                {user?.email}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Date: </span>
                {user?.date}
              </h1>
              <h1 className="text-center text-lg">
                <span className="font-bold">Role: </span>
                {user?.role}
              </h1>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>

            {getAllOrder
              .filter((obj) => obj.userId === user?.uid)
              .map((order, index) => {
                return (
                  <div key={index}>
                    {order.cartItems?.map((item, index) => {
                      const {
                        id,
                        date,
                        quantity,
                        price,
                        title,
                        productImgUrl,
                        category,
                      } = item;
                      return (
                        <div
                          key={index}
                          className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row"
                        >
                          <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                            <div className="p-8">
                              <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-4 gap-5">
                                <div className="mb-4">
                                  <div className="text-sm font-semibold text-black">
                                    Order ID
                                  </div>
                                  <div className="text-xs font-medium text-gray-900 text-pretty w-6">
                                    {id.slice(0, 10)}
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <div className="text-sm font-semibold text-black">
                                    Date
                                  </div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {date}
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <div className="text-sm font-semibold text-black">
                                    Total Amount
                                  </div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {formatCurrency(price * quantity)}
                                  </div>
                                </div>
                                <div className="mb-4">
                                  <div className="text-sm font-semibold text-black">
                                    Order Status
                                  </div>
                                  <div className="text-sm font-medium text-green-900 first-letter:uppercase">
                                    {order.status}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="p-8">
                              <ul className="-my-7 divide-y divide-gray-200">
                                <li className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                  <div className="flex flex-1 items-stretch">
                                    <div className="flex-shrink-0">
                                      <img
                                        src={productImgUrl}
                                        alt={productImgUrl}
                                        className="h-20 w-20 rounded-lg border border-gray-200 object-contain mr-3"
                                      />
                                    </div>
                                    <div className="mt flex flex-col justify-between">
                                      <div className="flex-1">
                                        <p className="text-sm font-body text-gray-900 mb-1">
                                          {title}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm font-medium text-gray-500">
                                        {category}
                                      </p>
                                      <p className="mt-1 text-sm font-medium text-gray-500">
                                        {quantity}
                                      </p>
                                    </div>
                                    <div className="ml-auto flex flex-col items-end justify-between">
                                      <p className="text-right text-sm font-bold text-gray-500">
                                        {formatCurrency(price)}
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserDashboard;
