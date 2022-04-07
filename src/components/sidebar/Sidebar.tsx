import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { sidebar_routes } from "../../assets/data/sidebar_routes";
import { SidebarItem } from "./SidebarItem";

const Sidebar = () => {
  return (
    <SidebarStyle>
      <div className="logo">
        <h3>Logo</h3>
      </div>
      {sidebar_routes.map((item, index) => (
        <NavLink
          to={item.route}
          key={index}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <SidebarItem icon={item.icon} title={item.display_name} />
        </NavLink>
      ))}
    </SidebarStyle>
  );
};

const SidebarStyle = styled.div`
  min-width: var(--sidebar-width);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--main-bg);
  box-shadow: var(--box-shadow);

  .logo {
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 3rem;
    }
  }

  .active .inner {
    border-radius: var(--border-radius);
    background-image: linear-gradient(
      to right,
      var(--main-color),
      var(--second-color)
    );
    color: var(--txt-white);
  }
`;

export default Sidebar;
