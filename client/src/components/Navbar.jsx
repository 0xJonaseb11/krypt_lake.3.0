import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";

import logo from "../../images/logo.png";

// eslint-disable-next-line react/prop-types
const NavBarItem = ({ title, classProps }) => {
  return (
  <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
  );
};


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-8 ">
      <div className="md:flex-[0.7] flex-initial justify-center items-center mr-2"> 
        <img src={logo} alt="logo" className="w-56 cursor-pointer" />
      </div> 
       <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial p-2 mx-2 hover:shadow-xl">
         {["Market", "Exchange", "Demos", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#999] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#9999]">
          Login
        </li>
        <li className="text-[teal] w-full justify-end items-right ml-20 white-glassmorphism py-1 px-4 rounded-[5px] border-0 hover:border-[2px] hover:bg-[#1313] hover:shadow-xl cursor-pointer">
         < BiHomeHeart  fontSize={50}/>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
              <li className="text-white rounded-full bg-[#999] hover:bg-[#9999] cursor-pointer py-2 px-7 mx-4 mt-8 shadow-xl justify-end text-left items-left ">
              Login
            </li>
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {/* eslint-disable-next-line react/jsx-key*/}
            {["Market", "Exchange", "Demos", "Wallets"  ].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
           
          
          <li className="text-[teal] justify-end items-right white-glassmorphism py-1 px-4 mt-10 rounded-[5px] border-0 hover:border-[2px] hover:bg-[#1313]  hover:shadow-xl cursor-pointer">
         < BiHomeHeart  fontSize={50}/>
        </li>
            
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
