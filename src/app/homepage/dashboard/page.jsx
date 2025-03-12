// import Sidebar from "@/components/Sidebar";
// import "./dashboard.css";
// import TopBar from "@/components/Topbar";
import AttendanceChart from "@/app/components/AttendanceChart";
import Schedule from "@/app/components/Schedule";
import StatsCards from "@/app/components/StatsCards";
export default function Dashboard() {
  return (
    <>
      {/* <div className="flex w-full h-dvh overflow-y-hidden"> */}
      {/* <Sidebar /> */}
      {/* <div className="w-full">
        <TopBar /> */}
      <div className="flex w-full thin-scrollbar overflow-y-scroll h-dvh">
        <div className="w-3/5">
          <StatsCards />
          <AttendanceChart />
        </div>
        <Schedule />
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
