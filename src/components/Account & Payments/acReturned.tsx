import React from "react";

const rcOrders = () => {
  const startingBillNo = 2389872;
  const orders = Array.from({ length: 50 }, (_, index) => ({
    sn: index + 1,
    billNo: (startingBillNo + index).toString(),
    location: "Banepa-6, Kavre",
    amount: 830,
    deliveryCharge: 100,
    commission: 83,
    status: (index + 1) % 3 === 0 ? "Off" : "On",
  })).filter(order => order.status === "Off");

  return (
    <div className="">
      <div className="ml-[-25px]">
        
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
            <div className={`flex text-center items-center gap-[3px] ${order.sn % 2 === 0 ? "bg-[#fff]" : ""}`}>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">{order.sn}</div>
              <div className="w-[180px] h-[45px] ml-[-5px] pt-[8px] text-[18px] font-bold text-[#666666]">{order.billNo}</div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">{order.location}</div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">Rs. {order.amount}</div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">Rs. {order.deliveryCharge}</div>
              <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">Rs. {order.commission}</div>
              <div className="h-[35px] w-[110px] cursor-pointer rounded-[5px] text-[#fff] bg-[#552177]">
                <a href="" target="_blank" rel="noopener noreferrer" className="block w-full h-full text-center pt-[5px]">View</a>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default rcOrders;