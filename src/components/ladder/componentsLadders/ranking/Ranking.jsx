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
    <table {...getTableProps()} border="1">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="table-header" {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className="table-row" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td className="table-element" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Ranking