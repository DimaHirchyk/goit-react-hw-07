import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
import css from "./App.module.css";

export default function App() {
  return (
    <>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm className={css.form} />
      <SearchBox />
      <ContactList />
    </>
  );
}
