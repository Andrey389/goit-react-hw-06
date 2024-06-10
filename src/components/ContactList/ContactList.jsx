// import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/store";

export default function ContactList() {
  const Contacts = useSelector(selectContacts);
  const Filters = useSelector(selectNameFilter);
  const VisibleContacts = Contacts.filter((Contact) => {
    if ("id" in Contact && "name" in Contact && "phone" in Contact) {
      if (
        typeof Contact.id === "string" &&
        typeof Contact.name === "string" &&
        typeof Contact.phone === "string"
      ) {
        return Contact.name.toLowerCase().includes(Filters.toLowerCase());
      }
    }
    return false;
  });

  return (
    <ul className={css.ulContainer}>
      {VisibleContacts.map((Contact) => {
        return (
          <li key={Contact.id} className={css.container}>
            <Contact
              id={Contact.id}
              name={Contact.name}
              phone={Contact.phone}
            />
          </li>
        );
      })}
    </ul>
  );
}
