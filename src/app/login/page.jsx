import React from "react";
import Login from "@/components/Login";
const LoginPage = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-red-400 to-orange-600 font-mono">
        <Login />
      </div>
    </>
  );
};

export default LoginPage;
