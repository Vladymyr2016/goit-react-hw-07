import React from 'react';
import FormInput from './FormInput/FormInput';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <FormInput />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default App;
