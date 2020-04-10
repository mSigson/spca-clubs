import React from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import { useFetchUser } from "../utils/user";
import theme from "../src/styles/theme";

export default function IndexRedirect() {
  const { user, loading } = useFetchUser();

  !loading && !user
    ? Router.push("/api/login")
    : !loading && user
    ? Router.push("/dashboard")
    : null;

  return (
    <>
      <Layout user={user}>
        <p>Loading login info...</p>
      </Layout>
      <style jsx global>{``}</style>
    </>
  );
}
