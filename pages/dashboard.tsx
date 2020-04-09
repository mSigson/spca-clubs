import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";

import Layout from "../components/Layout";
import requireAuthentication from "../components/AuthenticatedComponent";
import AddIcon from "@material-ui/icons/Add";

const Dashboard = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <Link href="/new/club">
          <Button variant="contained" color="primary" startIcon={<AddIcon />}>
            Add a new club
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default requireAuthentication(Dashboard);
