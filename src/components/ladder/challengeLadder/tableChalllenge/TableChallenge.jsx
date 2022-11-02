import React, {useState, useEffect} from 'react'
import api from '../../../../api';
import CabeceraRoom from './cabeceraRoom/CabeceraRoom';
import RowRoom from './rowRoom/RowRoom';
import "./tableChallenge.css"
import Spinner from '../../../config/spinner/Spinner';



const TableChallenge = () => {

      const [loading ,setLoading]=useState(true)
      const [challengeRoom , setChallengeRoom]=useState([])


      useEffect(() => {
        getData()
       },[]);


       const getData = async () => {
        const rooms = await api.get('/challenge/getRooms')
        console.log(rooms.data);
        /* if (rooms.data != challengeRoom) {
          
        } */
        setChallengeRoom(rooms.data)
          setLoading(false)
      }


  return (
    <>

    <div className="container_tableChallenge">
      <div className='spin' >
              {loading ? <Spinner/> : null}
       </div>
        
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
                       {challengeRoom.length > 0  ?
                        challengeRoom.map((item,index) => {

                          return <RowRoom key={index}
                                      id={item._id}
                                      status = {item.status}
                                      ownerUsername={item.ownerUsername}
                                      ownerAddress = {item.ownerAddress}
                                      opponentAddress = {item.opponentAddress}
                                      flagTeam1=  {item.relatedMatch[0].team1}
                                      flagTeam2=  {item.relatedMatch[0].team2} 
                                      ownerSelect = {item.ownerSelection}
                                      tokens= {item.tokensRoom}
                                    />   
                      })
                    
                      : null
                    }  
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
      
