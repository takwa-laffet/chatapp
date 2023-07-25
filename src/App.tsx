import React from 'react';
import { BrowserRouter as Router, Route, Routes ,BrowserRouter } from 'react-router-dom';
import HomePage from "./home";

function App() {
  return (
    <BrowserRouter>
    <Routes>   
      <Route path="/" element={<HomePage/>} />
  </Routes>
    </BrowserRouter>
    
  );
}

export default App;
