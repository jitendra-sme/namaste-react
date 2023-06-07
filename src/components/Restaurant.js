import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShimmerCustom from "./ShimmerCustom";
import Card from "./Card";
import useAPI from "../hooks/useAPI";

const Restaurant = () => {
  const { resid } = useParams();
  const restaurantID =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
    resid;
  const restaurantInfo = useAPI(restaurantID);

  return !restaurantInfo ? (
    <ShimmerCustom />
  ) : (
    <>
      <Card
        key={restaurantInfo?.data?.cards[0]?.card?.card?.info?.id}
        restro={{
          name: restaurantInfo?.data?.cards[0]?.card?.card?.info?.name,
          cuisines: restaurantInfo?.data?.cards[0]?.card?.card?.info?.cuisines,
          avgRating:
            restaurantInfo?.data?.cards[0]?.card?.card?.info?.avgRating,
          deliveryTime:
            restaurantInfo?.data?.cards[0]?.card?.card?.info?.sla?.deliveryTime,
          costForTwo:
            restaurantInfo?.data?.cards[0]?.card?.card?.info?.costForTwo,
          cloudinaryImageId:
            restaurantInfo?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId,
        }}
      />
    </>
  );
};
export default Restaurant;
