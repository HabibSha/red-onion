import React, { useState } from "react";

import { toast } from "react-toastify";

const DeliveryForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    deliveryLocation: "",
    roadNo: "",
    flatSuiteFloor: "",
    businessName: "",
    deliveryInstructions: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check form validity
    const isValid = Object.values({
      ...formData,
      [name]: value,
    }).every((field) => field.trim() !== "");
    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onFormSubmit(true);
      setFormData({
        deliveryLocation: "",
        roadNo: "",
        flatSuiteFloor: "",
        businessName: "",
        deliveryInstructions: "",
      });
      toast.success("Successfully submitted");
    } else {
      toast.error("Please fill in all required fields");
    }
  };

  return (
    <div>
      <h3 className="text-[19px] font-medium pb-2">Edit Delivery Details</h3>
      <hr className="border-gray-400 border-[1px]" />
      <form className="mt-8" onSubmit={handleSubmit}>
        <input
          type="text"
          name="deliveryLocation"
          placeholder="Where to delivery"
          required
          className="bg-gray-100 w-full placeholder:text-[14px] placeholder:text-gray-500 px-4 py-1 rounded-sm mb-5"
          onChange={handleChange}
          value={formData.deliveryLocation}
        />
        <input
          type="text"
          name="roadNo"
          placeholder="Road no"
          required
          className="bg-gray-100 w-full placeholder:text-[14px] placeholder:text-gray-500 px-4 py-1 rounded-sm mb-5"
          onChange={handleChange}
          value={formData.roadNo}
        />
        <input
          type="text"
          name="flatSuiteFloor"
          placeholder="Flat, suite or floor"
          required
          className="bg-gray-100 w-full placeholder:text-[14px] placeholder:text-gray-500 px-4 py-1 rounded-sm mb-5"
          onChange={handleChange}
          value={formData.flatSuiteFloor}
        />
        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          className="bg-gray-100 w-full placeholder:text-[14px] placeholder:text-gray-500 px-4 py-1 rounded-sm mb-5"
          onChange={handleChange}
          value={formData.businessName}
        />
        <textarea
          name="deliveryInstructions"
          placeholder="Add delivery instructor"
          required
          className="bg-gray-100 w-full placeholder:text-[14px] placeholder:text-gray-500 px-4 pt-1 pb-10 rounded-sm mb-5"
          onChange={handleChange}
          value={formData.deliveryInstructions}
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
