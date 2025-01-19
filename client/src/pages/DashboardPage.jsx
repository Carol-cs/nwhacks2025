import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <h1>This is the dashboard page.</h1>
      <nav>
        <Link to="/health-record">
          <button className="rounded bg-gray-300 p-4 w-1/4">Button 1</button>
        </Link>
        <Link to="/chat">
          <button className="rounded bg-gray-300 p-4 w-1/4">Button 2</button>
        </Link>
      </nav>
    </div>
  );
};

export default DashboardPage;
