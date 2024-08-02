import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeDashboard from "./HomeDashboard";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/DashboardLayout.scss";
import Courses from "./Courses";
import Teachers from "./Teachers";
import Students from "./Students";
import Announcements from "./Announcements";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../../features/auth/authSlice";
import Requests from "./Requests";
import MyCourses from "./MyCourses";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(checkAuth())
  //     .unwrap()
  //     .catch((err) => {
  //       console.log(err);
  //       navigate("/signIn");
  //     });
  // }, [dispatch, navigate]);

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

  const renderRoutes = () => {
    if (!user) return null;
    const role = user.role;

    switch (role) {
      case "admin":
        return (
          <>
            <Route path="/home" element={<HomeDashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/requests" element={<Requests />} />
          </>
        );
      case "teacher":
        return (
          <>
            <Route path="/home" element={<HomeDashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/announcements" element={<Announcements />} />
          </>
        );
      case "student":
        return (
          <>
            <Route path="/home" element={<HomeDashboard />} />
            <Route path="/all-courses" element={<Courses />} />
            <Route path="/my-courses" element={<MyCourses />} />

            <Route path="/announcements" element={<Announcements />} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {user && (
        <div
          className={`dashboard-layout d-flex  ${
            isOpen ? "sidebar-open" : "sidebar-closed "
          }`}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="d-flex flex-column flex-grow-1 border">
            <Header toggleSidebar={toggleSidebar} />
            <div
              style={{ height: "90vh" }}
              className="main-content flex-grow-1 p-3 border bg-gray overflow-auto no-scrollbar "
            >
              <Routes>{renderRoutes()}</Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
