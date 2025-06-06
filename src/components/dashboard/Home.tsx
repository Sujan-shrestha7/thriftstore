import HomeNav from "../homenav";
import Footer from "../../footer";
import aboutbg from "../images/about.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import getCookie from "../../csrf_token";
interface Product {
  sellerid: number;
  id: number;
  name: string;
  category: Category;
  cat_name: string;
  price: string;
  description: string;
  usedtime: string;
  image?: string;
  users: Users;
  address: string;
}

interface Users {
  id: number;
  address: string;
}

interface Category {
  id: number;
  cat_name: string;
}
const Home = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  // const name = localStorage.getItem("name");
  const userId =  localStorage.getItem("id")
  const rcmdid = localStorage.getItem("rcmdid")
  
  const [recommended, setRecommended] = useState<any[]>([]);

  const fetchRecommended = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/products/products/recommend/${rcmdid}/`
      );
      setRecommended(res.data);
    } catch (err) {
      console.error("Failed to fetch recommendations:", err);
    }
  };

  useEffect(() => {
    fetchRecommended();
  }, []);

    // Handle adding a product to cart
    const handleAddToCart = async (product: Product) => {
      const csrftoken = getCookie("csrftoken");
      const fullImageUrl = `http://127.0.0.1:8000/${product.image}`;
  
      const formData = {
        sellerid: product.sellerid,
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        usedtime: product.usedtime,
        category: product.category,
        image: fullImageUrl,
        userid: userId,
      };
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/carts/carts/create/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken": csrftoken ?? "",
            },
            body: JSON.stringify(formData),
          }
        );
  
        if (!response.ok) {
          const errorData = await response.json();
          alert(errorData.contact?.[0] || "Failed to add to cart");
          return;
        }
  
        alert("Product added to cart!");
      } catch (error) {
        console.error("Error adding to cart:", error);
        alert("An error occurred. Please try again.");
      }
    };

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
          <div className="mt-[10%] rounded-[10px] h-[200px] w-[700px] p-[70px] px-[30px] bg-[#fff]">
            {/* Search Bar */}
            <div className="flex flex-wrap gap-[10px]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search here..."
                className="border-2 w-[285px] border-gray-400 bg-[#ECE6F0] h-10 px-4 pr-10 rounded-md w-full"
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
                className="flex flex-col cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={`http://127.0.0.1:8000/${product.image}`}
                  alt={product.name}
                  className="h-[200px] w-[210px] bg-[#D9D9D9] object-cover rounded-[15px]"
                />
                <div className="w-[200px] mt-[10px] bg-[#564343] text-[#fff] font-bold text-center py-2 rounded-[12px]">
                  <p>{product.name}</p>
                  <p className="text-sm font-normal">Rs. {product.price}</p>
                </div>
                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="mt-[5px] w-[100px] h-[25px] rounded-[5px] text-white bg-black"
                  >
                    Add To Cart
                  </button>
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
