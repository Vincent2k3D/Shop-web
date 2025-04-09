import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import "../styles/header.css";
import Login from "./Login";
import RegisterForm from "./Register";
import VerifyCode from "./VerifyCode";
import authService from "../services/AuthService";

const Header = () => {
  const [formType, setFormType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [codeVerify, setCodeVerify] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    await authService.login(email, password, setError, () => {
      setError("");
      setFormType("");
      setIsLoggedIn(true);
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await authService.register(name, email, password, setError, () => {
      setError("");
      setFormType("verify");
    });
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    await authService.verify(codeVerify, setError, () => {
      setFormType("login");
    });
  };

  const renderForm = () => {
    switch (formType) {
      case "login":
        return (
          <Login
            email={email}
            password={password}
            onLogin={handleLogin}
            error={error}
            onSwitchToRegister={() => {
              setFormType("register");
              setError("");
            }}
            setEmail={setEmail}
            setPassword={setPassword}
          />
        );
      case "register":
        return (
          <RegisterForm
            email={email}
            password={password}
            name={name}
            onRegister={handleRegister}
            error={error}
            onSwitchToLogin={() => {
              setFormType("login");
              setError("");
            }}
            setEmail={setEmail}
            setPassword={setPassword}
            setName={setName}
          />
        );
      case "verify":
        return (
          <VerifyCode
            codeVerify={codeVerify}
            onVerify={handleVerify}
            onSwitchToLogin={() => {
              setFormType("login");
            }}
            error={error}
            setCode={setCodeVerify}
          />
        );
      default:
        return null;
    }
  };

  const linkClass =
    "px-4 py-2 rounded-xl font-medium text-black hover:text-white hover:bg-green-600 transition-all duration-300";

  const activeClass = "bg-green-700 text-white shadow-md";

  return (
    <>
      <nav className="bg-green-900 px-6 py-3 shadow-lg flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
          <span className="text-white text-2xl font-semibold">DN</span>
        </Link>

        {/* Search bar */}
        <div className="flex items-center space-x-2">
          <input
            type="search"
            placeholder="Tìm kiếm..."
            className="px-4 py-2 rounded-full border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-60"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition duration-300">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Giới thiệu
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            Liên hệ
          </NavLink>
        </div>

        {/* Login Button */}
        <div className="relative">
          {isLoggedIn ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // icon user
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition"
            />
          ) : (
            <button
              onClick={() => setFormType("login")}
              className="px-4 py-2 bg-white text-green-800 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition"
            >
              Đăng nhập
            </button>
          )}

          {/* Form hiển thị */}
          {formType && (
            <div className="z-50 absolute right-0 mt-2 w-[400px] bg-white rounded-xl shadow-2xl p-6">
              <div className="flex justify-end">
                <button
                  onClick={() => setFormType("")}
                  className="text-red-500 text-xl font-bold hover:text-red-700"
                >
                  &times;
                </button>
              </div>
              {renderForm()}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
