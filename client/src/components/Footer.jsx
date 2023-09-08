
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

      <div className="flex justify-center items-center text-center flex-col mt-5 rounded-xl white-glassmorphism p-4 bg-[#9999] w-full" id="coffee">
        <p className="text-white text-center font-semibold  md:text-2xl sm:text-base"><strong className="flex flex-col justify-center items-center text-center text-2xl pt-2 sm:text-4xl" id="come">Come Join Us For Technically Improved Transactions </strong> <br />   <main className="text-base font-semibold ">We Also Take Coffee Please!!! But Real <b>ETH</b> <i>NOT FAUCETS!</i></main> <BiRightArrowAlt className="flex flex-col text-center text-[lightgreen] mb-4 mt-2 " fontSize={50}/> </p>
        <p className="text-white text-center font-semibold  md:text-2xl sm:text-base"><BiWalletAlt className="flex flex-col justify-center text-white text-center items-center w-full border-0 -mt-16 " fontSize={50} /> <strong className="flex flex-col justify-center items-center text-center text-base" id="come">My Wallet : </strong> </p>
        <p className="flex flex-col justify-center items-center text-base text-white text-center md:text-base sm:text-base white-glassmorphism p-4 rounded-full ">0 x 7 e 5 f d 2 B 0 9 E 9 9 7 C b 1 D F 6 9 3 7 0 6 8 2 6 2 2 2 A 5 b 3 e 9 4 6 f 1</p>
        <p className="text-white text-sm text-center font-medium mt-2 cursor-pointer"><a href="https://accounts.google.com" target="_blank" rel="noreferrer">info@krypt.com</a></p>
      </div>

      <div className="sm:w-[90%] w-full h-[0.5px] bg-gray-800 mt-10 shadow-xl" />

      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-[#9999] text-left text-xs" id="at">&#187;Krypt&#169;2023</p>
        <p className="text-[#9999] text-center text-xs" id="rights">All rights reserved</p>
        <p className="flex flex-col text-[#9999] text-left text-xs" id="email">&#187;@sebejaz99</p>
      </div>
      <BiUpArrowAlt className="text-[teal] justify-bottom cursor-pointer .border-0 white-glassmorphism rounded-full " fontSize={40} />
    </div>
);

export default Footer;