import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";

export const Layout = () => {
  return (
    <LayoutStyle>
      <Sidebar />
      <div className="content">
        <div className="main">
          <Outlet />
        </div>
      </div>
    </LayoutStyle>
  );
};

const LayoutStyle = styled.div`
  color: var(--txt-color);

  .content {
    padding-left: var(--sidebar-width);
    background-color: var(--second-bg);
    min-height: 100vh;
  }

  .main {
    padding: 3rem;
  }
`;
