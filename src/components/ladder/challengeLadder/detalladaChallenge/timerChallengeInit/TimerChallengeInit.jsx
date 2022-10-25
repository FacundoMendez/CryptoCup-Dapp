import React, {useEffect , useState} from 'react'
import timerChallenge from './timerChallenge'
import "./timerChallenge.css"

const TimerChallengeInit = ({timer, finishDate}) => {

    const [days,setDays]=useState()
    const [hours,setHours]=useState()
    const [minutes,setMinutes]=useState()
    const [statusTimer , setStatusTimer] = useState()


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
    

    useEffect(() => {
        getTimeMatch()
    },[])

  return (

        <div id="countdown">
            <div id='tiles'>
                <div className="time_challenge">
                    <p>{/* {days} */}  0</p>
                    <p>{/* {hours}  */} 0</p>
                    <p>{/* {minutes}  */} 0</p>
                </div>
   
            </div>
            <div className="labels">
                <li>Days</li>
                <li>Hours</li>
                <li>Mins</li>
            </div>
        </div>


  )
}

export default TimerChallengeInit