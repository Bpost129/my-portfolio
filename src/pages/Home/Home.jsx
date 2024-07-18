import selfie from '../../assets/thisiswhere.png'
// import mario from '../../assets/mario.png'
import linkedin from '../../assets/linkedin.png'
import github from '/github.png'
import email from '../../assets/email.png'

import '../../App.css'

const Home = () => {
  return (
    <>
      <section className="main-body">
        <div className="bio">
          <div className="author">
            <p>Hi, my name&apos;s</p>
            <h1>Billy Post</h1>
          </div>
          <div className="desc">
            I&apos;m a software engineer that loves the little details and is always up for a good challenge. 
          </div>
        </div>
        <div className="pic">
          <img src={selfie} alt="test" />
        </div>
      </section>
      <section className="skills">
        <h1>Skills</h1>
        <div className="skills-list">
          <div>
            <p><img src='https://www.kalmbachfeeds.com/cdn/shop/articles/two-white-ducks-in-grass.jpg?v=1706873608' style={{height: '100px', width: '200px'}} />HTML5</p>
            <p><img src='https://www.kalmbachfeeds.com/cdn/shop/articles/two-white-ducks-in-grass.jpg?v=1706873608' style={{height: '100px', width: '200px'}} />CSS3</p>
          </div>
          <div>
            <p><img src='https://www.kalmbachfeeds.com/cdn/shop/articles/two-white-ducks-in-grass.jpg?v=1706873608' style={{height: '100px', width: '200px'}} />JavaScript</p>
            <p><img src='https://www.kalmbachfeeds.com/cdn/shop/articles/two-white-ducks-in-grass.jpg?v=1706873608' style={{height: '100px', width: '200px'}} />Python</p>
          </div>
          <div>
            <p><img src='https://www.kalmbachfeeds.com/cdn/shop/articles/two-white-ducks-in-grass.jpg?v=1706873608' style={{height: '100px', width: '200px'}} />React</p>
            <p><img src='https://www.kalmbachfeeds.com/cdn/shop/articles/two-white-ducks-in-grass.jpg?v=1706873608' style={{height: '100px', width: '200px'}} />Django</p>
          </div>
          <div>
            <p><img src='https://www.kalmbachfeeds.com/cdn/shop/articles/two-white-ducks-in-grass.jpg?v=1706873608' style={{height: '100px', width: '200px'}} />MongoDB</p>
            <p><img src='https://www.kalmbachfeeds.com/cdn/shop/articles/two-white-ducks-in-grass.jpg?v=1706873608' style={{height: '100px', width: '200px'}} />PostgreSQL</p>
          </div>
        </div>
      </section>
      <section className="contact">
        <div>
          <a href="https://www.linkedin.com/in/billy-post-b44797193/"><img src={linkedin} alt="linkedin logo" /></a>
          <a href="https://github.com/Bpost129"><img src={github} alt="github logo" /></a>
          <a href="mailto:Bpost129@yahoo.com"><img src={email} alt="email logo" /></a>
        </div>
      </section>
    </>
  )
}

export default Home