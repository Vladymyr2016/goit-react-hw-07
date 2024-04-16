import React from 'react';

import { useForm } from 'react-hook-form';
import s from './FormInput.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const FormInput = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const submit = ({ title, number }) => {
    const newContact = {
      id: nanoid(),
      title,
      number,
      completed: false,
    };
    dispatch(addContact(newContact));
    reset();
  };

  return (
    <div className={s.formInput}>
      <form onSubmit={handleSubmit(submit)}>
        <p className={s.name}>Name</p>
        <input
          className={s.fild}
          type="text"
          {...register('title', { required: true })}
          name="title"
        />

        <p className={s.name}>Number</p>
        <input
          className={s.fild}
          type="tel"
          {...register('number', { required: true })}
          name="number"
        />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default FormInput;
