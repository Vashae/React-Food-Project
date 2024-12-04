import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Nav from "./pages/Nav";
import Landing from "./components/Landing";

import Photo from "./components/Photo";
import SearchPage from "./components/SearchPage";
import ResultsPage from "./components/ResultsPage";
import DetailsPage from "./components/DetailsPage";


function Layout() {
  return (
    
   <div>
     <Landing />
     <Photo />
        <Link to ="/movie">
    <button className="browser">Search Movies</button>
    </Link>
     
         </div>
           
    );
}



function App() {
 

  return (
    
    
    <Router>
       <Nav />
        
    
        
        
    <div className="div">
 <Routes>
  <Route path="/" element={<Layout />}></Route>
    <Route path="/landing" element={<Home />}  ></Route>
    <Route path ="/movies" element={<Movies />} ></Route>
    <Route path ="/movie" element={<SearchPage />} ></Route>
    <Route path="/results" element={<ResultsPage />}></Route>
    <Route path="/details/:imdbID" element={<DetailsPage />} />
    
  </Routes>
  </div>
  </Router>
  );
}

export default App;
