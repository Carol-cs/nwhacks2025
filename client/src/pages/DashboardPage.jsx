import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../slices/usersApiSlice";

const DashboardPage = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();
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
