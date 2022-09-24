import React, {Suspense, useEffect, useState} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./timerMatch.css"

const TimerMatch = ({timer}) => {

        //Set time lefts
        const [days,setDays]=useState()
        const [hours,setHours]=useState()
        const [minutes,setMinutes]=useState()
        const [finishTimer , setFinishTimer] = useState()


            //Get Unit/MS
        let msecPerMinute = 1000 * 60;
        let msecPerHour = msecPerMinute * 60;
        let msecPerDay = msecPerHour * 24;
    
        const getTimeMatch=()=>{
            let timeNow=new Date(Date.now())//Get actual time in MS
            let matchStarts = new Date(timer)  //Get match time in MS

            if (matchStarts<=timeNow) {
                setFinishTimer(true)
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


        useEffect(() => {
            getTimeMatch()
        },[]);
    

  return (
    <Suspense fallback={<Spinner/>}>
        {
            finishTimer ?
            <div className="reloj">
                <p>- <br /> <span id="days">Days</span></p>
                <p>- <br /> <span id="hours">Hours</span> </p>
                <p>- <br /> <span id="minutes">Mins</span></p>
            </div>

                :

            <div className="reloj">
                <p>{days} <br /> <span id="days">Days</span></p>
                <p>{hours} <br /> <span id="hours">Hours</span> </p>
                <p>{minutes} <br /> <span id="minutes">Mins</span></p>
            </div>
        }

       
    </Suspense>
  )
}

export default TimerMatch