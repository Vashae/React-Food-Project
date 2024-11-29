import React, {useEffect, useState} from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"

const Movies = () => {
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
    
    
    
    return (
        <div className="movie__container">
            <div className="movie__row">
             {movies?.Search?.map
            ((movie) => {
            return  ( <div className="movie">
                <div className="movie__Poster">
                    <img src={movie.Poster} alt="" className="movie__image"/>
                    <div className="movie__info">
                        <span className="movie__title">
                           {movie.Title}
                        </span>
                        <span className="movie__year">{movie.Year}</span>
                    </div>
                </div> 
                </div> ) ;
               
                
            })} 

            
        </div>
        </div>
        
    )
}
export default Movies