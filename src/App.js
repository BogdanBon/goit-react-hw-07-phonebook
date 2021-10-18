import './App.css';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />

      <h1 className="title">Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
