import React from 'react';

const FilterButton = ({ name, isActive, updateFilter }) => {
  return (
    <button
      type="button" className="btn btn-outline-dark" aria-pressed={isActive}
      onClick={() => updateFilter(name)}
    >
      {name}
    </button>
  );
};

export default FilterButton;