"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const page = () => {
  const [user, setUser] = useState({});
  // console.log(user);
  const urUser = {
    name: "None",
    email: "None",
    password: "None",
    is_active: false,
  };
  const logoutHandler = () => {
    const isLocalStorage = typeof window !== "undefined" && window.localStorage;
    isLocalStorage ? localStorage.removeItem("user") : "";
    setUser(urUser);
  };
  useEffect(() => {
    const isLocalStorage = typeof window !== "undefined" && window.localStorage;
    const data = isLocalStorage
      ? JSON.parse(localStorage.getItem("user"))
      : urUser;
    setUser(data);
  }, []);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-red-400 to-orange-600 font-mono">
        <div className="w-1/3 flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold text-white tracking-wider">
            Welcome to JWT Auth
          </h1>
          <p className="border p-2 rounded-md text-gray-300">
            This website is built for User Authentication learning purpose. I
            used <span className="font-bold text-black">JWT</span> Tokens for
            this. Tech stack is{" "}
            <span className="font-bold text-black">Nextjs</span> for front-end
            and <span className="font-bold text-black">Django</span> for
            back-end. Here you have a user signup, login and website home page.
            User can access only if he/her is Authenticated.
          </p>
          <div className="flex gap-5">
            {user?.is_active ? (
              <button
                onClick={() => {
                  logoutHandler();
                }}
                className="border py-2 glass px-4 rounded-md text-white font-bold hover:scale-105 duration-300 ease-out"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href={"/signup"}
                  className="border py-2 glass px-4 rounded-md text-white font-bold hover:scale-105 duration-300 ease-out"
                >
                  Signup
                </Link>
                <Link
                  href={"/login"}
                  className="border py-2 glass px-4 rounded-md text-white font-bold hover:scale-105 duration-300 ease-out"
                >
                  Login
                </Link>
              </>
            )}

            <Link
              href={"/home"}
              className="border py-2 glass px-4 rounded-md text-white font-bold hover:scale-105 duration-300 ease-out"
            >
              HomePage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
