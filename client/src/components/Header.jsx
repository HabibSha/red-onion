import React from "react";

import { Link } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { AiOutlineShoppingCart } from "react-icons/ai";

import logo2 from "../assets/images/logo2.png";
import { useSelector } from "react-redux";
import app from "../firebase.config";
import useAuth from "../custom-hooks/useAuth";
import { toast } from "react-toastify";

const auth = getAuth(app);
const Header = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { currentUser } = useAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        localStorage.removeItem("isFormSubmitted");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="w-full font-poppins bg-white flex justify-between items-center px-3 py-6 sm:px-5">
      <Link to="/">
        <div>
          <img
            src={logo2}
            alt="logo"
            className="sm:w-[128px] sm:h-[38px] w-[85px] h-[28px]"
          />
        </div>
      </Link>

      <ul className="list-none flex justify-center items-center sm:gap-12  gap-3">
        <li>
          <Link to="/cart" className="relative">
            <AiOutlineShoppingCart className="sm:w-[28px] sm:h-[28px] w-[24px] h-[24px] cursor-pointer" />
            <span className="bg-[#f71747] absolute text-xs text-white px-[6px] py-[2px] rounded-full -top-2 -right-2">
              {cartTotalQuantity}
            </span>
          </Link>
        </li>
        <li>
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="sm:text-[16px] text-[14px] font-medium"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="sm:text-[16px] text-[14px] font-medium">
                Login
              </button>
            </Link>
          )}
        </li>
        <li>
          <Link to="/signup">
            <button className="sm:button sm:text-[16px] text-[14px] text-white font-normal px-3 py-2 bg-[#f71747] rounded-3xl">
              Sign up
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
