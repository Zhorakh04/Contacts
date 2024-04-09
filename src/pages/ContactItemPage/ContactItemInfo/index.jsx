import React from "react";

const ContactItemInfo = ({ styles, user }) => {
  console.log(user.email);
  return (
    <div>
      {user.company && (
        <div className={styles.contact_item_info_item}>
          <p>Company</p>
          <p className={styles.contact_item_info_item_company_name}>
            {user.company}
          </p>
        </div>
      )}
      {user.phone.length && (
        <>
          {user.phone.map((phone, idx) => (
            <div className={styles.contact_item_info_item}>
              <p>Phone Number {user.phone.length > 1 ? idx + 1 : ""}</p>
              <a href={`tel: ${phone}`}>{phone}</a>
            </div>
          ))}
        </>
      )}
      {user.email.length && (
        <>
          {user.email.map((email, idx) => (
            <div className={styles.contact_item_info_item}>
              <p>Email {user.email.length > 1 ? idx + 1 : ""}</p>
              <a href={`mailto: ${email}`}>{email}</a>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ContactItemInfo;
