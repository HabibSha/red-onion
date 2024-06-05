import React from "react";

const DeliveryForm = () => {
  return (
    <div>
      <h3 className="text-[19px] font-medium pb-2">Edit Delivery Details</h3>
      <hr className="border-gray-400 border-[1px]" />
      <form className="mt-8">
        <input
          type="text"
          placeholder="Where to delivery"
          required
          className="bg-gray-100 w-full placeholder:text-[14px] placeholder:text-gray-500 px-4 py-1 rounded-sm mb-5"
        />
        <input
          type="text"
          placeholder="Road no"
          required
          className="bg-gray-100 w-full placeholder:text-[14px] placeholder:text-gray-500 px-4 py-1 rounded-sm mb-5"
        />
        <input
          type="text"
          placeholder="Flat, suite or floor"
          required
          className="bg-gray-100 w-full placeholder:text-[14px] placeholder:text-gray-500 px-4 py-1 rounded-sm mb-5"
        />
        <input
          type="text"
          placeholder="Business Name"
          className="bg-gray-100 w-full placeholder:text-[14px] placeholder:text-gray-500 px-4 py-1 rounded-sm mb-5"
        />
        <input
          type="textarea"
          placeholder="Add delivery instructor"
          required
          className="bg-gray-100 w-full placeholder:text-[14px] placeholder:text-gray-500 px-4 pt-1 pb-10 rounded-sm mb-5"
        />
        <button
          type="submit"
          className="bg-[#f71747] hover:bg-[#df1742] text-[14px] text-white py-[6px] w-full rounded-sm"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default DeliveryForm;
