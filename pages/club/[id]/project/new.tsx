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

    const { data: newProjectModel } = await res.json();
    club.projects[newProjectModel.type].push(newProjectModel);
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
      <h1>Start A New Project</h1>
      <CreateProjectFlow
        club={club}
        createNewProject={(newProjectData) =>
          createNewProject(newProjectData, club)
        }
      />
      <style jsx>{`
        h1 {
          margin-bottom: 48px;
          padding-left: 24px;
          color: ${theme.palette.primary.main};
        }
      `}</style>
    </Layout>
  );
};

export default requireAuthentication(CreateProject);
