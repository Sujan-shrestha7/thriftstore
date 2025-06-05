import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import StoreHome from './storeHome';

interface Order {
  id: number;
  billno: number;
  userid: number;
  username: string;
  useraddress: string;
  usercontact: string;
  cartid: number;
  product_name: string;
  product_price: string;
  sellerid: number;
  product_image: string;
}

const OrderView: React.FC = () => {
  const [view, setView] = useState<Order | null>(null);
  const locationRouter = useLocation();
  const queryParams = new URLSearchParams(locationRouter.search);
  const productid = queryParams.get("id");

  useEffect(() => {
    if (productid) {
      axios
        .get(`http://127.0.0.1:8000/orders/orders/?id=${productid}`)
        .then((res) => {
          if (res.data.length > 0) {
            setView(res.data[0]); // Set first item of the array
          }
        })
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [productid]);

  return (
    <div>
      <StoreHome />
      <div className="ml-[273px] m-[30px]">
        {view ? (
          <div className="flex justify-center gap-[30px] border-[2px] h-[500px] border-black p-4 mb-4">
            <div>
              <h2 className="text-center text-xl font-semibold mb-4">Order Details</h2>
              <p><strong>Product Name:</strong> {view.product_name}</p>
              <p><strong>Price:</strong> Rs. {view.product_price}</p>
              <p><strong>Customer:</strong> {view.username}</p>
              <p><strong>Address:</strong> {view.useraddress}</p>
              <p><strong>Contact:</strong> {view.usercontact}</p>
              <p><strong>Bill No:</strong> {view.billno}</p>
            </div>

            <div className="flex items-center">
              <img
                src={view.product_image || "/images/sample.jpg"}
                alt={view.product_name}
                className="w-[200px] h-[200px] object-cover rounded border"
              />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default OrderView;
