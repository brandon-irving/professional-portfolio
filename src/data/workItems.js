const generateImages = appName => {
  const images = [];
  for (let i = 1; i <= numImages[appName]; i += 1) {
    images.push({
      original: require(`images/screenshots/${appName}/${i}.png`),
    });
  }
  return images;
};

const numImages = {
  uptime: 4,
  youfit: 2,
  'family-feud': 3,
  haunted: 2,
  city:2,
};

/**
 * List of portfolio work items to be displayed
 */
export default [
  {
    projectTitle: 'Uptime',
    projectInfo:
      'Uptime is a machine analysis app. Sensors are placed on various machines, data is sampled, recorded and sent to a MsSql database. The backend is composed of Node js and the front end components is made from React Js. Bootstrap is the css framework and jest and enzyme is used for testing.',
    background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    images: generateImages('uptime'),
    tags: ['React', 'Context Api', 'REST Api','Node Js', 'MsSql', 'Bootstrap', 'Sql', 'Google Cloud', 'Sequelize'],
  },

  {
    projectTitle: 'City Furniture',
    projectInfo:
      'A popular south florida furniture store. Made in React js, Node/express, typescript and context',
    background: 'linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)',
    appUrl: 'https://cityfurniture.com/',
    images: generateImages('city'),
    tags: ['React', 'Node js', 'Express', 'Amazon Web Services'],
  },
  {
    projectTitle: 'YouFit',
    projectInfo:
      'A national gym franchise website, made using Gatsby js, React and Graph Ql',
    appUrl: 'https://youfit.com/',
    background: 'linear-gradient(to right, #0083B0, #00B4DB)',
    images: generateImages('youfit'),

    tags: ['Gatsby Js', 'React', 'MongoDB', 'Graph Ql'],
  },
  {
    projectTitle: 'Family Feud',
    projectInfo:
      'Family Feud replica made during the holidays to play with my siblings. The app has sounds, music, point storing and point stealing capabilities. There is also an associated mobile version for the app, that acts as a answer repository for whoever is the games host. This was built with React js and global state is managed using context. The questions and answers are recieved via REST api calls',
    background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    images: generateImages('family-feud'),
    githubUrl: 'https://brandon-irving.github.io/irving-family-feud/',
    tags: ['React', 'Context Api', 'REST Api', 'Styled Components'],
  },
  {
    projectTitle: 'Haunted Portfolio',
    projectInfo: 'A portfolio that behaves like a haunted terminal. This portfolio has multiple theming, context api used and implements custom glitching functionality',
    background: 'linear-gradient(to right, #6dd5ed, #2193b0)',
    images: generateImages('haunted'),
    githubUrl: 'https://brandon-irving.github.io/Haunted-Portfolio/',
    tags: ['React', 'Context Api', 'REST Api', 'Styled Components'],
  },
];
