
import logo from "../../images/logo.png";
import { BiUpArrowAlt, BiWalletAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";


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

    

);

export default Footer;