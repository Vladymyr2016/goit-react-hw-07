import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';

import { isLoading } from '../../redux/contactsSlice';

import { useEffect } from 'react';
import { fetchData } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul>
        {contacts?.map((contact) => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
