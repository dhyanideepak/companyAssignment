import React from "react";

const PresetButtons = ({ onSelect }) => {
  return (
    <div className="preset-buttons">
      <button onClick={() => onSelect("today")}>Today</button>
      <button onClick={() => onSelect("yesterday")}>Yesterday</button>
      <button onClick={() => onSelect("thisMonth")}>This Month</button>
      <button onClick={() => onSelect("lastMonth")}>Last Month</button>
      <button onClick={() => onSelect("custom")}>Custom Range</button>
    </div>
  );
};

export default PresetButtons;
