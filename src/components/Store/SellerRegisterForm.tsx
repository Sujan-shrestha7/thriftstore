// src/components/SellerRegisterForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SellerRegisterForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Clear previous errors

    if (!fullName || !address || !contact || !email || !password) {
      setError("All fields are required.");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    // Handle registration logic here
    console.log('Registration Attempt:');
    console.log('Full Name:', fullName);
    console.log('Address:', address);
    console.log('Contact:', contact);
    console.log('Email:', email);
    console.log('Password:', password);

    // Replace with your actual registration API call or logic
    alert(`Registering Seller: ${fullName} with Email: ${email}`);

    // Reset form (optional)
    // setFullName('');
    // setAddress('');
    // setContact('');
    // setEmail('');
    // setPassword('');
    // setError(null);

    // Example: Navigate to a success page or login page after registration
    // navigate('/registration-success');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg"> {/* Increased max-w for more fields */}
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Seller Registration
        </h2>
        {error && (
          <div className="mb-6 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="register-fullname"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="register-fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="register-address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="register-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Enter your business or home address"
              required
            />
          </div>

          <div>
            <label
              htmlFor="register-contact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Number
            </label>
            <input
              type="tel" // Using type="tel" for semantic contact number input
              id="register-contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="e.g., 98XXXXXXXX"
              required
            />
          </div>

          <div>
            <label
              htmlFor="register-email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="register-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="register-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="register-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Create a strong password"
              required
              minLength={6}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              navigate("/sellerform");
            }}
            className="font-medium text-green-600 hover:text-green-500"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SellerRegisterForm;