import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <p><NavLink to="/">About</NavLink></p>
      <p><NavLink to="/projects">Projects</NavLink></p>
    </nav>
  )
}

export default NavBar