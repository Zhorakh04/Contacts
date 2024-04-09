import React from "react";

const RemoveButton = ({ className, color, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color ? color : ""}
      className={className}
    >
      <path d="M0 10h24v5h-24z"></path>
    </svg>
  );
};

export default RemoveButton;
