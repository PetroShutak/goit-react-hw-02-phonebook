import React from 'react';
import PropType from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name:
      <br/>
      <input className={css.input} type="text" value={value} onChange={onChange} placeholder='search...'/>
    </label>
  );
};

Filter.propTypes = {
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default Filter;
