import React from "react";

import vehicle from "../assets/images/vehicle.png";
import rider from "../assets/images/helmet.png";

const CompleteOrder = () => {
  return (
    <section className="max-w-[1280px] mx-auto py-12 font-poppins md:px-6 px-4">
      <div className="grid grid-cols-3 gap-12">
        <article className="col-span-2">
          Here will be the map functionality
        </article>
        <article className="bg-gray-100 p-6 rounded-lg">
          <img src={vehicle} alt="Vehicle" className="w-[100px] ml-10" />
          <div className="bg-white p-3 rounded-lg mt-3">
            <div className="flex flex-col space-y-2">
              {/* Location Step */}
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#f71747] rounded-full"></div>
                <div className="ml-3">
                  <p className="font-medium">Your Location</p>
                  <p className="text-gray-500">107 Rd No 8</p>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="ml-2 border-l-2 border-gray-300 h-6"></div>
              {/* Shop Address Step */}
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#f71747] rounded-full"></div>
                <div className="ml-3">
                  <p className="font-medium">Shop Address</p>
                  <p className="text-gray-500">Gulshan Plaza Restaura GPR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-start mb-4 mt-8">
            <h2 className="text-3xl font-semibold">09:30</h2>
            <p className="text-gray-500">Estimated delivery time</p>
          </div>

          {/* Rider Info */}
          <div className="bg-white p-4 rounded-lg flex items-center mb-4 shadow-sm">
            <img
              src={rider}
              alt="Rider"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div className="ml-2">
              <h3 className="font-medium">Hamim</h3>
              <p className="text-gray-500">Your raider</p>
            </div>
          </div>

          {/* Contact Button */}
          <button className="bg-[#f71747] text-white w-full py-2 rounded-lg font-medium hover:bg-[#db1a44] transition-colors">
            Contact
          </button>
        </article>
      </div>
    </section>
  );
};

export default CompleteOrder;
