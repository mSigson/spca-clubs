import React from "react";
import { useRouter } from "next/router";
import { useUser } from "utils/user";

import theme from "styles/theme";
import Link from "next/link";
import Button from "@material-ui/core/Button";

import UserAvatar from "./UserAvatar";
import styleVariables from "styles/variables";

const Header = () => {
  const { user } = useUser();
  const router = useRouter();
  const club = user?.clubs.find((club) => club._id === router.query.id);

  return (
    <header>
      <div className="app-route-info">
        {club && (
          <div className="route-navigator">
            <Link href={`/club/${club._id}`}>{club.name}</Link>
          </div>
        )}
      </div>
      <div>
        {user ? (
          <div className="header-user">
            <p className="header-user-name">{user.name}</p>
            <UserAvatar user={user} height="40px" width="40px" />
          </div>
        ) : (
          <Link href="/api/login">
            <Button variant="contained" color="primary">
              Log In / Sign Up
            </Button>
          </Link>
        )}
      </div>
      <style jsx global>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
          font-weight: 700;
          height: ${styleVariables.topBarHeight};
          color: ${theme.palette.text.primary};
          font-family: ${theme.typography.fontFamily};
          background: #fff;
        }

        .header-title {
          color: ${theme.palette.primary.main};
        }

        .menu-toggle {
          color: #fff;
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          margin-left: -10px;
        }

        .app-route-info {
          display: flex;
          font-size: 21px;
        }

        .route-navigator {
          position: relative;
          left: 30px;
          color: #000;
        }

        .user-avatar-container {
          width: 40px;
          height: 40x;
        }

        .header-user {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .header-user-name {
          margin-right: 14px;
          font-size: 14px;
          font-weight: 400;
        }

        @media (max-width: 960px) {
          .menu-toggle {
            color: ${theme.palette.primary.main};
          }

          .header-title {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
