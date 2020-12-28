import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Robert di Scipio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hey there! I'm",
  name: 'Robert di Scipio.',
  subtitle: 'A Software Engineer',
  cta: 'Get To Know Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'robert-photo.jpg',
  paragraphOne: "Hey there! I'm Robert di Scipio, and I'm a Software Engineer.",
  paragraphTwo:
    'I deliver high quality products to simplify, enhance, and impact the user experience across all platforms.',
  paragraphThree:
    "I love picking things apart, putting them back together, and figuring out how they work. I'm a problem solver and an amazing team player. I also love cooking, board games, and dad jokes!",
  resume: 'https://res.cloudinary.com/radiscipio/image/upload/v1609106212/nkkoe3sqf8asljpgtv9z.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tetris-2.jpg',
    title: 'Tetris',
    info: 'The classic Arcade Game Tetris!',
    info2: 'Built using React-Hooks & CSS Styled-Components',
    url: 'http://fretful-approval.surge.sh/',
    repo: 'https://github.com/radiscipio/react-tetris', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DanceBody.jpg',
    title: 'DanceBody',
    info: 'Updated DanceBody company website for complete mobile responsiveness.',
    info2: 'Used JavaScript & CSS for web fluidity',
    url: 'https://www.dancebody.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'barrys.jpg',
    title: "Barry's",
    info: "Mock E-Commerce Men's Grooming Website",
    info2: 'Built using React, CSS, & Ruby on Rails for user Auth',
    url: 'http://barrys.surge.sh/',
    repo: 'https://github.com/radiscipio/project-4', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ruksak.jpg',
    title: 'RukSak',
    info: 'A trip planning web application',
    info2: 'Built with React, CSS, & Express and Sequelize for user Auth ',
    url: 'http://ruksak-rad.surge.sh/',
    repo: 'https://github.com/radiscipio/RukSak', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'reciplease.jpg',
    title: 'ReciPlease',
    info: 'UX Designer colaboration',
    info2: 'Single day static web app built with React & CSS',
    url: 'http://reciplease-ux-sei-colab.surge.sh/',
    repo: 'https://github.com/radiscipio/brads-recipes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'pokedex.jpg',
    title: 'Pokédex',
    info: 'View the original 151 Pokemon, and choose your starting team',
    info2: 'Built using React & CSS',
    url: '',
    repo: 'https://github.com/radiscipio/pokedex', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work on something awesome?',
  btn: "Let's Chat!",
  email: 'robertdiscipio@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/radiscipio',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/radiscipio/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
