import React from 'react';
import FormInput from './Form-input/form-input';
import ContactList from './Contact-list/contact-list';

export class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  handleChange = ({ target: { value,name } }) => {
    this.setState({
      [name]: value,
    });
  };
  render() {
    console.log(this.state);
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
        <FormInput name={this.state.name} number={this.state.number} change={this.handleChange}/>
        <ContactList />
      </div>
    );
  }
}
