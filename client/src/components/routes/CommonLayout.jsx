import React from "react";

import { useParams, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar";

const CommonLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default CommonLayout;
