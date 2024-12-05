import React from "react";

const FilterInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="filter-input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default FilterInput;
