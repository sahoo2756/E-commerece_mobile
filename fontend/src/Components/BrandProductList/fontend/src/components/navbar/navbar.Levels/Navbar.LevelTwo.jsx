import { NavLink } from "react-router-dom";
import { useCurrentUserDetails } from "../../../context/currentUserDetails.context";
import { useEffect, useState } from "react";

function Navbar_LevelTwo() {
  const { userName, email } = useCurrentUserDetails();
  const [logoname, serLogoname] = useState("");
  const [logonameClicked, setLognameClicked] = useState(false)
  
  const onClose = () => setLognameClicked(prev => !prev) 


  useEffect(() => {
    serLogoname(userName?.trim()[0])
  }, [userName])

  return (
    <div className="relative text-white w-screen px-8 py-3 border-b-[0.1px] border-b-gray-500 flex justify-between">
      <div>
        <h2 className="font-bold text-2xl">[ CodeBazzar ]</h2>
      </div>
      <div className="flex gap-x-10 text-gray-300 items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/uploadProject">UploadProject</NavLink>
        {logoname && <button onClick={onClose} className=" px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-black ">{logoname}</button>}
      </div>
      {logonameClicked && <PopupBox prop={{email , logoname , userName , onClose}}  />}


    </div>
  );
}



const PopupBox = ({ prop}) => {
  const {email, logoname, userName, onClose } = prop
  return (
    <div className="fixed right-10 top-32 flex items-center justify-center z-50 font-sans text-xl">
      <div className="relative  w-fit max-w-md p-6 text-center shadow-2xl rounded-lg bg-gray-800 text-white">
        <button
          className="absolute font-bold top-3 right-3 text-gray-400 hover:text-white focus:outline-none"
          onClick={onClose}
        >
          X
        </button>
        <p className="mb-4 mt-10">{email}</p>
        <button className="w-fit px-6 py-2 mb-4 rounded-lg bg-gray-200 hover:bg-gray-300 text-black transition-all duration-200">
          {logoname}
        </button>
        <p>Hi, {userName}</p>
      </div>
    </div>
  );
};


export { Navbar_LevelTwo };
