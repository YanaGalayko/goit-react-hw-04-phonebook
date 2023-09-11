import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { ContactList } from "./ContactList/ContactList";
import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";

const getIntialContacts = () => {
  const savedContacts = localStorage.getItem('key')
  if(savedContacts !== null) {
    return JSON.parse(savedContacts)
  }
  return []
}

export const App = () => {
  const [contacts, setContacts] = useState(getIntialContacts)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(contacts))
  }, [contacts])


  const addContact = (newContact) => {
    const isContactName = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    
    if (isContactName) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const isContactNumber = contacts.some(
      contact => contact.number === newContact.number
    );

    if (isContactNumber) {
      alert(`${newContact.number} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => ([
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]))
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId),
    );
  };

  const filterContact = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))


  return (
    <Layout>
      <h1>Phonebook</h1>

          <ContactForm onAdd={addContact}/>

      <h2>Contacts</h2>
       
      {contacts.length > 0 ? (
        <>
      <ContactFilter filter={filter} onChangeFilter={filterContact}/>
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContact}/> 
        </>)
        : (<p>Contact list is empty, please add contacts!</p>)} 
        <GlobalStyle/>  
    </Layout>
  )
}
