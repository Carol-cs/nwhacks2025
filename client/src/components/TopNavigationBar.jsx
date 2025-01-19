import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import profilePhoto from "../images/profile-photo.png";
import { logout } from "../slices/authSlice";

const TopNavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <button onClick={() => navigate("/")}>
          <div className="flex items-center space-x-4">
            <img src={profilePhoto} alt="Logo" className="logo" />
            <h1 className="text-xl font-bold">SeniorBuddy</h1>
          </div>
        </button>
        <nav className="flex space-x-6">
          <button
            className="rounded-button rounded-button-width"
            onClick={() => navigate("/")}
          >
            Home
          </button>

          <button
            className="rounded-button rounded-button-width"
            onClick={() => navigate("/health-record")}
          >
            Health Record
          </button>
          <button
            className="rounded-button rounded-button-width"
            onClick={() => navigate("/chat")}
          >
            Chat
          </button>
        </nav>
        <div className="items-center">
          <button onClick={() => setShowDropdown(!showDropdown)}>
            <img
              src={profilePhoto}
              alt="Profile Photo"
              className="profile-button"
            />
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow-md">
              <ul>
                {/* <li className="px-4 py-2 hover:bg-gray-100">Settings</li> */}
                <li className="px-4 py-2 hover:bg-gray-100">
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
