import React from "react";
import fetch from "isomorphic-unfetch";

import theme from "styles/theme";
import Layout from "components/Layout";

import requireAuthentication from "components/AuthenticatedComponent";
import CreateProjectFlow from "components/CreateProjectFlow";

import { useUser } from "utils/user";
import { useRouter } from "next/router";

const createNewProject = async (newClubData, club) => {
  try {
    const res = await fetch("/api/project/new", {
      method: "POST",
      body: JSON.stringify(newClubData),
    });

    const { data: newClubModel } = await res.json();
    club.projects.push(newClubModel);
  } catch (e) {
    console.log(e);
  }
};

const CreateProject = () => {
  const router = useRouter();
  const { user } = useUser();
  const club = user.clubs.find((club) => club._id === router.query.id);

  return (
    <Layout user={user}>
      <h1>Create New Project</h1>
      <div className="create-project-container">
        <CreateProjectFlow
          club={club}
          createNewProject={(newProjectData) =>
            createNewProject(newProjectData, club)
          }
        />
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
