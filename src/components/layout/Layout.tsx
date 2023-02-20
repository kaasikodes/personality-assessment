import React from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* image n animation */}
      <div className="bg-white hidden lg:flex shadow-lg">
        <div
          className={`fixed lg:w-2/4 top-0  bg-cover bg-center bg-no-repeat bg-gradient-to-tl from-sky-700 to-blue-800 left-0 z-20 h-screen shadow-lg flex flex-col gap-4 items-center justify-end pt-12 pb-6`}
          style={{ backgroundImage: "url(/assets/landing2.jpg)" }}
        >
          <div className=" text-slate-700 mt-4 flex flex-col items-center">
            <span className="text-center text-sm text-slate-700 italic">
              Team way Assessment
            </span>
          </div>
        </div>
      </div>
      {/* register school form */}
      <div className="flex flex-col gap-4 items-center pt-8">
        {/* heading */}
        <div className="flex flex-col items-center">
          <QuestionCircleOutlined size={400} className="text-4xl" />

          <p></p>
        </div>
        {/* form */}
        <div className="w-4/5">
          <Outlet />
        </div>

        <div className="h-72" />
        <div className="h-72" />
        <div className="h-72" />
        <div className="h-72" />
      </div>
    </div>
  );
};

// Does the componet render the layout by checking 4 appropriate text
export default Layout;
