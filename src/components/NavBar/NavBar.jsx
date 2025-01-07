import { NavLink } from "react-router-dom"

import doc from '../../assets/docie2.png'

const NavBar = () => {
  return (
    <nav>
      <p><img src={doc} alt="resume" className='resume-img' /></p>
      <div className="tabs">
        <p><NavLink to="/">Home</NavLink></p>
        <p><NavLink to="/projects">Projects</NavLink></p>
      </div>
    </nav>
  )
}

export default NavBar