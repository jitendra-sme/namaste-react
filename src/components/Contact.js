import { useEffect, useState } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(1);
  }, []);
  console.log("Contact Us " + count);
  return <h1>Contact Us</h1>;
};
export default Contact;
