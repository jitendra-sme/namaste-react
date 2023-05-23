import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShimmerCustom from "./ShimmerCustom";
import Card from "./Card";

const Restaurant = () => {
  const { resid } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    restaurantDetails();
  }, []);
  async function restaurantDetails() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
        resid
    );
    const json = await response.json();
    setRestaurantInfo(json.data);
  }

  return !restaurantInfo ? (
    <ShimmerCustom />
  ) : (
    <>
      <Card
        key={restaurantInfo?.cards[0]?.card?.card?.info?.id}
        restro={{
          name: restaurantInfo?.cards[0]?.card?.card?.info?.name,
          cuisines: restaurantInfo?.cards[0]?.card?.card?.info?.cuisines,
          avgRating: restaurantInfo?.cards[0]?.card?.card?.info?.avgRating,
          deliveryTime:
            restaurantInfo?.cards[0]?.card?.card?.info?.sla?.deliveryTime,
          costForTwo: restaurantInfo?.cards[0]?.card?.card?.info?.costForTwo,
          cloudinaryImageId:
            restaurantInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId,
        }}
      />
    </>
  );
};
export default Restaurant;
