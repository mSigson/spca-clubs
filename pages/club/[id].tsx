import React from "react";
import Layout from "components/Layout";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import theme from "styles/theme";

import requireAuthentication from "components/AuthenticatedComponent";

import { useUser } from "utils/user";
import { useRouter } from "next/router";

const ClubPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const club = user.clubs.find((club) => club._id === router.query.id);
  return (
    <Layout user={user}>
      <div>
        <Link href={`/club/${club._id}/project/new`}>
          <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
            Create New Project
          </Button>
        </Link>
        <div className="projects-container">
          <h2>In Progress</h2>
        </div>
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
