"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "@/components/ProtectedRoute";
const Home = () => {
  const notify = () =>
    toast.success("Welcome to homepage!", {
      closeOnClick: true,
    });
  useEffect(() => {
    notify();
  }, []);
  return (
    <>
      <ProtectedRoute>
        <div className="w-full h-screen flex flex-col items-center pt-3 bg-gradient-to-r from-red-400 to-orange-600 font-mono">
          <Navbar />
          <div className="pt-72">
            <h1 className="font-bold text-5xl">Welcome to Home Page.</h1>
          </div>
          <ToastContainer />
        </div>
      </ProtectedRoute>
    </>
  );
};

export default Home;
