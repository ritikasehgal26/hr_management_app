"use client";
// import styles from "./personal.module.css";
import { usePathname, useRouter } from "next/navigation";

const Formlayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const active = pathname.split("/").pop();

  return (
    <>
      <div className="py-3 px-4 bg-white h-screen thin-scrollbar overflow-y-scroll">
        <div className={"w-full shadow-lg border p-5 rounded-lg"}>
          <div className="flex border-b-2 border-gray-200 mb-5">
            <div
              className={`px-4 py-2 cursor-pointer text-lg text-gray-500 transition-all ${
                active === "personal-information-form"
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : ""
              }`}
              onClick={() => {
                // setActiveTab("personal");
                router.push("/homepage/add-new-user/personal-information-form");
              }}
            >
              Personal Information
            </div>
            <div
              className={`px-4 py-2 cursor-pointer text-lg text-gray-500 transition-all ${
                active === "professional-information-form"
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : ""
              }`}
              onClick={() => {
                // setActiveTab("professional");
                router.push(
                  "/homepage/add-new-user/professional-information-form"
                );
              }}
            >
              Professional Information
            </div>
            <div
              className={`px-4 py-2 cursor-pointer text-lg text-gray-500 transition-all ${
                active === "documents-form"
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : ""
              }`}
              onClick={() => {
                // setActiveTab("documents");
                router.push("/homepage/add-new-user/documents-form");
              }}
            >
              Documents
            </div>
            <div
              className={`px-4 py-2 cursor-pointer text-lg text-gray-500 transition-all ${
                active === "account-access-form"
                  ? "text-purple-700 border-b-2 border-purple-700"
                  : ""
              }`}
              onClick={() => {
                // setActiveTab("account");
                router.push("/homepage/add-new-user/account-access-form");
              }}
            >
              Account Access
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Formlayout;
