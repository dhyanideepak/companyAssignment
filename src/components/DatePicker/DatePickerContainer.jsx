import React, { useState } from "react";
import PresetButtons from "./PresetButton";
import CustomDateRange from "./CustomDateRange";
import "./Styles.css";

const DatePickerContainer = ({ onSelectDate }) => {
  const [selectedPreset, setSelectedPreset] = useState("");
  const [customRange, setCustomRange] = useState({ from: "", to: "" });

  const handlePresetSelect = (preset) => {
    setSelectedPreset(preset);
    onSelectDate(preset); 
  };

  const handleCustomRangeSelect = (range) => {
    setCustomRange(range);
    onSelectDate(range);
  };

  return (
    <div className="date-picker-container">
      <PresetButtons onSelect={handlePresetSelect} />
      {selectedPreset === "custom" && (
        <CustomDateRange onChange={handleCustomRangeSelect} />
      )}
    </div>
  );
};

export default DatePickerContainer;
