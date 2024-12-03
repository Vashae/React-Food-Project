import React, { useEffect, useState } from "react";
import {Link, useLocation } from "react-router-dom";

function ResultsPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalResults, setTotalResults] = useState(0); // Total number of results
  const location = useLocation();

  // Extract the search term from the query params
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      fetchMovies(query, currentPage);
    }
  }, [query, currentPage]);

  const fetchMovies = (searchTerm, page) => {
    setIsLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=baaa7316&s=${searchTerm}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search || []);
        setTotalResults(parseInt(data.totalResults, 10) || 0); // Store total results
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalResults / 10)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="movie__container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="movie__row">
            
            {Array.isArray(movies) && movies.length > 0 ? (
              movies.map((movie) => (
                <Link to ="/details/:imdbID">
                <div key={movie.imdbID} className="movie">
                  <div className="movie__Poster">
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="movie__image"
                    />
                    <div className="movie__info">
                      <span className="movie__title">{movie.Title}</span>
                      <span className="movie__year">{movie.Year}</span>
                    </div>
                  </div>
                </div>
                 </Link>
              ))
            ) : (
              <p>No movies found.</p>
            )}
           
          </div>
          {/* Pagination Controls */}
          <div className="pagination">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {Math.ceil(totalResults / 10)}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(totalResults / 10)}
            >
              Next
            </button>
            
          </div>
        </>
        
      )}
      
    </div>
    
  );
}

export default ResultsPage;