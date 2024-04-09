import React, { useMemo } from "react";
import UsersListItem from "./UsersListItem";

const UsersList = ({ users, onClick }) => {
  const usersLists = useMemo(() => {
    return users.map((user, idx) => {
      return (
        <UsersListItem
          key={user.id}
          users={users}
          user={user}
          idx={idx}
          onClick={() => onClick(user)}
        />
      );
    });
  }, [users, onClick]);

  return <div className="users_list">{!!users.length && usersLists}</div>;
};

export default UsersList;
