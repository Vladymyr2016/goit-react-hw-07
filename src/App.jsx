import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import FormInput from './components/FormInput/FormInput';

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
