import React, {useState, useEffect} from "react"
import {useDebounce} from 'use-debounce';


import { useParams } from "react-router-dom"


 


const Landing = ({onSearchChange})=>{
   
   return (
      <div className="landing__container">
        <div className="row">
     <header className="Landing__title">
        Avid movie enjoyers favorite place to be
     </header>
     <h1 className="landing__subtitle">
        Find the movie you've been itching to watch
     </h1>
          <input type="text" className="Search__bar"  placeholder="Search" onChange={onSearchChange} />
     <button className="search" >Search</button>
     

         </div>
        </div>
)


    

   }
   
  
export default Landing