// import styles from './Skills.module.css'

const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skills-list">
        <div>
          <p><img src='logo-css.png' style={{height: '100px', width: '125px', margin: '0 10px'}} />CSS3</p>
          <p><img src='logo-html.png' style={{height: '100px', width: '125px'}} />HTML5</p>
        </div>
        <div>
          <p><img src='logo-javascript.png' style={{height: '100px', width: '125px'}} />JavaScript</p>
          <p><img src='logo-python.png' style={{height: '100px', width: '125px'}} />Python</p>
        </div>
        <div>
          <p><img src='logo-react.png' style={{height: '100px', width: '175px', background: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgb(251,255,241,1) 50%)'}} />React</p>
          <p><img src='logo-dj.png' style={{height: '100px', width: '110px', margin: '0 10px'}} />Django</p>
        </div>
        <div>
          <p><img src='logo-mongo.png' style={{height: '100px', width: '125px'}} />MongoDB</p>
          <p><img src='logo-postgres.png' style={{height: '100px', width: '200px'}} />PostgreSQL</p>
        </div>
      </div>
    </section>
  )
}

export default Skills