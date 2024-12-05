import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";

function DetailsPage() {
  const { imdbID } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (imdbID) {
      setIsLoading(true);
      fetch(`https://www.omdbapi.com/?apikey=baaa7316&i=${imdbID}`)
        .then((response) => response.json())
        .then((data) => {
          setMovie(data); // Store the movie details
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [imdbID]);

  if (isLoading) {
    return <div><Loading/></div>;
  }

  if (!movie) {
    return <div>No movie details found.</div>;
  }

  return (
    <div className="details__container">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p><span>Year: {movie.Year}</span></p>
      <p><span>Rated: {movie.Rated}</span></p>
      <p><span>Genre: {movie.Genre}</span></p>
      <p><span></span></p>
    </div>
  );
}

export default DetailsPage;