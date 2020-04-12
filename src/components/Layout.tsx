import React, { useState } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import theme from "styles/theme";
import styleVariables from "styles/variables";

import IUser from "interfaces/IUser";
import { useRouter } from "next/router";

interface LayoutProps {
  user: IUser;
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  const [sideBarVisible, toggleSideBarVisible] = useState(false);
  return (
    <div>
      <Header
        sideBarVisible={sideBarVisible}
        toggleSideBarVisible={() => toggleSideBarVisible(!sideBarVisible)}
      />
      <div className="container">
        <Sidebar sideBarVisible={sideBarVisible} />
        <main>{children}</main>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          height: calc(100vh - ${styleVariables.topBarHeight});
        }

        main {
          width: 100%;
          padding: 18px 100px 18px 32px;
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
