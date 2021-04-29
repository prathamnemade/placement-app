import React from "react";

export const LocationFIlled = ({ background = "#3362FA", color = "#fff" }) => {
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
        d="M13.182 12.682L10 15.864l-3.182-3.182c-.63-.63-1.058-1.431-1.232-2.304-.173-.873-.084-1.778.257-2.6.34-.822.917-1.525 1.657-2.02C8.24 5.264 9.11 5 10 5c.89 0 1.76.264 2.5.758.74.495 1.317 1.198 1.658 2.02.34.822.43 1.727.256 2.6s-.603 1.675-1.232 2.304zM10 10.5c.265 0 .52-.105.707-.293.188-.188.293-.442.293-.707 0-.265-.105-.52-.293-.707-.187-.188-.442-.293-.707-.293-.265 0-.52.105-.707.293C9.105 8.98 9 9.235 9 9.5c0 .265.105.52.293.707.187.188.442.293.707.293z"
      />
    </svg>
  );
};
