import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeartTalkLogo from "../components/HeartTalkLogo";
import OldLogo from "../components/OldLogo";
import profilePhoto from "../images/profile-photo.png";
import { logout } from "../slices/authSlice";
import { useDispatch } from "react-redux";

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
      <div className="flex justify-between items-center p-0 bg-white shadow-md">
        {/* left-side components*/}
        <button onClick={() => navigate("/")}>
          <div className="flex items-center space-x-0">
            {/* <HeartTalkLogo width="250" height="60" /> */}
            <OldLogo />
            <h1 className="text-xl font-bold">HeartTalk</h1>
          </div>
        </button>
        {/* center components */}
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
            Health Activity
          </button>
          <button
            className="rounded-button rounded-button-width"
            onClick={() => navigate("/chat")}
          >
            NovaChat
          </button>
        </nav>
        {/* right-side components */}
        <div className="items-center p-4">
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
