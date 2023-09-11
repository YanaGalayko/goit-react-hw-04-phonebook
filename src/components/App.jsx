import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { ContactList } from "./ContactList/ContactList";
import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('key')

    if(savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts)})
    }
  }

  componentDidUpdate(_, prevState) {
  const { contacts } = this.state

  if(prevState.contacts !== contacts) {
    localStorage.setItem('key', JSON.stringify(contacts))
  }
  }

  addContact = newContact => {
    const isContactName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    const isContactNumber = this.state.contacts.some(
      contact => contact.number === newContact.number
    );

    if (isContactName) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    if (isContactNumber) {
      alert(`${newContact.number} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContact = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

render() {
  const { contacts, filter } = this.state;

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <h1>Phonebook</h1>

          <ContactForm onAdd={this.addContact}/>

      <h2>Contacts</h2>
       
      {contacts.length > 0 ? (
        <>
      <ContactFilter filter={filter} onChangeFilter={this.filterContact}/>
      <ContactList
        contacts={filteredContacts}
        onDelete={this.deleteContact}/> 
        </>)
        : (<p>Contact list is empty, please add contacts!</p>)} 
        <GlobalStyle/>  
    </Layout>
  )
}
 
}
