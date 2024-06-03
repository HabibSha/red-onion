import React from "react";

import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w-full bg-[#1a1919] py-6">
      <div className="max-w-[1280px] mx-auto text-white px-6 py-12">
        <div className="grid grid-cols-4 justify-items-end gap-x-9">
          <Link to="/" className="col-span-2 justify-self-start">
            <img
              src={logo}
              alt="logo"
              className="sm:w-[128px] sm:h-[38px] w-[85px] h-[28px]"
            />
          </Link>
          <div>
            <ul className="list-none text-gray-200 flex flex-col gap-2">
              <li>About Online Food</li>
              <li>Read our Blog</li>
              <li>Sign up to deliver</li>
              <li>Add your restaurant</li>
            </ul>
          </div>
          <div>
            <ul className="list-none text-gray-200 flex flex-col gap-2">
              <li>Get help</li>
              <li>Read FAQs</li>
              <li>View all cities</li>
              <li>Restaurants near me</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-[100px]">
          <div>
            <p className="text-sm text-[#8b8282]">
              Copyright © 2023 Online food
            </p>
          </div>
          <ul className="flex gap-12 list-none text-gray-200">
            <li>Privacy Policy.</li>
            <li>Terms of use</li>
            <li>Price</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
