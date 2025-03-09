import React from 'react'
import Sidebar from '../Navbar';

const Details = () => {
  const startingBillNo = 2389872;
  const deliver = Array.from({ length: 15 }, (_, index) => ({
    sn: index + 1,
    Name: 'Suman Kayatha',
    Address: 'Banepa-6, Kavre',
    Contact: 9823254541, 
    TotalDelivered: 100,
    status: index % 3 === 2 
  ? 'off' 
  : `${'Suman Kayatha'} ${'Banepa-6, Kavre'} ${9823254541}  ${startingBillNo + index}`

  }));

  return (
    <div className="">
      <Sidebar/>
      <div className='ml-[275px] mt-[-650px]'>
      <p className="ml-[10px] text-[#404040] font-bold text-2xl mb-4">Delivery</p>
      <div className="sticky top-0 bg-[#F6F6FE] flex flex-wrap gap-[22px]">
        <ul className="flex flex-wrap mt-[8px] gap-[15px] text-center ">
          <li className="w-[150px] h-[45px] text-[18pbg-[]x] font-bold text-[#404040]">S.N</li>
          <li className="w-[150px] h-[45px] text-[18px] font-bold text-[#404040]">Name</li>
          <li className="w-[150px] h-[45px] text-[18px] font-bold text-[#404040]">Address</li>
          <li className="w-[150px] h-[45px] text-[18px] font-bold text-[#404040]">Contact</li>
          <li className="w-[150px] h-[45px] text-[18px] font-bold text-[#404040]">Total Delivered</li>
          <li className="w-[170px] h-[45px] text-[18px] font-bold text-[#404040]">Active Status</li>
        </ul>
        {/* Search Bar */}
        <div className="w-full max-w-[150px] md:max-w-[180px]">
          <input
            type="text"
            placeholder="Search here..."
            className="border-2 border-gray-400 bg-[#ECE6F0] h-10 px-5 pr-10 rounded-md w-full"
          />
          <button type="submit" className="absolute right-2 top-2"></button>
        </div>
      </div>
      {/* blur section */}
      <div className="sticky top-[55px] w-full mb-[10px] h-[1px] bg-[#A1A1A1]">
        <div className="h-[1px] bg-[#D6D6D6] blur-sm w-full"></div>
      </div>

      {/* Orders List */}
      {deliver.map((person) => (
        <React.Fragment key={person.sn}>
          <div
            className={`flex text-center items-center gap-[3px] ${
              person.sn % 1 === 0 ? "bg-[#ECECF1] mt-[20px]" : ""
            }`}
          >
            <div className="w-[175px] h-[140px] flex items-center justify-center text-[18px] font-bold text-[#666666]">
              {person.sn}
            </div>
            <div className="w-[175px] h-[140px] flex items-center justify-center text-[18px] font-bold text-[#666666]">
              {person.Name}
            </div>
            <div className="w-[175px] h-[140px] flex items-center justify-center text-[18px] font-bold text-[#666666]">
              {person.Address}
            </div>
            <div className="w-[175px] h-[140px] flex items-center justify-center text-[18px] font-bold text-[#666666]">
              {person.Contact}
            </div>
            <div className="w-[130px] h-[140px] flex items-center justify-center text-[18px] font-bold text-[#666666]">
              {person.TotalDelivered}
            </div>
            <div className="w-[175px] h-[140px] flex items-center justify-center text-[18px] font-bold text-[#666666]">
              {person.status}
            </div>
            <div className="h-[35px] w-[150px] ml-[30px] cursor-pointer rounded-[5px] text-[#fff] bg-[#552177]">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full text-[15px] font-bold text-center pt-[5px]"
              >
                View History
              </a>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
    </div>
  );
};

export default Details;
