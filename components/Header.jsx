import React from "react";
import theme from "../src/theme";
import Link from "next/link";
import Button from "@material-ui/core/Button";

const Header = ({ user }) => (
  <header>
    <div className="header-title">SPCA Clubs</div>
    <div>
      {user ? (
        user.name
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
    `}</style>
  </header>
);

export default Header;
