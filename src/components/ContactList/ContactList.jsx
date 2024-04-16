import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';

import { isLoading, selectPhoneBook } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filterSlice';

import { useEffect } from 'react';
import { fetchData } from '../../redux/contactsOps';

const ContactList = () => {
  const contacts = useSelector(selectPhoneBook);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const getFilteredContacts = contacts?.filter((contact) => {
    return contact?.name?.toLowerCase()?.includes(filter?.toLowerCase());
  });
  console.log(getFilteredContacts);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul>
        {getFilteredContacts?.map((contact) => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
