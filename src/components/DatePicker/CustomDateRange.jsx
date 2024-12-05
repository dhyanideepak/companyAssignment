import React, { useState } from "react";
import DateInput from "./DateInput";
import './Styles.css'

const CustomDateRange = ({ onChange }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [error, setError] = useState("");

  const handleFromDateChange = (date) => {
    setFromDate(date);
    validateDates(date, toDate);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
    validateDates(fromDate, date);
  };

  const validateDates = (from, to) => {
    if (from && to && new Date(from) > new Date(to)) {
      setError('The "To" date cannot be earlier than the "From" date.');
    } else {
      setError("");
      onChange({ from, to });
    }
  };

  return (
    <div className="custom-date-range">
      <div>
        <label>From:</label>
        <DateInput value={fromDate} onChange={handleFromDateChange} />
      </div>
      <div>
        <label>To:</label>
        <DateInput value={toDate} onChange={handleToDateChange} />
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CustomDateRange;

