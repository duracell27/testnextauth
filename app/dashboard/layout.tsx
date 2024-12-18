import DashBoardMenu from "@/components/DashBoardMenu";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex gap-2">
      <div className="w-[20%]">
        <DashBoardMenu/>
      </div>
      <div className="w-[80%]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
