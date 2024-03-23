import React, { useState } from "react";
import logo from "../../assets/collegeLogo.png";
import { Menu } from "lucide-react";
import "./Navbar.css";
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/*  Mobile view navigation menu */}
      <div className="responsive-menu flex justify-between   bg-slate-950">
      <div className="menu-button"><img src={logo} alt="" width={35}/></div>
        <button onClick={toggleMenu} className="menu-button font-bold">
          <Menu className=""/>
        </button>

        {isMenuOpen && (
          <div className="menu-items bg-slate-600 text-white">
            {/* Your menu items go here */}
            <span className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4 rounded text-center">
              <Link to="/">HOME</Link>
            </span>
            <span className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4 rounded text-center">
              <Link to="/about">ABOUT</Link>
            </span>
            <span className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4 rounded text-center">
              <Link to="/signin">SIGNIN</Link>
            </span>
            <span className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4 rounded text-center">
              <Link to="/signup">SIGNUP</Link>
            </span>
          </div>
        )}
      </div>
      {/* Destop view */}
      <div className="bg-slate-950 destop-view py-4 ">
        <ul className="flex justify-around text-white">
          <li>
            <img src={logo} alt="collegeLogo" width={40} />
          </li>
          <li>
            <button className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4 rounded">
              <Link to="/">HOME</Link>
            </button>
          </li>

          <li>
            <button className="bg-white-500 hover:bg-white-700  font-bold py-2 px-4     rounded">
              <Link to="/about">ABOUT</Link>
            </button>
          </li>
          <li>
            <button className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4     rounded">
              <Link to="/signin">SIGNIN</Link>
            </button>
          </li>
          <li>
            <button className="bg-white-500 hover:bg-white-700 font-bold py-2 px-4     rounded">
              <Link to="/signup">SIGNUP</Link>
            </button>
          </li>
        </ul>
      </div>
      {/* End of nav bar */}
    </>
  );
};

export default Navbar;
