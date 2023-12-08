import React from 'react';
import './form-input.css';
const FormInput = ({ name, number, change }) => {
  return (
    <>
      <h2>PhoneBook</h2>
      <div className="input-container">
        <div className="input-name">
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            className="input"
            value={name}
            onChange={change}
            required
          />
        </div>
        <div className="input-number">
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            className="input"
            value={number}
            onChange={change}
            required
          />
        </div>
      </div>
    </>
  );
};

export default FormInput;
