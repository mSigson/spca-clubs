import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import Layout from "../components/Layout";
import requireAuthentication from "../components/AuthenticatedComponent";
import ClubCard from "../components/club-card";

const Dashboard = ({ user }) => {
  const { clubs } = user;

  console.log(clubs);
  return (
    <Layout user={user}>
      <div>
        <Link href="/club/new">
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Add a new club
          </Button>
        </Link>
        <ul className="clubs-container">
          {clubs.length > 0 &&
            clubs.map((club) => (
              <li key={club._id}>
                <ClubCard club={club} />
              </li>
            ))}
        </ul>
      </div>
      <style jsx global>{`
        .clubs-container {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          width: 100%;
        }

        .clubs-container li {
          margin-right: 24px;
          margin-bottom: 24px;
        }
      `}</style>
    </Layout>
  );
};

export default requireAuthentication(Dashboard);
