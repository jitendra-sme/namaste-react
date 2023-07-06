import { useState, useContext } from "react";
import { LOGO_IMG } from "../utils/const";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import cartSlice from "../utils/cartSlice";
import store from "../utils/store";

export default Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center p-8 mb-2 shadow-md">
      <div className="w-28">
        <img src={LOGO_IMG} alt="logo" />
      </div>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart - {cartItems.length} item(s)</Link>
          </li>
        </ul>
        <span className="font-bold text-lg ">{user.name}</span>
        {!isLoggedIn ? (
          <button
            className="float-right"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        ) : (
          <button
            className="float-right"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};
