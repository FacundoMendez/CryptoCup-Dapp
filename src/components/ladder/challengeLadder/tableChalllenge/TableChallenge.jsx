import React, {useState, useEffect} from 'react'
import api from '../../../../api';
import CabeceraRoom from './cabeceraRoom/CabeceraRoom';
import RowRoom from './rowRoom/RowRoom';
import "./tableChallenge.css"
import paisesJson from "../../../config/paises2.json"


const TableChallenge = () => {

      const [loading ,setLoading]=useState(true)
      const [challengeRoom , setChallengeRoom]=useState([])


      useEffect(() => {
        getData()
       },[]);


       const getData = async () => {
        const rooms = await api.get('/challenge/getRooms')
        setChallengeRoom(rooms.data)
        console.log(rooms.data);
        setLoading(false)
        /* setChallengeRoom(rooms.data) */
      }
      console.log(challengeRoom.length);


  return (
    <>

    <div className="container_tableChallenge">
      {challengeRoom.length > 0  ?
  
        <table className='table_rows'>               
            <thead>
              <tr>
                  <th >
                      <CabeceraRoom/>
                  </th>
              </tr>
            </thead>

            <tbody >
                <tr >
                    <td className='row-map'>
                        {
                        challengeRoom.map((item,index) => {
                          return <RowRoom key={index}
                                      id={item._id}
                                      flagTeam1= {paisesJson[item.team1].img}
                                      flagTeam2= {paisesJson[item.team2].img}
                                      tokens= {item.tokensRoom}
                                    />   
                      })}
                    </td> 
                </tr>  
            </tbody>
        </table>
      :
      loading === false && (challengeRoom.length <= 0 )  ? <p className='noChallenge'> NO MATCHS </p> : null }
    </div>
         
  </>
  )
}

export default TableChallenge
      
