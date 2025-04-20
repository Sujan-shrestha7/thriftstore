import React from "react";
import Navbar from "../homenav";
import image from '../images/books.jpg'
import Footer from "../../footer";
import location from '../images/location.png'
const Products: React.FC = () => {
  const results = [
    {
      name: "Camera",
      price:"380",
      Location: "Durbarmarg",
      category:"Electronics"
    },
    {
      name: "Juggers",
      price:"380",
      Location: "Durbarmarg",
      category:"Chlothes"
    },
    {
      name: "Dell Laptop",
      price:"380",
      Location: "Durbarmarg",
      category:"Electronics"
    },
    {
      name: "SmartBoard",
      price:"380",
      Location: "Banepa buspark, Banepa",
      category:"Electronics"
    },
    {
      name: "Dell Laptop",
      price:"380",
      Location: "Durbarmarg",
      category:"Electronics"
    },
    {
      name: "SmartBoard",
      price:"380",
      Location: "Banepa buspark, Banepa",
      category:"Electronics"
    },
    
    {
      name: "Dell Laptop",
      price:"380",
      Location: "Durbarmarg",
      category:"Electronics"
    },
    {
      name: "SmartBoard",
      price:"380",
      Location: "Banepa buspark, Banepa",
      category:"Electronics"
    }
    
  ];

  return (
    <div className="bg-[#F0F0FF]">
      <Navbar/>
      <div className="my-[90px]">
        <div className="flex items-center justify-between px-[80px]">
          <p className="text-[28px] font-semibold text-[#473F40]">
            Your Search Results
          </p>
          <div className="relative flex items-center">
            <img
              src=''
              className="absolute left-[10px] h-[13px] w-[13px]"
              alt="Search Icon"
            />
            <input
              type="text"
              className="h-[35px] w-[220px] bg-[#F5F3F2] pl-[30px] pr-[10px] rounded-[5px] border-none"
              placeholder="Search for products"
            />
            <button className=" ml-[10px] h-[35px] w-[120px] bg-[#FC6E4F] text-[#fff] text-[15px] border-none rounded-[5px] cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-[#FFFFFF] shadow-lg" />

        {/* Search Results */}
        <div className="mt-[70px] px-[200px] flex flex-wrap gap-[20px] items-center justify-around">
          {results.map((result, index) => (
            <div key={index} className="" >
              <div className="cursor-pointer h-[230px] w-[250px] bg-[#000000] rounded-[30px]">
                <img
                  src={image}
                  className="h-full w-full rounded-[5px] object-cover"
                  alt={result.name}
                />
              </div>
              <div className="ml-[10px] text-center">
                <p className="font-bold text-[18px] pt-[5px]">
                  {result.name} - {result.price}
                </p>
                <div className="text-center w-full flex gap-[10px]">
                  <img
                    src={location}
                    className="h-[18px] w-[18px]"
                    alt="Location Icon"
                  />
                  <p className=" font-bold text-[14px]">
                    {result.category}-{result.Location}
                  </p>
                </div>
                <button className="mt-[5px] text-center cursor-pointer w-[100px] h-[25px] rounded-[5px] text-[#fff] bg-[#000000]">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default Products;
