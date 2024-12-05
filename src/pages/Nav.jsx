import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






const Nav = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Load saved theme preference on component mount
    useEffect(() => {
      const savedMode = localStorage.getItem("theme") === "dark";
      setDarkMode(savedMode);
      if (savedMode) {
        document.body.classList.add("dark-mode");
      }
    }, []);
  
    // Toggle dark mode
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => {
        const newMode = !prevMode;
        if (newMode) {
          document.body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark");
        } else {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
        }
        return newMode;
      });
    };



    return (
    <nav>
<div className="nav__container">
<Link to ="/" className="icon">
<FontAwesomeIcon icon="fa-solid fa-film" />
</Link>
<ul className="nav__links">
     <Link to="/" className="nav__link">
<li className="nav__list">Home</li>
</Link>
<Link to ="/movie" className="nav__link">
<li className="nav__list">Movies</li>
</Link>
<Link to ="https://github.com/Vashae" className="nav__link">
<li className="nav__list"> Github</li>
</Link>
<Link to ="https://www.linkedin.com/in/vashae-blackwood-a57105265/" className="nav__link">
<li className="nav__list">LinkedIn</li>
</Link>
<button className="lightdark__mode" onClick={toggleDarkMode}>
<FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
</button>
   </ul>
   </div>
   </nav>
)
}

export default Nav



