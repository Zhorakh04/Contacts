import React, { useState } from "react";
import UsersList from "../../components/UsersList";
import AddButton from "../../assets/AddButton";

export const sortAtoZ = (data) => {
  return [
    ...data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }),
  ];
};

const ContactPage = ({ setContactPage, setAddNewUser, users, setUsers }) => {
  const [value, setValue] = useState("");

  const onClick = () => {
    setAddNewUser(true);
  };

  const routeToContactItemPage = (props) => {
    setContactPage({
      isVisible: true,
      props: {
        user: props,
        setUsers,
        users,
      },
    });
  };

  return (
    <>
      <div className="contacts_title">
        <h1>Contacts</h1>
        <AddButton className={"contacts_add_btn"} onClick={onClick} />
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="contacts_search"
        placeholder="Search"
      />
      <UsersList
        users={users}
        setContactPage={setContactPage}
        onClick={routeToContactItemPage}
      />
    </>
  );
};

export default ContactPage;
