import './App.css';
import { Suspense , useState, lazy} from 'react';
import Staking from './components/staking/Staking';
import Nav from './components/nav/Nav';
import MatchFeed from './components/matchFeed/MatchFeed';
import MiniGame from './components/miniGame/MiniGame';
import ProfileUser from './components/profileUser/ProfileUser';
import Marketplace from "./components/marketPlace/Marketplace"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Airdrop from './components/ladder/airdrop/Airdrop';

import NavInventario from './components/nav_inventario/NavInventario';
import Spinner from './components/config/spinner/Spinner';
import ContextConnected from './components/config/context/ConnectedContext';
import LadderHome from './components/ladder/ladderHome/LadderHome';
import DetailChallenge from './components/ladder/challengeLadder/detalladaChallenge/DetailChallenge';

const Home = lazy(() => import ('./components/home/Home'))
const BasicLadder = lazy(() => import ("./components/ladder/basicLadder/BasicLadder"))
const BoostLadder = lazy(() => import ('./components/ladder/boostLadder/BoostLadder'))
const ChallengeLadder = lazy(() => import ("./components/ladder/challengeLadder/ChallengeLadder"))



function App() {

  const [userLogginActive , setUserLoginActive] = useState(false) /* manda si el usuario esta conectado */
  const [activeLogin , setActiveLogin] = useState(false) /* activa el popup de login */
  const [confirmedPrediction , setConfirmedPrediction] = useState()
  const [provider,setProvider]=useState(undefined)
  const [account,setAccount]=useState(undefined)
  const [signer,setSigner]=useState(undefined)

  const [signature, setSignature] = useState(undefined)
  const [paisFlag, setPaisFlag] = useState("germany")

  const [userData, setUserData] = useState(undefined)

  const [basicTicketsInv, setBasicTicketsInv] = useState([])
  const [boostTicketsInv, setBoostTicketsInv] = useState([])
  console.log(basicTicketsInv)
  return (
    <ContextConnected.Provider value={{
      userLogginActive, 
      setUserLoginActive,
      setActiveLogin,
      activeLogin,
      provider,
      setProvider,
      account,
      setAccount,
      signer,
      setSigner,
      signature,
      setSignature,
      paisFlag,
      setPaisFlag,
      userData,
      setUserData,
      setConfirmedPrediction,
      confirmedPrediction,
      basicTicketsInv,
      setBasicTicketsInv,
      boostTicketsInv,
      setBoostTicketsInv
      }}>
      <BrowserRouter>
          <Suspense fallback={<Spinner/>}>
            <Nav/>
            <NavInventario/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                
                <Route exact path="/ladder" element={<LadderHome/>}/>

                <Route exact path="/airdrop" element={<Airdrop/>}/>
                <Route exact path="/basicLadder" element={<BasicLadder/>}/>
                <Route exact path="/boostLadder" element={<BoostLadder/>}/>

                <Route exact path="/challengeLadder" element={<ChallengeLadder/>}/>
                <Route exact path="/challengeLadder/:roomId" element={<DetailChallenge/>}/>

                <Route exact path="/staking" element={<Staking />} />
                <Route exact path="/marketplace" element={<Marketplace />} />
                <Route exact path="/cryptoBall" element={<MiniGame />} />
                <Route exact path="/profileUser" element={<ProfileUser />} />
                <Route exact path="/matchFeed" element={<MatchFeed />} />
                <Route path='*' element={<Home />}  />
            </Routes>
          </Suspense>
      </BrowserRouter>
    </ContextConnected.Provider>
  );
}

export default App;
