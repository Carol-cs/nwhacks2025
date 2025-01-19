import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"; 

const ChatPage = () => {
    return (
        <div>
            <h1>This is the chat page.</h1>
            <Link to="/health-record">
                <button className="rounded bg-gray-300 p-4 w-1/4">Button 1</button>
            </Link>
        </div>
    );
};

export default ChatPage;
