import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";

const FacebookIcon = ({ className }) => {
  return (
    <svg
      width="30"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M9 5.5V3.5C9 2.948 9.448 2.5 10 2.5H11V0H9C7.343 0 6 1.343 6 3V5.5H4V8H6V16H9V8H11L12 5.5H9Z"
        fill="white"
      />
    </svg>
  );
};

FacebookIcon.propTypes = {};

export default FacebookIcon;
