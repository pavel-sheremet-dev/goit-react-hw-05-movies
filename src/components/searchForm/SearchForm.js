import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { BsSearch } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';

import { normalizeQuery } from '../../services/apiServices';

const SearchForm = ({ query, getQuery }) => {
  const [searchQuery, setSearchQuery] = useState(query);

  const inputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedQuery = normalizeQuery(searchQuery);

    if (!normalizedQuery) {
      // тостик добавить
      console.log(`Empty query`);
      getQuery('');
      return;
    }
    if (normalizedQuery === query) {
      //  тостик добавить
      console.log(`same query`);
      return;
    }
    getQuery(searchQuery);
    inputRef.current.blur();
  };

  const handleInputClear = e => {
    setSearchQuery('');
    getQuery('');
    inputRef.current.focus();
  };

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <button type="button" className="SearchForm-button">
        <AiOutlineDelete color="#55555" onClick={handleInputClear} />
      </button>
      <input
        onChange={handleChange}
        className="SearchForm-input"
        type="text"
        value={searchQuery}
        autoComplete="off"
        placeholder="Search movies"
        ref={inputRef}
      />
      <button type="submit" className="SearchForm-button">
        <BsSearch color="#55555" />
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  getQuery: PropTypes.func.isRequired,
};

export default SearchForm;
