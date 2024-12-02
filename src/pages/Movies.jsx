import React, {useEffect, useState} from "react"
import axios from 'axios'
import { Link } from "react-router-dom";



const MovieComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debounceTimeout, setDebounceTimeout] = useState(null); // State to hold timeout ID

    useEffect(() => {
        // Clear the timeout if it exists
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }

        // Set a new timeout
        const timeoutId = setTimeout(() => {
            if (searchTerm) {
                fetchMovies(searchTerm);
            } else {
                setMovies([]); // Clear movies if search term is empty
            }
        }, 1000); // Change the delay time as needed

        // Save the timeout ID
        setDebounceTimeout(timeoutId);

        // Clean up the timeout when searchTerm changes
        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    const fetchMovies = async (id = "") => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?apikey=baaa7316&s=${id}`); // Assuming you're using a query string for search
            setMovies(data.Search); // Ensure data is set correctly
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchChange = (event) => {
        const id = event.target.value;
        setSearchTerm(id);
    };

    return (
        <div className="movie__container">
            {isLoading ? (
                <div>Loading...</div> // Loader while fetching
            ) : (
                
                    <> 
                    <input className="search__bar" type="text" onChange={handleSearchChange} placeholder="Search"/>
                 <div className="movie__row">
                    
             {Array.isArray(movies) && movies.slice(0, 9).map((movie) => (
                        <div key={movie.imdbID} className="movie">
                            <div className="movie__Poster">
                                <img src={movie.Poster} alt={movie.Title} className="movie__image" />
                                <div className="movie__info">
                                    <span className="movie__title">{movie.Title}</span>
                                    <span className="movie__year">{movie.Year}</span>
                                </div>
                            </div>
                        </div>
                       
                    ))}
                     
                </div>
                </>
            )}
        </div>
    );
};

export default MovieComponent;
