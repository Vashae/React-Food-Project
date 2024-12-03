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
<li className="nav__list">Home</li>
</Link>
<Link to ="/" className="nav__link">
<li className="nav__list">Movies</li>
</Link>
<Link to ="https://github.com/Vashae" className="nav__link">
<li className="nav__list"> Github</li>
</Link>
<Link to ="https://www.linkedin.com/in/vashae-blackwood-a57105265/" className="nav__link">
<li className="nav__list">LinkedIn</li>
</Link>
<button className="lightdark__mode">
<FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
</button>
   </ul>
   </div>
   </nav>
)
}

export default Nav



