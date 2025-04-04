import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import {
  selectContact,
  selectIsError,
  selectIsLoading,
} from "../redux/selector";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm className={css.form} />

      {isError && <p>Not found</p>}
      {isLoading && <p>Loading...</p>}
      {contacts.length > 0 && <SearchBox />}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
