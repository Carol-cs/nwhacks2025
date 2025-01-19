import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useGetUsersQuery } from "../slices/usersApiSlice";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { data: users, isLoading, error } = useGetUsersQuery();

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center">
        <h1>This is the dashboard page.</h1>
      </div>
      <nav className="flex justify-start space-x-4">
        <button
            onClick={() => navigate('/health-record')}
            className="page-preview-button"
        >
          <h1 className="text-xl font-bold">Monitor Health</h1>
          <img></img>
        </button>

        <button
            onClick={() => navigate('/')}
            className="page-preview-button"
        >
          <h1 className="text-xl font-bold">Speak with Nova</h1>
          <img></img>
        </button>
      </nav>
      <h1>All Users</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
