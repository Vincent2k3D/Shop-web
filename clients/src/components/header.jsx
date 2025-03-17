import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";
import Logo from "../assets/images/Logo.png";

const header = () => {
  return (
    <>
      <nav className=" bg-green-950 flex justify-between p-1 items-center">
        <Link to={"/"}>
          {" "}
          <img src={Logo} alt="Logo" />
        </Link>
        <div>
          <input type="search" placeholder="TÌm kiếm..." />
          <button className=" bg-blue-600 w-15 rounded-2xl cursor-pointer">
            {" "}
            Tìm
          </button>
        </div>
        <div>
          <ul className="flex">
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : ""
                  };
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : ""
                  };
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hotline"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : ""
                  };
                }}
              >
                Hotline
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default header;
