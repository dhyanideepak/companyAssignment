import React, { useState, useMemo } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import FilterInput from './FilterInput';
import './TableStyles.css';

const TableContainer = ({ data, columns, dynamicStyles }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [filters, setFilters] = useState({});
  
  const sortedData = useMemo(() => {
    if (!sortConfig) return data;
    const { key, direction } = sortConfig;
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const filteredData = useMemo(() => {
    return sortedData.filter((row) => {
      return Object.keys(filters).every((filterKey) => {
        if (filters[filterKey]) {
          return String(row[filterKey])
            .toLowerCase()
            .includes(filters[filterKey].toLowerCase());
        }
        return true;
      });
    });
  }, [sortedData, filters]);

  const handleSort = (columnKey) => {
    setSortConfig((prevSortConfig) => {
      let direction = 'ascending';
      if (prevSortConfig?.key === columnKey && prevSortConfig?.direction === 'ascending') {
        direction = 'descending';
      }
      return { key: columnKey, direction };
    });
  };

  const handleFilterChange = (columnKey, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [columnKey]: value,
    }));
  };

  return (
    <div className="table-container" style={{ ...dynamicStyles }}>
      <table className="custom-table">
        <TableHeader
          columns={columns}
          onSort={handleSort}
          sortConfig={sortConfig}
        />
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th key={column.key}>
                  {column.filterable && (
                    <FilterInput
                      placeholder={`Filter ${column.title}`}
                      value={filters[column.key] || ''}
                      onChange={(e) => handleFilterChange(column.key, e.target.value)}
                    />
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <TableBody data={filteredData} columns={columns} />
      </table>
    </div>
  );
};

export default TableContainer;
