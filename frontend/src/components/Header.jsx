import React from "react";
import { FaBars } from "react-icons/fa";
import { FiBell, FiSpeaker } from "react-icons/fi";
import "../styles/Header.scss";

function Header({ toggleSidebar }) {
  // Sample user data (you may replace this with actual data fetched from your backend)
  const user = {
    name: "Achintha Peiris",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s", // Replace with actual image URL
  };

  return (
    <header className="header d-flex align-items-center justify-content-between p-3 bg-white">
      <div className="d-flex align-items-center">
        <button
          className="btn d-md-none btn-primary bg-white"
          onClick={toggleSidebar}
        >
          <FaBars className="fs-5" />
        </button>
      </div>
      <div className="d-flex   ">
        <button className="btn btn-link text-dark mx-3 ">
          <FiSpeaker className="fs-5" />
        </button>
        <button className="btn btn-link text-dark mx-3">
          <FiBell className="fs-5" />
        </button>
        <div className="d-flex align-items-center ms-3 mx-3">
          <img
            src={user.profileImage}
            alt="User Profile"
            className="rounded-circle border"
            style={{ width: "40px", height: "40px" }}
          />
          <span className="ms-2 text-dark-gray font-weight-bold">
            {user.name}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
