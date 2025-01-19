import React, { useState } from "react";
import { Mic, MicOff } from "lucide-react";

const ChatPage = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 w-full max-w-2xl space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">Chat Session</h2>
          <button
            onClick={handleToggleRecording}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isRecording
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isRecording ? (
              <>
                <MicOff className="w-5 h-5" />
                Stop
              </>
            ) : (
              <>
                <Mic className="w-5 h-5" />
                Start
              </>
            )}
          </button>
        </div>
        {isRecording && (
          <div className="flex items-center justify-center mt-4">
            <div className="animate-pulse bg-red-500 rounded-full h-4 w-4 mr-2"></div>
            <p className="text-gray-700">Recording...</p>
          </div>
        )}
        <div className="mt-4">{/* Chat messages will go here */}</div>
      </div>
    </div>
  );
};

export default ChatPage;
