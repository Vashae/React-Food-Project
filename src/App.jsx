import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Foods from './pages/Foods'

function App() {
  return (
  <Router>
    <div className="div">
 <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path ="/:id" element={<Foods/>}></Route>
  </Routes>
  </div>
  </Router>
  );
}

export default App;
