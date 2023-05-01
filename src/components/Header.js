import { LOGO_IMG } from "../utils/const";

export default Header = () => {
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
      </nav>
    </header>
  );
};
