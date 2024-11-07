import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Game from "./components/Game";
import Success from "./components/Success";
import TryAgain from "./components/TryAgain";
import { useState } from 'react';

const App = () => {
  
  const[hasPlayed,setHasplayed]=useState(false)
  const onCompletion=()=>{
    setHasplayed(true)
  }
  return (
    <>
    <Router>
      <Routes>
        
        <Route path="/" element={<Game onCompletion={onCompletion} />} />
        <Route path="/success" 
        element={hasPlayed?<Success />:<Navigate to="/" />}/>
        <Route path="/tryagain" element={hasPlayed?<TryAgain />:<Navigate to="/" />}/>
      </Routes>
    </Router>
    
    </>
    
    
  );
};

export default App;

