import React from "react";
import product1 from "../assets/images/product1.png";

const Checkout = () => {
  return (
    <div className="flex justify-center w-full items-center">
      <div className="grid grid-cols-2 w-4/5 gap-4 p-4">
        <div className="grid gap-4">
          <div className="rounded-2xl shadow-lg p-4">
            <h1 className="font-bold mb-2">Thông Tin Vận Chuyển</h1>
            <div className="grid gap-2">
              {["Họ Tên", "Số Điện Thoại", "Email", "Địa Chỉ Nhà"].map(
                (placeholder, index) => (
                  <input
                    key={index}
                    type={placeholder === "Email" ? "email" : "text"}
                    className="border rounded-xl p-3 w-full"
                    placeholder={placeholder}
                    required
                  />
                )
              )}
            </div>
          </div>

          <div className="rounded-2xl shadow-lg p-4">
            <h1 className="font-bold mb-2">Phương Thức Thanh Toán</h1>
            <div className="grid gap-2">
              {[
                "Thanh toán khi giao hàng",
                "Thanh toán qua VNPay",
                "Thanh toán qua ngân hàng"
              ].map((method, index) => (
                <button
                  key={index}
                  className="border rounded-xl p-3 w-full hover:bg-gray-100"
                >
                  {method}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-2xl shadow-lg p-4">
            <label htmlFor="notes" className="block font-medium mb-2">
              Viết gì đó
            </label>
            <textarea
              id="notes"
              className="p-3 w-full border rounded-xl h-20"
            ></textarea>
          </div>
        </div>

        <div className="p-4 shadow-lg w-3/4">
          <h1 className="font-bold mb-4">Giỏ Hàng</h1>
          <div className="flex justify-between border-b pb-2 mb-2">
            <img
              src={product1}
              alt="Sản phẩm"
              className="w-16 h-16 border rounded-xl"
            />
            <div>
              <h2 className="font-medium p-1">Tên sản phẩm</h2>
              <p className="text-red-500 text-[15px] font-semibold p-2">Giá</p>
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-red-500 hover:bg-red-700 text-white rounded-xl px-3 py-1 mb-2">
                Xóa
              </button>
              <div className="flex items-center">
                <label htmlFor="quantity" className="mr-2">
                  Số lượng
                </label>
                <input
                  id="quantity"
                  type="number"
                  className="w-14 border rounded text-center"
                  defaultValue={1}
                  min={1}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b pb-2 mb-2">
            <img
              src={product1}
              alt="Sản phẩm"
              className="w-16 h-16 border rounded-xl"
            />
            <div>
              <h2 className="font-medium p-1">Tên sản phẩm</h2>
              <p className="text-red-500 text-[15px] font-semibold p-2">Giá</p>
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-red-500 hover:bg-red-700 text-white rounded-xl px-3 py-1 mb-2">
                Xóa
              </button>
              <div className="flex items-center">
                <label htmlFor="quantity" className="mr-2">
                  Số lượng
                </label>
                <input
                  id="quantity"
                  type="number"
                  className="w-14 border rounded text-center"
                  defaultValue={1}
                  min={1}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b pb-2 mb-2">
            <img
              src={product1}
              alt="Sản phẩm"
              className="w-16 h-16 border rounded-xl"
            />
            <div>
              <h2 className="font-medium p-1">Tên sản phẩm</h2>
              <p className="text-red-500 text-[15px] font-semibold p-2">Giá</p>
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-red-500 hover:bg-red-700 text-white rounded-xl px-3 py-1 mb-2">
                Xóa
              </button>
              <div className="flex items-center">
                <label htmlFor="quantity" className="mr-2">
                  Số lượng
                </label>
                <input
                  id="quantity"
                  type="number"
                  className="w-14 border rounded text-center"
                  defaultValue={1}
                  min={1}
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-bold mb-4">Mã khuyến mãi</h1>
            <div className="flex justify-between flex-col gap-3 rounded-2xl my-5">
              <div className="w-full sm:w-auto md:w-auto">
                <button className="z-0 gap-5 w-full rounded-xl group relative appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden  outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2  data-[focus-visible=true]:outline-offset-2  data-[pressed=true]:scale-[0.97]  motion-reduce:transition-none ring-1 ring-[#D4D4D4] py-2  px-3 flex justify-between cursor-pointer items-center">
                  <div className="flex items-center gap-3">
                    <i class="fa-solid fa-ticket"></i>
                    <p className="text-sm">Chọn Mã</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center gap-4 px-3 py-1 rounded-xl bg-[#E1F3FE]">
                      <i class="fa-solid fa-star-of-david"></i>
                      <p className="text-sm text-[#075783]">Giảm giá 15,000₫</p>
                    </div>
                    <div className="rotate-[-90deg]">
                      <i class="fa-solid fa-angles-right"></i>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex gap-2 my-5">
              <input
                type="text"
                placeholder="Nhập mã..."
                className="border rounded-xl p-2 flex-1"
              />
              <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-xl">
                Áp Dụng
              </button>
            </div>
          </div>
          <div>
            <h1 className="font-bold mb-4">Tóm tắt đơn hàng</h1>
            <div className="">
              <div className="flex justify-between p-2">
                <label htmlFor="p">Phí vận chuyển:</label>
                <p>123 đ</p>
              </div>
              <div className="flex justify-between p-2">
                <label htmlFor="p">Mã giảm giá:</label>
                <p>-5192 đ</p>
              </div>
              <div className="flex justify-between p-2">
                <label htmlFor="p">Tổng tiền:</label>
                <p>4.233.343 đ</p>
              </div>
            </div>
            <button className="w-full p-4 rounded-xl outline-2 outline-green-500 hover:bg-green-500 my-3">
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
