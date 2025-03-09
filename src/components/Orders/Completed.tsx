import React, { useState } from "react";
import man from "../images/man.png";
import Sidebar from "../Navbar";
const Completed = () => {

  const [activeTab, setActiveTab] = useState("orderItem");
  const [status, setStatus] = useState("NewOrder");
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);

  // Toggle the visibility of the update container
  const handleUpdateClick = () => {
    setIsUpdateVisible((prevState) => !prevState);
  };

  return (
    <div className="">
      {/* body section */}
      <div className="flex flex-wrap gap-[25px]">
                <div className="h-auto w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#252525]">
                  <div>
                    <div className="flex mt-[10px] ml-[-5px]">
                      <img src={man} width={50} height={50} alt="" />
                      <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                        Banepa-6,Swornim Mahatwo, 9823254541
                      </p>
                      <div className="w-[22px] h-[22px] bg-[#00FF86] rounded-[50%] ml-[30px]"></div>
                    </div>
                    <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
                      <p className="font-bold  ">#0293847</p>
                      <p className="ml-[130px]"> 2025/01/16 1:45</p>
                    </div>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[15px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[12px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[8px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#535353] "></div>
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

                <div className="h-auto mb-[-20px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#252525]">
                  <div>
                    <div className="flex mt-[10px] ml-[-5px]">
                      <img src={man} width={50} height={50} alt="" />
                      <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                        Banepa-6,Swornim Mahatwo, 9823254541
                      </p>
                      <div className="w-[22px] h-[22px] bg-[#00FF86] rounded-[50%] ml-[30px]"></div>
                    </div>
                    <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
                      <p className="font-bold  ">#0293847</p>
                      <p className="ml-[130px]"> 2025/01/16 1:45</p>
                    </div>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[15px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[12px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[8px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[8px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#535353] "></div>
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
                      <div className="w-[90px] h-[20px] text-[12px] cursor-pointer text-center rounded-[3px] pt-[3px] ml-[10px] bg-[#E51111] ">
                        Cancel
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-auto mb-[-0px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#252525]">
                  <div>
                    <div className="flex mt-[10px] ml-[-5px]">
                      <img src={man} width={50} height={50} alt="" />
                      <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                        Banepa-6,Swornim Mahatwo, 9823254541
                      </p>
                      <div className="w-[22px] h-[22px] bg-[#00FF86] rounded-[50%] ml-[30px]"></div>
                    </div>
                    <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
                      <p className="font-bold  ">#0293847</p>
                      <p className="ml-[130px]"> 2025/01/16 1:45</p>
                    </div>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[15px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[12px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[8px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#535353] "></div>
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
                <div className="h-auto mb-[30px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#252525]">
                  <div>
                    <div className="flex mt-[10px] ml-[-5px]">
                      <img src={man} width={50} height={50} alt="" />
                      <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                        Banepa-6,Swornim Mahatwo, 9823254541
                      </p>
                      <div className="w-[22px] h-[22px] bg-[#00FF86] rounded-[50%] ml-[30px]"></div>
                    </div>
                    <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
                      <p className="font-bold  ">#0293847</p>
                      <p className="ml-[130px]"> 2025/01/16 1:45</p>
                    </div>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[15px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[12px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[8px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#535353] "></div>
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
                <div className="h-auto mb-[30px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#252525]">
                  <div>
                    <div className="flex mt-[10px] ml-[-5px]">
                      <img src={man} width={50} height={50} alt="" />
                      <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                        Banepa-6,Swornim Mahatwo, 9823254541
                      </p>
                      <div className="w-[22px] h-[22px] bg-[#00FF86] rounded-[50%] ml-[30px]"></div>
                    </div>
                    <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
                      <p className="font-bold  ">#0293847</p>
                      <p className="ml-[130px]"> 2025/01/16 1:45</p>
                    </div>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[15px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[12px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[8px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#535353] "></div>
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
                <div className="h-auto mb-[30px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#252525]">
                  <div>
                    <div className="flex mt-[10px] ml-[-5px]">
                      <img src={man} width={50} height={50} alt="" />
                      <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                        Banepa-6,Swornim Mahatwo, 9823254541
                      </p>
                      <div className="w-[22px] h-[22px] bg-[#00FF86] rounded-[50%] ml-[30px]"></div>
                    </div>
                    <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
                      <p className="font-bold  ">#0293847</p>
                      <p className="ml-[130px]"> 2025/01/16 1:45</p>
                    </div>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[15px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[12px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[8px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#535353] "></div>
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
                <div className="h-auto mb-[30px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#252525]">
                  <div>
                    <div className="flex mt-[10px] ml-[-5px]">
                      <img src={man} width={50} height={50} alt="" />
                      <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                        Banepa-6,Swornim Mahatwo, 9823254541
                      </p>
                      <div className="w-[22px] h-[22px] bg-[#00FF86] rounded-[50%] ml-[30px]"></div>
                    </div>
                    <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
                      <p className="font-bold  ">#0293847</p>
                      <p className="ml-[130px]"> 2025/01/16 1:45</p>
                    </div>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[15px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[12px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[8px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#535353] "></div>
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
                <div className="h-auto mb-[30px] w-[375px] rounded-[10px] border-[1px] border-[#404040] bg-[#252525]">
                  <div>
                    <div className="flex mt-[10px] ml-[-5px]">
                      <img src={man} width={50} height={50} alt="" />
                      <p className="text-[#D9D9D9] text-[14px] mt-[3px] ml-[-10px]">
                        Banepa-6,Swornim Mahatwo, 9823254541
                      </p>
                      <div className="w-[22px] h-[22px] bg-[#00FF86] rounded-[50%] ml-[30px]"></div>
                    </div>
                    <div className="flex text-[#D9D9D9] mt-[-8px] ml-[30px]">
                      <p className="font-bold  ">#0293847</p>
                      <p className="ml-[130px]"> 2025/01/16 1:45</p>
                    </div>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[15px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[12px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="text-[12px] text-[#D9D9D9] flex h-[35px] w-[340px] mt-[5px] ml-[15px] bg-[#535353] rounded-tl-[15px] rounded-tr-[15px]">
                    <p className="mt-[8px] ml-[12px]">
                      1. Veg Thakali Khana set
                    </p>
                    <p className="ml-[30px] mt-[12px]">Qty. 2</p>
                    <p className="ml-[70px] mt-[12px]">Rs. 1440</p>
                  </div>
                  <div className="absolute ml-[15px] mt-[8px] w-[340px] h-[1.3px] bg-[#535353] "></div>
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

export default Completed;
