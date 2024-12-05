import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Loading } from "./Loading";

function ResultsPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalResults, setTotalResults] = useState(0); // Total number of results
  const [sortField, setSortField] = useState("Title"); // Default sorting field
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order
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
        setTotalResults(parseInt(data.totalResults, 6) || 0); // Store total results
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalResults / 6)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Handle Sorting
  const handleSort = (field, order) => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (field === "Title") {
        return order === "asc"
          ? a.Title.localeCompare(b.Title)
          : b.Title.localeCompare(a.Title);
          
      } else if (field === "Year") {
        return order === "asc"
          ? parseInt(a.Year) - parseInt(b.Year)
          : parseInt(b.Year) - parseInt(a.Year);
      }
      return 0;
    });
    setMovies(sortedMovies);
  };

  const handleSortChange = (e) => {
    const selectedField = e.target.value;
    setSortField(selectedField);
    handleSort(selectedField, sortOrder);
  };

  const handleOrderChange = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    handleSort(sortField, newOrder);
  };

  return (
    <div className="movie__container">
      <h1>Search Results</h1>
      {isLoading ? (
        <div><Loading/></div>
      ) : (
        <>
          {/* Sorting Controls */}
          <div className="sort__controls">
            <select id="sortField" onChange={handleSortChange}>
              <option value="" disabled selected>Sort</option>
              <option value="Title">Title</option>
              <option value="Year">Year</option>
            </select>
            <button onClick={handleOrderChange}>
              {sortOrder === "asc" ? "Ascending" : "Descending"}
            </button>
          </div>

          <div className="movie__row">
            {Array.isArray(movies) && movies.length > 0 ? (
              movies.map((movie) => (
                <Link to={`/details/${movie.imdbID}`} key={movie.imdbID}>
                  <div className="movie">
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
              className="previous"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {Math.ceil(totalResults / 6)}
            </span>
            <button
              className="next"
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(totalResults / 6)}
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