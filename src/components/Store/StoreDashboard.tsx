import React from 'react';
import StoreHome from './storeHome';
import { useNavigate } from 'react-router-dom';

interface DashboardItem {
  title: string;
  count: number;
  bg: string;
}

const StoreDashboard: React.FC = () => {
  const navigate = useNavigate();

  const dashboardItems: DashboardItem[] = [
    { title: 'Total Items', count: 3, bg: 'bg-[#FDDDC8]' },
    { title: 'Total Orders', count: 2, bg: 'bg-[#B88FD6]' },
  ];

  return (
    <div className="bg-[#F6F6FE] min-h-screen pb-10">
      <StoreHome />
      <div className="px-10 md:px-[295px]">
        <h1 className="text-[#404040] font-bold text-3xl my-6">Dashboard</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {dashboardItems.map((item, index) => (
            <div
              key={index}
              className={`rounded-[20px] shadow-md p-6 ${item.bg} hover:scale-105 transition-transform`}
            >
              <p className="text-[#666060] font-semibold text-[20px] mb-2">
                {item.title}
              </p>
              <p className="text-[#404040] font-bold text-[32px]">{item.count}</p>
            </div>
          ))}
        </div>

        {/* Add Product Button */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate('/storeproducts')}
            className="bg-[#8E6969] hover:bg-[#000] text-white px-6 py-3 rounded-[10px] text-lg font-semibold shadow-md transition-colors"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreDashboard;
