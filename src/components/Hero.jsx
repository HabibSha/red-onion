import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-hero md:bg-cover md:bg-top bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1280px] font-sans mx-auto text-center lg:py-[320px] py-[250px] sm:px-5 px-2">
        <h1 className="lg:text-[48px] sm:text-[35px] text-[24px] font-normal">
          Best food waiting for your belly
        </h1>
        <div>
          <input
            type="text"
            placeholder="Search food items"
            className="lg:w-[430px] sm:w-[350px] px-6 py-2 mt-4 rounded-3xl focus:outline-none"
          />
          <button className="button -ml-9">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
