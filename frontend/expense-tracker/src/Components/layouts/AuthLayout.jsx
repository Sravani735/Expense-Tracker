import React from "react";
import { LuTrendingUpDown } from "react-icons/lu";
import CARD_2 from "../../assets/images/card2.png";

// StatsInfoCard Component
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-pink-400/10 border border-gray-200/50 z-10">
      <div
        className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1">{label}</h6>
        <span className="text-[20px]">₹{value}</span>
      </div>
    </div>
  );
};

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen bg-white">
      {/* Left Side - Form */}
      <div className="w-full md:w-[60vw] flex flex-col px-12 pt-8 pb-12">
        <h2 className="text-2xl font-bold text-black mb-8 mt-4">Expense Tracker</h2>
        <div className="flex flex-col justify-center flex-1">{children}</div>
      </div>

      {/* Right Side - Image and Stats */}
      <div className="hidden md:block w-[40vw] h-screen bg-pink-100 relative overflow-hidden">
        {/* Background Circles */}
        <div className="w-48 h-48 rounded-[40px] bg-pink-400 absolute -top-7 -left-5"></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-pink-600 absolute top-[30%] -right-10"></div>
        <div className="w-48 h-48 rounded-[40px] bg-pink-300 absolute -bottom-7 -left-5"></div>

        {/* Stats Card */}
        <div className="grid grid-cols-1 z-20 absolute top-10 left-10 w-64">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income and Expenses"
            value="5,00,000"
            color="bg-pink-500"
          />
        </div>
      {/* Image */}
 <img
  src={CARD_2}
  className="w-64 lg:w-[90%] absolute bottom-10 left-8 shadow-lg shadow-pink-400/15"
  alt="Decorative card"
/> 
        

      </div>
    </div>
  );
};

export default AuthLayout;
