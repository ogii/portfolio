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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://pdfhost.io/v/4BerRiPWK_resume_amcpdf.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'AssionPlus',
    info: 'With AssionPlus, return to top and modal popups can be created with ease',
    info2: '',
    url: 'http://160.16.126.75/',
    repo: '', // if no repo, the button will not show up
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
