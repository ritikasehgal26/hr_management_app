import { Users, Briefcase, CalendarCheck, ClipboardList } from "lucide-react";

const stats = [
  {
    title: "Total Employee",
    value: 560,
    icon: <Users size={20} />,
    updated: "July 16, 2023",
    change: "+12%",
    changeType: "increase",
  },
  {
    title: "Total Applicant",
    value: 1050,
    icon: <Briefcase size={20} />,
    updated: "July 14, 2023",
    change: "+5%",
    changeType: "increase",
  },
  {
    title: "Today Attendance",
    value: 470,
    icon: <CalendarCheck size={20} />,
    updated: "July 14, 2023",
    change: "-8%",
    changeType: "decrease",
  },
  {
    title: "Total Projects",
    value: 250,
    icon: <ClipboardList size={20} />,
    updated: "July 10, 2023",
    change: "+12%",
    changeType: "increase",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-3 ml-5">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between border border-gray-200"
        >
          <div className="flex items-center space-x-3 text-gray-700">
            <span className="bg-purple-100 text-purple-600 p-2 rounded-full">
              {stat.icon}
            </span>
            <h3 className="text-sm font-medium">{stat.title}</h3>
          </div>

          <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>

          <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
            <span>Update: {stat.updated}</span>
            <span
              className={`px-2 py-1 text-xs font-semibold rounded-lg ${
                stat.changeType === "increase"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
