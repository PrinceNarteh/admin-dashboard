import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

export const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};
