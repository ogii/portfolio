import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aaron Clark | Web Developer',
  lang: 'en, jp',
  description: 'Personal website for Aaron Clark',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aaron Clark',
  subtitle: 'Web Developer based in Tokyo, Japan',
  cta: 'Who I am',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'I am a Web Developer based in Tokyo, Japan',
  paragraphTwo: 'I have several years of experience and have worked on several projects',
  paragraphThree: ' ',
  resume: 'https://pdfhost.io/v/4BerRiPWK_resume_amcpdf.pdf',
  blog: 'https://aaronmichaelclark.com/blog'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'easy_popup_maker.jpg',
    title: 'Easy Popup Maker',
    info: 'With Easy Popup Maker, return to top and modal popups can be created with ease',
    info2: 'Developed with React, Material UI, Redux, MongoDB, Node.js, and Nginx',
    url: 'http://easy-popup-maker.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio_page.jpg',
    title: 'My Portfolio',
    info: 'My personal portfolio website (this page)',
    info2: 'Created with Gatsby',
    url: 'http://aaronmichaelclark.com/',
    repo: 'https://github.com/ogii/portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'techcede.jpg',
    title: 'Techcede',
    info: 'A simple design created for a fictional company called Techcede',
    info2: 'Created with HTML, CSS, jQuery, and Bootstrap 4',
    url: 'https://ogii.github.io/techcede/',
    repo: 'https://github.com/ogii/techcede', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Get in touch',
  btn: 'Email',
  email: 'aaron.m.clark.ac@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ordinalx',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aaron-clark1/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ogii',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
