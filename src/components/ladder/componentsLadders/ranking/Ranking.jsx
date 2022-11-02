import React from "react";
import "./ranking.css";
import { useTable, useGlobalFilter, useAsyncDebounce, useSortBy } from 'react-table'

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </span>
  )
}


const Ranking = ({ rankings }) => {
  const data = rankings;

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "pos",
      },
      {
        Header: "PLAYER",
        accessor: "player",
      },
      {
        Header: "TICKET N°",
        accessor: "ticketNumber",
      },
      {
        Header: "COUNTRY",
        accessor: "country",
      },
      {
        Header: "points",
        accessor: "points",
      },
    ],
    []
  );

  console.log(rankings)
  console.log(columns)

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps,
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow,
    state, 
    preGlobalFilteredRows, 
    setGlobalFilter
  } = useTable({
    columns,
    data,
  },
    useGlobalFilter,
    useSortBy,
  );

  // Render the UI for your table
  return (
    <>
      <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      <table {...getTableProps()} border="1" className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 text-black">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼'
                        : ' ▲'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr className="table-row" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td className="px-6 py-4 whitespace-nowrap table-element" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Ranking