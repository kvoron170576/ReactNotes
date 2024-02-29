import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper } from './Phonebook.styled';
class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  async componentDidMount() {
    const savedState = localStorage.getItem('phoneBookState');
    if (savedState) {
      const state = JSON.parse(savedState);
      if (state) {
        this.setState(state);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('phoneBookState', JSON.stringify(this.state));
    }
  }

  deleteContact = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(({ id }) => id !== contactId),
    }));
  };
  addContact = contact => {
    const { contacts } = this.state;
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
    this.setState(state => ({
      contacts: [...state.contacts, contact],
    }));
  };
  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          items={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
export default Phonebook;
