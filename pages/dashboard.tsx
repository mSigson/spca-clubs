import React from "react";
import auth0 from "../utils/api/auth0";
import { fetchUser } from "../utils/user";

const Dashboard = ({ user }) => {
  return <div>Current user: {user.name}</div>;
};

Dashboard.getInitialProps = async ({ req, res }) => {
  if (typeof window === "undefined") {
    const session = await auth0.getSession(req);
    console.log(session);
    if (!session || !session.user) {
      res.writeHead(302, {
        Location: "/api/login",
      });
      res.end();
      return;
    }
    return { user: session.user };
  }

  const user = await fetchUser();
  return { user };
};

export default Dashboard;
