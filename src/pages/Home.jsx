import React, {useEffect, useState} from "react"
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { Link } from "react-router-dom";




const Home = () => {
    const [sites, setSites] = useState([]);
    useEffect (()=> {
        async function Sites (){
            const {data} = await axios.get ('https://www.omdbapi.com/?apikey=baaa7316&s=fast')
            setSites(data)
        }
Sites();
    },[])


  
  
return (
<div className="movie__container">
    <Link to ="/:id">
    <button className="browser">Search Movies</button>
    </Link>
    <div className="movie__row">
    {sites?.Search?.map((site) => <div key={site.imdbID} className="movie">
    <div className="movie__Poster">
<img src={site.Poster} alt="" className="movie__image"/>
<div className="movie__info">
<span className="movie__title">{site.Title} </span>
<span className="movie__year">{site.Year} </span>
</div>
</div>
</div>)}
</div>
</div>
)

}





export default Home