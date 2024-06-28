import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DashboardLayout from "./pages/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
