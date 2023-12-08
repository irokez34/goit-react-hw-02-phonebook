import React from 'react';
import FormInput from './Form-input/form-input';
import ContactList from './Contact-list/contact-list';
import Filter from './Filter/filter';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };
  ContactAdd = evt => {
    evt.preventDefault();
    const contact = { name: this.state.name, number: this.state.number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
      name: '',
      number: '',
    }));
  };
  SearchContact = ({ target: { value } }) => {
   
    const state = this.state.contacts 
    // const filter = state.filter((name)=> console.log(name));
   
    for (let i = 0; i < state.length; i++) {
      const element = state[i];
    
    }
  };
  render() {
    
    return (
      <div
        style={{
          width: '300px',
          margin: '200px auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h1>PhoneBook</h1>
        <FormInput
          name={this.state.name}
          number={this.state.number}
          change={this.handleChange}
          submit={this.ContactAdd}
        ></FormInput>
        <h2>Contacts</h2>
        <Filter change={this.SearchContact} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
