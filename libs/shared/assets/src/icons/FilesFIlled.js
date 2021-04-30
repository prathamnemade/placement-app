import React from "react";

export const FilesFIlled = ({ background = "#3362FA", color = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <circle cx="10" cy="10" r="10" fill={background} />
      <path
        fill={color}
        d="M7 5c-.55 0-.995.45-.995 1L6 14c0 .55.445 1 .995 1H13c.55 0 1-.45 1-1V8l-3-3H7zm3.5 3.5V5.75l2.75 2.75H10.5z"
      />
    </svg>
  );
};
