import React, { useState } from "react";
import Navbar from "../homenav";
import image from "../images/books.jpg";
import Footer from "../../footer";
import location from "../images/location.png";
import { useNavigate } from "react-router-dom";

const Products: React.FC = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
  const navigate=useNavigate();
  const toggleForm = (index: number) => {
    // Toggle off if clicking same product again
    setSelectedProductIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const results = [
    {
      name: "Camera",
      price: "380",
      Location: "Durbarmarg",
      category: "Electronics",
      description: "High quality DSLR camera with 24MP resolution.",
    },
    {
      name: "Juggers",
      price: "380",
      Location: "Durbarmarg",
      category: "Clothes",
      description: "Comfortable joggers for daily wear.",
    },
    {
      name: "Dell Laptop",
      price: "380",
      Location: "Durbarmarg",
      category: "Electronics",
      description: "Reliable laptop suitable for students and professionals.",
    },
    {
      name: "SmartBoard",
      price: "380",
      Location: "Banepa buspark, Banepa",
      category: "Electronics",
      description: "Interactive smart board ideal for classrooms.",
    },
    {
      name: "Dell Laptop",
      price: "380",
      Location: "Durbarmarg",
      category: "Electronics",
      description: "Reliable laptop suitable for students and professionals.",
    },
    {
      name: "SmartBoard",
      price: "380",
      Location: "Banepa buspark, Banepa",
      category: "Electronics",
      description: "Interactive smart board ideal for classrooms.",
    },
    {
      name: "Dell Laptop",
      price: "380",
      Location: "Durbarmarg",
      category: "Electronics",
      description: "Reliable laptop suitable for students and professionals.",
    },
    {
      name: "SmartBoard",
      price: "380",
      Location: "Banepa buspark, Banepa",
      category: "Electronics",
      description: "Interactive smart board ideal for classrooms.",
    },
  ];

  return (
    <div className="bg-[#F0F0FF] min-h-screen">
      <Navbar />
      <div className="my-[90px]">
        <div className="flex items-center justify-between px-[80px]">
          <p className="text-[28px] font-semibold text-[#473F40]">
            Your Search Results
          </p>
          <div className="relative flex items-center">
            <img
              src=""
              className="absolute left-[10px] h-[13px] w-[13px]"
              alt="Search Icon"
            />
            <input
              type="text"
              className="h-[35px] w-[220px] bg-[#F5F3F2] pl-[30px] pr-[10px] rounded-[5px] border-none"
              placeholder="Search for products"
            />
            <button className="ml-[10px] h-[35px] w-[120px] bg-[#FC6E4F] text-[#fff] text-[15px] border-none rounded-[5px] cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#FFFFFF] shadow-lg" />

        {/* Search Results */}
        <div className="mt-[70px] px-[200px] flex flex-wrap gap-[20px] items-center justify-around relative">
          {results.map((result, index) => (
            <div key={index} className="relative">
              <div onClick={() => toggleForm(index)} className="">
                <div className="cursor-pointer h-[230px] w-[250px] bg-[#000000] rounded-[30px] overflow-hidden">
                  <img
                    src={image}
                    className="h-full w-full object-cover"
                    alt={result.name}
                  />
                </div>
                <div className="ml-[10px] text-center">
                  <p className="font-bold text-[18px] pt-[5px]">
                    {result.name} - {result.price}
                  </p>
                  <div className="text-center w-full flex gap-[10px] justify-center">
                    <img
                      src={location}
                      className="h-[18px] w-[18px]"
                      alt="Location Icon"
                    />
                    <p className="font-bold text-[14px]">
                      {result.category} - {result.Location}
                    </p>
                  </div>
                  <button onClick={()=>navigate('/cart')} className="mt-[5px] text-center cursor-pointer w-[100px] h-[25px] rounded-[5px] text-[#fff] bg-[#000000]">
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* Show description if this is the selected product */}
              {selectedProductIndex === index && (
                <div className="absolute top-[250px] left-0 w-[250px] bg-[#636363] text-white rounded-md shadow-lg p-4 z-10">
                  <h2 className="text-lg font-bold">{result.name}</h2>
                  <p className="mt-2 text-sm">{result.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
