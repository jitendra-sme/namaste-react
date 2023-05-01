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
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <div title="cuisine">{cuisines.join(", ")}</div>
      <div className="info-bar">
        <span className="ratings">&#9733; {ratings}</span>
        <span className="middot">&middot;</span>
        <span>{deliveryTime} mins</span>
        <span className="middot">&middot;</span>
        <span>&#8377;{costForTwo / 100} for two</span>
      </div>
    </div>
  );
};
export default Card;
