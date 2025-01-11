import selfie from '../../assets/thisiswhere.png'

import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.aboutBody}>
      <div className={styles.bio}>
        <div className={styles.author}>
          <p>Hi, my name&apos;s</p>
          <h1>Billy Post</h1>
        </div>
        <div className={styles.desc}>
          I&apos;m a software engineer that loves the little details and is always up for a good challenge. 
        </div>
      </div>
      <div className={styles.pic}>
        <img src={selfie} alt="test" />
      </div>
    </section>
  )
}

export default About