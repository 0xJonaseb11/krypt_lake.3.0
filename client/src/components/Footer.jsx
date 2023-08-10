
import logo from "../../images/logo.png";
import { BiUpArrowAlt } from "react-icons/bi";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer ">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer ">Exchange</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer ">Demos</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer ">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5 rounded-2xl white-glassmorphism p-4 ">
      <p className="text-white text-2xl text-center font-semibold md:text-base sm:text-base  " >Come join us and hear for the unexpected miracles</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@krypt.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.5px] bg-gray-700 mt-10 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@krypt.com@2023</p>
      <p className="text-white text-right text-xs ">All rights reserved</p>
    </div>
    < BiUpArrowAlt className="text-[teal] justify-end cursor-pointer" fontSize={100}/>
  </div>
);

export default Footer;
