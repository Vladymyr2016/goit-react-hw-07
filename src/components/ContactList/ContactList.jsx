import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectPhoneBook } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filterSlice';
// import { selectFilter } from '../../redux/filterSlice';

const ContactList = () => {
  const contacts = useSelector(selectPhoneBook);
  const filter = useSelector(selectFilter);

  console.log(contacts);
  console.log(filter);

  const getFilteredContacts = contacts.filter((contact) => {
    console.log(contact);
    console.log(filter);
    return contact.title.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <>
      <ul>
        <div>
          {getFilteredContacts.map((contact) => {
            return <Contact key={contact.id} {...contact} />;
          })}
        </div>
      </ul>
    </>
  );
};

export default ContactList;
