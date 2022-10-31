import React, {Suspense, useEffect, useState} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./timerMatch.css"

const TimerMatch = ({timer, finishDate}) => {

        //Set time lefts
        const [days,setDays]=useState()
        const [hours,setHours]=useState()
        const [minutes,setMinutes]=useState()
        const [statusTimer , setStatusTimer] = useState()

        //Set date of the past matches
        const [matchDate , setMatchDate] = useState() 

       /*  console.log(finishDate); */
            //Get Unit/MS
        let msecPerMinute = 1000 * 60;
        let msecPerHour = msecPerMinute * 60;
        let msecPerDay = msecPerHour * 24;
    
        const getTimeMatch=()=>{
            let timeNow=new Date(Date.now())//Get actual time in MS
            let matchStarts = new Date(timer)  //Get match time in MS
            
            if (finishDate<=timeNow) {
                setStatusTimer("finished")
            }
            if (timer>=timeNow) {
                setStatusTimer("startIn")
            }
            let diff=matchStarts-timeNow 
            let daysLeft=Math.floor((matchStarts-timeNow)/msecPerDay)
            setDays(daysLeft); 
            
            diff=diff-(daysLeft*msecPerDay)
            let hoursLeft=Math.floor(diff/msecPerHour)
            setHours(hoursLeft)

            diff=diff-(hoursLeft*msecPerHour)
            let minutesLeft=Math.floor(diff/msecPerMinute)
            setMinutes(minutesLeft) 
        }

        function getMatchDate()  {
            const fecha = new Date(timer)
            const mesDia = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`
            console.log(fecha.getDate());
            setMatchDate(mesDia)
        }

        useEffect(() => {
            getTimeMatch()
            getMatchDate()
        },[]);
    

  return (
    <Suspense fallback={<Spinner/>}>
        {
            statusTimer==="finished" ?
            
            <div className="reloj finish">
                <h2 className='finished_matchFeed'>Finished</h2>
                <div className="dateMatchFeed"> {matchDate}</div>
            </div>
                :
            statusTimer==="startIn" ?
            <div className="reloj">
                <div className='startIn'>
                    <p className='startIn_text'>START IN: </p> 
                </div> 
                <div className="time_matchFeed">
                    <p>{days} <br /> <span id="days">Days</span></p>
                    <p>{hours} <br /> <span id="hours">Hours</span> </p>
                    <p>{minutes} <br /> <span id="minutes">Mins</span></p>
                </div>
            </div>
                 :
            <div className="reloj">
                <h2 className='finished_matchFeed'>Live</h2>
            </div>
            
            

    }

       
    </Suspense>
  )
}

export default TimerMatch