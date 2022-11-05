import React , {useState , Suspense,  useContext, useEffect} from 'react'
import candado from "../config/src/candado.png"
import "./staking.css"
import ContextConnected from '../config/context/ConnectedContext'
import Spinner from '../config/spinner/Spinner'
import NavStaking from './navStaking/NavStaking'
import Stake from './stake/Stake'
import UnStake from './unStake/UnStake'
import MyRewards from './myStake/MyRewards'

const Staking = () => {

  const [myStake , setMyStake] = useState(false)
  const [stake , setStake] = useState(true)
  const [unstake , setUnstake] = useState(false)
  const [loading ,setLoading]=useState(true)
  const Connected = useContext(ContextConnected)
  const PredictionContext = useContext(ContextConnected)

  const [predictionCards,setPredictionCards]=useState([])


  useEffect(() => {
   },[]);

  return (
    <>
{/*     {
      Connected.userLogginActive ?  */}

        <Suspense fallback={<Spinner/>}>
          <div className="staking">

      
            <NavStaking 
                ladder="STAKING"
                setMyStake={setMyStake}
                setStake={setStake}
                setUnstake={setUnstake}
            />


            <div className="container_staking">

                <div className="box_predictions_staking">

                  {
                  stake ? 
                    <img className='candado'  src={candado} alt="candado" />
                  :
                    null
                  }


                  {
                  unstake ? 
                    <img className='candado' src={candado} alt="candado" />
                    :
                    null
                  }
                  
                  {
                    myStake ? 
                      <img className='candado'  src={candado} alt="candado" />
                    :
                    null
                  }
              </div>

          </div>
          
        </div>

      </Suspense>
 {/*        : 
        window.location.href = "/"
      } */}
    </>
  )
}


export default Staking