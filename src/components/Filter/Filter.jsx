import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/operations';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const getVisibleList = value => dispatch(filterContacts(value));
  const filterList = e => {
    getVisibleList(e.target.value);
  };

  return (
    <div className={s.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
        className={s.input}
        onChange={filterList}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  formSubmitHandler: PropTypes.func,
};
