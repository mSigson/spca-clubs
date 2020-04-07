import React from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import { useFetchUser } from "../utils/user";
import theme from "../src/theme";

export default function IndexRedirect() {
  const { user, loading } = useFetchUser();

  !loading && !user
    ? Router.push("/api/login")
    : !loading && user
    ? Router.push("/dashboard")
    : null;

  return (
    <>
      <Layout user={user} loading={loading}>
        <p>Loading login info...</p>
      </Layout>
      <style jsx global>{`
        body {
          margin: 0;
          color: ${theme.palette.text.primary};
          font-family: ${theme.typography.fontFamily};
          background-color: ${theme.palette.background.default};
        }
      `}</style>
    </>
  );
}
