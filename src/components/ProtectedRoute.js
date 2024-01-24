import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Check if the token is present in localStorage
  const isTokenPresent = !!localStorage.getItem("token");

  if (isTokenPresent) {
    return children; // Render the protected content
  } else {
    // If the token is not present, navigate to the login page
    return <Navigate to="/" />;
  }
}
