import { ContactsStyle } from './Contacts.styled';

export const Contacts = ({ contacts }) => {
  return (
    <ContactsStyle>
      {contacts.map(({name, number, id}) => (
        <li className="contacts__item">
          <h3 className="contacts__name">{name}</h3>
          <p className="contacts__number">: {number}</p>
          <button className="contacts__delete">Delete</button>
        </li>
      ))}
    </ContactsStyle>
  );
};
