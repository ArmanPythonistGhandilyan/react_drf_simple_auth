import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    auth().catch(() => setIsAuthorized(false));
  }, []);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorized(false);
    }
  };

  // Function to check authorization status
  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    // If no token is found, set isAuthorized to false and return
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    // Decode the JWT token to extract expiration time
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;

    const now = Date.now() / 1000;

    // Check if the token has expired
    if (tokenExpiration < now) {
      // If the token has expired, attempt to refresh it
      await refreshToken();
    } else {
      // If the token is still valid, set isAuthorized to true
      setIsAuthorized(true);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
}
