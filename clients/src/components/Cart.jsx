import React from "react";
import { ShoppingCartIcon } from "lucide-react";
import product1 from "../assets/images/product1.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to={"/details"}>
      <div className="w-64 bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:shadow-2xl hover:scale-105 duration-300">
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 p-4">
          <img
            src={product1}
            alt="MacBook Air M2"
            className="w-full h-auto object-contain mix-blend-multiply"
          />
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -43%
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">
              Góp 0%, 0 phí
            </span>
            <div className="flex items-center space-x-1 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 2a9 9 0 0 1 9 9c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 9-9z" />
                <circle cx="12" cy="9" r="3" />
              </svg>
              <span className="text-xs">Apple</span>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            MacBook Air M2 13.6"
            <span className="block text-xs text-gray-500">(16GB/256GB)</span>
          </h3>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-red-600">
                22,790,000 đ
              </span>
              <span className="block text-xs text-gray-500 line-through">
                39,990,000 đ
              </span>
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
              <ShoppingCartIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
