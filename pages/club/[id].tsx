import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";

import Layout from "components/Layout";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import theme from "styles/theme";

import requireAuthentication from "components/AuthenticatedComponent";
import ProjectCard from "components/ProjectCard";

import IPetition from "interfaces/projects/IProject";

import { useUser } from "utils/user";
import { useRouter } from "next/router";

const getProjects = async (club, setProjects) => {
  try {
    const res = await fetch(`/api/club/${club._id}/projects`);
    const { data: projects } = await res.json();
    setProjects(projects);
  } catch (e) {
    console.log(e);
  }
};

const ClubPage = () => {
  const router = useRouter();
  const { user } = useUser();

  const [projects, setProjects] = useState(undefined as IPetition[]);

  const club = user.clubs.find((club) => club._id === router.query.id);

  useEffect(() => {
    getProjects(club, setProjects);
  }, []);

  return (
    <Layout user={user}>
      <div>
        <Link href={`/club/${club._id}/project/new`}>
          <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
            Create New Project
          </Button>
        </Link>
        <ul className="projects-container">
          {projects &&
            projects.length > 0 &&
            projects.map((project) => (
              <li key={project._id}>
                <ProjectCard project={project} />
              </li>
            ))}
        </ul>
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 24px;
          background: white;
          padding: 24px;
          border-radius: 8px;
          color: ${theme.palette.primary.main};
        }

        .projects-container {
          margin-top: 40px;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          color: ${theme.palette.primary.main};
        }

        .form-container {
          background: white;
          padding: 24px;
          border-radius: 8px;
        }
      `}</style>
    </Layout>
  );
};

export default requireAuthentication(ClubPage);
