import React from "react";
import logo from "./images/thrift (2).png";
import search from "./images/search.png";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-[60px] w-[100%] bg-[#fff] px-[100px]">
        <div className="ml-[-2%] flex gap-[10px] items-center justify-center">
          <img src={logo} className="h-[55px] w-[55px] " alt="" />
          <p className="text-[28px] font-bold">Thrift Store</p>
        </div>

        {/* Search Bar */}
        <div className=" relative ml-[100px] w-[380px]">
          <input
            type="text"
            placeholder="Search here..."
            className="border-2 border-gray-400 bg-[#ECE6F0] h-10 px-4 pr-10 rounded-md w-full"
          />
          <button type="submit" className="absolute right-2 top-2">
            <img src={search} className="h-4 w-4" alt="Search Icon" />
          </button>
        </div>

        <div className="">
          <button className="w-[120px] bg-[#400000] h-[40px] rounded-[5px] font-bold text-[#fff] ">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
