import { IMG_URL } from "../utils/const";

const Card = (props) => {
  const {
    name,
    cuisines,
    avgRating: ratings,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = props.restro;
  return (
    <div>
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
    </div>
  );
};
export default Card;
