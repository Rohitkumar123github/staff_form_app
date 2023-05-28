
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get('http://localhost:8000/formData');
      setFormData(response.data);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
      setIsLoading(false)
    }
  };

  return (<>
    {formData && !isLoading &&(
      <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold mb-4 text-center">Staff Information</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {formData.map((user) => (
        <div key={user._id} className="bg-white rounded shadow-lg p-4">
          <h2 className="text-lg font-bold mb-2 text-center">{user.name}</h2>
          <div className="aspect-w-2 aspect-h-3 mb-2">
            <div className="overflow-hidden rounded" 
                >
              <img
                src={`http://localhost:8000/uploads/${user.file}`}
                alt="User Image"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <p className="text-sm text-gray-600 font-semibold">Technology - {user.technology}</p>
        </div>
      ))}
    </div>
  </div>
    )}
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <div className="flex items-center space-x-2 text-gray-600">
            <svg
              className="animate-spin w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm2-5.28V4.02C7.49 4.007 8 4.497 8 5.011v6.001h.001c0 .804.316 1.57.887 2.14l1.42-1.42A3.99 3.99 0 018 11.01zm5.657-5.657a5.978 5.978 0 00-2.829-.688l-1.417 1.416c.723.208 1.408.533 2.022 1.147l1.42-1.42zm3.535 3.536l-1.42 1.42a5.978 5.978 0 00-.687-2.829l1.416-1.417a3.99 3.99 0 011.148 2.026z"
              ></path>
            </svg>
            <span>Loading...</span>
          </div>
        </div>
      )}
    {!isLoading && formData.length === 0 && (
        <>
        
        <h2 className='text-center font-bold'> Currently No Staff Information Present!!! </h2>
        <h3 className='text-center'> Add Staff information by clicking on the Form above.</h3>
        
        </>)}
    </>
  );
};

export default Dashboard;
