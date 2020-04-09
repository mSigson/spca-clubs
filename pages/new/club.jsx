import React from "react";
import Layout from "../../components/Layout";
import requireAuthentication from "../../components/AuthenticatedComponent";
import ClubForm from "../../components/forms/Club";

const CreateClub = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Create Club</h1>
      <ClubForm />
      <style jsx>{`
        h1 {
          margin-bottom: 24px;
        }
      `}</style>
    </Layout>
  );
};

export default requireAuthentication(CreateClub);
