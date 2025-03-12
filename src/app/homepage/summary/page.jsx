"use client";
import Button from "@/app/components/Button";
import { useFormContext } from "@/app/context/FormContext";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { formData } = useFormContext();
  const accountAccess = formData?.accountAccess;
  const personalData = formData?.personalInfo;
  const documentData = formData?.documents;
  const professionalData = formData?.professionalInfo;

  async function postUser() {
    try {
      const res = await fetch("/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personalData: personalData,
          professionalData: professionalData,
          documentsData: documentData,
          accountAccessData: accountAccess,
        }),
      });
      const data = await res.json();
      console.log("Response Data:", data);
      router.push("/homepage/all-employees");
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <>
      <div className="py-3 px-4 shadow-lg rounded-lg bg-white h-screen thin-scrollbar overflow-y-scroll">
        <div className={"w-full bg-white border shadow-lg rounded-lg p-5"}>
          <div className="flex border-b gap-5 mb-3">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">First Name</p>
              <p className="text-lg">{personalData?.firstName}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Last Name</p>
              <p className="text-lg">{personalData?.lastName}</p>
            </div>
          </div>

          <div className="flex border-b gap-5 mb-3">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Mobile Number</p>
              <p className="text-lg">{personalData?.mobile}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Email Address</p>
              <p className="text-lg">{personalData?.email}</p>
            </div>
          </div>

          <div className="flex border-b gap-5 mb-3">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Date of Birth</p>
              <p className="text-lg">{personalData?.dob}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Marital Status</p>
              <p className="text-lg">{personalData?.maritalStatus}</p>
            </div>
          </div>

          <div className="flex border-b gap-5 mb-3">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Gender</p>
              <p className="text-lg">{personalData?.gender}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Nationality</p>
              <p className="text-lg">{personalData?.nationality}</p>
            </div>
          </div>

          <div className="flex border-b gap-5 mb-3">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Address</p>
              <p className="text-lg">{personalData?.address}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">City</p>
              <p className="text-lg">{personalData?.city}</p>
            </div>
          </div>

          <div className="flex gap-5 mb-3 border-b">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">State</p>
              <p className="text-lg">{personalData?.state}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Zip Code</p>
              <p className="text-lg">{personalData?.zipCode}</p>
            </div>
          </div>

          <div className="flex justify-between gap-5 mb-5 border-b w-full">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Employee ID</p>
              <p className="text-lg">{professionalData?.employeeID}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">User Name</p>
              <p className="text-lg">{professionalData?.userName}</p>
            </div>
          </div>

          <div className="flex justify-between border-b gap-5 mb-5 w-full">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Employee Type</p>
              <p className="text-lg">{professionalData?.employeeType}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Email Address</p>
              <p className="text-lg">{professionalData?.professionalemail}</p>
            </div>
          </div>

          <div className="flex justify-between border-b gap-5 mb-5 w-full">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Department</p>
              <p className="text-lg">{professionalData?.department}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Designation</p>
              <p className="text-lg">{professionalData?.designation}</p>
            </div>
          </div>

          <div className="flex justify-between border-b gap-5 mb-5 w-full">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Working Days</p>
              <p className="text-lg">{professionalData?.workingDays}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Joining Date</p>
              <p className="text-lg">{professionalData?.joiningDate}</p>
            </div>
          </div>

          <div className="flex justify-between border-b gap-3 mb-5 w-full">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Office Location</p>
              <p className="text-lg">{professionalData?.officeLocation}</p>
            </div>
          </div>

          <div className="flex gap-5 mb-3 w-full border-b">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Appointment Letter</p>
              <p className="text-lg">{documentData?.appointmentLetter}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Salary Slip</p>
              <p className="text-lg">{documentData?.salarySlips}</p>
            </div>
          </div>

          <div className="flex gap-5 border-b w-full">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Reliving Letter</p>
              <p className="text-lg">{documentData?.relivingLetter}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Experience Letter</p>
              <p className="text-lg">{documentData?.experienceLetter}</p>
            </div>
          </div>

          <div className="flex gap-5 mb-3 w-full border-b">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Email Address</p>
              <p className="text-lg">{accountAccess?.accessemail}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Slack Id</p>
              <p className="text-lg">{accountAccess?.slackID}</p>
            </div>
          </div>

          <div className="flex gap-5 w-full">
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Skype Id</p>
              <p className="text-lg">{accountAccess?.skypeID}</p>
            </div>
            <div className="flex flex-col w-full">
              <p className="text-gray-400 text-base">Github Id</p>
              <p className="text-lg">{accountAccess?.githubID}</p>
            </div>
          </div>
          <Button
            type="submit"
            className={"border bg-purple-600 mt-4 text-white"}
            onClick={postUser}
          >
            Add User
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
