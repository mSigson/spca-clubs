import React from "react";
// import fetch from "isomorphic-unfetch";

import theme from "styles/theme";
import Layout from "components/Layout";

import requireAuthentication from "components/AuthenticatedComponent";
import CreateProjectFlow from "components/CreateProjectFlow";

const CreateProject = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Create New Project</h1>
      <div className="create-project-container">
        <CreateProjectFlow />
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 24px;
          background: white;
          padding: 24px;
          border-radius: 8px;
          color: ${theme.palette.primary.main};
        }

        .create-project-container {
          background: white;
          padding: 24px;
          border-radius: 8px;
        }
      `}</style>
    </Layout>
  );
};

export default requireAuthentication(CreateProject);
