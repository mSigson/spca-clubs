import React from "react";
import Layout from "../../components/Layout";
import requireAuthentication from "../../components/AuthenticatedComponent";
import ClubForm from "../../components/forms/Club";

const CreateClub = ({ user }) => {
  return (
    <Layout user={user}>
      <h1>Create Club</h1>
      <div className="form-container">
        <ClubForm />
      </div>
      <style jsx>{`
        h1 {
          margin-bottom: 24px;
          background: white;
          padding: 24px;
          border-radius: 8px;
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
