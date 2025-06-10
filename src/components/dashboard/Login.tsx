import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../../footer";
import aboutbg from "../images/about.jpg";

interface Product{
  image?: string;
  name : string;
  price : number;
}

const Login = () => {
  const [product, setProduct] = useState<Product[]>([]);

  const fetchProducts = async (): Promise<void> => {
    try {
      const response = await fetch("http://127.0.0.1:8000/products/products/");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-[#D9D9D9] w-full h-[500px]">
        <div className="p-[5%] w-[50%]">
          <p className="text-[52px] text-[#8E6969] font-bold">
            Find Your Next Favorite For Less !
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-[20px] justify-center items-center bg-[#737373] py-10">
        {product.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="h-[200px] w-[210px] bg-[#D9D9D9] rounded-[15px]">
              {/* Add image here if item.image exists */}
              <img src={`http://127.0.0.1:8000/${item.image}`} className="h-[200px] w-[210px] rounded-[15px]" alt="" />
            </div>
            <p className="w-[200px] h-[30px] mt-[10px] bg-[#564343] text-[#fff] font-bold text-center rounded-[12px]">
              {item.name}-(Rs.{item.price})
            </p>
          </div>
        ))}
      </div>

      <div className="h-[400px] flex flex-col md:flex-row">
        <div className="text-[18px] pt-[100px] text-[#282727] p-[20px] text-center font-bold">
          <p>
            Thrift-Store is a Nepal-based platform designed by a BCA student,
            offering users the ability to purchase second-hand clothes. This
            project reflects a sustainable fashion approach, promoting the reuse
            and recycling of garments. It caters to budget-conscious consumers
            or those interested in reducing their environmental impact by
            purchasing preloved clothing.
          </p>
        </div>
        <img
          src={aboutbg}
          className="h-[400px] object-cover"
          alt="About Background"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Login;
