/* eslint-disable no-unused-vars */
import * as React from "react";
import Home from "./Components/Landing_Page/Home";
// import MiddlePortion from "./Components/Landing_Page/MiddlePortion/Left/Left_MobileFilter";
import SingleCard from './Components/Landing_Page/MiddlePortion/Right/SingleCard';
// import MultipleBrands_ProductCrasoul from "./Components/Landing_Page/MiddlePortion/Right/SingleCard";
import Footer from "./Components/Footer/Footer";
// import SpecificBrandMobilesList from "./Components/BrandProductList/SingleBrandProduct_list";
import SingleProduct from "./Components/SingleProductView/SingleProduct";
// import Cart from "./Components/Cart.List/Cart";
import Order_Product_Status from "./Components/Cart.List/Order_Product_Status";
import SignUp_PopUP from "./Components/Auth/Signup_PopUp.auth";
import Login_PopUP from "./Components/Auth/Login.auth";

import LandingPage from "./Components/Admin/Landing_Page";



export default function App() {
  return (
    <>
      {/* <div className="relative w-full"> */}
        {/* <Home /> */}

        {/* <div className="relative w-full flex  mt-10"> */}
          {/* <MiddlePortion className="w-[20%]" /> */}
          {/* <MultipleBrands_ProductCrasoul className="w-[80%]" /> */}
          {/* <SpecificBrandMobilesList /> */}
        {/* </div> */}

        {/* <SingleProduct /> */}
      {/* </div> */}

        {/* <Order_Product_Status className="my-20" /> */}
        {/* <SignUp_PopUP /> */}
        {/* <Login_PopUP /> */}

      <LandingPage />

      {/*  <Footer /> */}
    </>
  );
}
