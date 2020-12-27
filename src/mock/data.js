import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Robert di Scipio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Robert di Scipio.',
  subtitle: 'I am a Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'robert-photo.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://res.cloudinary.com/radiscipio/image/upload/v1609106212/nkkoe3sqf8asljpgtv9z.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tetris-2.jpg',
    title: 'Tetris',
    info: 'The classic Arcade Game Tetris!',
    info2: 'Built using React with React-Hooks & CSS Styled-Components',
    url: 'http://fretful-approval.surge.sh/',
    repo: 'https://github.com/radiscipio/react-tetris', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DanceBody.jpg',
    title: 'DanceBody Website',
    info: 'Updated website for complete mobile responsiveness.',
    info2: 'Used JavaScript & CSS for web fluidity',
    url: 'https://www.dancebody.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'barrys.jpg',
    title: 'Class Project: Barry\'s',
    info: 'E-Commerce Men\'s Grooming Website',
    info2: 'Built using React, CSS, & Ruby on Rails for user Auth',
    url: 'http://barrys.surge.sh/',
    repo: 'https://github.com/radiscipio/project-4', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ruksak.png',
    title: 'School Project: RukSak',
    info: 'A trip planning web application',
    info2: 'Built with React, CSS, & Express and Sequelize for user Auth ',
    url: 'http://ruksak-rad.surge.sh/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
