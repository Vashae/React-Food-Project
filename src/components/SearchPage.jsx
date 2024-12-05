import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleSearchSubmit()
 }
  }



  const handleSearchSubmit = () => {
    if (searchTerm.trim() ) {
      // Navigate to the results page with the search term in query params
      navigate(`/results?query=${searchTerm}`);
    }
  };

  return (
    <div>
       <h1 className="final__h1">So many Movies to choose from, which one will you Choose?</h1>
   
       
        <input className="search__bar"
        type="text"
        placeholder="Search for movies"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      
    </div>
  );
}

export default SearchPage;
