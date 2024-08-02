/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";
import { FiBell, FiSpeaker } from "react-icons/fi";
import "../styles/Header.scss";
import { useSelector } from "react-redux";

function Header({ toggleSidebar }) {
  const { user } = useSelector((store) => store.auth);
  // Sample user data (you may replace this with actual data fetched from your backend)
  const userData = {
    name: user.name,
    role: user.role,
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s", // Replace with actual image URL
  };

  return (
    <>
      {user && (
        <header className="header d-flex align-items-center justify-content-between p-3 bg-white">
          <div className="d-flex align-items-center">
            <button
              className="btn d-md-none btn-primary bg-white"
              onClick={toggleSidebar}
            >
              <FaBars className="fs-5" />
            </button>
          </div>
          <div className="d-flex">
            <button className="btn btn-link text-dark mx-3 ">
              <FiSpeaker className="fs-5" />
            </button>
            <button className="btn btn-link text-dark mx-3">
              <FiBell className="fs-5" />
            </button>
            <div className="d-flex align-items-center ms-3 mx-3">
              <img
                src={userData.profileImage}
                alt="User Profile"
                className="rounded-circle border"
                style={{ width: "40px", height: "40px" }}
              />
              <div className="ms-2 text-dark-gray">
                <span className="font-weight-bold">{userData.name}</span>
                <br />
                <span className="text-muted">{userData.role}</span>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
