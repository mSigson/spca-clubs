import React, { useState } from "react";
import { UserProvider } from "../utils/user";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import theme from "../src/theme";

const Layout = ({ user, loading = false, children }) => {
  const [sideBarVisible, toggleSideBarVisible] = useState(false);
  return (
    <UserProvider value={{ user, loading }}>
      <div>
        <Head>
          <title>SPCA Clubs</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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

        <style jsx global>{`
          body,
          p,
          ul,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          body {
            background-color: ${theme.palette.background.default};
          }

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
    </UserProvider>
  );
};

export default Layout;
