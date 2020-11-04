import React from "react";

import Layout from "components/Layout";
import H1 from "components/typography/H1";
import requireAuthentication from "components/AuthenticatedComponent";

const Home = ({ user }) => {
  return (
    <Layout user={user}>
      <H1>Welcome back {user.given_name},</H1>
    </Layout>
  );
};

export default requireAuthentication(Home);
