import React from "react";
import theme from "../../src/styles/theme";
import Layout from "../../components/Layout";
import requireAuthentication from "../../components/AuthenticatedComponent";

import { useUser } from "../../utils/user";
import { useRouter } from "next/router";

const ClubPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const club = user.clubs.find((club) => club._id === router.query.id);
  return (
    <Layout user={user}>
      <div>{club.name}</div>
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

export default requireAuthentication(ClubPage);
