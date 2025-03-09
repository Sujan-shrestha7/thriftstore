import React, { useState } from 'react';
import '../Navbar.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataItem {
  name: string;
  Orders: number;
}

const allData: DataItem[] = [
  { name: 'dec 1', Orders: 50 },
  { name: 'dec 2', Orders: 78 },
  { name: 'dec 3', Orders: 60 },
  { name: 'dec 4', Orders: 30 },
  { name: 'dec 5', Orders: 90 },
  { name: 'dec 6', Orders: 20 },
  { name: 'dec 7', Orders: 45 },
  { name: 'dec 8', Orders: 75 },
  { name: 'dec 9', Orders: 100 },
  { name: 'dec 10', Orders: 55 },
  { name: 'dec 11', Orders: 85 },
  { name: 'dec 12', Orders: 75 },
  { name: 'dec 13', Orders: 100 },
  { name: 'dec 14', Orders: 55 },
  { name: 'dec 15', Orders: 85 },
];

const LineChartComponent: React.FC = () => {
  const [filteredData, setFilteredData] = useState<DataItem[]>(allData);

  const handleFilter = (filterType: string) => {
    switch (filterType) {
      case 'daily':
        setFilteredData(allData);
        break;
      case '15days':
        const halfMonthData = allData.reduce((acc, item, index) => {
          if (index % 7 === 0) {
            acc.push(item);
          }
          return acc;
        }, [] as DataItem[]);
        setFilteredData(halfMonthData);
        break;
      case 'monthly':
        const monthlyData = allData.reduce((acc, item, index) => {
          if (index % 15 === 0) {
            acc.push(item);
          }
          return acc;
        }, [] as DataItem[]);
        setFilteredData(monthlyData);
        break;
      default:
        setFilteredData(allData);
    }
  };

  return (
    <div className="h-[24rem] bg-white rounded-[30px] flex flex-col flex-1 p-4 shadow-lg relative">
      <div className="absolute bottom-0 left-0 right-0 h-[0.5%] bg-black blur-md"></div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-semibold">Orders Overview</h2>
        <div className="space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
          <button
            onClick={() => handleFilter('daily')}
            className="days-cs px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Daily
          </button>
          <button
            onClick={() => handleFilter('15days')}
            className="days-cs px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            15 Days
          </button>
          <button
            onClick={() => handleFilter('monthly')}
            className="days-cs px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Monthly
          </button>
        </div>
      </div>
      <div className="flex-1">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="sm:h-[18rem] h-[12rem]"
        >
          <LineChart
            data={filteredData}
            margin={{ top: 0, right: 0, left: 0, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Orders"
              stroke="#FF9F61"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;
