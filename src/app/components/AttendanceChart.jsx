"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
// import { useState } from "react";

const data = [
  { day: "Mon", low: 60, medium: 20, high: 20 },
  { day: "Tue", low: 40, medium: 30, high: 30 },
  { day: "Wed", low: 60, medium: 20, high: 20 },
  { day: "Thu", low: 50, medium: 20, high: 30 },
  { day: "Fri", low: 60, medium: 20, high: 20 },
  { day: "Sat", low: 50, medium: 30, high: 20 },
  { day: "Sun", low: 50, medium: 30, high: 20 },
];

const AttendanceChart = () => {
  // const [selectedFilter, setSelectedFilter] = useState("Today");

  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 mt-5 ml-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Attendance Overview</h3>
        <div className="relative">
          <button className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-lg text-gray-600 text-sm">
            <span>Today</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis tickFormatter={(value) => `${value}%`} />
          <Tooltip />
          <Bar dataKey="low" stackId="a" fill="#5A4FCF" />
          <Bar dataKey="medium" stackId="a" fill="#FFA500" />
          <Bar dataKey="high" stackId="a" fill="#FF5A5A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
