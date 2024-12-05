import React,{useState} from "react";
import DatePickerContainer from "./DatePickerContainer";
import "./Styles.css";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelection = (range) => {
    setSelectedDate(range);
  };

  return (
    <div className="app-container">
      <h1>Date Picker Application</h1>
      <p>Select a date range using the options below:</p>
      <DatePickerContainer onSelectDate={handleDateSelection} />

      {selectedDate && (
        <div className="selected-date-range">
          <h3>Selected Date Range:</h3>
          <p>
            From: {selectedDate.from || "N/A"} <br />
            To: {selectedDate.to || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default DatePicker;