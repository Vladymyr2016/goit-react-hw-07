import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <li className={s.item} key={id}>
        <h2 className={s.title}>{name}</h2>
        <h2 className={s.number}>{number}</h2>
        <button
          className={s.btn}
          type="submit"
          onClick={() => dispatch(removeContact(id))}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
