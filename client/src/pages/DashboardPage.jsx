import React from "react";
import { Link, useNavigate } from "react-router-dom"; 

const DashboardPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center">
        <h1>This is the dashboard page.</h1>
      </div>
      <nav className="flex justify-start space-x-4">
        <button
            onClick={() => navigate('/')}
            className="page-preview-button"
        >
          <h1 className="text-xl font-bold">Monitor Health</h1>
          <img></img>
        </button>

        <button
            onClick={() => navigate('/')}
            className="page-preview-button"
        >
          <h1 className="text-xl font-bold">Chat with Buddy</h1>
          <img></img>
        </button>
      </nav>
    </div>
  );
};

export default DashboardPage;
