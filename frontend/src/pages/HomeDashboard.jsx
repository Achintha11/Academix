import React from "react";
import useAuth from "../hooks/useAuth";

const HomeDashboard = () => {
  useAuth();
  return (
    <div>
      HomeDashboard
      <div>HomeDashboard</div>
      <div>HomeDashboard</div>
      <div>HomeDashboard</div>
    </div>
  );
};

export default HomeDashboard;
