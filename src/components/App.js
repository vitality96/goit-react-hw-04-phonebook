import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import s from './App.module.css'
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const handleChange = (evt) => {
    setFilter(evt.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };
    const checkUser = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

      checkUser
      ? alert(`${name} is already in the contacts`)
      : setContacts([newContact, ...contacts])
      };
      
    useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    setContacts(parsedContacts)
  }, []);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
    
  return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2 className={s.title}>Contacts</h2>
        <Filter handleChange={handleChange} filter={filter} />
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  };