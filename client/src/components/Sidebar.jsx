import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  HeartPulse,
  MessageSquare,
  History,
  LogOut,
  ChevronUp,
  ChevronDown,
  UserCircle,
  MessageCircleHeart,
} from "lucide-react";
import OldLogo from "./OldLogo";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.userInfo);

  return (
    <div className="fixed w-64 z-50 bg-white border-r border-gray-200 px-4 py-6 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-8 px-2">
        <MessageCircleHeart className="size-8 text-red-400" />
        <h1 className="text-xl font-bold text-red-400">HeartTalk</h1>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/health-record"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          <HeartPulse className="w-5 h-5" />
          <span>Health History</span>
        </NavLink>

        <NavLink
          to="/chat-history"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          <History className="w-5 h-5" />
          <span>Chat History</span>
        </NavLink>

        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50"
            }`
          }
        >
          <MessageSquare className="w-5 h-5" />
          <span>Chat</span>
        </NavLink>
      </nav>

      <div className="mt-auto">
        <hr className="my-4 border-gray-200" />
        <div className="relative">
          <button
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
          >
            <div className="flex items-center gap-3">
              <UserCircle className="w-5 h-5" />
              {user?.email.split("@")[0]}
            </div>
            {isProfileMenuOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {isProfileMenuOpen && (
            <div className="absolute bottom-full left-0 w-full mb-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              <div className="px-4 py-2">
                <p className="text-sm text-gray-900">{user?.email}</p>
              </div>
              <hr className="my-2 border-gray-200" />
              <button
                onClick={() => {
                  dispatch(logout());
                  navigate("/auth");
                }}
                className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
