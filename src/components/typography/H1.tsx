import React from "react";
import PropTypes from "prop-types";
import theme from "styles/theme";

const H1 = ({ children, color }) => {
  return (
    <>
      <h1>{children}</h1>
      <style>{`
        h1 {
          color: ${color}
          font-size: 42px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

H1.defaultProps = {
  color: `${theme.palette.text.secondary}`,
};

H1.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default H1;
