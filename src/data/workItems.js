const generateImages = (appName) => {
  const images = [];
  for (let i = 1; i <= numImages[appName]; i += 1) {
    let fileType = "png";
    const isJpegs = ["nani"];
    if (isJpegs.includes(appName)) {
      fileType = "jpeg";
    }
    images.push({
      original: require(`images/screenshots/${appName}/${i}.${fileType}`),
    });
  }
  return images;
};

const numImages = {
  uptime: 4,
  nani: 4,
  youfit: 2,
  city: 2,
  altruist: 2,
  altruistMobile: 2,
};

/**
 * List of portfolio work items to be displayed
 */
const techsUsed = {
  react: "React Js",
  reactNative: "React Native",
  nextJs: "Next Js",
  typescript: "Typescript",
  nodeJs: "Node Js",
  gitlab: "GitLab",
  sentry: "Sentry",
  dataDog: "Datadog",
  awsLambda: "AWS Lambda",
  python: "Python",
  jenkins: "Jenkins",
  graphQl: "GraphQl",
  mySql: "MySql",
  azure: "Microsoft Azure",
  gatsby: "Gatsby Js",
};

export default [
  {
    projectTitle: "Nani!?  Charades Game",
    appUrl: "https://apps.apple.com/az/app/nani/id1622545048",
    projectInfo: `A game truly for the fans! Come play charades as you've never played before. First select from one of our fandom-themed decks, read the play type, and let the fun begin! Mime, act, dance, or sing your way to victory and prove to your friends who is the biggest fan. The first app i released under my name`,
    background: "linear-gradient(to right, #6dd5ed, #2193b0)",
    images: generateImages("nani"),
    tags: [
      techsUsed.reactNative,
      techsUsed.nodeJs,
      techsUsed.typescript,
      techsUsed.sentry,
      techsUsed.gitlab,
    ],
  },
  {
    projectTitle: "Altruist Web App",
    appUrl: "https://altruist.com/",
    projectInfo: `An all in one financial custodial platform. I lead the "Match" initiative (a sister app used for helping users find the advisor that matches their specific needs), the launch of several new account types on the platform and several other key features. I've architected, interviewed, performed ADRs and more.`,
    background: "linear-gradient(to right, #6dd5ed, #2193b0)",
    images: generateImages("altruist"),
    tags: [
      techsUsed.react,
      techsUsed.nodeJs,
      techsUsed.typescript,
      techsUsed.dataDog,
      techsUsed.graphQl,
      techsUsed.awsLambda,
    ],
  },
  {
    projectTitle: "Altruist Mobile App",
    appUrl: "https://altruist.com/client-experience/",
    projectInfo: `An all in one financial custodial platform. I lead the "Match" initiative (a sister app used for helping users find the advisor that matches their specific needs), the launch of several new account types on the platform and several other key features. I've architected, interviewed, performed ADRs and more.`,
    background: "linear-gradient(to right, #6dd5ed, #2193b0)",
    images: generateImages("altruistMobile"),
    tags: [
      techsUsed.reactNative,
      techsUsed.sentry,
      techsUsed.graphQl,
      techsUsed.gitlab,
    ],
  },

  {
    projectTitle: "Uptime",
    projectInfo:
      "Uptime is a machine analysis app. Sensors are placed on various machines, data is sampled, recorded and sent to a MsSql database. The backend is composed of Node js and the front end components is made from React Js. Bootstrap is the css framework and jest and enzyme is used for testing.",
    background: "linear-gradient(to right, #6dd5ed, #2193b0)",
    images: generateImages("uptime"),
    tags: [
      techsUsed.react,
      techsUsed.typescript,
      techsUsed.nodeJs,
      techsUsed.python,
    ],
  },

  {
    projectTitle: "City Furniture",
    projectInfo:
      "A popular south florida furniture store. Made in React js, Node/express, typescript and context",
    background: "linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5)",
    appUrl: "https://cityfurniture.com/",
    images: generateImages("city"),
    tags: [
      techsUsed.react,
      techsUsed.typescript,
      techsUsed.nodeJs,
      techsUsed.azure,
    ],
  },
  {
    projectTitle: "YouFit",
    projectInfo:
      "A national gym franchise website, made using Gatsby js, React and Graph Ql",
    appUrl: "https://youfit.com/",
    background: "linear-gradient(to right, #0083B0, #00B4DB)",
    images: generateImages("youfit"),

    tags: [techsUsed.react, techsUsed.typescript, techsUsed.gatsby],
  },
];
