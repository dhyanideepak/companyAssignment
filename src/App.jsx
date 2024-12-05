import React from "react";
import TableContainer from "./components/Table/TableContainer";
import DatePicker from "./components/DatePicker/DatePicker";
import "./App.css";

const App = () => {
  const data = [
    { name: "John Doe", age: 28, country: "USA" },
    { name: "Jane Smith", age: 34, country: "Canada" },
    { name: "Tom Brown", age: 22, country: "UK" },
    { name: "Emily Green", age: 41, country: "Australia" },
    { name: "Abhishek", age: 35, country: "India" },
  ];

  const columns = [
    { key: "name", title: "Name", sortable: true, filterable: true },
    { key: "age", title: "Age", sortable: true, filterable: true },
    { key: "country", title: "Country", sortable: true, filterable: true },
  ];

  const dynamicStyles = {
    fontSize: "16px",
    backgroundColor: "#fff",
    color: "#333",
    
    
  };

  return (
    <>
      <div className="App">
        <h1>Custom Table </h1>
        <TableContainer
          data={data}
          columns={columns}
          dynamicStyles={dynamicStyles}
        />
      </div>
      <DatePicker/>
    </>
  );
};

export default App;
