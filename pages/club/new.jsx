import React from "react";
import fetch from "isomorphic-unfetch";

import theme from "../../src/styles/theme";
import Layout from "../../components/Layout";

import requireAuthentication from "../../components/AuthenticatedComponent";
import ClubForm from "../../components/forms/Club";

const createNewClub = async (newClubData, user) => {
  try {
    const res = await fetch("/api/club/new", {
      method: "POST",
      body: JSON.stringify(newClubData),
    });
    const { data: newClubModel } = await res.json();
    user.clubs.push(newClubModel);
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

const CreateClub = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Create Club</h1>
      <div className="form-container">
        <ClubForm onSubmit={(newClub) => createNewClub(newClub, user)} />
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 24px;
          background: white;
          padding: 24px;
          border-radius: 8px;
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

export default requireAuthentication(CreateClub);
