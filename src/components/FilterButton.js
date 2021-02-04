import React from 'react';

const FilterButton = ({ name, isActive, updateFilter }) => {
  return (
    <button
      type="button" className="btn btn-outline-dark filter-button" aria-pressed={isActive}
      onClick={() => updateFilter(name)}
    >
      <span className="visually-hidden">Show </span>
      {name}
      <span className="visually-hidden"> Tasks</span>
    </button>
  );
};

export default FilterButton;