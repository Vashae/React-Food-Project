import React, {useEffect, useState} from "react"
import axios from 'axios'
import {useParams} from 'react-router-dom'


const Home = () => {
    const {id} = useParams()
    const [movies, setMovie] = useState([])
   useEffect (()=> { 
    async function Movies () {
    const { data } = await axios.get(`https://www.omdbapi.com/?apikey=baaa7316&s=${id}`)
    setMovie(data)
    console.log(data)
    
}
    Movies();
     }, []) 
    
    
    
    return (<> {movies?.Search?.map((movie) => <div> {movie.Title} </div>)}</>
  
    
       
     
    )
}
export default Home