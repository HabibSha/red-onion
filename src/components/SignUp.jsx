import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import app from "../firebase.config";
import logo2 from "../assets/images/logo2.png";
import { toast } from "react-toastify";

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = userInfo;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password, confirmPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("successfully created account");
        setUserInfo({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error("something went wrong!");
      });
  };

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <section className="w-full max-h-[700px] bg-hero bg-center bg-no-repeat">
      <article className="max-w-[1280px] font-poppins mx-auto flex justify-center items-center">
        <div className="w-[500px] py-[50px] mb-[90px] px-12">
          {isLoading ? (
            <div className="text-center">
              <h3 className="text-[26px] text-gray-600 font-semibold">
                Loading...
              </h3>
            </div>
          ) : (
            <div>
              <div className="flex justify-center">
                <img src={logo2} alt="Logo" className="max-w-[200px] mb-6" />
              </div>
              <form onSubmit={handleSignUp}>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  placeholder="Username"
                  required
                  className="w-full px-3 py-2 placeholder:text-[14px] mt-10 rounded-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 placeholder:text-[14px] mt-10 rounded-sm"
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="w-full px-3 py-2 placeholder:text-[14px] mt-10 rounded-sm"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                  className="w-full px-3 py-2 placeholder:text-[14px] mt-10 rounded-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-[#f71747] hover:bg-[#df1742] mt-8 py-2 text-white font-medium rounded-sm"
                >
                  Sign Up
                </button>
                <button
                  onClick={handleGoogleSignUp}
                  className="w-full bg-[#f71747] hover:bg-[#df1742] mt-8 py-2 text-white font-medium rounded-sm"
                >
                  Sign Up with Google
                </button>
              </form>
              <p className="text-[14px] mt-2 text-gray-500">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>
      </article>
    </section>
  );
};

export default SignUp;
