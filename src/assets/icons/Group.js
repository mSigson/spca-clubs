import * as React from "react";
import PropTypes from "prop-types";

const SvgGroup = ({ fill }) => (
  <>
    <path
      d="M2.4 5.19999C3.2825 5.19999 4 4.48249 4 3.59999C4 2.71749 3.2825 1.99999 2.4 1.99999C1.5175 1.99999 0.8 2.71749 0.8 3.59999C0.8 4.48249 1.5175 5.19999 2.4 5.19999ZM13.6 5.19999C14.4825 5.19999 15.2 4.48249 15.2 3.59999C15.2 2.71749 14.4825 1.99999 13.6 1.99999C12.7175 1.99999 12 2.71749 12 3.59999C12 4.48249 12.7175 5.19999 13.6 5.19999ZM14.4 5.99999H12.8C12.36 5.99999 11.9625 6.17749 11.6725 6.46499C12.68 7.01749 13.395 8.01499 13.55 9.2H15.2C15.6425 9.2 16 8.84249 16 8.39999V7.59999C16 6.71749 15.2825 5.99999 14.4 5.99999ZM8 5.99999C9.5475 5.99999 10.8 4.74749 10.8 3.19999C10.8 1.65249 9.5475 0.399994 8 0.399994C6.4525 0.399994 5.2 1.65249 5.2 3.19999C5.2 4.74749 6.4525 5.99999 8 5.99999ZM9.92 6.79999H9.7125C9.1925 7.04999 8.615 7.19999 8 7.19999C7.385 7.19999 6.81 7.04999 6.2875 6.79999H6.08C4.49 6.79999 3.2 8.08999 3.2 9.67999V10.4C3.2 11.0625 3.7375 11.6 4.4 11.6H11.6C12.2625 11.6 12.8 11.0625 12.8 10.4V9.67999C12.8 8.08999 11.51 6.79999 9.92 6.79999ZM4.3275 6.46499C4.0375 6.17749 3.64 5.99999 3.2 5.99999H1.6C0.7175 5.99999 0 6.71749 0 7.59999V8.39999C0 8.84249 0.3575 9.2 0.8 9.2H2.4475C2.605 8.01499 3.32 7.01749 4.3275 6.46499Z"
      fill={fill}
    />
  </>
);

SvgGroup.propTypes = {
  fill: PropTypes.string.isRequired,
};

export default SvgGroup;
