import React from "react";
import { Outlet } from "react-router-dom";
import LeftAside from "../LeftAside/LeftAside";

const SharedLayout = () => {
  return (
    <div className="font-custom container h-screen mx-auto flex bg-mainBg justify-between overflow-hidden">
      <LeftAside />
      <main className="flex-1 ">
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
