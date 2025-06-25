import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./components/admin/AddProductPage";
import UpdateProductPage from "./components/admin/UpdateProductPage";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";

// eslint-disable-next-line no-unused-vars
import useScrollTop from "./components/scrollTop/useScrollTop";
// eslint-disable-next-line no-unused-vars
import useMyState from "./context/useMyState";

function App() {
  return (
    <div>
      <useMyState>
        <Router>
          <useScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/productInfo/:id" element={<ProductInfo />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/allProduct" element={<AllProduct />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/category/:categoryname"
              element={<CategoryPage />}
            ></Route>

            <Route
              path="/user-dashboard"
              element={
                <ProtectedRouteForUser>
                  <UserDashboard />
                </ProtectedRouteForUser>
              }
            ></Route>
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            ></Route>
            <Route
              path="/add-product"
              element={
                <ProtectedRouteForAdmin>
                  <AddProductPage />
                </ProtectedRouteForAdmin>
              }
            ></Route>
            <Route
              path="/update-product/:id"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage />
                </ProtectedRouteForAdmin>
              }
            ></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Routes>
        </Router>
      </useMyState>
    </div>
  );
}

export default App;
