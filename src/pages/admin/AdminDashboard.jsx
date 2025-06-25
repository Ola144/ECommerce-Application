import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetails from "../../components/admin/ProductDetails";
import OrderDetails from "../../components/admin/OrderDetails";
import UserDetail from "../../components/admin/UserDetail";
import MyContext from "../../context/myContext";
import Layout from "../../components/layout/Layout";

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(MyContext);
  const { getAllProduct, getAllOrder, getAllUser } = context;

  return (
    <Layout>
      <div className="p-5">
        <div className="bg-pink-50 text-center text-pink-500 font-bold py-5 text-2xl rounded-lg mb-4 border border-pink-100 ">
          <h2>Admin Dashboard</h2>
        </div>

        <div className="bg-pink-50 text-center text-pink-500 font-bold py-5 text-2xl rounded-lg mb-4 border border-pink-100">
          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s"
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

        <div className="lg:px-8 md:px-6 mt-6">
          <Tabs>
            <TabList className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
              <Tab className="bg-pink-50 text-center text-pink-500 font-bold py-5 text-2xl rounded-lg border border-pink-100 hover:bg-pink-100 cursor-pointer">
                <div className="text-4xl mb-4">
                  <i className="fa fa-shopping-basket"></i>
                </div>
                <p className="mb-1 text-4xl">{getAllProduct?.length}</p>
                <p className="text-sm">Total Products</p>
              </Tab>
              <Tab className="bg-pink-50 text-center text-pink-500 font-bold py-5 text-2xl rounded-lg border border-pink-100 hover:bg-pink-100 cursor-pointer">
                <div className="text-4xl mb-4">
                  <i className="fa fa-th-list"></i>
                </div>
                <p className="mb-1 text-4xl">{getAllOrder?.length}</p>
                <p className="text-sm">Total Order</p>
              </Tab>
              <Tab className="bg-pink-50 text-center text-pink-500 font-bold py-5 text-2xl rounded-lg border border-pink-100 hover:bg-pink-100 cursor-pointer">
                <div className="text-4xl mb-4">
                  <i className="fa fa-users"></i>
                </div>
                <p className="mb-1 text-4xl">{getAllUser?.length}</p>
                <p className="text-sm">Total User</p>
              </Tab>
            </TabList>

            <TabPanel>
              <ProductDetails />
            </TabPanel>
            <TabPanel>
              <OrderDetails />
            </TabPanel>
            <TabPanel>
              <UserDetail />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;
