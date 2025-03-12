"use client";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { CalendarDays, MoreVertical } from "lucide-react";
import "react-calendar/dist/Calendar.css";

const scheduleData = [
  {
    date: "Wednesday, 06 July 2023",
    events: [
      { time: "09:30", role: "UI/UX Designer", task: "Practical Task Review" },
      { time: "12:00", role: "Magento Developer", task: "Resume Review" },
      { time: "01:30", role: "Sales Manager", task: "Final HR Round" },
    ],
  },
  {
    date: "Thursday, 07 July 2023",
    events: [
      {
        time: "09:30",
        role: "Front-end Developer",
        task: "Practical Task Review",
      },
      { time: "11:00", role: "React JS", task: "TL Meeting" },
    ],
  },
];

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  if (selectedDate === null) {
    return (
      <div className="bg-white p-5 rounded-lg shadow-md border text-center border-gray-200 ml-5 mt-3 min-h-fit w-2/5">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 ml-5 mt-3 min-h-fit w-2/5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">My Schedule</h3>
        <CalendarDays size={20} className="text-purple-600" />
      </div>

      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        className="w-full border-none"
      />

      <div className="mt-4">
        {scheduleData.map((day, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-sm font-semibold text-gray-600">{day.date}</h4>
            {day.events.map((event, idx) => (
              <div key={idx} className="flex justify-between items-center py-2">
                <div>
                  <p className="text-xs text-gray-400">{event.time}</p>
                  <p className="text-sm font-medium">{event.role}</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {event.task}
                  </p>
                </div>
                <MoreVertical
                  size={16}
                  className="text-gray-400 cursor-pointer"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
