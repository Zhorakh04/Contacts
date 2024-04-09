import React, { useState } from "react";
import styles from "./ContactItem.module.scss";
import ContactItemInfo from "./ContactItemInfo";
import ContactItemActions from "./ContactItemActions";
import ContactForm from "./ContactForm/";

const ContactItemPage = ({ setContactPage, user, setUsers, users }) => {
  console.log(user);
  const [isEdit, setIsEdit] = useState(false);
  const [userInfo, setUserInfo] = useState({
    company: user.company.name,
    email: Array.isArray(user.email) ? [...user.email] : [user.email],
    phone: Array.isArray(user.phone) ? [...user.phone] : [user.phone],
  });

  const routeToContacts = () => {
    setContactPage(false);
  };

  const editContactItem = () => {
    setIsEdit(true);
  };

  return (
    <div className={`${styles.contact_item} container`}>
      {isEdit ? (
        <ContactForm
          user={user}
          setUsers={setUsers}
          users={users}
          setEdit={setIsEdit}
          routeToContacts={routeToContacts}
        />
      ) : (
        <>
          <div className={styles.contact_item_header}>
            <p onClick={routeToContacts}>Contacts</p>
            <p onClick={editContactItem}>Edit</p>
          </div>
          <div className={styles.contact_user_img}>
            {user.img ? (
              <img src={user.img} alt="contact user img item" />
            ) : (
              user.name[0]
            )}
          </div>
          <h2 className={styles.contact_item_name}>{user.name}</h2>
          <ContactItemActions styles={styles} user={userInfo} />
          <ContactItemInfo styles={styles} user={userInfo} />
        </>
      )}
    </div>
  );
};

export default ContactItemPage;
