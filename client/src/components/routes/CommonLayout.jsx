import React from "react";

import { useParams, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import TopNavigationBar from "../TopNavigationBar";

const CommonLayout = () => {
  return (
    <div>
      <TopNavigationBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default CommonLayout;
