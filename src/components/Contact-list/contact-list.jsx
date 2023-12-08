import './contact-list.css';
import { nanoid } from 'nanoid'
const ContactList = ({ contacts }) => {
  const id = nanoid();
  const contactlist = contacts.map(contact => (
    <li className="item" key = {id}>
      <span>{contact.name}</span>:
      <span> {contact.number}</span>
    </li>
  ));
  return (
    <div className='contacts'>
      <ul>{contactlist}</ul>
    </div>
  );
};

export default ContactList;
