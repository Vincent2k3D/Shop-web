import React, { useState } from "react";
import {
  ShoppingCartIcon,
  HeartIcon,
  TruckIcon,
  ShieldCheckIcon,
  StarIcon
} from "lucide-react";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Đen");

  const colors = ["Đen", "Đỏ", "Vàng", "Xanh dương"];
  const price = 165000;

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => Math.min(prev + 1, 39996));
    } else if (type === "decrease") {
      setQuantity((prev) => Math.max(prev - 1, 1));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-100">
      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">
        {/* Product Image Section */}
        <div>
          <div className="border rounded-lg overflow-hidden mb-4">
            <img
              src={product1}
              alt="Motorcycle Accessory"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((img) => (
              <img
                key={img}
                src={product2}
                alt={`Product thumbnail ${img}`}
                className="w-16 h-16 object-cover border rounded cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div>
          {/* Product Title and Rating */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Catte Che Sên Nhôm CNC Gắn Winner, Winner X V1, Exciter 2011 -
              2020
            </h1>
            <div className="flex items-center">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(12 Đánh Giá)</span>
            </div>
          </div>

          {/* Price Section */}
          <div className="mb-4">
            <span className="text-3xl font-bold text-red-600">
              {price.toLocaleString()}đ
            </span>
            <div className="mt-2">
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded mr-2">
                Giảm 3k
              </span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                Giảm 5k
              </span>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Màu Sắc</h3>
            <div className="flex space-x-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-blue-500 ring-2 ring-blue-300"
                      : "border-gray-300"
                  }`}
                  style={{
                    backgroundColor:
                      color === "Đen"
                        ? "black"
                        : color === "Đỏ"
                        ? "red"
                        : color === "Vàng"
                        ? "yellow"
                        : color === "Xanh dương"
                        ? "blue"
                        : "gray"
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Số Lượng</h3>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="bg-gray-200 px-3 py-1 rounded-l"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-16 text-center border py-1"
              />
              <button
                onClick={() => handleQuantityChange("increase")}
                className="bg-gray-200 px-3 py-1 rounded-r"
              >
                +
              </button>
              <span className="ml-4 text-gray-600">39,996 sản phẩm có sẵn</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-4">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg flex items-center justify-center hover:bg-orange-600 transition">
              <ShoppingCartIcon className="mr-2" />
              Thêm Vào Giỏ Hàng
            </button>
            <Link
              to={"/checkout"}
              className="flex-1 bg-red-500 text-white py-3 rounded-lg flex items-center justify-center hover:bg-red-600 transition"
            >
              <button className="">Mua Ngay</button>
            </Link>
          </div>

          {/* Additional Benefits */}
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <TruckIcon className="mr-2 text-green-600" />
              <span>Vận Chuyển: Nhận vào hôm nay, phí giao 0đ</span>
            </div>
            <div className="flex items-center mb-2">
              <ShieldCheckIcon className="mr-2 text-green-600" />
              <span>Bảo Hiểm: Bảo vệ người tiêu dùng</span>
            </div>
            <div className="flex items-center">
              <HeartIcon className="mr-2 text-green-600" />
              <span>Trả hàng miễn phí 15 ngày</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
