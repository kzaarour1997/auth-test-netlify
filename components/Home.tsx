"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import { setIsAuthenticated } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation"; // Import the useRouter hook

const Home = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setIsAuthenticated(true));
    } else {
      dispatch(setIsAuthenticated(false));
      router.push("/login");
    }
  }, [router, dispatch]);

  return (
    <div className="d-flex justify-content-center align-items-center m-5 ps-1 fw-bold fs-5 ">
      Logged In
    </div>
  );
};

export default Home;
