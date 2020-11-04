import React from "react";
import theme from "styles/theme";
import styleVariables from "../styles/variables";
import SidebarLink from "./SidebarLink";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

interface SidebarProps {
  sideBarVisible: Boolean;
  toggleSideBarVisible: any;
  width: any;
}
const Sidebar = ({
  sideBarVisible,
  toggleSideBarVisible,
  width,
}: SidebarProps) => (
  <div id="app-sidebar" className={sideBarVisible && "visible"}>
    {isWidthUp("sm", width) ? (
      <div className="add-sidebar-logo">
        <img src="/assets/spca-logo.png" />
      </div>
    ) : (
      <button onClick={toggleSideBarVisible} className="menu-toggle">
        {sideBarVisible ? (
          <CloseIcon color="secondary" fontSize="default" />
        ) : (
          <MenuIcon color="secondary" fontSize="default" />
        )}
      </button>
    )}
    <ul>
      <li>
        <SidebarLink href="/" icon="Paw" text="Overview" />
      </li>
      <li>
        <SidebarLink href="/clubs" icon="Group" text="Clubs" />
      </li>
      <li>
        <SidebarLink href="/resources" icon="Document" text="Resources" />
      </li>
    </ul>
    <style jsx>{`
      #app-sidebar {
        height: 100vh;
        background-color: ${theme.palette.primary.main};
        padding-top: 43px;
        width: ${styleVariables.sidebarWidth};
      }

      ul {
        background-color: ${theme.palette.primary.main};
        padding: 12px 0;
        margin: 0;
        list-style: none;
        width: ${styleVariables.sidebarWidth};
        z-index: 9;
      }

      .add-sidebar-logo {
        padding: 0 37px;
        margin-bottom: 32px;
      }
    `}</style>
  </div>
);

export default withWidth()(Sidebar);
