import React from "react";
import Link from "next/link";
import theme from "../src/theme";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

const SidebarLink = ({ href, icon, text }) => {
  const Icon = icon;
  return (
    <>
      <Link href={href} className="sidebar-link">
        <div className="sidebar-link-container">
          <Icon /> {text}
        </div>
      </Link>
      <style jsx>{`
        .sidebar-link-container {
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 12px 24px;
          color: ${theme.palette.primary.main};
          border-radius: 0 6px 6px 0;
        }

        .sidebar-link-container:hover {
          background: ${theme.palette.primary.light};
        }

        svg {
          margin-right: 4px;
        }
      `}</style>
    </>
  );
};
const Sidebar = () => (
  <ul>
    <li>
      <SidebarLink href="/" icon={DashboardOutlinedIcon} text="Dashboard" />
    </li>
    <style jsx>{`
      ul {
        padding: 12px 0;
        margin: 0;
        list-style: none;
        min-width: 200px;
      }
    `}</style>
  </ul>
);

export default Sidebar;
