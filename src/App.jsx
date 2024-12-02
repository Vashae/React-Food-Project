import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Nav from "./pages/Nav";
import Landing from "./components/Landing";

import Photo from "./components/Photo";






function App() {
 

  return (
    
    
    <Router>
       <Nav />
        <Landing />
        <Photo />
        
    
        
        
    <div className="div">
 <Routes>
    <Route path="/" element={<Home />}  ></Route>
    <Route path ="/:id" element={<Movies />} ></Route>
    <Route path ="/movies:id" element={<Landing />} ></Route>
    
  </Routes>
  </div>
  </Router>
  );
}

export default App;
