import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import theme from "../src/styles/theme";

const Layout = ({ user, children }) => {
  const [sideBarVisible, toggleSideBarVisible] = useState(false);
  return (
    <div>
      <Head>
        <title>SPCA Clubs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header
        user={user}
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
          height: calc(100vh - ${theme.overrides.topBarHeight});
          font-family: ${theme.typography.fontFamily};
        }

        main {
          width: 100%;
          padding: 18px 100px 18px 32px;
          color: ${theme.palette.text.primary};
          font-family: ${theme.typography.fontFamily};
        }

        @media (max-width: 960px) {
          main {
            padding: 20px;
          }

          #app-sidebar {
            position: absolute;
            top: ${theme.overrides.topBarHeight};
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
