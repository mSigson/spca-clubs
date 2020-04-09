import React from "react";
import Link from "next/link";
import theme from "../src/theme";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

const SidebarLink = ({ href, icon, text, sideBarVisible }) => {
  const Icon = icon;
  return (
    <>
      <Link href={href} className="sidebar-link">
        <div className="sidebar-link-container">
          <Icon fontSize={sideBarVisible ? "large" : "normal"} /> {text}
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

        @media (max-width: 960px) {
          .sidebar-link-container {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};
const Sidebar = ({ sideBarVisible }) => (
  <ul id="app-sidebar" className={sideBarVisible && "visible"}>
    <li>
      <SidebarLink
        href="/"
        icon={DashboardOutlinedIcon}
        text="Dashboard"
        sideBarVisible={sideBarVisible}
      />
    </li>
    <style jsx>{`
      ul {
        background-color: ${theme.palette.background.default};
        padding: 12px 0;
        margin: 0;
        list-style: none;
        min-width: 200px;
        z-index: 9;
      }

      @media (max-width: 960px) {
        ul {
          width: 100vw;
          font-size: 2rem;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
        }
      }
    `}</style>
  </ul>
);

export default Sidebar;
