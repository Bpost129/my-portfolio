import { NavLink } from "react-router-dom"

// import doc from '../../assets/docie1.png'

const NavBar = () => {
  return (
    <nav>
      <p><NavLink to="/">Home</NavLink></p>
      <p><NavLink to="/projects">Projects</NavLink></p>
    </nav>
  )
}

export default NavBar