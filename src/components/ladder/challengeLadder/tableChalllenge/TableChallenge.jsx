import React, {useState, useEffect, useMemo} from 'react'
import { useTable, getCellProps, } from 'react-table'
import api from '../../../../api';
import CabeceraRoom from './cabeceraRoom/CabeceraRoom';
import RowRoom from './rowRoom/RowRoom';
import "./tableChallenge.css"



const TableChallenge = () => {


    const getData = () => [
        {
          name: "ID Room",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
        {
          name: "ID Room",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
        {
          name: "ID Room",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
        {
          name: "ID Room",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
        {
          name: "ID Room",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
        {
          name: "ID Room",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
      ];

      const columns = React.useMemo(
        () => [
          {
            accessor: "name",
          }
        
        ],
        []
      );

      const data = React.useMemo(() => getData(), []);

      const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({
        columns,
        data,
      });

  return (
    <div className="container_tableChallenge">
        <table className='table_rows' {...getTableProps()} >
                
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        <th >
                            <CabeceraRoom/>
                        </th>
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return ( 
                                    <td className='row-map' {...cell.getCellProps()}>
                                        {/* {cell.render("Cell")} */}
                                        {row.cells.map((cell) => {
                                           return <RowRoom key={cell.row.original }/>   
                                        })}
                                    </td>
                                )
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  )
}

export default TableChallenge