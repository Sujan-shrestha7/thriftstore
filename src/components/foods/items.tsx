import React from "react";

const Items: React.FC = () => {
  return (
    <div>
      <ul className="flex flex-wrap gap-[20px] text-center ">
        <li className="w-[150px] h-[45px] text-[18pbg-[]x] font-bold text-[#404040]">
          S.N
        </li>
        <li className="w-[150px] h-[45px] text-[18px] font-bold text-[#404040]">
          Name
        </li>
        <li className="w-[150px] h-[45px] text-[18px] font-bold text-[#404040]">
          Category
        </li>
        <li className="w-[150px] h-[45px] text-[18px] font-bold text-[#404040]">
          Half Price
        </li>
        <li className="w-[150px] h-[45px] text-[18px] font-bold text-[#404040]">
          Full Price
        </li>
      </ul>
      {/* Divider below sub-header */}
      <div className="absolute h-[1px] mt-[-5px] ml-[-12px] bg-[#404040] w-[80%]" />

      
            {/* Search Bar */}
            <div className="w-full flex pt-[5px] pr-[30px] justify-between">
              <div className="w-full max-w-[200px] md:max-w-[250px]">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border-2 border-gray-400 bg-[#ECE6F0] h-10 px-5 rounded-md w-[450px]"
                />
              </div>
              <div>
                <button className="bg-[#06542F] h-10 font-bold rounded-md text-[#fff] w-[150px]">
                  Add Categories
                </button>
              </div>
            </div>
    </div>
  );
};

export default Items;
