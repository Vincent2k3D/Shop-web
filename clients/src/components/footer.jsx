import React from "react";
import "../styles/footer.css";

const footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white p-9">
        <div class="flex justify-between flex-row max-[720px]:flex-col">
          <div class="footer-section min-[720px]:w-[40%] mr-10 ">
            <h3>Về chúng tôi</h3>
            <p>
              Nông Nghiệp DN là trang thông tin chuyên về lĩnh vực nông nghiệp,
              cung cấp kiến thức, kỹ thuật về chăm sóc phòng bệnh, chửa bệnh cho
              cây mới nhất cho bà con nông dân.
            </p>
          </div>

          <div class="footer-section min-[720px]:w-[30%] mr-10">
            <h3>Liên hệ</h3>
            <p>Email: Vincent2k3vd@gmail.com</p>
            <p>Điện thoại: 0339455501</p>
            <p>
              Địa chỉ: Số 39A, Đường Gò Dưa, Phường Tam Bình, Thủ Đức, Thành phố
              Hồ Chí Minh
            </p>
          </div>

          <div class="footer-section min-[720px]:w-[30%]">
            <h3>Theo dõi</h3>
            <p>Kết nối với chúng tôi trên các mạng xã hội</p>
            <div class="social-links">
              <a href="#">Facebook</a> |<a href="#">Youtube</a> |
              <a href="#">Zalo</a>
            </div>
          </div>
        </div>
        <hr className="w-full text-white mt-10 "></hr>
        <div class="text-center mt-[30px]">
          <p>&copy; 2025 Nông Nghiệp DN. Tất cả quyền được bảo lưu.</p>
        </div>
      </footer>
    </>
  );
};

export default footer;
