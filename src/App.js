import './App.css';
import { Suspense } from 'react';
import Home from './components/home/Home';
import Staking from './components/staking/Staking';
import Nav from './components/nav/Nav';
import MatchFeed from './components/matchFeed/MatchFeed';
import FriendsLadder from './components/ladder/friendsLadder/FriendsLadder';
import BasicLadder from './components/ladder/basicLadder/BasicLadder';
import BoostLadder from './components/ladder/boostLadder/BoostLadder';
import MiniGame from './components/miniGame/MiniGame';
import ProfileUser from './components/profileUser/ProfileUser';
import Marketplace from "./components/marketPlace/Marketplace"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LadderHome from './components/ladder/componentsLadders/ladderHome/LadderHome';
import Login from './components/nav/login/Login';
import NavInventario from './components/nav_inventario/NavInventario';
import Spinner from './components/config/spinner/Spinner';


function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<Spinner/>}>
          <Nav/>
          <NavInventario/>
          <Login/>
          <Routes>
          <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/ladder" element={<LadderHome/>}/>
              <Route exact path="/basicLadder" element={<BasicLadder/>}/>
              <Route exact path="/boostLadder" element={<BoostLadder/>}/>
              <Route exact path="/staking" element={<Staking />} />
              <Route exact path="/friendsLadder" element={<FriendsLadder />} />
              <Route exact path="/marketplace" element={<Marketplace />} />
              <Route exact path="/airdrop" element={<MiniGame />} />
              <Route exact path="/profileUser" element={<ProfileUser />} />
              <Route exact path="/matchFeed" element={<MatchFeed />} />
              <Route   path='*' element={<Home />}  />
          </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
