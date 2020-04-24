import { makeStyles, SvgIcon } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({
  instagramGradient: {
    opacity: "0.0",
    display: "inline-block",
    "&:hover": {
      opacity: 1.0
    }
  }
}));

function Instagram({ className = "" }) {
  const classes = useStyles();
  return (
    <SvgIcon
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: 23 }}
    >
      <mask id="instagram0" maskUnits="userSpaceOnUse" x="0" y="0">
        <path
          d="M16.5 0H7.5C3.3585 0 0 3.3585 0 7.5V16.5C0 20.6415 3.3585 24 7.5 24H16.5C20.6415 24 24 20.6415 24 16.5V7.5C24 3.3585 20.6415 0 16.5 0ZM21.75 16.5C21.75 19.395 19.395 21.75 16.5 21.75H7.5C4.605 21.75 2.25 19.395 2.25 16.5V7.5C2.25 4.605 4.605 2.25 7.5 2.25H16.5C19.395 2.25 21.75 4.605 21.75 7.5V16.5Z"
          fill="#fff"
        />
        <path
          d="M12 6C8.6865 6 6 8.6865 6 12C6 15.3135 8.6865 18 12 18C15.3135 18 18 15.3135 18 12C18 8.6865 15.3135 6 12 6ZM12 15.75C9.933 15.75 8.25 14.067 8.25 12C8.25 9.9315 9.933 8.25 12 8.25C14.067 8.25 15.75 9.9315 15.75 12C15.75 14.067 14.067 15.75 12 15.75Z"
          fill="#fff"
        />
        <path
          d="M18.4499 6.34949C18.8914 6.34949 19.2494 5.99154 19.2494 5.54999C19.2494 5.10844 18.8914 4.75049 18.4499 4.75049C18.0083 4.75049 17.6504 5.10844 17.6504 5.54999C17.6504 5.99154 18.0083 6.34949 18.4499 6.34949Z"
          fill="#fff"
        />
      </mask>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1.55619"
          y1="15.4439"
          x2="15.4438"
          y2="1.55608"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFC107" />
          <stop offset="0.507" stop-color="#F44336" />
          <stop offset="0.99" stop-color="#9C27B0" />
        </linearGradient>
      </defs>

      <g mask="url(#instagram0)">
        <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
        <rect
          className={clsx(className, classes.instagramGradient)}
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#paint0_linear)"
        />
      </g>
    </SvgIcon>
  );
}

export default Instagram;
