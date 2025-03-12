import { useFormContext } from "@/app/context/FormContext";
import React from "react";
import {
  FaUser,
  FaClipboardList,
  FaProjectDiagram,
  FaPlane,
  FaEdit,
} from "react-icons/fa";

const TopHeading = () => {
  const { formData } = useFormContext();
  const personalInfo = formData?.personalInfo;
  const professionalInfo = formData?.professionalInfo;

  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center">
        <img
          src="/profile-placeholder.png"
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">
            {personalInfo?.firstName}
            {personalInfo?.lastName}
          </h2>
          <p className="text-gray-600">{professionalInfo?.designation}</p>
          <p className="text-gray-500">{personalInfo?.email}</p>
        </div>
      </div>
      <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-lg">
        <FaEdit className="mr-2" /> Edit Profile
      </button>
    </div>
  );
};

export default TopHeading;
