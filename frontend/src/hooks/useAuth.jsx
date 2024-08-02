// src/utils/auth.js

import axios from "axios";
import { clearUser, setUser } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = async () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  try {
    const response = await axios.get("http://192.168.1.5:3000/auth/check", {
      withCredentials: true,
    });
    if (response.data.user) {
      dispatch(setUser(response.data.user));
    } else {
      dispatch(clearUser());
    }
  } catch (error) {
    dispatch(clearUser());
  }

  console.log(user);
};
