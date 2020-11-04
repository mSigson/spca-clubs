import React, { useState } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import theme from "styles/theme";
import styleVariables from "styles/variables";

import IUser from "interfaces/IUser";

interface LayoutProps {
  user: IUser;
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  const [sideBarVisible, toggleSideBarVisible] = useState(false);
  return (
    <div className="layout">
      <Sidebar
        sideBarVisible={sideBarVisible}
        toggleSideBarVisible={() => toggleSideBarVisible(!sideBarVisible)}
      />
      <div className="layout-main">
        <Header />
        <main>{children}</main>
      </div>

      <style jsx>{`
        .layout {
          display: flex;
        }

        .layout-main {
          width: calc(100vw - ${styleVariables.sidebarWidth});
        }

        main {
          width: 100%;
          padding: 62px 60px;
          color: ${theme.palette.text.primary};
        }

        @media (max-width: 960px) {
          main {
            padding: 20px;
          }

          #app-sidebar {
            position: absolute;
            top: ${styleVariables.topBarHeight};
            bottom: 0;
            transform: translateX(-100vw);
          }

          #app-sidebar.visible {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
