import React, { useEffect, useState } from "react";
import "./components/contacts.scss";
import "./styles/index.scss";
import SmartphoneStatus from "./components/SmartphoneStatus/";
import ContactPage, { sortAtoZ } from "./pages/ContactsPage/index.jsx";
import ContactItemPage from "./pages/ContactItemPage/index.jsx";
import AddNewUserPage from "./pages/AddNewUserPage/index.jsx";
import axios from "axios";

const App = () => {
  const [addNewUser, setAddNewUser] = useState(false);

  const [contactPage, setContactPage] = useState({
    isVisible: false,
    props: null,
  });

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(sortAtoZ([...res.data, ...users]));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUser = () => {
    return users.find((el) => contactPage.props.user.id === el.id);
  };

  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, []);

  return (
    <div className="contacts">
      <div className="contacts_info">
        <SmartphoneStatus />
        {contactPage.isVisible ? (
          <ContactItemPage
            setContactPage={setContactPage}
            user={getUser()}
            setUsers={setUsers}
            users={users}
          />
        ) : addNewUser ? (
          <AddNewUserPage setAddNewUser={setAddNewUser} />
        ) : (
          <ContactPage
            users={users}
            setUsers={setUsers}
            setAddNewUser={setAddNewUser}
            setContactPage={setContactPage}
          />
        )}
      </div>
      <img
        className="contacts_smartphone_image"
        src="https://contacts-list.vercel.app/static/media/iphone.0274a05f.png"
        alt=""
      />
    </div>
  );
};

export default App;
