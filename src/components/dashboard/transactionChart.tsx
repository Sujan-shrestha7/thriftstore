import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Define the type for data items
interface DataItem {
  name: string;
  Orders: number;
}

// Define the chart data
const data: DataItem[] = [
  { name: "Order Created", Orders: 123 },
  { name: "Order Ready", Orders: 187 },
  { name: "Delivery Processing", Orders: 100 },
  { name: "Delivered", Orders: 38 },
  { name: "Returned", Orders: 40 },
];

const TransactionChart: React.FC = () => {
  const [barSize, setBarSize] = useState(60);

  // Handle resizing the window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBarSize(30); // Set to 30 for smaller screens
      } else {
        setBarSize(60); // Set to 60 for larger screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-[22rem] bg-white rounded-[30px] flex flex-col flex-1 pr-4 shadow-lg">
      <p className="text-center font-bold text-[20px] pt-[10px] text-[#404040]">
        Today's Order Status
      </p>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Orders" fill="#FF9F61" barSize={barSize} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;
