// src/components/Sidebar.jsx

import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaHome, FaChartBar, FaUser, FaCog, FaTimes } from "react-icons/fa";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaBullhorn,
  FaArrowLeft,
} from "react-icons/fa";
import "../styles/Sidebar.scss";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`sidebar d-flex flex-column vh-100 p-3 bg-white ${
        isOpen ? "open" : "closed"
      }`}
    >
      <div className="d-flex align-items-center mb-3 mx-auto">
        <h1 className="font-weight-bold text-dark-gray ">
          Academi<span className="text-orange">X</span>
        </h1>{" "}
        <button
          className="btn btn-primary d-md-none ml-3 bg-white "
          onClick={() => setIsOpen(false)}
        >
          <FaArrowLeft />
        </button>
      </div>
      <Nav className="flex-column">
        <Nav.Link
          as={NavLink}
          exact={true}
          to="/dashboard/home"
          className="sidebar-link"
          activeClassName="active"
        >
          <span className="sidebar-label">
            {" "}
            {/* Wrap label in a span for styling */}
            <FaTachometerAlt className="me-2" />
            Dashboard
          </span>
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/dashboard/analytics"
          className="sidebar-link"
          activeClassName="active"
        >
          <span className="sidebar-label">
            {" "}
            {/* Wrap label in a span for styling */}
            <FaBook className="me-2" />
            Courses
          </span>
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/dashboard/profile"
          className="sidebar-link"
          activeClassName="active"
        >
          <span className="sidebar-label">
            {" "}
            {/* Wrap label in a span for styling */}
            <FaChalkboardTeacher className="me-2" />
            Teachers
          </span>
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to="/dashboard/settings"
          className="sidebar-link"
          activeClassName="active"
        >
          <span className="sidebar-label">
            {" "}
            {/* Wrap label in a span for styling */}
            <FaUserGraduate className="me-2" />
            Students
          </span>
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
