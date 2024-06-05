import React from "react";

import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w-full bg-[#1a1919] py-6">
      <div className="max-w-[1280px] mx-auto text-[15px] sm:text-[16px] text-white px-6 py-12">
        <div className="grid sm:grid-cols-4 sm:justify-items-end sm:gap-x-9">
          <Link to="/" className="sm:col-span-2 justify-self-start">
            <img
              src={logo}
              alt="logo"
              className="sm:w-[128px] sm:h-[38px] w-[85px] h-[28px]"
            />
          </Link>
          <div className="mt-12 sm:mt-0">
            <ul className="Linkst-none text-gray-200 flex flex-col gap-2">
              <Link to="#">About OnLinkne Food</Link>
              <Link to="#">Read our Blog</Link>
              <Link to="#">Sign up to deLinkver</Link>
              <Link to="#">Add your restaurant</Link>
            </ul>
          </div>
          <div className="mt-8 sm:mt-0">
            <ul className="Linkst-none text-gray-200 flex flex-col gap-2">
              <Link to="#">Get help</Link>
              <Link to="#">Read FAQs</Link>
              <Link to="#">View all cities</Link>
              <Link to="#">Restaurants near me</Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center mt-[70px] sm:mt-[100px]">
          <div className="order-2 sm:order-1">
            <p className="text-xs sm:text-sm text-[#8b8282]">
              Copyright © 2023-2024 OnLinkne food
            </p>
          </div>
          <ul className="flex gap-4 sm:order-2 sm:gap-8 md:gap-12 Linkst-none text-gray-200">
            <Link to="#">Privacy PoLinkcy</Link>
            <Link to="#">Terms of use</Link>
            <Link to="#">Price</Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
