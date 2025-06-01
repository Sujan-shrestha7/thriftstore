import HomeNav from "../homenav";
import Footer from "../../footer";
import aboutbg from "../images/about.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const name = localStorage.getItem("name");
  
  const [recommended, setRecommended] = useState<any[]>([]);

  const fetchRecommended = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/products/products/recommend/42/"
      );
      setRecommended(res.data);
    } catch (err) {
      console.error("Failed to fetch recommendations:", err);
    }
  };

  useEffect(() => {
    fetchRecommended();
  }, []);

  return (
    <div>
      <HomeNav />
      <div>
        {/* Hero Section */}
        <div className="flex bg-[#D9D9D9] px-[90px] gap-[30px] w-full h-[500px]">
          <div className="py-[5%] px-[13px] w-[50%]">
            <p className=" text-[52px] text-[#8E6969] font-bold">
              Find Your Next Favorite For Less!
            </p>
          </div>
          <div className="mt-[10%] rounded-[10px] h-[200px] w-[700px] p-[70px] bg-[#fff]">
            {/* Search Bar */}
            <div className="flex flex-wrap gap-[10px]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search here..."
                className="border-2 w-[290px] border-gray-400 bg-[#ECE6F0] h-10 px-4 pr-10 rounded-md w-full"
              />
              <button
                onClick={() => navigate(`/products?product=${search}`)}
                className="bg-[#8E6969] hover:bg-[#000000] hover:text-[#fff] text-center w-[140px] rounded-[5px] border-gray-400"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <div className="bg-[#737373] py-10">
          <h2 className="text-center text-white text-2xl font-bold mb-6">
            Products
          </h2>
          <div className="flex gap-[20px] justify-center items-center flex-wrap">
            {recommended.map((product, index) => (
              <div
                key={product.id}
                onClick={index === 0 ? () => navigate("/products") : undefined}
                className="flex flex-col cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[200px] w-[210px] bg-[#D9D9D9] object-cover rounded-[15px]"
                />
                <div className="w-[200px] mt-[10px] bg-[#564343] text-[#fff] font-bold text-center py-2 rounded-[12px]">
                  <p>{product.name}</p>
                  <p className="text-sm font-normal">{product.category}</p>
                  <p className="text-sm font-normal">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="h-[400px] flex flex-col md:flex-row">
          <div className="text-[18px] pt-[100px] text-[#282727] p-[20px] text-center font-bold">
            <p>
              Thrift-Store is a Nepal-based platform designed by a BCA student,
              offering users the ability to purchase second-hand clothes. This
              project reflects a sustainable fashion approach, promoting the
              reuse and recycling of garments. It caters to budget-conscious
              consumers or those interested in reducing their environmental
              impact by purchasing preloved clothing.
            </p>
          </div>
          <img
            src={aboutbg}
            className="h-[400px] object-cover"
            alt="About Background"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
