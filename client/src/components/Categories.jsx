import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { itemsInfo } from "../data";
import { useSelector, useDispatch } from "react-redux";
import CateSelect from "./CateSelect";
import CatItems from "./CatItems";
import { addToCart } from "../features/cartSlice";

const newCatValue = [
  ...new Set(itemsInfo.map((newCatItem) => newCatItem.category)),
];

const Categories = () => {
  const [items, setItems] = useState(
    itemsInfo.filter((item) => item.category === "Breakfast")
  );
  const [catItems, setCatItems] = useState(newCatValue);
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  const isCheckoutEnabled = useSelector(
    (state) => state.cart.isCheckoutEnabled
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCatSelect = (category) => {
    const filteredItems = itemsInfo.filter(
      (newItem) => newItem.category === category
    );
    setItems(filteredItems);
    setActiveCategory(category);
  };

  const handleAddToCart = (foodItem) => {
    dispatch(addToCart(foodItem));
  };

  return (
    <div className="max-w-[1280px] mx-auto py-12 font-poppins md:px-6 px-4">
      <div className="text-center">
        <CateSelect
          handleCatSelect={handleCatSelect}
          catItems={catItems}
          activeCategory={activeCategory}
        />
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-16 justify-items-center">
        {items.map((item) => (
          <CatItems
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="text-center md:py-12 pt-12">
        <button
          className={`text-white px-12 py-2 rounded-md ${
            isCheckoutEnabled ? "bg-black" : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!isCheckoutEnabled}
          onClick={() => navigate("/checkout")}
        >
          Checkout your food
        </button>
      </div>
    </div>
  );
};

export default Categories;
