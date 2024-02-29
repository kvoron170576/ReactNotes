import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper } from './Phonebook.styled';
import { useEffect, useState } from 'react';
const initialContacts = () => {
  const savedState = localStorage.getItem('phoneBookState');
  if (savedState) {
    const state = JSON.parse(savedState);
    if (state) {
      return state.contacts;
    }
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export const Phonebook = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  useEffect(() => {
    localStorage.setItem(
      'phoneBookState',
      JSON.stringify({ contacts, filter })
    );
  }, [contacts, filter]);

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };
  const addContact = contact => {
    const hasName = contacts.find(({ name }) => name === contact.name);
    if (hasName) {
      alert('Contact with this name already exist');
      return;
    }
    const hasPhone = contacts.find(({ number }) => number === contact.number);
    if (hasPhone) {
      alert('Contact with this Phone already exist');
      return;
    }
    setContacts([...contacts, contact]);
    return true;
  };

  const visibleContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={changeFilter} />
      <ContactList items={visibleContacts} deleteContact={deleteContact} />
    </Wrapper>
  );
};
