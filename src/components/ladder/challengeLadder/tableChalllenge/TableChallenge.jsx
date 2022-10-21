import React, {useState, useEffect, useMemo} from 'react'
import { useTable} from 'react-table'
import api from '../../../../api';
import CabeceraRoom from './cabeceraRoom/CabeceraRoom';
import RowRoom from './rowRoom/RowRoom';
import "./tableChallenge.css"



const TableChallenge = () => {


    const getData = () => [
        {
          id: "1",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
        {
          id: "2",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
        {
          id: "3",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
        {
          id: "4",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
        {
          id: "5",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
        {
          id: "6",
          title: "Team1 - vs - Team2",
          amount: "0",
          owner: "TEAM",
          button:"Challenge",
          team1Img:" " ,
          team2Img:" " ,
        },
      ];

      const [roomOcupada , setRoomOcupada] = useState(false)


      const columns = useMemo(
        () => [
          {
            accessor: "id",
          }
        
        ],
        []
      );

      const data = useMemo(() => getData(), []);

      const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow  } =
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
                                           return <RowRoom 
                                                      id={cell.row.id}
                                                      roomOcupada={roomOcupada}
                                                      setRoomOcupada={setRoomOcupada}
                                                      flagTeam1= "{}"
                                                      flagTeam2= "{}"
                                                      tokens= "{}"
                                                    />   
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