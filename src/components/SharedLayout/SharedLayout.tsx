import React from "react";
import { Outlet } from "react-router-dom";
import LeftAside from "../LeftAside/LeftAside";

const SharedLayout = () => {
  return (
    <div className="font-custom container mx-auto px-4 grid grid-cols-2 bg-mainBg">
      <LeftAside />
      <main className="col-span-1">
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
