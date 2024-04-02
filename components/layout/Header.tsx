"use client";
import { setIsAuthenticated, setUser } from "@/redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { useEffect } from "react";
import { useGetUserQuery } from "@/redux/api/authApi";
import { RootState } from "@/redux/store"; // Assuming you have RootState defined
import { AppDispatch } from "@/redux/store"; // Assuming you have AppDispatch defined

const Header = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector(
    (state: RootState) => state.auth
  );
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && !isAuthenticated) {
      dispatch(setIsAuthenticated(true));
    } else if (!token && isAuthenticated) {
      dispatch(setUser(null));
      dispatch(setIsAuthenticated(false));
    }
  }, [dispatch, isAuthenticated]);

  const { data: userData, isSuccess } = useGetUserQuery(
    isAuthenticated ? localStorage.getItem("token") ?? "" : ""
  );

  useEffect(() => {
    if (isSuccess && userData) {
      dispatch(setUser(userData));
    }
  }, [isSuccess, userData, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    dispatch(setUser(null)); // Clear user data in Redux store
    dispatch(setIsAuthenticated(false)); // Update isAuthenticated state
    // Redirect to login page
    window.location.href = "/login";
  };
  return (
    <nav className="navbar sticky-top py-2">
      <div className="container">
        <div className="col-6 col-lg-3 mt-3 mt-md-0 text-end">
          {user ? (
            <div className="ml-4 dropdown d-line">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="placeholder-glow ps-1">
                  {" "}
                  {user?.user.name}
                </span>
              </button>

              <div
                className="dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton1"
              >
                <button
                  className="dropdown-item text-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="btn btn-danger px-4 text-white login-header-btn float-right"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
