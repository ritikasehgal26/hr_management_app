"use client";
import { useState } from "react";
import {
  Sun,
  Moon,
  Users,
  Briefcase,
  Calendar,
  Settings,
  DollarSign,
  ClipboardList,
  UserCheck,
  Layers,
} from "lucide-react";

// import "../sidebar/sidebar.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();
  const activeItem = pathname.split("/").pop();
  // console.log("active:", activeItem);
  // const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div
      className={`h-screen w-1/4 p-4 flex flex-col justify-between bg-gray-100/30 dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-xl sticky mt-2`}
    >
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <div className="bg-purple-600 text-white p-2 rounded-full">
            <Layers size={20} />
          </div>
          <h1 className="text-xl font-semibold">HRMS</h1>
        </div>

        <nav className="space-y-2">
          <Link href={"/homepage/dashboard"}>
            <SidebarItem
              icon={<Layers size={18} />}
              text="Dashboard"
              active={activeItem === "dashboard"}
            />
          </Link>

          <Link href={"/homepage/all-employees"}>
            <SidebarItem
              icon={<Users size={18} />}
              text="All Employees"
              active={activeItem === "all-employees"}
            />
          </Link>

          <Link href={"/homepage/all-departments"}>
            <SidebarItem
              icon={<Briefcase size={18} />}
              text="All Departments"
              active={activeItem === "all-departments"}
            />
          </Link>

          <Link href={"/homepage/attendance"}>
            <SidebarItem
              icon={<Calendar size={18} />}
              text="Attendance"
              active={activeItem === "attendance"}
            />
          </Link>

          <Link href={"/homepage/payroll"}>
            <SidebarItem
              icon={<DollarSign size={18} />}
              text="Payroll"
              active={activeItem === "payroll"}
            />
          </Link>

          <Link href={"/homepage/jobs"}>
            <SidebarItem
              icon={<ClipboardList size={18} />}
              text="Jobs"
              active={activeItem === "jobs"}
            />
          </Link>

          <Link href={"/homepage/candidates"}>
            <SidebarItem
              icon={<UserCheck size={18} />}
              text="Candidates"
              active={activeItem === "candidates"}
            />
          </Link>

          <Link href={"/homepage/leaves"}>
            <SidebarItem
              icon={<Calendar size={18} />}
              text="Leaves"
              active={activeItem === "leaves"}
            />
          </Link>

          <Link href={"/homepage/holidays"}>
            <SidebarItem
              icon={<Calendar size={18} />}
              text="Holidays"
              active={activeItem === "holidays"}
            />
          </Link>

          <Link href={"/homepage/settings"}>
            <SidebarItem
              icon={<Settings size={18} />}
              text="Settings"
              active={activeItem === "settings"}
            />
          </Link>
        </nav>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
      >
        <span> {darkMode ? "Dark" : "Light"} </span>
        {darkMode ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    </div>
  );
};

const SidebarItem = ({ icon, text, active = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex text-sm items-center space-x-3 p-3 rounded-lg cursor-pointer ${
        active
          ? "bg-purple-200 dark:bg-purple-700 text-purple-600 dark:text-white"
          : "hover:bg-gray-200 dark:hover:bg-gray-800"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Sidebar;
