import Contact from '../Contact';

import styles from './index.module.css';

const ContactList = props => {
  const { contacts } = props;

  return (
    <div className={styles.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} onDelete={props.onDelete} />
      ))}
    </div>
  );
};

export default ContactList;
