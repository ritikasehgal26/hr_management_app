import Sidebar from "@/app/components/Sidebar";
import TopBar from "@/app/components/Topbar";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body>
    <div className="flex w-full h-dvh overflow-y-hidden">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <TopBar />
        {children}
      </div>
    </div>
    //   </body>
    // </html>
  );
}
