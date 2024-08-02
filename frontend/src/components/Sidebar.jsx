import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaBullhorn,
  FaArrowLeft,
  FaSignOutAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import "../styles/Sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";

function Sidebar({ isOpen, setIsOpen }) {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log("logout clicked");
    dispatch(logoutUser())
      .then(() => {
        console.log("Logged out successfully");
        navigate("/signIn");
      })
      .catch((error) => {
        console.error("Logout failed: ", error);
      });
  };
  const studentLinks = [
    {
      to: "/dashboard/home",
      label: "Dashboard",
      icon: <FaHome className="me-2" />,
    },
    {
      to: "/dashboard/my-courses",
      label: "My Courses",
      icon: <FaBook className="me-2" />,
    },
    {
      to: "/dashboard/all-courses",
      label: "All Courses",
      icon: <FaBook className="me-2" />,
    },

    {
      to: "/dashboard/announcements",
      label: "Announcements",
      icon: <FaBullhorn className="me-2" />,
    },
  ];

  const adminLinks = [
    // Define links for admin role here
    {
      to: "/dashboard/home",
      label: "Dashboard",
      icon: <FaHome className="me-2" />,
    },
    {
      to: "/dashboard/courses",
      label: "Courses",
      icon: <FaBook className="me-2" />,
    },
    {
      to: "/dashboard/teachers",
      label: "Teachers",
      icon: <FaBook className="me-2" />,
    },
    {
      to: "/dashboard/students",
      label: "Students",
      icon: <FaBook className="me-2" />,
    },
    {
      to: "/dashboard/announcements",
      label: "Announcements",
      icon: <FaBullhorn className="me-2" />,
    },
    {
      to: "/dashboard/requests",
      label: "Requests",
      icon: <FaExclamationCircle className="me-2" />,
    },
  ];

  const teacherLinks = [
    // Define links for teacher role here
    { to: "/dashboard", label: "Dashboard", icon: <FaHome className="me-2" /> },
    {
      to: "/dashboard/courses",
      label: "Courses",
      icon: <FaBook className="me-2" />,
    },
    {
      to: "/dashboard/announcements",
      label: "Announcements",
      icon: <FaBullhorn className="me-2" />,
    },
  ];

  const role = user.role;

  const getNavLinks = () => {
    switch (role) {
      case "student":
        return studentLinks;
      case "admin":
        return adminLinks;
      case "teacher":
        return teacherLinks;
      default:
        return [];
    }
  };

  return (
    <div
      className={`sidebar d-flex flex-column  p-3 bg-white ${
        isOpen ? "open" : "closed"
      }`}
    >
      <div className="d-flex align-items-center mb-3 mx-auto ">
        <h1
          style={{ letterSpacing: "3px" }}
          className="font-weight-bold text-dark-gray my-auto "
        >
          Academi<span className="text-orange">X</span>
        </h1>{" "}
        <button
          className="btn btn-primary d-md-none ml-3 bg-white border-0 my-auto text-gray"
          onClick={() => setIsOpen(false)}
        >
          <FaArrowLeft />
        </button>
      </div>
      <Nav className="flex-column">
        {getNavLinks().map((link, index) => (
          <Nav.Link
            key={index}
            as={NavLink}
            to={link.to}
            className="sidebar-link"
            activeClassName="active"
          >
            <span className="sidebar-label">
              {link.icon} {link.label}
            </span>
          </Nav.Link>
        ))}
      </Nav>
      <Nav className="flex-column mt-auto">
        <Nav.Link onClick={handleLogout} className="sidebar-link">
          <span className="sidebar-label">
            <FaSignOutAlt className="me-2" /> Logout
          </span>
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
