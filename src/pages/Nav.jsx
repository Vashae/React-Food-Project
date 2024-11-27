import React from "react"
import { Link } from 'react-router-dom'
import image from 'react'

const Nav = () => {
return (
    <nav>
<div className="nav__container">
    <image />
<ul>
     <Link to="/:id">
<li>Cars</li>
</Link>
<Link to ="/">
<li>Home</li>
</Link>
   </ul>
   </div>
   </nav>
)
}

export default Nav



