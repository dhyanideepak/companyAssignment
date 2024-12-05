import React from "react";
import "./Styles.css";

const DateInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      className="date-input"
      type="date"
      value={value}
      onChange={handleChange}
    />
  );
};

export default DateInput;
