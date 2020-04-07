import { UserProvider } from "../utils/user";
import Header from "../components/Header";
import Head from "next/head";
import theme from "../src/theme";

const Layout = ({ user, loading = false, children }) => (
  <UserProvider value={{ user, loading }}>
    <Head>
      <title>SPCA Clubs</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <div>
      <Header user={user} />
    </div>
    <main>
      <div className="container">{children}</div>
    </main>

    <style jsx global>{`
      body {
        margin: 0;
      }

      .container {
        font-family: ${theme.typography.fontFamily};
        color: ${theme.palette.text.primary};
      }
    `}</style>
  </UserProvider>
);

export default Layout;
