import React, { useState } from "react";
import { Trash2, Calendar } from "lucide-react";

const ChatHistoryPage = () => {
  const [chatLogs, setChatLogs] = useState([
    {
      id: "1",
      date: "2024-01-19",
      question: "Does my recent heart rate look good?",
      response: "Your recent heart rate looks within the normal range.",
    },
    {
      id: "2",
      date: "2024-01-19",
      question: "How can I manage my arthritis pain?",
      response:
        "Managing arthritis pain can involve a combination of medication, physical therapy, exercise, and lifestyle changes. It's important to consult with your healthcare provider for a personalized plan.",
    },
    {
      id: "3",
      date: "2024-01-19",
      question: "What was my activity level today?",
      response:
        "Your activity level today was moderate, with a total of 4,000 steps recorded and light physical activity lasting around 45 minutes.",
    },
    {
      id: "4",
      date: "2024-01-19",
      question: "Did I take my medication on time?",
      response:
        "Yes, according to the records, you took your medication on time today.",
    },
    {
      id: "5",
      date: "2024-01-19",
      question: "How is the air quality today?",
      response:
        "The air quality today is good with an AQI of 45. It's a great day to open a window or take a short walk outside.",
    },
    {
      id: "6",
      date: "2024-01-19",
      question: "What can I eat for a heart-healthy snack?",
      response:
        "You could try a handful of unsalted almonds, some fresh fruit like an apple, or yogurt with a drizzle of honey. These options are great for heart health.",
    },
    {
      id: "7",
      date: "2024-01-19",
      question: "Can I get a summary of my sleep last night?",
      response:
        "Last night, you slept for 7 hours and 15 minutes. You had 5 hours of deep sleep and 2 hours of light sleep, which is a healthy sleep pattern.",
    },
    {
      id: "8",
      date: "2024-01-19",
      question: "What should I do if I feel dizzy?",
      response:
        "If you feel dizzy, sit or lie down immediately to prevent a fall. Stay hydrated, avoid sudden movements, and consult your healthcare provider if it persists.",
    },
  ]);

  const handleDelete = (id) => {
    setChatLogs(chatLogs.filter((log) => log.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Chat Logs</h1>
      </div>

      <div className="space-y-4">
        {chatLogs.map((log) => (
          <div
            key={log.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {new Date(log.date).toLocaleDateString()}
                </div>
                <p className="text-gray-700 text-lg font-semibold">
                  Q: {log.question}
                </p>
                <p className="text-gray-700">A: {log.response}</p>
              </div>
              <button
                onClick={() => handleDelete(log.id)}
                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistoryPage;
