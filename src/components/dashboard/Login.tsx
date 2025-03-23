import React from "react";
import Navbar from "../Navbar";
import Footer from "../../footer";
import aboutbg from '../images/about.jpg'

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
        
        <div className="h-[400px] flex flex-col md:flex-row">
          <div className="text-[18px] pt-[100px] text-[#282727] p-[20px] text-center font-bold">
            <p>
              Thrift-Store is a Nepal-based platform designed by a BCA student,
              offering users the ability to purchase second-hand clothes. This
              project reflects a sustainable fashion approach, promoting the
              reuse and recycling of garments. It caters to budget-conscious
              consumers or those interested in reducing their environmental
              impact by purchasing preloved clothing.
            </p>
          </div>
          <img
            src={aboutbg}
            className="h-[400px] object-cover"
            alt="About Background"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
