import React from 'react';
import './form-input.css';
const FormInput = ({ name, number, change, submit }) => {
  return (
    <form onSubmit={submit}>
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
        <button className='btn' type='submit'>Add contact</button>
      </div>
    </form>
  );
};

export default FormInput;
