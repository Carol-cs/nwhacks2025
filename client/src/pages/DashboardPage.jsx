import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <h1>DashboardPage</h1>
      <nav>
        <ul>
          <li className="rounded bg-gray-300 p-4 w-1/4">
            <Link to="/health-record">Go to Health Record</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardPage;
