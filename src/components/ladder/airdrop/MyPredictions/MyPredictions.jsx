import React , {useState , useContext , useEffect} from 'react'
import "./myPredictions.css"
import paisesJson from "../../../config/paises2.json"
import api from '../../../../api'
import ContextConnected from '../../../config/context/ConnectedContext'
import Spinner from '../../../config/spinner/Spinner'
import Paginacion from '../../../config/paginacion/Paginacion'

const MyPredictions = () => {
  
  const Connected = useContext(ContextConnected)
  const [loading ,setLoading]=useState(true)
  const [predictionsHistory , setPredictionsHistory] = useState([]) 

  useEffect(() => {
    getPredictionsHistory()
   },[]);

  const getPredictionsHistory = async () => {
    const res = await api.post('/predictions/getPredictionsHistory', {
      address: Connected.account[0]
    })
    console.log(res.data);
    setPredictionsHistory(res.data)
    setLoading(false) 
  }



    /* paginacion */

   /*  const [number, setNumber] = useState(1); 
    const [postPerPage] = useState(8);
    const lastPost = number * postPerPage;
    const firstPost = lastPost - postPerPage;
    const currentPost = predictionsHistory.slice(firstPost, lastPost);
    const pageNumber = [];
  
    for (let i = 1; i <= Math.ceil(predictionsHistory.length / postPerPage); i++) {
      pageNumber.push(i);
    } */
  
  
  
    /* ------------ */

  return (
    <div className="container_myPrediction">

        <div className="box_myPrediction">
          <div className='spin' >
              {loading ? <Spinner/> : null}
            </div>


          {
           predictionsHistory.map( (item , index ) => {      
              let date = new Date (item.relatedGame[0].startDate).getMonth()
              console.log(date); /* <-  paginacion */
              return  <div key={index} className={
                item.relatedGame[0].result === "" ? 
                   "myPrediction " 
                   :  item.relatedGame[0].result == item.prediction ? 
                    "myPrediction predictionSuccess" 
                   :
                   "myPrediction predictionLose"
                }>

              <div className="date_match">
                <p> {item.relatedGame[0].startDate} </p> 
                <p>{paisesJson[item.relatedGame[0].team1].name} &nbsp; vs &nbsp; {paisesJson[item.relatedGame[0].team2].name} </p>
              </div>

            <div className="box_match_mypred">
                <div className="mySelection">

                  <div className="flag_mySelection_mypred">
                    <p>My choice</p>
                    <img className='imgSelected' src={paisesJson[item.prediction].img} alt="bandera team 1" />   {/* bandera equipo select */}
                  </div>
  
                  <div className="flag_result_mypred">  
                    <p>Result</p>
                    <img src={paisesJson[item.relatedGame[0].result].img} alt="bandera team 1" />  {/* bandera resultado */}
                  </div>
  
                </div>
            </div>

            {
              (item.relatedGame[0].result === "") ? 
    
                <div className="result_mypred ">
                  <p></p>
                </div>

              : item.relatedGame[0].result == item.prediction ?

                <div className="result_mypred resut_win">
                  <p>WIN</p>
                </div>

              :

              <div className="result_mypred resutl_lose">
                <p>LOSE</p>
              </div>
  
            }
          </div>
            })
          }
      </div>

{/*     {!loading  ?  
      <Paginacion
        setNumber={setNumber}
        number= {number}
        pageNumber={ pageNumber}
      />
    : 
      null
    } */}
    
    </div>
  )
}

export default MyPredictions