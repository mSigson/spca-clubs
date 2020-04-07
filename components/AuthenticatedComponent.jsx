import React from "react";
import { useFetchUser } from "../utils/user";

const requireAuthentication = (Component) => {
  const AuthenticatedComponent = (props) => {
    const { user, loading } = useFetchUser();

    const loginErrorMessage = (
      <div>
        Please <a href="/api/login">login</a> in order to view this part of the
        application.
      </div>
    );

    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : user ? (
          <Component user={user} {...props} />
        ) : (
          loginErrorMessage
        )}
      </div>
    );
  };

  return AuthenticatedComponent;
};

export default requireAuthentication;
