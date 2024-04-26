import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/l.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

return (
<nav className="w-full p-4">
  <div className="flex justify-center items-center flex-col md:flex-row">
    {/* Logo */}
    <img src={logo} alt="logo" className="w-48 cursor-pointer" />

    {/* Company Name and Subheading */}
    <div className="flex flex-col justify-center items-center md:items-start ml-4">
      <span className="text-white text-5xl font-bold" style={{ fontFamily: 'Cormorant, serif', fontStyle: "italic" }}>Ethereum Apex</span> {/* Company name */}
      <span className="text-white text-2xl font-light" style={{ fontFamily: 'Cormorant, serif', fontStyle: "italic"}}>Your Gateway to the Ethereum Ecosystem</span> {/* Subheading */}
    </div>
  </div>



</nav>
  );
};

export default Navbar;