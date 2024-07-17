import React, { useState } from "react";
import "./basic.css";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MakeInputField from "../../Page_utils/MakeInputField.jsx";
import { OtpEnterPage } from "./OtpEnterPageFolder/OtpEnterPage.jsx";
import { toastError, toastInfo } from "../../Page_utils/ToastPopUp.js";
import { Spinner } from "../../Page_utils/Spinner.jsx";



export default function SignupPage() {

  const [formData , setFormData] = useState({
    email : "",
    password : "",
    username : ""
 })
  const updateStateValue = (e) => {
    setFormData({
      ...formData , 
      [e.target.name] : e.target.value
    })
  }


  const [showOtpEnterPage, setShowOtpEnterPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (showOtpEnterPage) {
    return <OtpEnterPage prop={{ formData }} />;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoading((prev) => !prev);
          handleSubmit(formData ,  setShowOtpEnterPage  , setIsLoading);
        }}
        className="w-[40%] m-auto grid bg-white text-black p-10 my-8 gap-y-5 rounded-lg"
      >
        <p className="text-center font-semibold text-lg">
          Register New Account
        </p>

        <MakeInputField
          inputType="text"
          id={"username"}
          requiredOP={true}
          placeholder="User Name"
          name="username"
          stateVariable={formData.fullname}
          // stateVariableFunction={setFullname}
          onChangeHandler = {updateStateValue}
          labelText="Full Name"
        />

        <MakeInputField
          inputType="email"
          id={"emailFeild"}
          requiredOP={true}
          placeholder="Email"
          name="email"
          stateVariable={formData.email}
          // stateVariableFunction={setEmail}
          onChangeHandler = {updateStateValue}
          labelText="Email"
        />

        <MakeInputField
          inputType="password"
          id={"passwordFeild"}
          requiredOP={true}
          placeholder="Password"
          name="password"
          stateVariable={formData.password}
          // stateVariableFunction={setPassword}
          onChangeHandler = {updateStateValue}
          labelText="Password"
        />

        {/* {isLoading ? (
          <Spinner />
        ) : (
        )} */}
          <button
            type="submit"
            className={`bg-blue-600  w-fit m-auto text-white px-10 rounded-lg hover:bg-blue-700 cursor-pointer  py-2`}
          >
            Sign Up
          </button>

        <p className="text-center">
          Allready Have An Account{" "}
          <NavLink
            to="/login"
            className="cursor-pointer text-green-500 font-semibold"
          >
            Login
          </NavLink>
        </p>
      </form>

      <ToastContainer />
    </>
  );
}




import { validateSignup_UserData } from "./validateSignup_UserData.js";
import { isEmailExitInDB } from "../../serverTasks/isEmailExitInDB.js";
import { dispatchOtpThroughEmail } from "../../serverTasks/dispatchOtpThroughEmail.js";

async function handleSubmit(formData, setShowOtpEnterPage , setIsLoading) {

  const {email , password , username} = formData

  // validate userdata
  let res  = validateSignup_UserData(formData);
  if(res.OK === false) {
    toastInfo({message : res.msg})
  }

  // check email allready exit or not
  res = await isEmailExitInDB(email)
  if(res.OK === true) {
    toastError({message : "Email Allready Exit"})
  }

  // send otp via email
  res = await dispatchOtpThroughEmail(email);
  if(res.OK === true) {
    setShowOtpEnterPage(prev => !prev)
  } else {
    toastError({message : res.msg || "Unexpected Error Occure ! Please tryy Again"})
  } 
}

