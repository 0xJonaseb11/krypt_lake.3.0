// eslint-disable-next-line no-unused-vars
import React from "react"
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start w-full white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services md:-mt-10 p-3 shadow-2xl ">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 ">
      <div className="flex-1 flex flex-col justify-start items-start md:ml-28 p-3 ">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient -mt-10 m-1">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base m-2">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center md:ml-20 sm:mt-10 hover:shadow-xl">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="We offer you with best exchange rates that make your work and business profitable in a short period of time ."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white " />}
          subtitle="We offer you with fastest transactions that favor your business profitability."
        />
      </div>
    </div>
  </div>
);

export default Services;
