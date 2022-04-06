import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Customers, Dashboard } from "../pages";
import Layout from "./layout/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
