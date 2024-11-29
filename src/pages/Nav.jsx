import React from "react"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






const Nav = () => {
return (
    <nav>
<div className="nav__container">
<Link to ="/:id" className="icon">
<FontAwesomeIcon icon="fa-solid fa-film" />
</Link>
<ul className="nav__links">
     <Link to="/:id" className="nav__link">
<li className="nav__list">Movies</li>
</Link>
<Link to ="/" className="nav__link">
<li className="nav__list">Home</li>
</Link>
<Link to ="https://github.com/Vashae" className="nav__link">
<li className="nav__list"> Github</li>
</Link>
   </ul>
   </div>
   </nav>
)
}

export default Nav



