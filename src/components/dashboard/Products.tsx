import React from "react";
import Navbar from "../Navbar";

const Products: React.FC = () => {
  const results = [
    {
      name: "Camera",
      Location: "Durbarmarg",
      category:""
    },
    {
      name: "Juggers",
      Location: "Durbarmarg",
      category:"Chlothes"
    },
    {
      name: "Dell Laptop",
      Location: "Durbarmarg",
      category:"Electronics"
    },
    {
      name: "SmartBoard",
      Location: "Banepa buspark, Banepa",
      category:"Electronics"
    }
  ];

  return (
    <div className="bg-[#F0F0FF]">
      <Navbar/>
      <div className="mt-[90px]">
        <div className="flex items-center justify-between px-[80px]">
          <p className="text-[28px] font-semibold text-[#473F40]">
            Your Search Results
          </p>
          <div className="relative flex items-center">
            <img
              src=''
              className="absolute left-[10px] h-[13px] w-[13px]"
              alt="Search Icon"
            />
            <input
              type="text"
              className="searchBox h-[35px] w-[220px] bg-[#F5F3F2] pl-[30px] pr-[10px] rounded-[5px] border-none"
              placeholder="Search for restaurants, food"
            />
            <button className="searchButton ml-[10px] h-[35px] w-[120px] bg-[#FC6E4F] text-[#fff] text-[15px] border-none rounded-[5px] cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="divider h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#FFFFFF] shadow-lg" />

        {/* Search Results */}
        <div className="pt-[70px] flex flex-wrap gap-x-[25px] gap-y-[50px] ">
          {results.map((result, index) => (
            <div key={index} className="items-center justify-around cursor-pointer" >
              <div className="h-[230px] w-[250px] bg-[#000000] rounded-[30px] relative overflow-hidden">
                <img
                  src=''
                  className="h-full w-full object-cover"
                  alt={result.name}
                />
              </div>
              <div className="ml-[10px]">
                <p className="font-bold text-[18px] pt-[15px]">
                  {result.name} - {result.category}
                </p>
                <div className="pt-[10px] w-full flex gap-[10px]">
                  <img
                    src=''
                    className="h-[18px] w-[18px]"
                    alt="Location Icon"
                  />
                  <p className=" font-bold text-[14px]">
                    {result.Location}
                  </p>
                </div>
                <button className="text-center cursor-pointer w-[90px] h-[25px] rounded-[5px] mt-[-3px]">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
