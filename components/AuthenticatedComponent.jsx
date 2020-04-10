import React from "react";
import { useFetchUser } from "../utils/user";
import { UserProvider } from "../utils/user";
import Layout from "../components/Layout";

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
          <UserProvider value={{ user, loading }}>
            <Component user={user} {...props} />
          </UserProvider>
        ) : (
          <Layout>{loginErrorMessage}</Layout>
        )}
      </div>
    );
  };

  return AuthenticatedComponent;
};

export default requireAuthentication;
