import React from "react";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import theme from "../src/theme";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import UserAvatar from "../components/UserAvatar";

const Header = ({ user, sideBarVisible, toggleSideBarVisible, width }) => {
  return (
    <header>
      {isWidthUp("md", width) ? (
        <div className="header-title">SPCA Clubs</div>
      ) : (
        <button onClick={toggleSideBarVisible} className="menu-toggle">
          {sideBarVisible ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      )}
      <div>
        {user ? (
          <UserAvatar user={user} />
        ) : (
          <Link href="/api/login">
            <Button variant="contained" color="primary">
              Log In / Sign Up
            </Button>
          </Link>
        )}
      </div>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
          height: ${theme.overrides.topBarHeight};
          color: ${theme.palette.text.primary};
          font-family: ${theme.typography.fontFamily};
        }

        .header-title {
          font-size: 21px;
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

export default withWidth()(Header);
