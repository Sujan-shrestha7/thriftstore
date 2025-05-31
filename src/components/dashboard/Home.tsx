import HomeNav from "../homenav";
import Footer from "../../footer";
import aboutbg from "../images/about.jpg";
import bookImg from "../images/books.jpg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [product, setProducts] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const name = localStorage.getItem("name");

  const products = [
    {
      id: 1,
      name: "Harry Potter",
      category: "Books",
      price: "Rs. 500",
      image: bookImg,
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: "Rs. 2000",
      image: bookImg,
    },
    {
      id: 3,
      name: "Denim Jacket",
      category: "Clothing",
      price: "Rs. 800",
      image: bookImg,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: "Rs. 1500",
      image: bookImg,
    },
    {
      id: 5,
      name: "Study Lamp",
      category: "Home",
      price: "Rs. 400",
      image: bookImg,
    },
  ];
  const fetchProducts = async (): Promise<void> => {
    try {
      const response = await fetch("http://127.0.0.1:8000/products/products/");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Failed to fetch books:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
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
            {products.map((product, index) => (
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
