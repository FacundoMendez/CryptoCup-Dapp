import './App.css';
import Home from './components/home/Home';
import Staking from './components/staking/Staking';
import Nav from './components/nav/Nav';
import MatchFeed from './components/matchFeed/MatchFeed';
import FriendsLadder from './components/friendsLadder/FriendsLadder';
import BasicLadder from './components/ladder/basicLadder/BasicLadder';
import BoostLadder from './components/ladder/boostLadder/BoostLadder';
import MiniGame from './components/miniGame/MiniGame';
import ProfileUser from './components/profileUser/ProfileUser';
import MarketPlace from "./components/marketPlace/MarketPlace"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LadderHome from './components/ladder/ladderHome/LadderHome';


function App() {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
        <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/ladder" element={<LadderHome/>}/>
            <Route exact path="/basicLadder" element={<BasicLadder/>}/>
            <Route exact path="/boostLadder" element={<BoostLadder/>}/>
            <Route exact path="/staking" element={<Staking />} />
            <Route exact path="/friendsLadder" element={<FriendsLadder />} />
            <Route exact path="/marketplace" element={<MarketPlace />} />
            <Route exact path="/airdrop" element={<MiniGame />} />
            <Route exact path="/profileUser" element={<ProfileUser />} />
            <Route exact path="/matchFeed" element={<MatchFeed />} />
            <Route   path='*' element={<Home />}  />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
