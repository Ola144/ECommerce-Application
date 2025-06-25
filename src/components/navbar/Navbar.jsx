import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
// import { useContext } from "react";
import MyContext from "../../context/useMyContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  // const context = useContext(MyContext);
  // const {  } = context;

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);

  function logout() {
    localStorage.removeItem("users");
    navigate("/login");
  }

  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-end px-5">
      {/* Home */}
      <li className="relative">
        <NavLink to={"/"}>Home</NavLink>
      </li>

      {/* Product */}
      <li className="relative">
        <NavLink to={"/allProduct"}>All Product</NavLink>
      </li>

      {/* SignIn */}
      {!user ? (
        <li className="relative">
          <NavLink to={"/signup"}>Signup</NavLink>
        </li>
      ) : (
        ""
      )}

      {/* SignIn */}
      {!user ? (
        <li className="relative">
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      ) : (
        ""
      )}

      {/* User */}
      {user?.role === "user" && (
        <li className="relative">
          <NavLink to={"/user-dashboard"}>{user?.name}</NavLink>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li className="relative">
          <NavLink to={"/admin-dashboard"}>Admin</NavLink>
        </li>
      )}

      {/* Logout */}
      {user && (
        <li onClick={logout} className="cursor-pointer">
          Logout
        </li>
      )}

      {/* cart */}
      <li className="relative">
        <NavLink to={"/cart"}>Cart({cartItems?.length})</NavLink>
      </li>
    </ul>
  );

  return (
    <div className="bg-pink-600 sticky top-0">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
        <div className="left py-3 lg:py-0">
          <Link>
            <h2 className="font-bold text-white text-center">E-Commerce</h2>
          </Link>
        </div>

        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>

        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
