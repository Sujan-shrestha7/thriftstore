import React from "react";
import Sidebar from "../Navbar";
import rcOrders from "./acReturned";

const Orders = () => {
  const startingBillNo = 2389872;
  const orders = Array.from({ length: 50 }, (_, index) => ({
    sn: index + 1,
    billNo: (startingBillNo + index).toString(),
    location: "Banepa-6, Kavre",
    amount: 830,
    deliveryCharge: 100,
    commission: 83,
  }));

  // Calculate totals
  const totalAmount = orders.reduce((acc, order) => acc + order.amount, 0);
  const totalDeliveryCharge = orders.reduce(
    (acc, order) => acc + order.deliveryCharge,
    0
  );
  const totalCommission = orders.reduce(
    (acc, order) => acc + order.commission,
    0
  );

  return (
    <div className="">
      <div className="ml-[-25px]">
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
              Bill No.
            </li>
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">
              Location
            </li>
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">
              Amount
            </li>
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">
              Delivery Charge
            </li>
            <li className="w-[180px] h-[45px] text-[18px] font-bold text-[#404040]">
              Commission (10% of Amount)
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
              <div className="w-[180px] h-[45px] ml-[-5px] pt-[8px] text-[18px] font-bold text-[#666666]">
                {order.billNo}
              </div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
                {order.location}
              </div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
                Rs. {order.amount}
              </div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
                Rs. {order.deliveryCharge}
              </div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
                Rs. {order.commission}
              </div>
              <div className="h-[35px] w-[110px] cursor-pointer rounded-[5px] text-[#fff] bg-[#552177]">
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
            <div className="w-[180px] h-[45px] text-[18px]">
              Rs. {totalDeliveryCharge}
            </div>
            <div className="w-[180px] h-[45px] text-[18px]">
              Rs. {totalCommission}
            </div>
            <div className="h-[15px] w-[110px] cursor-pointer rounded-[5px] mb-[45px] text-[#404040]">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className=" block w-full h-full text-center pt-[5px]"
              >
                Proceed To Pay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
