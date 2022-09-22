import React, {useEffect, useState} from 'react'
import "./timerMatch.css"

const TimerMatch = ({timer}) => {

        //Set time lefts
        const [days,setDays]=useState()
        const [hours,setHours]=useState()
        const [minutes,setMinutes]=useState()
    
            //Get Unit/MS
        let msecPerMinute = 1000 * 60;
        let msecPerHour = msecPerMinute * 60;
        let msecPerDay = msecPerHour * 24;
    
        const getTimeMatch=()=>{
            let timeNow=new Date(Date.now())//Get actual time in MS
            let matchStarts = new Date(timer)  //Get match time in MS
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


        useEffect(() => {
            getTimeMatch()
        },[]);
    

  return (
    <div className="reloj">
        <p>{days} <br /> <span id="days">Days</span></p>
        <p>{hours} <br /> <span id="hours">Hours</span> </p>
        <p>{minutes} <br /> <span id="minutes">Mins</span></p>
    </div>
  )
}

export default TimerMatch