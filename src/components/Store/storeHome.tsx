import React, { useState, useEffect, Profiler } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import img from "../images/profile.png";

const StoreHome: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>("Dashboard");
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);

  const menuItems = [
    { name: "Dashboard", path: "/home", icon: img },
    { name: "Orders", path: "/order", icon: img },
    { name: "Foods", path: "/foods", icon: img },
    { name: "Account & Payments", path: "/A&P", icon: img },
    { name: "Delivery", path: "/delivery", icon: img },
  ];

  useEffect(() => {
    const currentItem = menuItems.find(
      (item) => item.path === location.pathname
    );
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

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white w-[250px] z-20 transform transition-transform duration-300 ease-in-out 
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={img}
            alt="XittooFood"
            className="h-[80px] w-[180px] mx-[20px]"
          />
        </div>

        {/* Menu Items */}
        <ul className="mt-4">
          {menuItems.map(({ name, path, icon }) => (
            <li
              key={name}
              className={`p-4 flex items-center cursor-pointer transition-all duration-300 
                ${
                  activeItem === name
                    ? "bg-[#FCE5D6] border-r-4 border-[#FF914B]"
                    : "hover:bg-[#FCE5D6]"
                }`}
              onClick={() => handleMenuItemClick(name, path)}
            >
              <img src={icon} alt={`${name} Icon`} className="h-6 w-6 mr-2" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 bg-[#F6F6FE] ml-0 md:ml-[250px]">
        {/* Header */}
        <div className="bg-white h-[65px] sticky top-0 z-30 flex items-center justify-between px-4 shadow-md">
          {/* Toggle Button */}
          <button className="md:hidden text-gray-700" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Search Bar */}
          <div className="relative w-[180px] md:w-[320px]">
            <input
              type="text"
              placeholder="Search here..."
              className="border-2 border-gray-400 bg-[#ECE6F0] h-10 px-4 pr-10 rounded-md w-full"
            />
            <button type="submit" className="absolute right-2 top-2">
              <img src={img} className="h-4 w-4" alt="Search Icon" />
            </button>
          </div>

          <div>
            <p>Swich to User</p>
          </div>
          {/* Profile Section with Dropdown */}
          <div className="relative">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleProfileMenu}
            >
              <img
                src={img}
                alt="Profile"
                className="h-8 w-8 md:h-10 md:w-10 rounded-full"
              />
              <p className="text-gray-700 font-bold hidden md:block">
                Admin Kumar
              </p>
            </div>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-[200px] h-[250px] bg-[#636363]  rounded-md shadow-lg p-4 text-white">
                <p className="text-center font-bold">Admin Kumar</p>
                <hr className="my-2 border-gray-500" />
                <ul>
                  <li className="p-2 cursor-pointer hover:bg-gray-700 hover:rounded-[5px] text-center">
                    Profile
                  </li>
                  <li className="p-2 cursor-pointer hover:bg-gray-700 hover:rounded-[5px] text-center">
                    Settings
                  </li>
                  <li className="p-2 cursor-pointer hover:bg-gray-700 hover:rounded-[5px] text-center">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreHome;
