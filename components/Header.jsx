import React from "react";
import theme from "../src/theme";

const Header = ({ user }) => (
  <>
    <header>
      <div className="header-title">SPCA Clubs</div>
      <div>{user && user.name}</div>
    </header>

    <style jsx>{`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 24px;
        color: ${theme.palette.text.primary};
        font-family: ${theme.typography.fontFamily};
      }

      .header-title {
        font-size: 21px;
        color: ${theme.palette.primary.main};
      }
    `}</style>
  </>
);

export default Header;
