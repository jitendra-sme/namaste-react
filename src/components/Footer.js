const Footer = () => {
  return (
    <footer className="flex justify-between m-8">
      <div>Copyright@{new Date().getFullYear()} Veg. Foodie Inc.</div>
      <ul className="flex gap-2">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </footer>
  );
};
export default Footer;
