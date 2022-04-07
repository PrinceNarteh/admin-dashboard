import React from "react";
import styled from "styled-components";

interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
}

export const SidebarItem = ({ title, icon }: SidebarItemProps) => {
  return (
    <SidebarItemStyle>
      <div className="inner">
        {icon}
        <span>{title}</span>
      </div>
    </SidebarItemStyle>
  );
};

const SidebarItemStyle = styled.div`
  padding: 0 2rem;

  .inner {
    padding: 1.5rem 2.5rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: color 0.3s ease 0s;
  }

  svg {
    margin-right: 1rem;
    font-size: 1.8rem;
  }

  span {
    text-transform: capitalize;
    font-size: 1.4rem;
  }

  &:hover {
    color: var(--main-color);
  }
`;
