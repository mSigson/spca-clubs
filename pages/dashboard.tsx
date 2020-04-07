import React from "react";

import Layout from "../components/Layout";
import requireAuthentication from "../components/AuthenticatedComponent";

const Dashboard = ({ user }) => {
  return (
    <Layout user={user}>
      <p>Current user: {user.name}</p>
    </Layout>
  );
};

export default requireAuthentication(Dashboard);
