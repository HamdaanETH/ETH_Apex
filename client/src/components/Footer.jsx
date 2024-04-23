import React from "react";

import logo from "../../images/l.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex justify-center items-center flex-col md:flex-row">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />

        {/* Company Name and Subheading */}
        <div className="flex flex-col justify-center items-center md:items-start ml-3">
          <span className="text-white text-4xl font-bold" style={{ fontFamily: 'Cormorant, serif', fontStyle: "italic" }}>Ethereum Empower</span> {/* Company name */}
          <span className="text-white text-1xl font-light" style={{ fontFamily: 'Cormorant, serif', fontStyle: "italic"}}>Your Gateway to the Ethereum Ecosystem</span> {/* Subheading */}
        </div>
      </div>
      <div className="flex flex-1 font-roboto justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Javascript</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Solidity</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">React</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">HTML/CSS</p>
      </div>
    </div>


  </div>
);

export default Footer;