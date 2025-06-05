import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import StoreHome from './storeHome';

interface Product {
  id: number;
  product_name: string;
  product_image: string;
  product_price: number;
  description: string;
}

const OrderView: React.FC = () => {
  const [view, setView] = useState<Product | null>(null);
  const locationRouter = useLocation();
  const queryParams = new URLSearchParams(locationRouter.search);
  const productid = queryParams.get("id");

  useEffect(() => {
    if (productid) {
      axios
        .get(`http://127.0.0.1:8000/orders/orders/?id=${productid}`)
        .then((res) => {
          setView(res.data); // assuming it's a single object
        })
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [productid]);

  return (
    <div>
      <StoreHome />
      <div className="ml-[273px] m-[30px]">
        {view && (
          <div className="flex justify-center gap-[30px] border-[2px] h-[500px] border-black p-4 mb-4">
            <div>
              <h2 className="text-center text-xl font-semibold mb-4">Order Details</h2>
              <p><strong>Name:</strong> {view.product_name}</p>
              <p><strong>Price:</strong> Rs. {view.product_price}</p>
              <p><strong>Description:</strong> {view.description || "No description"}</p>
            </div>

            <div className="flex items-center">
              <img
                src={view.product_image || "/images/sample.jpg"}
                alt={view.product_name}
                className="w-[200px] h-[200px] object-cover rounded border"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderView;
