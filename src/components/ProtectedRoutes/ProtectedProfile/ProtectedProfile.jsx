import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedProfile = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("user"));
  if (!token) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};

export default ProtectedProfile;
