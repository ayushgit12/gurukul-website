// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import notfoundimage from "../assets/dowload.avif";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4 text-gray-700">
      <img
        src={notfoundimage}
        alt="404 Not Found"
        className="w-full max-w-md mb-8"
      />

      <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
      <p className="text-lg mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
