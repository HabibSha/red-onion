import React from "react";

const CateSelect = ({ handleCatSelect, catItems }) => {
  return (
    <div className="font-poppins font-medium flex justify-center sm:gap-12 gap-6">
      {catItems.map((catItem, index) => (
        <button
          key={index}
          onClick={() => handleCatSelect(catItem)}
          className="mt-0 active:text-active active:underline"
        >
          {catItem}
        </button>
      ))}
    </div>
  );
};

export default CateSelect;
