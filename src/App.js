import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
//import SkillsCard from './components/SkillsCard/SkillsCard';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
