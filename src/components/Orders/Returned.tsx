import React, { useState } from "react";
import man from "../images/man.png";
const OrderReturned = () => {
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);
  // Toggle the visibility of the update container
  const handleUpdateClick = () => {
    setIsUpdateVisible((prevState) => !prevState);
  };

  const food = [
    { name: "chicken Pizza", Price: 790 },
    { name: "cheese Pizza", Price: 790 },
    { name: "veg Pizza", Price: 790 },
    { name: "thakali Pizza", Price: 790 },
  ];

  const menus = [
    { name: "Momo", Price: 370 },
    { name: "Chowmein", Price: 170 },
    { name: "Chicken-Chowmein", Price: 130 },
    { name: "Veg-Chowmein", Price: 120 },
    { name: "Buff-Momo", Price: 170 },
    { name: "chicken Pizza", Price: 790 },
    { name: "cheese Pizza", Price: 790 },
    { name: "veg Pizza", Price: 790 },
    { name: "thakali Pizza", Price: 790 },
    { name: "chicken Pizza", Price: 790 },
    { name: "cheese Pizza", Price: 790 },
    { name: "veg Pizza", Price: 790 },
    { name: "thakali Pizza", Price: 790 },
    { name: "chicken Pizza", Price: 790 },
  ];

  const myCart = [
    { qty: 3, food: "MoMo", price: 190, Discount: 100 },
    { qty: 2, food: "Pizza", price: 210, Discount: 0 },
    { qty: 3, food: "Chowmein", price: 290, Discount: 0 },
  ];

  const TotalAmount = myCart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  const VAT = (TotalAmount * 0.13).toFixed(2);
  const DeliveryCharge = 150;
  const GrandTotal = parseInt(VAT) + TotalAmount + DeliveryCharge;

  return (
    <div className="">
      {/* body section */}
      <div className="flex flex-wrap gap-[25px]">
        <div className="h-auto mb-[40px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#700909]">
          <div>
            <div className="flex mt-[10px] ml-[-5px]">
              <img src={man} width={50} height={50} alt="" />
              <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                Banepa-6,Swornim Mahatwo, 9823254541
              </p>
            </div>
            <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
              <p className="font-bold ">#0293847</p>
              <p className="ml-[130px]"> 2025/01/16 1:45</p>
            </div>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[8px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[8px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#F13E3E] "></div>
          <div className="text-[#D9D9D9] ml-[25px] mt-[15px]">
            <div className="text-[12px] flex">
              <p className="">Sub Total </p>
              <p className="ml-[220px]">Rs. 720</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">VAT </p>
              <p className="ml-[249px]">Rs. 720</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Service Charge </p>
              <p className="ml-[188px]">Rs. 360</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Delivery Charge</p>
              <p className="ml-[185px]">Rs. 360</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Grand Total</p>
              <p className="ml-[210px]">Rs. 1440</p>
            </div>
            <div className="flex mt-[20px] ml-[130px] ">
              <div
                className="w-[90px] h-[25px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] bg-[#06542F] "
                onClick={handleUpdateClick}
              >
                Update
              </div>
              <div className="w-[90px] h-[25px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] ml-[10px] bg-[#E51111] ">
                Cancel
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto h-[-25px] pb-[25px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#700909]">
          <div>
            <div className="flex mt-[10px] ml-[-5px]">
              <img src={man} width={50} height={50} alt="" />
              <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                Banepa-6,Swornim Mahatwo, 9823254541
              </p>
            </div>
            <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
              <p className="font-bold  ">#0293847</p>
              <p className="ml-[130px]"> 2025/01/16 1:45</p>
            </div>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[10px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[12px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[8px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[8px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#F13E3E] "></div>
          <div className="text-[#D9D9D9] ml-[25px] mt-[15px]">
            <div className="text-[12px] flex">
              <p className="">Sub Total </p>
              <p className="ml-[220px]">Rs. 720</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">VAT </p>
              <p className="ml-[249px]">Rs. 720</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Service Charge </p>
              <p className="ml-[188px]">Rs. 360</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Delivery Charge</p>
              <p className="ml-[185px]">Rs. 360</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Grand Total</p>
              <p className="ml-[210px]">Rs. 1440</p>
            </div>
            <div className="flex mt-[20px] ml-[130px] ">
              <div
                className="w-[90px] h-[25px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] bg-[#06542F] "
                onClick={handleUpdateClick}
              >
                Update
              </div>
              <div className="w-[90px] h-[25px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] ml-[10px] bg-[#E51111] ">
                Cancel
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto pb-[25px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#700909]">
          <div>
            <div className="flex mt-[10px] ml-[-5px]">
              <img src={man} width={50} height={50} alt="" />
              <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                Banepa-6,Swornim Mahatwo, 9823254541
              </p>
            </div>
            <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
              <p className="font-bold  ">#0293847</p>
              <p className="ml-[130px]"> 2025/01/16 1:45</p>
            </div>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[10px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[12px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[8px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[8px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#F13E3E] "></div>
          <div className="text-[#D9D9D9] ml-[25px] mt-[15px]">
            <div className="text-[12px] flex">
              <p className="">Sub Total </p>
              <p className="ml-[220px]">Rs. 720</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">VAT </p>
              <p className="ml-[249px]">Rs. 720</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Service Charge </p>
              <p className="ml-[188px]">Rs. 360</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Delivery Charge</p>
              <p className="ml-[185px]">Rs. 360</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Grand Total</p>
              <p className="ml-[210px]">Rs. 1440</p>
            </div>
            <div className="flex mt-[20px] ml-[130px] ">
              <div
                className="w-[90px] h-[25px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] bg-[#06542F] "
                onClick={handleUpdateClick}
              >
                Update
              </div>
              <div className="w-[90px] h-[25px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] ml-[10px] bg-[#E51111] ">
                Cancel
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto pb-[25px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#700909]">
          <div>
            <div className="flex mt-[10px] ml-[-5px]">
              <img src={man} width={50} height={50} alt="" />
              <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                Banepa-6,Swornim Mahatwo, 9823254541
              </p>
            </div>
            <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
              <p className="font-bold  ">#0293847</p>
              <p className="ml-[130px]"> 2025/01/16 1:45</p>
            </div>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[10px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[12px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[8px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[8px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#F13E3E] "></div>
          <div className="text-[#D9D9D9] ml-[25px] mt-[15px]">
            <div className="text-[12px] flex">
              <p className="">Sub Total </p>
              <p className="ml-[220px]">Rs. 720</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">VAT </p>
              <p className="ml-[249px]">Rs. 720</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Service Charge </p>
              <p className="ml-[188px]">Rs. 360</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Delivery Charge</p>
              <p className="ml-[185px]">Rs. 360</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Grand Total</p>
              <p className="ml-[210px]">Rs. 1440</p>
            </div>
            <div className="flex mt-[20px] ml-[130px] ">
              <div
                className="w-[90px] h-[25px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] bg-[#06542F] "
                onClick={handleUpdateClick}
              >
                Update
              </div>
              <div className="w-[90px] h-[25px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] ml-[10px] bg-[#E51111] ">
                Cancel
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto pb-[40px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#700909]">
          <div>
            <div className="flex mt-[10px] ml-[-5px]">
              <img src={man} width={50} height={50} alt="" />
              <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                Banepa-6,Swornim Mahatwo, 9823254541
              </p>
            </div>
            <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
              <p className="font-bold  ">#0293847</p>
              <p className="ml-[130px]"> 2025/01/16 1:45</p>
            </div>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[8px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#B20000] rounded-tl-[15px] rounded-tr-[15px]">
            <p className="mt-[8px] ml-[12px]">1. Veg Thakali Khana set</p>
            <p className="ml-[30px] mt-[12px]">Qty. 2</p>
            <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
          </div>
          <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#F13E3E] "></div>
          <div className="text-[#D9D9D9] ml-[25px] mt-[15px]">
            <div className="text-[12px] flex">
              <p className="">Sub Total </p>
              <p className="ml-[220px]">Rs. 720</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">VAT </p>
              <p className="ml-[249px]">Rs. 720</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Service Charge </p>
              <p className="ml-[188px]">Rs. 360</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Delivery Charge</p>
              <p className="ml-[185px]">Rs. 360</p>
            </div>
            <div className="text-[12px] flex">
              <p className="">Grand Total</p>
              <p className="ml-[210px]">Rs. 1440</p>
            </div>
            <div className="flex mt-[20px] ml-[130px] ">
              <div
                className="w-[90px] h-[25px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] bg-[#06542F] "
                onClick={handleUpdateClick}
              >
                Update
              </div>
              <div className="w-[90px] h-[25px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] ml-[10px] bg-[#E51111] ">
                Cancel
              </div>
            </div>
          </div>
        </div>
        {isUpdateVisible && (
          <div
            className={`fixed top-0 right-0 w-[400px] h-full pt-[100px] bg-[#552177] border-l-2 border-[#404040] 
      transition-transform duration-300 ease-in-out transform ${
        isUpdateVisible ? "translate-x-0" : "translate-x-full"
      }`}
            style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="p-5">
              <h3 className="text-2xl text-center font-bold mb-5 text-[#fff]">
                Update Order
              </h3>
              <form>
                <div className="mb-4 mt-[40px]">
                  <label className="text-[18px] block font-medium text-[#fff]">
                    Order Status
                  </label>
                  4
                  <select className="w-full p-2 border rounded-md mt-[-40px]">
                    <option>New Order </option>
                    <option>Processing</option>
                    <option>Ongoing</option>
                    <option>Completed</option>
                    <option>Returned</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#fff]">
                    Notes
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-md mt-1"
                    placeholder="Add notes here"
                  ></textarea>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    className="bg-gray-400 text-white p-2 rounded-md"
                    onClick={handleUpdateClick}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white p-2 rounded-md"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderReturned;
