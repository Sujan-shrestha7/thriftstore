import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./images/logo.png";
import search from "./images/search.png";
import profile from "./images/profile.png";
import dashboard from "./images/dashboard.png";
import order from "./images/order.png";
import ap from "./images/a&p.png";
import deliver from "./images/delivered.png";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  const menuItems = [
    { name: "Dashboard", path: "/home", icon: dashboard },
    { name: "Orders", path: "/order", icon: order },
    { name: "Account & Payments", path: "/A&P", icon: ap },
    { name: "Delivery", path: "/delivery", icon: deliver },
  ];

  useEffect(() => {
    const currentItem = menuItems.find((item) => item.path === location.pathname);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (name: string, path: string) => {
    setActiveItem(name);
    navigate(path);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-[250px] z-20 transform transition-transform duration-300 ease-in-out 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-4 flex items-center space-x-2">
          <img src={logo} alt="XittooFood" className="h-10 w-10" />
          <p className="text-black text-xl font-bold">XittooFood</p>
        </div>

        {/* Menu Items */}
        <ul className="mt-4">
          {menuItems.map(({ name, path, icon }) => (
            <li
              key={name}
              className={`p-4 flex items-center cursor-pointer transition-all duration-300 
                ${activeItem === name ? "bg-[#FCE5D6] border-r-4 border-[#FF914B]" : "hover:bg-[#FCE5D6]"}`}
              onClick={() => handleMenuItemClick(name, path)}
            >
              <img src={icon} alt={`${name} Icon`} className="h-6 w-6 mr-2" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Wrapper (Ensures Sidebar doesn't affect layout) */}
      <div className="flex-1 min-h-screen bg-[#F6F6FE] ml-0 md:ml-[250px]">
        {/* Header */}
        <div className="bg-white h-[65px] sticky top-0 z-30 flex items-center justify-between px-4 shadow-md">
          {/* Toggle Button */}
          <button className="md:hidden text-gray-700" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Search Bar */}
          <div className="relative w-[180px] md:w-[320px]">
            <input type="text" placeholder="Search here..." className="border-2 border-gray-400 bg-[#ECE6F0] h-10 px-4 pr-10 rounded-md w-full" />
            <button type="submit" className="absolute right-2 top-2">
              <img src={search} className="h-4 w-4" alt="Search Icon" />
            </button>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <img src={profile} alt="Profile" className="h-8 w-8 md:h-10 md:w-10 rounded-full" />
            <p className="text-gray-700 font-bold hidden md:block">Admin Kumar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
