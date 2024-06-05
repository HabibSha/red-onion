import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ErrorMessage from "./components/ErrorMessage";
import SingleFoodItem from "./components/SingleFoodItem";
import Feature from "./components/Feature";
import Checkout from "./components/Checkout";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./Routers/ProtectedRoute";
import CompleteOrder from "./components/CompleteOrder";
import CancelOrder from "./components/CancelOrder";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <BrowserRouter>
          <div className="max-w-[1280px] mx-auto">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:foodId" element={<SingleFoodItem />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/feature" element={<Feature />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route path="/success-order" element={<CompleteOrder />} />
            <Route path="/cancel-order" element={<CancelOrder />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="*" element={<ErrorMessage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
