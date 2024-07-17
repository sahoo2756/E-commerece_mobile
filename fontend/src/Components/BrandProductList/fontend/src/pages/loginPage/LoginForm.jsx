import { useState } from "react";
import "./basic.css";
import { NavLink, useLocation } from "react-router-dom";
import MakeInputField from "../../Page_utils/MakeInputField.jsx";


function LoginForm() {
  const location = useLocation()
  // console.log('location : ' , location)
  const [email, setEmail] = useState("");
  const [psassword, setPassword] = useState("");



  function handleSubmit() { }

  return (
    <>
      {/* <NavbarWrapper currentStatus="login" /> */}
      <form
        onSubmit={handleSubmit}
        className="formLoginPageCustomCss w-[40%] p-10  my-8 gap-y-7 bg-white text-black rounded-lg"
      >
        <p className="text-center font-semibold text-lg">Login</p>

        <MakeInputField
          inputType="text"
          id={"emailFeild"}
          requiredOP={true}
          placeholder="Email"
          stateVariable={email}
          stateVariableFunction={setEmail}
          labelText="Email"
        />

        <MakeInputField
          inputType="password"
          id={"passwordField"}
          requiredOP={true}
          placeholder="Password"
          stateVariable={psassword}
          stateVariableFunction={setPassword}
          labelText="Password"
        />


        <p className="text-right"><NavLink to={`${location.pathname}/forgotpassword`} className="text-sm text-red-700 w-fit">forgot password</NavLink></p>

        <button className="LoginPageLoginBtnCustomCss py-2 text-white">Login</button>

        <p className="text-center">
          Create A New Account{" "}
          <NavLink to="/signup" className="cursor-pointer text-blue-600">
            Sign-up
          </NavLink>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
