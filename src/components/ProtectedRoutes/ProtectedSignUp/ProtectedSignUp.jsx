import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedSignUp = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("user"));
  if (token) {
    return <Navigate to={"/profile/my-profile"} />;
  } else {
    return children;
  }
};

export default ProtectedSignUp;
