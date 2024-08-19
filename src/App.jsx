import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Clubs from './components/Clubs/Clubs';
import Picks from './components/Picks/Picks';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Getapp from './components/Getapp/getapp';

import Club from './components/Club/club';
import Topics from './components/Topics/topics';

import Python from './components/Clubs/python';
import Dot from './components/Clubs/dot';
import Java from './components/Clubs/java';
import Cn from './components/Clubs/cn';
import Dsa from './components/Clubs/dsa';
import C from './components/Clubs/c';
import Music from './components/Picks/music';
import Politics from './components/Picks/politics';
import Fashion from './components/Picks/fashion';
import Vlogs from './components/Picks/vlogs';
import Sports from './components/Picks/sports';
import Art from './components/Picks/art';


import Contact from './components/Footer/contact';
import Help from './components/Footer/help';
import Jobs from './components/Footer/jobs';
import Terms from './components/Footer/terms';
import Privacy from './components/Footer/privacy';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Clubs /><Picks /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/getapp" element={<Getapp />} />
        <Route path='/topics' element={<Topics />} />
        <Route path='/club' element={<Club />} />

        <Route path="/python" element={<Python/>} />
        <Route path="/dot" element={<Dot/>} />
        <Route path="/java" element={<Java/>} />
        <Route path="/cn" element={<Cn/>} />
        <Route path="/dsa" element={<Dsa/>} />
        <Route path="/c" element={<C/>} />
        <Route path="/music" element={<Music/>} />
        <Route path="/politics" element={<Politics/>} />
        <Route path="/fashion" element={<Fashion/>} />
        <Route path="/vlogs" element={<Vlogs/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/art" element={<Art/>} />

        
        <Route path='/contact' element={<Contact/>} />
        <Route path='/help' element={<Help/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/terms' element={<Terms/>} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
