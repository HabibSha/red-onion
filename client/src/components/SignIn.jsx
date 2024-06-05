import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";

import app from "../firebase.config";
import logo2 from "../assets/images/logo2.png";

const auth = getAuth(app);
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      toast.success("successfully logged in");
      setIsLoading(false);
      navigate("/checkout");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <section className="w-full bg-hero bg-center bg-no-repeat">
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
              <form onSubmit={handleSignIn}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 placeholder:text-[14px] mt-10 rounded-sm"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full px-3 py-2 placeholder:text-[14px] mt-10 rounded-sm"
                />
                <div className="flex items-center gap-1">
                  <input type="checkbox" className="mt-3 cursor-pointer" />
                  <p className="text-[12px] mt-3 text-gray-400">
                    Do you agree in our Terms & Conditions?
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f71747] hover:bg-[#df1742] mt-8 py-2 text-white font-medium rounded-sm"
                >
                  Login
                </button>
              </form>
              <p className="text-[14px] mt-2 text-gray-500">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Signup
                </Link>
              </p>
            </div>
          )}
        </div>
      </article>
    </section>
  );
};

export default SignIn;
