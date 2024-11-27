import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Nav from "./pages/Nav";

function App() {
  return (
  <Router>
    <div className="div">
 <Routes>
  <Route path="/Nav" element = {<Nav />}></Route>
    <Route path="/" element={<Home />}></Route>
    <Route path ="/:id" element={<Cars />}></Route>
  </Routes>
  </div>
  </Router>
  );
}

export default App;
