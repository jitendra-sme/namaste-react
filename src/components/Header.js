import { useState } from "react";
import { LOGO_IMG } from "../utils/const";

export default Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header>
      <div className="logo">
        <img src={LOGO_IMG} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        {!isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        ) : (
          <button
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
