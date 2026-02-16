import blackjack from '../assets/wwblackjackss.png'
import readit from '../assets/readitss.png'
import greenRoom from '../assets/greenroomss.png'
import dittoDeal from '../assets/dittodealss.png'
import boardum from '../assets/boardum.png'
import boardum2 from '../assets/boardum2.png'
// import github from './github.png'

const projectsData = [
  {
    id: 1,
    title: 'Boardum',
    description: 'Lightweight kanban board made with React',
    tech: ['CSS', 'HTML', 'JavaScript', 'Mongoose', 'MongoDB', 'Express', 'Node.js', 'React', 'JSON Web Tokens'],
    image: boardum2,
    repositoryLink: 'https://github.com/Bpost129/boardum-front-end',
    deploymentLink: 'https://boardum-bp.netlify.app/'
  },
  {
    id: 2,
    title: 'DittoDeal',
    description: 'Full MERN stack marketplace application with a pokemon theme. As you\'ll see you can sell more than just pokemon cards, but who wants that?',
    tech: ['CSS', 'HTML', 'JavaScript', 'Mongoose', 'MongoDB', 'Express', 'Node.js', 'React', 'JSON Web Tokens'],
    image: dittoDeal,
    repositoryLink: 'https://github.com/Bpost129/dittodeal-front-end',
    deploymentLink: 'https://dittodeal.netlify.app/'
  },
  {
    id: 3,
    title: 'Green Room',
    description: 'Full CRUD application using Django',
    tech: ['CSS', 'HTML', 'Python', 'PostgreSQL', 'Django', 'Docker'],
    image: greenRoom,
    repositoryLink: 'https://github.com/Bpost129/green-room',
    deploymentLink: 'https://green-room-bp.fly.dev/'
  },
  {
    id: 4,
    title: 'Readit',
    description: 'Simple social media app using Javascript and MongoDB',
    tech: ['EJS', 'Mongoose', 'MongoDB', 'Express', 'Passport', 'Node.js'],
    image: readit,
    repositoryLink: 'https://github.com/Bpost129/readit',
    deploymentLink: 'https://readit-bp.fly.dev/posts'
  },
  {
    id: 5,
    title: 'Wild West Blackjack',
    description: 'Blackjack game composed of CSS, HTML, and Javascript',
    tech: ['CSS', 'HTML', 'JavaScript'],
    image: blackjack,
    repositoryLink: 'https://github.com/Bpost129/blackjack-project',
    deploymentLink: 'https://blackjack-bp.netlify.app/'
  },
]

export { projectsData }