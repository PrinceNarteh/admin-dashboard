import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Customers, Dashboard, Template } from "../pages";
import { Layout } from "./layout/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path=":params" element={<Template />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
