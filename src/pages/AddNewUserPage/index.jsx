import React from "react";

const AddNewUserPage = ({ setAddNewUser }) => {
  const cancelClick = () => {
    setAddNewUser(false);
  };

  return (
    <div>
      <button onClick={cancelClick}>Cancel</button>
      AddNewUserPage
    </div>
  );
};

export default AddNewUserPage;
