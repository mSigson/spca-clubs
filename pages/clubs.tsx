import React from "react";
import Layout from "components/Layout";
import requireAuthentication from "components/AuthenticatedComponent";
import ClubCard from "components/ClubCard";
import IClub from "interfaces/IClub";
import { H1 } from "components/typography";

const Clubs = ({ user }) => {
  const clubs: IClub[] = user.clubs;
  return (
    <Layout user={user}>
      <H1>List of Clubs</H1>
      <p className="clubs-subtitle">34 clubs have active projects</p>
      <ul className="clubs-container">
        {clubs.length > 0 &&
          clubs.map((club) => (
            <li key={club._id}>
              <ClubCard club={club} />
            </li>
          ))}
      </ul>
      <style jsx global>{`
        .clubs-subtitle {
          margin-top: 8px;
        }

        .clubs-container {
          margin-top: 50px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          max-width: 1000px;
        }

        .clubs-container li {
          margin-bottom: 36px;
          width: calc(50% - 16px);
        }

        @media (max-width: 960px) {
          .clubs-container li {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
};

export default requireAuthentication(Clubs);
