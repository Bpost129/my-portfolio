import linkedin from '../../assets/linkedin.png'
import github from '/github.png'
import email from '../../assets/email.png'

const Contact = () => {
  return (
    <section className="contact">
      <div>
        <a href="https://www.linkedin.com/in/billy-post-b44797193/"><img src={linkedin} alt="linkedin logo" /></a>
        <a href="https://github.com/Bpost129"><img src={github} alt="github logo" /></a>
        <a href="mailto:Bpost129@yahoo.com"><img src={email} alt="email logo" /></a>
      </div>
    </section>
  )
}

export default Contact