import React from "react";
import StoreHome from "./storeHome";
import image from '../images/books.jpg'

const Order = () => {
  const orders = Array.from({ length: 20 }, (_, index) => ({
    sn: index + 1,
    location: "Banepa-6, Kavre",
    amount: 830,
  }));

  // Calculate totals
  const totalAmount = orders.reduce((acc, order) => acc + order.amount, 0);

  return (
    <div className="">
      <StoreHome />
      <div className="ml-[265px]">
        <p className="font-bold text-[20px]">Orders</p>
        {/* Sticky Sub-header */}
        <div className="sticky top-12 z-10 bg-[#F6F6FE]">
          {/* blur section */}
          <div className="w-full mb-[10px] h-[1px] bg-[#A1A1A1]">
            <div className="h-[1px] bg-[#D6D6D6] blur-sm w-full"></div>
          </div>
          <ul className="bgcolor flex flex-wrap text-center gap-[px]">
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">
              S.N
            </li>
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">
              Location
            </li>
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">
              Product
            </li>
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">
              Amount
            </li>
          </ul>
          {/* Divider below sub-header */}
          <div className="w-full h-[1px] bg-[#A1A1A1]">
            <div className="h-[1px] bg-[#D6D6D6] blur-sm w-full"></div>
          </div>
        </div>

        {/* Orders List */}
        {orders.map((order) => (
          <React.Fragment key={order.sn}>
            <div
              className={`flex text-center items-center gap-[3px] ${
                order.sn % 2 === 0 ? "bg-[#fff]" : ""
              }`}
            >
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
                {order.sn}
              </div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
                {order.location}
              </div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
                Juggers
              </div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
                Rs. {order.amount}
              </div>
              <div className="w-[180px] h-[125px] pt-[8px] text-[18px] font-bold text-[#666666]">
                <img src={image} className="h-[110px] w-[130px] rounded-[10px]" alt="" />
              </div>
              <div className="ml-[30px] h-[35px] w-[110px] cursor-pointer rounded-[5px] text-[#fff] bg-[#552177]">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full text-center pt-[5px]"
                >
                  View
                </a>
              </div>
            </div>
          </React.Fragment>
        ))}

        {/* Sticky Total Row */}
        <div className="sticky bottom-0 z-10 bg-[#F6F6FE]">
          {/* blur section */}
          <div className="w-full h-[2px] bg-[#404040]">
            <div className="h-[1px] bg-[#D6D6D6] blur-sm w-full"></div>
          </div>
          <div className="flex text-center items-center gap-[0px] font-bold">
            <div className="w-[180px] h-[45px] text-[18px]">Total</div>
            <div className="w-[180px] h-[45px] text-[18px]"></div>
            <div className="w-[180px] h-[45px] text-[18px]"></div>
            <div className="w-[180px] h-[45px] text-[18px]">
              Rs. {totalAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
