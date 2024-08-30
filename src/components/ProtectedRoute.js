// components/ProtectedRoute.js
"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const isLocalStorage = typeof window !== "undefined" && window.localStorage;
  const user = isLocalStorage ? JSON.parse(localStorage.getItem("user")) : "";
  const router = useRouter();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.post(
          `http://127.0.0.1:5000/app/login`,
          user
        );
        console.log(response.data);
        if (!response.data.authenticated) {
          router.push("/login");
        }
      } catch (error) {
        console.log("Error");
        console.error("Error checking authentication:", error);
        router.push("/login");
      }
    };
    checkAuth();
  }, []);

  return children;
};

export default ProtectedRoute;
