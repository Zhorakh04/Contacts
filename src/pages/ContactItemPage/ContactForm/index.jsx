import React, { useEffect, useMemo, useState } from "react";

import styles from "./ContactForm.module.scss";
import AddButton from "../../../assets/AddButton";
import UserImageLogo from "../../../assets/userImageLogo.png";
import RemoveButton from "../../../assets/RemoveButton";

const ContactForm = ({ user, setUsers, users, setEdit, routeToContacts }) => {
  const [name, surname] = useMemo(() => {
    return user.name.split(" ");
  }, []);

  const email = Array.isArray(user.email) ? [...user.email] : [user.email];
  const phone = Array.isArray(user.phone) ? [...user.phone] : [user.phone];
  const [validationChecker, setValidationChecker] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name,
    surname,
    company: user.company,
    email,
    phone,
  });

  const onEditUserName = (e) => {
    setUserInfo({
      ...userInfo,
      name: e.target.value,
    });
  };

  const onEditUserSurname = (e) => {
    setUserInfo({
      ...userInfo,
      surname: e.target.value,
    });
  };

  const onEditUserCompany = (e) => {
    setUserInfo({
      ...userInfo,
      company: {
        name: e.target.value,
      },
    });
  };

  const onEditPhoneNumber = (e, idx) => {
    setUserInfo({
      ...userInfo,
      phone: userInfo.phone.map((el, i) => (i === idx ? e.target.value : el)),
    });
  };

  const onAddPhoneNumber = () => {
    setUserInfo({
      ...userInfo,
      phone: [...userInfo.phone, ""],
    });
  };

  const onEditEmailAddress = (e, idx) => {
    setUserInfo({
      ...userInfo,
      email: userInfo.email.map((el, i) => (i === idx ? e.target.value : el)),
    });
  };

  const onAddEmailAddress = () => {
    setUserInfo({
      ...userInfo,
      email: [...userInfo.email, ""],
    });
  };

  const onRemoveEmailAddress = (idx) => {
    const removeEmail = userInfo.email.filter((_, i) => i !== idx);
    setUserInfo({ ...userInfo, email: removeEmail });
  };

  const onRemovePhoneNumber = (idx) => {
    const removeEmail = userInfo.phone.filter((_, i) => i !== idx);
    setUserInfo({ ...userInfo, phone: removeEmail });
  };

  const onDone = () => {
    const userData = users.map((el) => {
      return el.id === user.id
        ? {
            id: user.id,
            name: userInfo.name + " " + userInfo.surname,
            ...userInfo,
          }
        : { ...el };
    });

    setUsers(userData);
    console.log(userData);
    setEdit(false);
  };

  const onCancel = () => {
    setEdit(false);
  };
  const onDeleteContact = () => {
    const userData = users.filter((el) => el.id !== user.id);
    setUsers(userData);
    routeToContacts();
  };

  const isDoneAvailable = () => {
    let result = true;
    userInfo.phone.forEach((el, idx) => {
      if (!el.replace(/[-.a-zA-Z]/g, "")) {
        result = false;
      }
    });
    console.log(result);
    if (!(userInfo.name || userInfo.surname) || !result) {
      return false;
    }
    return true;
  };

  return (
    <>
      <div className={styles.contact_item_header}>
        <p onClick={onCancel}>Cancel</p>
        <button disabled={!isDoneAvailable()} onClick={onDone}>
          Done
        </button>
      </div>
      <form>
        {user.name && (
          <div className={styles.contact_user_img}>
            {user.img ? (
              <img src={user.img} alt="contact user img item" />
            ) : (
              userInfo.name[0]?.toUpperCase() ||
              userInfo.surname[0]?.toUpperCase() || (
                <img src={UserImageLogo} alt="image" />
              )
            )}
          </div>
        )}
        <p className={styles.contact_add_user_img}>Add Photo</p>
        <div className={styles.contact__form__inputs}>
          <input
            className={styles.contact__input}
            type="text"
            value={userInfo.name}
            placeholder="First Name"
            onChange={onEditUserName}
            maxLength={20}
          />
          <input
            className={styles.contact__input}
            type="text"
            value={userInfo.surname}
            placeholder="Last Name"
            maxLength={20}
            onChange={onEditUserSurname}
          />
          <input
            className={styles.contact__input}
            type="text"
            value={userInfo.company.name}
            maxLength={28}
            placeholder="Company"
            onChange={onEditUserCompany}
          />
        </div>
        <div>
          <div className={styles.contacts_item_phone_number}>
            {userInfo.phone.map((phone, idx) => {
              return (
                <div>
                  <div className={styles.contacts_contact_item}>
                    <input
                      type="text"
                      value={phone}
                      placeholder="Phone Number"
                      className={styles.contact__input}
                      onChange={(e) => onEditPhoneNumber(e, idx)}
                    />
                    <RemoveButton
                      className={styles.contacts_remove_icon}
                      onClick={() => onRemovePhoneNumber(idx)}
                    />
                  </div>
                </div>
              );
            })}
            <div
              className={styles.contacts_item_add_contact}
              onClick={onAddPhoneNumber}
            >
              <AddButton className={styles.contacts_item_add_contact_button} />
              <p>Add Phone Number</p>
            </div>
          </div>
          <div>
            {userInfo.email.map((email, idx) => (
              <div>
                <div className={styles.contacts_contact_item}>
                  <input
                    type="text"
                    value={email}
                    placeholder="Email Address"
                    className={styles.contact__input}
                    onChange={(e) => onEditEmailAddress(e, idx)}
                  />
                  <RemoveButton
                    className={styles.contacts_remove_icon}
                    onClick={() => onRemoveEmailAddress(idx)}
                  />
                </div>
              </div>
            ))}
            <div
              className={styles.contacts_item_add_contact}
              onClick={onAddEmailAddress}
            >
              <AddButton className={styles.contacts_item_add_contact_button} />
              <p>Add Email</p>
            </div>
          </div>
        </div>
      </form>
      <button onClick={onDeleteContact}>
        <p>Delete</p>
      </button>
    </>
  );
};

export default ContactForm;
