import React from "react";
import Navbar from "../Navbar";
import Footer from "../../footer";

const Login= () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-[#D9D9D9] w-full h-[500px]">
            <div className="p-[5%]  w-[50%]">
                <p className=" text-[52px] text-[#8E6969] font-bold">Find Your Next Favorite For Less !</p>
            </div>
        </div>
        <div>
            <div className="flex gap-[20px] justify-center items-center h-[400px] bg-[#737373]">
                <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]">
                </div>
                <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]">
                </div>
                <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]">
                </div>
                <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]">
                </div>
                <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]">
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
