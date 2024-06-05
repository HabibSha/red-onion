import React, { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";

import { Link, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, {
  addToCart,
  clearCart,
  decreaseCartItem,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";
import DeliveryForm from "./DeliveryForm";
import useAuth from "../custom-hooks/useAuth";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, cartTotalQuantity, cartTotalAmount } = cart;
  const fixedTotalValue = cartTotalAmount.toFixed(2);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (status) => {
    setIsFormSubmitted(status);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCartItem(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let tax = 0;
  let deliveryFee = 0;
  if (cartTotalQuantity > 0) {
    tax = 3.0;
    tax.toFixed(2);
    deliveryFee = 2.99;
    deliveryFee.toFixed(2);
  }
  if (cartTotalQuantity >= 4) {
    tax = 5.0;
    tax.toFixed(2);
  }
  if (cartTotalQuantity >= 8) {
    tax = 7.0;
    tax.toFixed(2);
  }

  const total = cartTotalAmount + tax + deliveryFee;

  // Payment integration
  const makePayment = async () => {
    if (!currentUser) {
      navigate("/login", { state: { from: "/cart" } });
      return;
    }

    const stripe = await loadStripe(
      "pk_test_51PNW6yB2krJwnDAUEEFwNPzBp1e2XDo0Hr9jtfw6XNGHnaMGwHPrlT8qDpdQ1zamb2oXx2jv6rCTAE0xOriwdfLa005P8iIC0J"
    );

    const body = {
      foodItems: {
        cartItems,
        tax,
        deliveryFee,
      },
    };
    const headers = {
      "Content-type": "application/json",
    };
    const response = await fetch(
      "http://localhost:8000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <section className="max-w-[1280px] mx-auto py-12 font-poppins md:px-6 px-4">
      <Link
        to={"/categories"}
        className="sm:w-[230px] w-[200px] flex items-center gap-2 sm:text-[16px] text-[14px] text-gray-500 hover:underline mb-8"
      >
        <BsArrowLeft />
        Continue Selecting Food
      </Link>
      <article className="sm:grid grid-cols-2 flex flex-col-reverse md:gap-10 sm:gap-16 gap-8">
        <div className="max-w-[470px]">
          <DeliveryForm onFormSubmit={handleFormSubmit} />
        </div>
        <div className="max-w-[470px] lg:min-w-[420px] md:min-w-[360px] sm:min-w-[300px] grid justify-self-end">
          <div className="leading-7">
            <p className="text-[15px]">
              From{" "}
              <span className="font-semibold">Gulshan Plaza Restaura GPR</span>
            </p>
            <p className="text-[15px]">Arriving in 20-30 min</p>
            <p className="text-[15px]">107 Rd No - 8</p>
            <div className="text-right mr-3">
              <button
                onClick={() => handleClearCart()}
                className="text-red-500 font-medium"
              >
                Clear cart
              </button>
            </div>
          </div>
          <div className="max-h-[300px] my-2 overflow-y-auto">
            {cartItems.map((cartItem) => {
              const { id, title, cartQuantity, category, img, price } =
                cartItem;
              const toFixedPriceValue = price * cartQuantity;
              const fixedPriceValue = toFixedPriceValue.toFixed(2);
              return (
                <div
                  key={id}
                  className="my-4 flex justify-between items-center bg-gray-100 rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-5">
                    <img src={img} alt={category} className="max-w-[100px]" />
                    <div className="max-w-[200px] leading-6">
                      <p className="text-xs">{title}</p>
                      <p className="text-[#f71747] font-semibold">
                        $ {fixedPriceValue}
                      </p>
                      <p className="text-[10px] text-gray-400">Delivery free</p>
                    </div>
                  </div>
                  <div className="flex gap-2 relative">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <p className="bg-white text-[15px] font-semibold px-2 py-1 rounded-md">
                      {cartQuantity}
                    </p>
                    <button
                      onClick={() => handleIncreaseCart(cartItem)}
                      className="text-active"
                    >
                      +
                    </button>
                    <AiOutlineClose
                      onClick={() => handleRemoveFromCart(cartItem)}
                      className="absolute -top-9 right-0 bg-red-600 rounded-sm text-white cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="flex justify-between">
              <p className="relative">
                Subtotal{" "}
                <span className="absolute text-3xl -top-[15px] ml-[2px]">
                  .
                </span>{" "}
                <span className="ml-3">{cartTotalQuantity} items</span>
              </p>
              <p>${fixedTotalValue}</p>
            </div>
            <div className="flex justify-between mt-3">
              <p>Tax</p>
              <p>${tax}</p>
            </div>
            <div className="flex justify-between mt-3">
              <p>Delivery fee</p>
              <p>${deliveryFee}</p>
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-[18px] font-semibold">Total</p>
              <p className="text-[18px] font-semibold">${total.toFixed(2)}</p>
            </div>
            <div>
              <button
                // onClick={() => navigate("/checkout")}
                disabled={!isFormSubmitted}
                onClick={makePayment}
                className={`w-full py-2 mt-5 font-medium rounded-md ${
                  isFormSubmitted
                    ? "text-white bg-black"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
              >
                {/* {currentUser ? "Place Order" : "Login First"} */}
                Place Order
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Cart;
