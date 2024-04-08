import React, { useState } from "react";

import { itemsInfo } from "../data";
import CateSelect from "./CateSelect";
import CatItems from "./CatItems";

const newCatValue = [
  ...new Set(itemsInfo.map((newCatItem) => newCatItem.category)),
];

const Categories = () => {
  const [items, setItems] = useState(itemsInfo);
  const [catItems, setCatItems] = useState(newCatValue);

  const handleCatSelect = (category) => {
    const filteredItems = itemsInfo.filter((newItem) => {
      return newItem.category === category;
    });
    setItems(filteredItems);
  };

  return (
    <div className="max-w-[1280px] mx-auto py-12 font-poppins md:px-6 px-4">
      <div className="text-center">
        <CateSelect handleCatSelect={handleCatSelect} catItems={catItems} />
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-16 justify-items-center">
        {items.map((item) => (
          <CatItems key={item.id} item={item} />
        ))}
      </div>
      <div className="text-center md:py-12 pt-12">
        <button className="text-white bg-gray-300 px-12 py-2 rounded-md">
          Checkout your food
        </button>
      </div>
    </div>
  );
};

export default Categories;
