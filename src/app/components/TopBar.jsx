"use client";

import { useState, useRef, useEffect } from "react";
import { Search, Bell } from "lucide-react";
import user from "@/assets/8.jpeg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const TopBar = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname.includes("/all-employees")) return "All Employees";
    if (pathname.includes("/add-new-user")) return "Add New Employee";
    return "Hello Robert 👋";
  };
  const getPageLine = () => {
    if (pathname.includes("/all-employees")) return "All Employees Information";
    if (pathname.includes("/personal-information-form"))
      return "Personal Information Form";
    if (pathname.includes("/professional-information-form"))
      return "Professional Information Form";
    if (pathname.includes("/documents-form")) return "Documents Form";
    if (pathname.includes("/account-access-form")) return "Account Access Form";
    return "Good Morning";
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 px-5 w-full h-20">
      <div>
        <h2 className="text-lg font-semibold flex items-center">
          {getPageTitle()}
        </h2>
        <p className="text-sm text-gray-500">{getPageLine()}</p>
      </div>

      <div className="flex gap-x-5">
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="text-gray-600 cursor-pointer" size={20} />
            <span className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full"></span>
          </div>

          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Image
                src={user}
                width={50}
                height={50}
                alt="User Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-semibold">Robert Allen</h4>
                <p className="text-xs text-gray-500">HR Manager</p>
              </div>
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                <ul className="py-2 text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </li>
                  <li
                    className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      router.push("/login");
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
