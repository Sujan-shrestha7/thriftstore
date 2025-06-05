import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import StoreHome from './storeHome'

// Define a type for the product if needed
interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  // Add other fields returned from your API
}

const OrderView: React.FC = () => {
  const [view, setView] = useState<Product[]>([]);
  const locationRouter = useLocation();
  const queryParams = new URLSearchParams(locationRouter.search);
  const productid = queryParams.get("id");

  useEffect(() => {
    if (productid) {
      axios
        .get(`http://127.0.0.1:8000/products/products/?product=${productid}`)
        .then((res) => {
          setView(res.data); // Make sure res.data is an array
        })
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [productid]);

  return (
    <div>
      <StoreHome />
      <div className="ml-[273px] m-[30px]">
        {view.map((product) => (
          <div key={product.id} className="flex justify-center gap-[30px] border-[2px] h-[500px] border-black p-4 mb-4">
            <div>
              <h2 className="text-center text-xl font-semibold mb-4">Order Details</h2>

              <p><strong>Name:</strong> {product.name}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Description:</strong> {product.description}</p>
            </div>

            <div className="flex items-center">
              <img
                src={product.image || "/images/sample.jpg"}
                alt={product.name}
                className="w-[200px] h-[200px] object-cover rounded border"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderView
