import React from "react";
import logo from "./components/images/thrr.png";

const Footer = () => {
  return (
    <div className="w-[100%] h-[250px] text-[#fff] p-[20px] px-[50px] bg-[#000000]">
      <div className=" flex justify-between">
        <div className="flex gap-[10px] ">
          <img src={logo} className="h-[50px] w-[50px] rounded-[50%] " alt="" />
          <p className="text-[28px] text-[#fff] font-bold">Thrift Store</p>
        </div>
        <div className="gap-[10px] ">
          <p className="text-[18px] text-[#fff]">Thrift Store</p>
        </div>
      </div>
      <div className="w-[98%] mx-[1%] h-[1px] mt-[8%] bg-[#fff]" />
      <div className="ml-[45%] mt-[2%]">
        <p>&copy; All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
