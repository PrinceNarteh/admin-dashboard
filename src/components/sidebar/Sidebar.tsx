import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { sidebar_routes } from "../../assets/data/sidebar_routes";

const Sidebar = () => {
  return (
    <SidebarStyle>
      <div className="logo">
        <h3>Logo</h3>
      </div>
      {sidebar_routes.map((item, index) => (
        <NavLink to={item.route} key={index}>
          <div>{item.display_name}</div>
        </NavLink>
      ))}
    </SidebarStyle>
  );
};

const SidebarStyle = styled.div``;

export default Sidebar;
