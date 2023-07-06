import store from "../utils/store";
import { useSelector, useDispatch } from "react-redux";
import { IMG_URL } from "../utils/const";
import { clearItems } from "../utils/cartSlice";

const CartItems = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearItemsHandler = () => {
    dispatch(clearItems());
  };

  return (
    <>
      <button
        className="bg-blue-800 p-2 m-2 text-white cursor-pointer"
        onClick={clearItemsHandler}
      >
        Clear All
      </button>
      <div className="flex">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col p-2 m-2 bg-slate-300 flex-wrap"
          >
            <img src={IMG_URL + item.imageId} />
            <h4 className="font-bold">{item.name}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default CartItems;
