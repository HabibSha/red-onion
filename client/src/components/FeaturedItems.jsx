import React from "react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

const FeaturedItems = ({ id, title, desc, img, name, icon }) => {
  return (
    <div className="hover:shadow-md rounded-xl transition-all duration-300">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="flex p-6">
        <div>
          <img src={icon} alt="icon" className="w-[32px] h-[32px] mr-10" />
        </div>
        <div>
          <h4 className="text-xl font-medium text-title mb-3">{title}</h4>
          <p className="text-[12px] text-subtitle mb-3">{desc}</p>
          <div>
            <button className="text-[15px] flex items-center text-blue-600 font-medium">
              See more{" "}
              <span>
                <BsFillArrowRightCircleFill className="ml-2 text-lg text-green-500" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
