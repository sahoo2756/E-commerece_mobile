import React from "react";
import { NavLink } from "react-router-dom";
import { useCurrentUserDetails } from "../../../context/currentUserDetails.context";
import { Logout } from "../../../Utility/Logout.utility";

const Navbar_LevelOne = () => {
   const parentStyle = {
    backgroundColor: "red",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    color : "white"
  };

  const innerStyle = {
    position : "relative",
    width: "85%",
    height: "50px",
    backgroundColor: "black",
    clipPath: "polygon(3% 0%, 94% 0%, 90% 100%, 7% 100%)",
    // transform: "rotate(180deg)", // Adjust the rotation as needed
  };    

  

  const btn = "hover:text-red-500 transition-colors ease-in-out duration-300"
  const { isUserLoggedIn } = useCurrentUserDetails();

  
  return (
    <div style={parentStyle}>
      <div style={innerStyle} className="pl-28 pr-32 flex justify-between items-center">
       
        <div className="flex items-center  gap-x-5">
            <p>✉️ info@codebazzar.com</p>
            <p>📞 6370982093</p>
        </div>
        <div className="flex items-center  gap-x-5">
            <NavLink to={isUserLoggedIn ? "/" : "/login"} onClick={isUserLoggedIn && Logout} className={`${btn}`}>{isUserLoggedIn ? "Logout" : "Login"}</NavLink>
            <NavLink to="/signup" className={`${btn}`}>Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export { Navbar_LevelOne };
