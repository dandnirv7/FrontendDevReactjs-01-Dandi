import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-2xl text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-2 mt-8 text-white bg-[#002b56] rounded-md hover:bg-[#002b56]/75"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
