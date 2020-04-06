import React from "react";
import auth0 from "../utils/auth/auth0";
import { fetchUser } from "../utils/user";

const requireAuthentication = (Component) => {
  const AuthenticatedComponent = (props) => {
    const loginErrorMessage = (
      <div>
        Please <a href="/login">login</a> in order to view this part of the
        application.
      </div>
    );
    return (
      <div>{props.user ? <Component {...props} /> : loginErrorMessage}</div>
    );
  };

  AuthenticatedComponent.getInitialProps = async ({ req, res }) => {
    if (typeof window === "undefined") {
      const session = await auth0.getSession(req);
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

  return AuthenticatedComponent;
};

export default requireAuthentication;
