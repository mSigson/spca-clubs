import React from "react";
import theme from "styles/theme";
import Link from "next/link";
import { useRouter } from "next/router";

import Icon from "./Icon";

const SidebarLink = ({ href, text, icon }) => {
  const router = useRouter();

  return (
    <div
      className={`sidebar-link ${
        router.pathname.includes(href) ? "active" : ""
      }`}
    >
      <Link href={href}>
        <div className="sidebar-link-container">
          <Icon
            icon={icon}
            color={theme.palette.primary.contrastText}
            style={{ marginRight: "24px" }}
          />
          <p className="sidebar-link-text">{text}</p>
        </div>
      </Link>
      <style jsx>{`
        .sidebar-link {
          position: relative;
        }

        .sidebar-link.active:before {
          content: "";
          width: 3px;
          height: 100%;
          background-color: ${theme.palette.primary.light};
          left: 0;
          position: absolute;
          display: block;
        }

        .sidebar-link-container {
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 18px 37px;
          color: ${theme.palette.primary.contrastText};
        }

        .sidebar-link-container:hover {
          background: #162770;
        }
      `}</style>
    </div>
  );
};

export default SidebarLink;
