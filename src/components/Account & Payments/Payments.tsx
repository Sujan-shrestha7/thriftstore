import React, { useState } from "react";

const Payments: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="ml-[-20px] mt-[10px] h-[430px] w-[1200px] text-[#404040] bg-[#ECECF1]">
      <div className="flex flex-wrap gap-[30px]">
        <div>
          <div>
            <div className="flex">
              <div className="ml-[60px] mt-[30px] flex flex-wrap gap-[60px]">
                <div className="">
                  <p className="font-bold">
                    BANK <span className="text-[#FF0000]">*</span>
                  </p>
                  <select
                    value={selectedOption ?? ""}
                    onChange={handleChange}
                    className="w-[300px] mt-[8px] p-2 border border-gray-300 rounded-[3px]"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Machhapuchree Bank Ltd.">
                      Machhapuchree Bank Ltd.
                    </option>
                  </select>
                </div>
                <div>
                  <p className="font-bold">
                    PAY FOR <span className="text-[#FF0000]">*</span>
                  </p>
                  <select
                    value={selectedOption ?? ""}
                    onChange={handleChange}
                    className="w-[300px] mt-[8px] p-2 border border-gray-300 rounded-[3px]"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Commision">Commision</option>
                    <option value="Delivery">Delivery</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="ml-[60px] mt-[30px] flex flex-wrap gap-[60px]">
                <div className="">
                  <p className="font-bold">
                    PAYMENT METHOD <span className="text-[#FF0000]">*</span>
                  </p>
                  <select
                    value={selectedOption ?? ""}
                    onChange={handleChange}
                    className="w-[300px] mt-[8px] p-2 border border-gray-300 rounded-[3px]"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="Khalti">Khalti</option>
                    <option value="Esewa">Esewa</option>
                    <option value="Connect-Ips">Connect-Ips</option>
                  </select>
                </div>
                <div>
                  <p className="font-bold">
                    AMOUNT <span className="text-[#FF0000]">*</span>
                  </p>
                  <input
                    type="number"
                    className="w-[300px] h-[35px] mt-[8px] p-2 border border-gray-300 rounded-[3px]"
                    placeholder="Rs. "
                  />
                </div>
              </div>
            </div>
            <div className="ml-[60px] mt-[30px] flex flex-wrap gap-[60px]">
              <div className="">
                <p className="font-bold">
                  REMARKS <span className="text-[#FF0000]">*</span>
                </p>
                <input className="w-[300px] h-[35px] mt-[8px] p-2 border border-gray-300 rounded-[3px]" />
              </div>
            </div>
            <div className="ml-[300px] mt-[30px]">
              <button className="w-[200px] h-[30px] rounded-[3px] bg-[#06542F] text-[#fff]">
                Proceed To Pay
              </button>
            </div>
          </div>
        </div>
        <div className="w-[400px] mt-[30px]">
          <p className="text-center font-bold">SUMMARY</p>
          <div className="font-bold ">
            <div className="flex gap-[20px] mt-[10px]">
              <div className=" mt-[8px] h-[50px] w-[6px] rounded-[10px] bg-[#FF914B]"></div>
              <div className="mt-[10px] flex flex-wrap gap-[50px] border-2 border border-[#F6F6FE] rounded-[1px]">
                <div>
                  <p>Total Sold Amount</p>
                  <p className="text-center">Rs. 987500</p>
                </div>
                <div>
                  <p>Total Delivered Amount</p>
                  <p className="text-center">Rs. 7500</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[20px] mt-[10px]">
              <div className=" mt-[8px] h-[50px] w-[6px] rounded-[10px] bg-[#FF914B]"></div>
              <div className="mt-[10px] flex flex-wrap gap-[60px] border border-[#F6F6FE] rounded-[1px]">
                <div>
                  <p>Amount To Pay</p>
                  <p className="text-center">Rs. 987500</p>
                </div>
                <div className="ml-[25px]">
                  <p>Amount To Pay</p>
                  <p className="text-center">Rs. 987500</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[20px] mt-[10px]">
              <div className=" mt-[8px] h-[50px] w-[6px] rounded-[10px] bg-[#552177]"></div>
              <div className="mt-[10px] flex flex-wrap gap-[60px] border border-[#F6F6FE] rounded-[1px]">
                <div className="ml-[1px]">
                  <p>Total Paid Amount</p>
                  <p className="text-center">Rs. 987500</p>
                </div>
                <div>
                  <p>Total Paid Amount</p>
                  <p className="text-center">Rs. 987500</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[20px] mt-[10px]">
              <div className=" mt-[8px] h-[50px] w-[6px] rounded-[10px] bg-[#552177]"></div>
              <div className="mt-[10px] flex flex-wrap gap-[60px] border border-[#F6F6FE] rounded-[1px]">
                <div>
                  <p>Pending Amount</p>
                  <p className="text-center">Rs. 987500</p>
                </div>
                <div className="ml-[15px]">
                  <p>Pending Amount</p>
                  <p className="text-center">Rs. 987500</p>
                </div>
              </div>
            </div>
            <div className="mt-[10px] flex justify-center items-center">
              <div className="mt-[10px] flex flex-wrap gap-[60px]">
                <div>
                  <p>TOTAL PENDING AMOUNT</p>
                  <p className="text-center">Rs. 987500 /-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
