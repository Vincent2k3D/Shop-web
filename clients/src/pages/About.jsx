import React from "react";
import { Link } from "react-router-dom";
import { LeafIcon, TruckIcon, HeartIcon, ShieldCheckIcon } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen px-4 py-16 text-gray-800">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 animate-fade-in-up">
            Giới thiệu RauSach
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Khởi nguồn từ đam mê mang đến thực phẩm sạch và an toàn cho mọi gia
            đình Việt
          </p>
        </div>

        {/* Content Container */}
        <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12">
          {/* Text Column */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Chào mừng đến với{" "}
              <span className="font-semibold text-green-700">DN</span> – nơi
              cung cấp thực phẩm sạch, an toàn và chất lượng cho mọi gia đình
              Việt. Chúng tôi cam kết mang đến những sản phẩm tốt nhất từ trang
              trại đến bàn ăn của bạn.
            </p>
            <p className="text-lg leading-relaxed">
              Với sứ mệnh "
              <em className="text-green-700">Vì sức khỏe cộng đồng</em>", chúng
              tôi hợp tác với các trang trại uy tín, đảm bảo quy trình canh tác
              hữu cơ và kiểm định nghiêm ngặt trước khi đến tay khách hàng.
            </p>
          </div>

          {/* Features Column */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-green-800">
              Tại sao chọn chúng tôi?
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: LeafIcon,
                  text: "Nguồn gốc rõ ràng – 100% sản phẩm từ nông trại sạch"
                },
                {
                  icon: TruckIcon,
                  text: "Giao hàng nhanh – Tận nơi trong vòng 24h tại nội thành"
                },
                {
                  icon: HeartIcon,
                  text: "Hỗ trợ 24/7 – Đội ngũ tư vấn luôn sẵn sàng phục vụ"
                },
                {
                  icon: ShieldCheckIcon,
                  text: "Đảm bảo hoàn tiền nếu sản phẩm không đạt chất lượng"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300"
                >
                  <feature.icon className="text-green-600 w-8 h-8" />
                  <span className="text-lg text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-green-100 p-8 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Hãy để chúng tôi đồng hành cùng sức khỏe của bạn!
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Cảm ơn bạn đã tin tưởng và lựa chọn RauSach.
          </p>
          <Link
            to="/"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-full 
            hover:bg-green-800 transition-all duration-300 
            shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Quay về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
