import { useContext } from "react";
import { IMG_URL } from "../utils/const";
import UserContext from "../utils/UserContext";

const Card = (props) => {
  const {
    name,
    cuisines,
    avgRating: ratings,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = props.restro;
  // const user = props?.user;
  const { user } = useContext(UserContext);
  return (
    <div className="w-64 bg-white p-4 shadow-md hover:bg-gray-100">
      <img src={IMG_URL + cloudinaryImageId} />
      <h4 className="font-bold">{name}</h4>
      <div title="cuisine" className="text-sm">
        {cuisines.join(", ")}
      </div>
      <div className="flex justify-between text-base">
        <span className="ratings">&#9733; {ratings}</span>
        <span className="text-5xl leading-4">&middot;</span>
        <span>{deliveryTime} mins</span>
        <span className="text-5xl leading-4">&middot;</span>
        <span>&#8377;{costForTwo / 100} for two</span>
      </div>
      <span>
        Username: {user?.name} <br />
      </span>
      <span>Email: {user?.email}</span>
    </div>
  );
};
export default Card;
