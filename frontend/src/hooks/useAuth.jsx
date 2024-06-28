import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3000/auth/check", {
          withCredentials: true,
        });
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/signIn");
        }
      }
    };

    checkAuth();
  }, [navigate]);
};

export default useAuth;
