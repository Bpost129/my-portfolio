import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <p><NavLink to="/">Home</NavLink></p>
      <p><NavLink to="/projects">Projects</NavLink></p>
    </nav>
  )
}

export default NavBar