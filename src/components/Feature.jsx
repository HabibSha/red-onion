import React, { useState } from "react";

import { featuredItems } from "../data";
import FeaturedItems from "./FeaturedItems";
import { Link } from "react-router-dom";

const Feature = () => {
  const [items, setItems] = useState(featuredItems);

  return (
    <section className="max-w-[1280px] mx-auto my-6 px-4 sm:px-6 font-poppins">
      <div className="max-w-[550px]">
        <h2 className="sm:text-[35px] text-[24px] sm:font-normal font-medium">
          Why you Choose us
        </h2>
        <p className="text-[15px] mt-3">
          Barton Waited twenty repair in within we do. An delighted offending
          curiosity my is dashwoods at. Boy prosperous increasing surrounded.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4 justify-items-center lg:mt-14 mt-8">
        {items.map((item) => (
          <FeaturedItems key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Feature;
