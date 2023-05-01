const Footer = () => {
  return (
    <footer>
      <div className="copyrights">
        Copyright@{new Date().getFullYear()} Veg. Foodie Inc.
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </footer>
  );
};
export default Footer;
