import React from 'react';

import StoreHome from './storeHome';
interface DashboardItem {
  // img: string;
  title: string;
  count: number;
  bg: string;
}

const StoreDashboard: React.FC = () => {
  const dashboardItems: DashboardItem[] = [
    { title: 'Total Items', count: 112, bg: 'bg-[#FDDDC8]' },
    { title: 'Total Orders', count: 67, bg: 'bg-[#B88FD6]' },
  ];

  return (
    <div className="bg-[#F6F6FE]">
      <StoreHome />
      <p className="hellohome ml-[295px] text-[#404040] font-bold text-3xl mb-4">Dashboard</p>
      <div className="hellohome ml-[285px] relative flex flex-wrap">
        <div className="extraStatus relative flex flex-wrap gap-4 pt-[0px] pl-[15px] md:w-[880px] md:h-[200px]">
          {dashboardItems.map((item, index) => (
            <div key={index} className={`${item.bg} relative flex rounded-[30px] w-[150px] h-[150px] md:w-[200px] md:h-[180px] items-center`}>
              {/* <img src={item.img} className="h-[60px] w-[50px] ml-[5px]" alt={`${item.title} Icon`} /> */}
              <p className="ml-2">
                <div>
                  <p className="textp text-[#666060] font-bold text-[22px]">{item.title}</p>
                </div>
                <p className="text-[#404040] font-bold text-[35px]">{item.count}</p>
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-[1%] bg-[#000000] blur-md"></div>
            </div>
          ))}
          <div className="w-[98%] bg-[#F6F6FE] mt-[20px]">
            {/* <TransactionChart /> */}
          </div>
        </div>

        {/* Placeholder sections */}
        <div className="td-status rounded-[30px] h-[290px] w-[300px] ml-[10px] bg-[#fff] shadow-lg">
          <div>
            <p className="text-center text-[20px] font-bold text-[#404040] mt-[30px] mb-[20px]">
              Today's Status
            </p>
            <div className="ml-[30px] text-[#404040] font-bold flex flex-wrap gap-[30px]">
              <div>
                <p className="text-center text-[32px]">12</p>
                <p>Order's Created</p>
              </div>
              <div>
                <p className="text-center text-[32px]">20</p>
                <p>Returned</p>
              </div>
              <div>
                <p className="text-center text-[32px]">0</p>
                <p>Processing</p>
              </div>
              <div>
                <p className="text-center text-[32px]">2</p>
                <p>Order Comments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hellohome-sales rounded-[30px] h-[265px] w-[300px] mt-[15px] ml-[890px] bg-[#fff] shadow-lg">
          <div>
            <p className="text-center text-[20px] font-bold text-[#404040] mt-[25px] mb-[20px]">
              Sales Statistics
            </p>
          </div>
          <div className="text-[#404040]">
            <p className="text-center font-bold mt-[-10px] text-[32px]">80%</p>
            <p className="font-bold text-center w-[100px] ml-[90px]">Successfully Delivered</p>
          </div>
          <div className="text-[#404040]">
            <p className="text-center font-bold text-[32px]">20%</p>
            <p className="font-bold text-center ml-[90px] mt-[10px] w-[100px]">Returned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDashboard;
