import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedBasket = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  if (!token) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};

export default ProtectedBasket;
