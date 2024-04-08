import React from "react";

import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { itemsInfo } from "../data";
import { addToCart, decreaseCartItem } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleFoodItem = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { foodId } = useParams();

  const singleFoodItem = itemsInfo.find((item) => {
    return item.id === parseInt(foodId);
  });
  const { id, title, category, img, price } = singleFoodItem;

  const handleAddToCart = (singleFoodItem) => {
    dispatch(addToCart(singleFoodItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCartItem(cartItem));
  };

  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <section className="max-w-[1280px] mx-auto sm:py-12 py-6 px-6">
      <div className="sm:grid sm:grid-cols-2 flex flex-col-reverse sm:gap-6 justify-items-center">
        <div className="mt-10 md:pr-6">
          <h2 className="md:text-[38px] text-[28px] font-medium">{title}</h2>
          <p className="text-subtitle mt-6">
            Gay one the what walk then she. Demesne mention promise you justice
            arrived way. Amazing foods are Or and increasing to in specially
            inquietude companions acceptance admiration. Outweigh it families
            distance wandered ye
          </p>
          <div className="flex items-center gap-5 my-6">
            <p className="text-[26px] font-medium">${price}</p>

            <div>
              {cartItems.map((cartItem) => {
                return (
                  <div
                    key={cartItem.id}
                    className="w-[90px] text-[18px] py-1 flex justify-around border-[1px] border-gray-200 shadow-sm rounded-3xl"
                  >
                    <button
                      onClick={() => {
                        handleDecreaseCart(cartItem);
                      }}
                    >
                      -
                    </button>
                    <p>{cartItem.cartQuantity}</p>
                    <button
                      onClick={() => {
                        handleIncreaseCart(cartItem);
                      }}
                      className="text-active"
                    >
                      +
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <button
              onClick={() => handleAddToCart(singleFoodItem)}
              className="button flex items-center gap-2 px-5"
            >
              <span>
                <AiOutlineShoppingCart className="w-[22px] h-[22px] cursor-pointer" />
              </span>
              Add
            </button>
          </div>
          <div className="mt-16">
            <img src={img} alt={category} className="w-[100px]" />
          </div>
        </div>
        <div>
          <img src={img} alt={category} className="w-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default SingleFoodItem;
