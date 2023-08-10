import { useContext } from "react";
import { BiUserCheck } from "react-icons/bi";
import { BiAddToQueue } from "react-icons/bi";
import hello from '../../images/hello.svg';
import { TransactionContext } from "../context/TransactionContext";
import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";


// eslint-disable-next-line react/prop-types
const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <>
          <div className="-mt-10 -ml-10 w-full text-white ">
          <BiUserCheck className=" flex flex-col justify-center w-full items-center md:ml-20 sm:mt-10 white-glassmorphism" fontSize={150} color="teal"/>
          </div>
          <h3 className="text-white text-4xl text-center my-2 mt-10">
            Latest Transactions
          </h3>
           <div className="flex flex-wrap justify-center items-center mt-10">
           {[...dummyData, ...transactions].reverse().map((transaction, i) => (
             <TransactionsCard key={i} {...transaction} /> 
           ))}
         </div>
         </>
        ) : (
          
          <>
       
          <h3 className="text-white text-4xl text-center my-2 ">
          <BiAddToQueue className="text-white w-full  " fontSize={100} color="teal"/>
           Connect your account to see the latest transactions
            </h3>
            <img className="mt-10 text-white w-full" src={hello} alt="Hello" /></>
        )}

      </div>
     
    </div>
  );
};

export default Transactions