import React from "react";

const UsersListItem = ({ users, user, idx, onClick }) => {
  const prevUser = users[idx - 1];
  const isNextSame = users[idx + 1]?.name[0] === user.name[0];

  if (!prevUser || prevUser.name[0] !== user.name[0]) {
    return (
      <div className="contacts_list_item" onClick={() => onClick(user)}>
        <div
          className="contacts_list_item_title"
          style={{ background: "#e5e6ea" }}
        >
          {user.name[0].toUpperCase()}
        </div>
        <div
          className={`${isNextSame ? "active" : ""} contacts_list_item_name`}
        >
          <div>{user.name[0].toUpperCase()} </div> <p>{user.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contacts_list_item" onClick={() => onClick(user)}>
      <div className={`${isNextSame ? "active " : ""}contacts_list_item_name`}>
        <div>{user.name[0].toUpperCase()}</div> {user.name}
      </div>
    </div>
  );
};

export default UsersListItem;
