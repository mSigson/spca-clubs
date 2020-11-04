import React from "react";
import theme from "styles/theme";
import PropTypes from "prop-types";
import iconLibrary from "../assets/icons/library";

const Icon = ({ size, color, icon, className, style }) => {
  const Icon = iconLibrary[icon];
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 16 16"
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Icon fill={color} />
    </svg>
  );
};

Icon.defaultProps = {
  size: 16,
  color: `${theme.palette.primary.main}`,
  style: {},
  className: "",
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  // style: PropTypes.shape(PropTypes.object.isRequired),
  className: PropTypes.string,
};

export default Icon;
