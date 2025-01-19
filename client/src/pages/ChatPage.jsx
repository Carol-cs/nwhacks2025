import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom"; 

const ChatPage = () => {
    return (
        <div className="flex flex-col space-y-8 p-10">
            <h1 className="text-xl">
                🚀 Welcome to NovaChat!<br/>
                Track your personal conversations in the left panel, and ask general questions in the right panel.<br/>
                Press the button at the bottom of your Nova device to speak.
            </h1>
            <div className="flex space-x-10">
                <div className="flex w-1/2 h-96 bg-white shadow-md">Panel 1</div>
                <div className="flex w-1/2 h-96 bg-white shadow-md">Panel 2</div>
            </div>
        </div>
    );
};

export default ChatPage;
