import { useState } from "react";
import baner1 from "../assets/images/banner1.png";
import baner2 from "../assets/images/banner2.png";
import baner3 from "../assets/images/banner3.png";
import baner4 from "../assets/images/banner4.png";

import Cart from "../components/Cart.jsx";

const Home = () => {
  const allProducts = Array.from({ length: 20 }, (_, i) => <Cart key={i} />);

  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? allProducts : allProducts.slice(0, 10);

  return (
    <>
      <div className="subheader h-10 bg-amber-500">Danh Muc San Pham</div>

      <div className="container-home flex w-full">
        <div className="w-1/3 text-nowrap flex">Xin Chao</div>
        <div className="w-2/3">
          <img src={baner1} alt="Banner1" className="w-5/6" />
          <div className="flex w-5/6 mt-4 justify-between">
            <img src={baner2} alt="" className="w-[32%] rounded-[10px]" />
            <img src={baner3} alt="" className="w-[32%] rounded-[10px]" />
            <img src={baner4} alt="" className="w-[32%] rounded-[10px]" />
          </div>
        </div>
      </div>

      <div className="product mt-10 px-4">
        <p className="text-3xl font-semibold mb-4">Phân bón</p>

        <div className="grid grid-cols-5 gap-4 justify-items-center">
          {visibleProducts}
        </div>

        {!showAll && allProducts.length > 10 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Xem thêm
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
