import { useDispatch, useSelector } from "react-redux";
import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { selectVisibleContacts } from "../../redux/selector";

const formatPhoneNumber = (phone) => {
  return phone.replace(/\sx\d+$/, "");
};

export default function ContactList() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);
  console.log(visibleContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li key={contact.id} className={css.iteam}>
          <Contact
            contact={{ ...contact, number: formatPhoneNumber(contact.number) }}
            onDelete={handleDelete}
          />
        </li>
      ))}
    </ul>
  );
}
