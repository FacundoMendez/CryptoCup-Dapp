import React from "react";
import { useTable } from "react-table";
import "./ranking.css";

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
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()} border="1" className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...column.getHeaderProps()}>{column.render("Header")}</th>
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
  );
}

export default Ranking