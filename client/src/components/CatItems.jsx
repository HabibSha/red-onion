import React from "react";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { addToCart, getTotals } from "../features/cartSlice";

const CatItems = ({ item, handleAddToCart }) => {
  const { id, title, desc, category, img, price } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddToCart = (event, foodItem) => {
    event.stopPropagation(); // Stop the event from bubbling up to other elements
    dispatch(addToCart(foodItem));
    dispatch(getTotals());
    handleAddToCart(foodItem);
    // navigate("/cart");
  };

  return (
    <div className="max-w-[350px] px-12 py-4 flex flex-col items-center hover:shadow-xl transition-all duration-300 cursor-pointer">
      <img
        src={img}
        alt={category}
        className="lg:max-w-[260px] lg:max-h-[260px] md:max-w-[210px] md:max-h-[210px] max-w-[180px] max-h-[180px]"
      />
      <div className="sm:mt-10 mt-5 text-center">
        <h3 className="text-title font-medium">{title}</h3>
        <p className="text-[13px] text-subtitle">{desc}</p>
        <div className="mt-2">
          <p className="text-[19px] text-title font-medium">
            <span className="text-[14px] font-normal">Price:</span> ${price}
          </p>

          <div className="flex justify-between items-center mt-3">
            <Link to={`/categories/${id}`}>
              <button className="button text-sm px-4">
                Details <span>→</span>
              </button>
            </Link>
            <AiOutlineShoppingCart
              onClick={(e) => onAddToCart(e, item)}
              className="text-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatItems;
