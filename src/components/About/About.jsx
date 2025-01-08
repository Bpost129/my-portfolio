import selfie from '../../assets/thisiswhere.png'

const About = () => {
  return (
    <section className="about-body">
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
  )
}

export default About