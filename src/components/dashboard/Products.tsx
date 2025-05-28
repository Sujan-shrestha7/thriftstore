import Navbar from "../homenav";
import Footer from "../../footer";
import locationIcon from "../images/location.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import getCookie from "../../csrf_token";

interface Product {
  sellerid:number;
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

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("id");

  // Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/products/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Toggle product description
  const toggleDescription = (index: number) => {
    setSelectedProductIndex(prev => (prev === index ? null : index));
  };

  // Handle adding a product to cart
  const handleAddToCart = async (product: Product) => {
    const csrftoken = getCookie("csrftoken");

    const formData = {
      sellerid :product.sellerid,
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      usedtime: product.usedtime,
      category: product.category,
      image: product.image,
      userid: userId,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/carts/carts/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken ?? "",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.contact?.[0] || "Failed to add to cart");
        return;
      }

      alert("Product added to cart!");
      navigate("/products");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-[#F0F0FF] min-h-screen">
      <Navbar />

      <div className="my-[90px]">
        {/* Top section with title and search */}
        <div className="flex items-center justify-between px-[80px]">
          <p className="text-[28px] font-semibold text-[#473F40]">Your Search Results</p>
          <div className="relative flex items-center">
            <input
              type="text"
              className="h-[35px] w-[220px] bg-[#F5F3F2] pl-[30px] pr-[10px] rounded-[5px]"
              placeholder="Search for products"
            />
            <button className="ml-[10px] h-[35px] w-[120px] bg-[#FC6E4F] text-white text-[15px] rounded-[5px]">
              Search
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[2px] mt-[30px] w-[90%] ml-[5%] rounded-[10px] bg-white shadow-lg" />

        {/* Products List */}
        <div className="mt-[70px] px-[200px] flex flex-wrap gap-[20px] justify-around relative">
          {products.map((product, index) => (
            <div key={product.id} className="relative">
              <div onClick={() => toggleDescription(index)} className="cursor-pointer">
                {/* Product Image */}
                <div className="h-[230px] w-[250px] bg-black rounded-[30px] overflow-hidden">
                  <img
                    src={`http://127.0.0.1:8000/${product.image}`}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="ml-[10px] text-center">
                  <p className="font-bold text-[18px] pt-[5px]">
                    {product.name} - {product.price}
                  </p>
                  <div className="flex items-center justify-center gap-[10px]">
                    <img src={locationIcon} className="h-[18px] w-[18px]" alt="Location" />
                    <p className="font-bold text-[14px]">{product.address}</p>
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
              </div>

              {/* Product Description */}
              {selectedProductIndex === index && (
                <div className="absolute top-[250px] left-0 w-[300px] bg-[#636363] text-white rounded-md shadow-lg p-4 z-10">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="mt-2 text-sm flex gap-[10px]"><p className="font-bold text-[14px]"> Used Time: </p> {product.usedtime}</p>
                  <p className="mt-2 text-sm flex gap-[10px]"><p className="font-bold text-[14px]"> Description: </p> {product.description}</p>
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
