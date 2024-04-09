import React from "react";
import EmailIcon from "../../../assets/EmailIcon";
import CallIcon from "../../../assets/CallIcon";

const ContactItemActions = ({ styles, user }) => {
  const email = user.email[0];
  const phone = user.phone[0];

  return (
    <div className={styles.contact_item_actions}>
      {phone && (
        <a href={`tel: ${phone}`} className={styles.contact_item_actions_item}>
          <CallIcon />
          <p>Call</p>
        </a>
      )}
      {email && (
        <a
          href={`mailto: ${email}`}
          className={styles.contact_item_actions_item}
        >
          <EmailIcon />
          <p>Email</p>
        </a>
      )}
    </div>
  );
};

export default ContactItemActions;
