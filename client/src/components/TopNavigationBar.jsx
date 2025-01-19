import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TopNavigationBar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <div className="flex justify-between items-center p-4 bg-gray-100">
                    <h1 className="text-xl font-bold">Senior Buddy</h1>
                    <nav className="flex items-center space-x-4">
                        <button
                            className="rounded-button"
                            onClick={() => navigate('/')}
                            >
                            Home
                        </button>

                        <button
                            className="rounded-button"
                            onClick={() => navigate('/health-record')}
                            >
                            Health Record
                        </button>
                        <button
                            className="rounded-button"
                            onClick={() => navigate('/chat')}
                            >
                            Chat
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default TopNavigationBar;
