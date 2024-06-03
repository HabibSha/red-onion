import React from "react";

const CateSelect = ({ handleCatSelect, catItems, activeCategory }) => {
  return (
    <div className="font-poppins font-medium flex justify-center sm:gap-12 gap-6">
      {catItems.map((catItem, index) => (
        <button
          key={index}
          onClick={() => handleCatSelect(catItem)}
          className={`mt-0 ${
            activeCategory === catItem ? "text-active underline" : ""
          }`}
        >
          {catItem}
        </button>
      ))}
    </div>
  );
};

export default CateSelect;
