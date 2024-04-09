import React from "react";

const AddButtonIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color ? color : "#5bc236"}
    >
      <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path>
    </svg>
  );
};

export default AddButtonIcon;
