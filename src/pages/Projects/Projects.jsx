import { useState } from 'react'

import dittoDeal from '../../assets/dittodealss.png'
import greenRoom from '../../assets/greenroomss.png'
import readit from '../../assets/readitss.png'
import blackjack from '../../assets/wwblackjackss.png'
import github from '/github.png'

const Projects = () => {
  const [showInfo, setShowInfo] = useState(false)

  const handleShow = async () => {
    setShowInfo(!showInfo)
  }

  return (
    <>
      <div className="project-body">
        <section>

          {!showInfo &&
          <div className="project" id="ad">
            <a target="_blank" href="https://green-room-bp.fly.dev/"><img id="project-img" src={greenRoom} alt="1"/></a>
            <div className="project-desc">
              <h1>Green Room</h1>
              <p>Full CRUD application using Django</p>
            </div>
            <a id="github-link" target="_blank" href="https://github.com/Bpost129/green-room" style={{backgroundImage: `url(${github})`}}></a>
          </div>

          /* create components for project view and more info */


          }

          <div className="project" id="bd">
            <a target="_blank" href="https://dittodeal.netlify.app/"><img id="project-img" src={dittoDeal} alt="2"/></a>
            <div className="project-desc">
              <h1>DittoDeal</h1>
              <p>Full MERN stack marketplace application</p>
              <p className='contributor'>Contributor: Brandon Sears</p>
            </div>
            <a id="github-link" target="_blank" href="https://github.com/Bpost129/dittodeal-front-end" style={{backgroundImage: `url(${github})`}}></a>
          </div>
        </section>
        <section>
          <div className="project" id="ad">
            <a target="_blank" href="https://readit-bp.fly.dev/posts"><img id="project-img" src={readit} alt="3"/></a>
            <div className="project-desc">
              <h1>Readit</h1>
              <p>Simple social media app using MongoDB and Javascript</p>
            </div>
            <a id="github-link" target="_blank" href="https://github.com/Bpost129/readit" style={{backgroundImage: `url(${github})`}}></a>
          </div>
          <div className="project" id="bd">
            <a target="_blank" href="https://blackjack-bp.netlify.app/"><img id="project-img" src={blackjack} alt="4"/></a>
            <div className="project-desc">
              <h1>Wild West Blackjack</h1>
              <p>Blackjack game composed of Javascript, HTML and CSS</p>
            </div>
            <a id="github-link" target="_blank" href="https://github.com/Bpost129/blackjack-project" style={{backgroundImage: `url(${github})`}}></a>
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects