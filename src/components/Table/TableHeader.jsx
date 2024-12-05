import React from "react";

const TableHeader = ({ columns, onSort, sortConfig }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            onClick={() => column.sortable && onSort(column.key)}
          >
            {column.title}
            {column.sortable && sortConfig?.key === column.key && (
              <span>{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
