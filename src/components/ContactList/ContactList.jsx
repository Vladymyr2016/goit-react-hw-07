import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsLoading } from '../../redux/contactsSlice';

import { useEffect } from 'react';
import { fetchData } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      <ul className={s.ul}>
        {contacts?.map((contact) => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
