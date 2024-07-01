// src/pages/DashboardLayout.jsx

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeDashboard from "./HomeDashboard";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/DashboardLayout.scss";
import Courses from "./Courses";
import Teachers from "./Teachers";
import Students from "./Students";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`dashboard-layout d-flex vh-100 ${
        isOpen ? "sidebar-open" : "sidebar-closed "
      }`}
    >
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="d-flex flex-column flex-grow-1 border">
        <Header toggleSidebar={toggleSidebar} />
        <div className="main-content flex-grow-1 p-3 border bg-gray">
          <Routes>
            <Route path="/home" element={<HomeDashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
