import React from "react"

const Landing = ()=>{
    return (
      <div className="landing__container">
        <div className="row">
     <header className="Landing__title">
        Avid movie enjoyers favorite place to be
     </header>
     <h1 className="landing__subtitle">
        Find the movie you've been itching to watch
     </h1>
          <input type="text" className="Search__bar"  placeholder="Search" />
     <button className="search">Search</button>
     

         </div>
        </div>
)


    
}
export default Landing