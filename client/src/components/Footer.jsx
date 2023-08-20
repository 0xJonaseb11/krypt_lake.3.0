
import logo from "../../images/logo.png";
import { BiUpArrowAlt } from "react-icons/bi";

const Footer = () => (
<div className="w-full flex md:justify-center justify-between items-center flex-col p-4  shadow-xl gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4 ">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full py-5  hover:shadow-xl">
          <p className="text-white text-base text-center mx-2 cursor-pointer ">Market</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer ">Exchange</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer ">Demos</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer ">Wallets</p>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-5 rounded-xl white-glassmorphism p-4 bg-[#3d4f7c] hover:text-3xl hover:p-2">
        <p className="text-[white] text-center font-semibold  md:text-2xl sm:text-base  ">Come join us and hear for the unexpected miracles</p>
        <p className="text-white text-sm text-center font-medium mt-2">info@krypt.com</p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.5px] bg-gray-800 mt-10 shadow-xl" />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@krypt.com@2023</p>
        <p className="text-white text-right text-xs ">All rights reserved</p>
      </div>
      <BiUpArrowAlt className="text-[teal] justify-bottom cursor-pointer blue-glassmorphism  border-0 hover:shadow-2xl" fontSize={50} />
    </div>
);

export default Footer;
