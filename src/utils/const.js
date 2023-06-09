import logo from "../../assets/img/veg-food-logo-200x200.png";
export const LOGO_IMG = logo;
export const IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const APICall = (url) => {
  getAPIHandler(url);
};

const getAPIHandler = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
