import React from "react";
import StoreHome from "./storeHome";
import { useState, useEffect } from "react";

type OrderItem = {
  id: number;
  billno: number;
  userid: number;
  username: string;
  useraddress: string;
  usercontact: string;
  cartid: number;
  product_name: string;
  product_price: string;
  sellerid: number;
  product_image?:string;
};

const Order: React.FC = () => {

  const [orders, setOrders] = useState<OrderItem[]>([]);
  const sellerid = localStorage.getItem('sellerid');

  const fetchOrders = async(): Promise<void> =>{
    try{
      const response = await fetch(
        `http://127.0.0.1:8000/orders/orders/?sellerid=${sellerid}`
      );
      const data = await response.json();
      setOrders(data);
    }
    catch (error) {
      console.error("Failed to fetch order items:", error);
    }
  }
  useEffect(() => {
    fetchOrders();
  },[]);
// 
//   const order: OrderItem[] = Array.from({ length: 20 }, (_, index) => ({
//     sn: index + 1,
//     location: "Banepa-6, Kavre",
//     amount: 830,
//   }));
// 
  // const totalAmount: number = orders.reduce((acc, order) => acc + order.product_price, 0);

  return (
    <div>
      <StoreHome />
      <div className="ml-[265px]">
        <p className="font-bold text-[20px]">Orders</p>

        {/* Sticky Sub-header */}
        <div className="sticky top-12 z-10 bg-[#F6F6FE]">
          {/* blur section */}
          <div className="w-full mb-[10px] h-[1px] bg-[#A1A1A1]">
            <div className="h-[1px] bg-[#D6D6D6] blur-sm w-full"></div>
          </div>
          <ul className="bgcolor flex flex-wrap text-center">
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">S.N</li>
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">Location</li>
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">Product</li>
            <li className="w-[180px] h-[45px] text-[18px] mt-[10px] font-bold text-[#404040]">Amount</li>
          </ul>

          <div className="w-full h-[1px] bg-[#A1A1A1]">
            <div className="h-[1px] bg-[#D6D6D6] blur-sm w-full"></div>
          </div>
        </div>

        {/* Orders List */}
        {orders.map((order) => (
          <div
            key={order.id}
            className={`flex text-center items-center gap-[3px] ${
              order.id % 2 === 0 ? "bg-[#fff]" : ""
            }`}
          >
            <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
              {order.id}
            </div>
            <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
              {order.useraddress}
            </div>
            <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
              Juggers
            </div>
            <div className="w-[180px] h-[45px] pt-[8px] text-[18px] font-bold text-[#666666]">
              Rs. {order.product_price}
            </div>
            <div className="w-[180px] h-[125px] pt-[8px] text-[18px] font-bold text-[#666666]">
              <img
                src={order.product_image}
                className="h-[110px] w-[130px] rounded-[10px]"
                alt="Product"
              />
            </div>
            <div className="ml-[30px] h-[35px] w-[110px] cursor-pointer rounded-[5px] text-[#fff] bg-[#552177]">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full text-center pt-[5px]"
              >
                View
              </a>
            </div>
          </div>
        ))}

        {/* Sticky Total Row */}
        <div className="sticky bottom-0 z-10 bg-[#F6F6FE]">
          <div className="w-full h-[2px] bg-[#404040]">
            <div className="h-[1px] bg-[#D6D6D6] blur-sm w-full"></div>
          </div>
          <div className="flex text-center items-center gap-[0px] font-bold">
            <div className="w-[180px] h-[45px] text-[18px]">Total</div>
            <div className="w-[180px] h-[45px] text-[18px]"></div>
            <div className="w-[180px] h-[45px] text-[18px]"></div>
            <div className="w-[180px] h-[45px] text-[18px]">Rs. aalu</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
