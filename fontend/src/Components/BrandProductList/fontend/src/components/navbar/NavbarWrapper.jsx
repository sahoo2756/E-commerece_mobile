import "./basic.css";
import { Outlet } from "react-router-dom";
import { Navbar_LevelOne } from "./navbar.Levels/Navbar.LevelOne.jsx";
import { Navbar_LevelTwo } from "./navbar.Levels/Navbar.LevelTwo.jsx";

const NavbarWrapper = () => {
  return (
    <>
      <Navbar_LevelOne />
      <Navbar_LevelTwo />

      <Outlet />
    </>
  );
};

export default NavbarWrapper;
