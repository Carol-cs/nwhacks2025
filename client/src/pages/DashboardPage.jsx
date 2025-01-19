import React from "react";
import {
  Activity,
  ThermometerSun,
  Heart,
  Brain,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockHeartRateData = [
  { time: "0", value: 70 },
  { time: "1", value: 68 },
  { time: "2", value: 67 },
  { time: "3", value: 69 },
  { time: "4", value: 68 },
  { time: "5", value: 70 },
  { time: "6", value: 72 },
  { time: "7", value: 74 },
  { time: "8", value: 75 },
  { time: "9", value: 77 },
  { time: "10", value: 78 },
  { time: "11", value: 79 },
  { time: "12", value: 80 },
  { time: "13", value: 78 },
  { time: "14", value: 76 },
  { time: "15", value: 75 },
  { time: "16", value: 78 },
  { time: "17", value: 77 },
  { time: "18", value: 76 },
  { time: "19", value: 74 },
  { time: "20", value: 72 },
  { time: "21", value: 71 },
  { time: "22", value: 70 },
  { time: "23", value: 69 },
];

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2 text-green-600">
            <CheckCircle2 className="w-5 h-5" />
            Status: Normal
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <ThermometerSun className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-700">Temperature</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">98.6°F</p>
          <p className="text-sm text-gray-500">Normal range</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-50 rounded-lg">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-700">Heart Rate</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">72 BPM</p>
          <p className="text-sm text-gray-500">Resting</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-700">Activity</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">Moderate</p>
          <p className="text-sm text-gray-500">Last 2 hours</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <Brain className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-700">Cognitive State</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">Alert</p>
          <p className="text-sm text-gray-500">Normal engagement</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Heart Rate Trend (24h)
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockHeartRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[60, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ fill: "#2563eb" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Alerts
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-yellow-600">
            <AlertCircle className="w-5 h-5" />
            <p>Slightly elevated temperature detected at 2:30 PM</p>
          </div>
          <div className="flex items-center gap-3 text-green-600">
            <CheckCircle2 className="w-5 h-5" />
            <p>Temperature returned to normal at 3:15 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
