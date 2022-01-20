import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { BsSearch } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';

import { normalizeQuery } from '../../services/apiServices';
import { FormStyled } from './SearchForm.styled';
import Button from '../button/Button';

const SearchForm = ({ query, getQuery }) => {
  const [searchQuery, setSearchQuery] = useState(query);

  const inputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedQuery = normalizeQuery(searchQuery);

    if (!normalizedQuery) {
      // тостик добавить
      toast.warning('Empty query');
      getQuery('');
      return;
    }
    if (normalizedQuery === query) {
      //  тостик добавить
      toast.warning('same query');
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
    <FormStyled onSubmit={handleSubmit}>
      <Button
        onClick={handleInputClear}
        icon={<AiOutlineDelete color="#666666" size={20} />}
        pl={10}
        pt={10}
        pr={10}
        pb={10}
      />
      <input
        onChange={handleChange}
        className="input"
        type="text"
        value={searchQuery}
        autoComplete="off"
        placeholder="Search movies"
        ref={inputRef}
      />
      <Button
        type="submit"
        icon={<BsSearch color="#666666" size={20} />}
        pl={10}
        pt={10}
        pr={10}
        pb={10}
      />
    </FormStyled>
  );
};

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  getQuery: PropTypes.func.isRequired,
};

export default SearchForm;
