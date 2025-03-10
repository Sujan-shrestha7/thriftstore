import React, { useState } from "react";
import Navbar from "../Navbar";
import Categories from "./categories";

const Foods: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("accountOrders");

  return (
    <div>
      <Navbar />
      <div className="ml-[275px] mt-[15px] items-center justify-center">
        <p className="text-[#404040] font-bold text-[22px]">
          Foods and Services
        </p>
        <div className="mt-[10px] w-full">
          {/* Tabs Navigation */}
          <nav className="sticky top-[-4px] ml-[-15px] flex gap-[10px] h-[60px] p-[5px] bg-transparent">
            <button
              className={`w-[180px] h-[45px] text-[18px] hover:text-[#F4F4F4] font-bold text-[#404040] rounded-[5px] hover:bg-[#552177] cursor-pointer ${
                activeTab === "accountOrders"
                  ? "text-white bg-[#552177]"
                  : "text-gray-600 hover:text-[#F4F4F4]"
              }`}
              onClick={() => setActiveTab("accountOrders")}
              aria-controls="tab-accountOrders"
              role="tab"
            >
              Categories
            </button>
            <button
              className={`w-[180px] h-[45px] text-[18px] hover:text-[#F4F4F4] font-bold text-[#404040] rounded-[5px] hover:bg-[#552177] cursor-pointer ${
                activeTab === "Payments"
                  ? "text-white bg-[#552177]"
                  : "text-gray-600 hover:text-[#F4F4F4]"
              }`}
              onClick={() => setActiveTab("Payments")}
              aria-controls="tab-Payments"
              role="tab"
            >
              Items
            </button>

          </nav>
          {/* Divider below sub-header */}
            <div className="absolute mt-[15px] h-[2px] bg-[#404040] w-[80%]"/>

          {/* Tabs Content */}
          <div className="p-4">
            <div
              id="tab-accountOrders"
              role="tabpanel"
              className={`${
                activeTab === "accountOrders" ? "block" : "hidden"
              } text-gray-700`}
            >
              <Categories />
            </div>

            <div
              id="tab-Payments"
              role="tabpanel"
              className={`${
                activeTab === "Payments" ? "block" : "hidden"
              } text-gray-700`}
            ></div>
            <div
              id="tab-disabled"
              role="tabpanel"
              className="hidden text-gray-400"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
