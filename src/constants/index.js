import {
  frontend,
  backend,
  db,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  docker,
  java,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  springboot,
  aws,
  oracle,
  mysql,
  kafka,
  bootstrap,
  mssql,
  postgresql,
  muet,
  miu,
  blockchain,
  awsAmplify,
  api,
  javaInterface,
  propertApp,
  voblock,
  alzApp
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'blogs',
    title: 'Publications',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'Database Design',
    icon: db,
  },
  {
    title: 'Frontend',
    icon: frontend,
  },
  {
    title: 'SDLC',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'SpringBoot',
    icon: springboot,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },  {
    name: 'Apache Kafka',
    icon: kafka,
  },  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Amazon Web Services',
    icon: aws,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },

  {
    name: 'Java',
    icon: java,
  },

  {
    name: 'MS SQL',
    icon: mssql,
  },
  {
    name: 'Oracle SQL & APEX',
    icon: oracle,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Postgre SQL',
    icon: postgresql,
  },
  // {
  //   name: 'Git',
  //   icon: git,
  // },

];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Paysys Labs (Fintech)',
    icon: java,
    iconBg: '#333333',
    date: 'Feb 2022 - Nov 2022',
  },
  {
    title: 'Associate Software Engineer',
    company_name: 'Paysys Labs (Fintech)',
    icon: java,
    iconBg: '#333333',
    date: 'Feb 2021 - Jan 2022',
  },
  {
    title: 'Oracle APEX Trainee',
    company_name: 'OCLITS',
    icon: oracle,
    iconBg: '#333333',
    date: 'Jun 2020 - Aug 2020',
  },
  {
    title: 'Java Developer Intern',
    company_name: 'Gexton',
    icon: java,
    iconBg: '#333333',
    date: 'May 2018 - July 2018',
  },
  {
    title: 'React Native Intern',
    company_name: 'CIC HUB',
    icon: reactjs,
    iconBg: '#333333',
    date: 'May 2018 - July 2018',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Property Management System',
    description: 'Developed a multi-user role application for property selling and management.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Spring',
        color: 'green-text-gradient',
      },
      {
        name: 'Java',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/coderBoost-PK2USA/property-service',
    demo: 'https://github.com/coderBoost-PK2USA/property-service',
  },
  {
    id: 'project-2',
    name: 'Memory Stash Alzheimer\'s Aid',
    description:
      'Built a Java Android mobile application to help patients with Alzheimer\'s manage their condition and live independently',
    tags: [
      {
        name: 'Android',
        color: 'blue-text-gradient',
      },
      {
        name: 'Java',
        color: 'green-text-gradient',
      },
      {
        name: 'SQLite',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/poojakumari11228/Memory-Stash-Alzheimers-Aid',
    demo: 'https://youtu.be/MlmFRePu5WA',
  },
  {
    id: 'project-3',
    name: 'E-Voting',
    description: 'Blockchain Based Electronic, transparent, distributed, immutable Voting System. Prevent rigging and casting of vote remains confidential',
    tags: [
      {
        name: 'blockchain',
        color: 'blue-text-gradient',
      },
      {
        name: 'php',
        color: 'green-text-gradient',
      },
      {
        name: 'ethereum',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/BhagiaSheri/Blockchain-Based-E-Voting-System',
    demo: 'https://www.youtube.com/watch?v=TSJGlE196TY&t=601s',
  },
  {
    id: 'project-4',
    name: 'Weather-Data Streaming',
    description: `Retrieved live weather data stream from OpenWeatherMap.org API to produce Kafka topics; consumed topics using Spark Streaming and stored data in HBase. Imported employee data to Hive table and analysed using Tableau`,
    tags: [
      {
        name: 'Kafka',
        color: 'blue-text-gradient',
      },
      {
        name: 'Spark',
        color: 'green-text-gradient',
      },
      {
        name: 'Hadoop',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/poojakumari11228',
    demo: 'https://github.com/poojakumari11228',
  },
  {
    id: 'project-5',
    name: 'Employee Management System',
    description:
      'Developed a React web project for efficient employee and project management. Integrated React Axios for seamless API communication, React Router for smooth navigation, and React Hooks for efficient state management and side effect handling',
    tags: [
      {
        name: 'Reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Spring',
        color: 'green-text-gradient',
      },
      {
        name: 'Java',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/poojakumari11228/employee-management',
    demo: 'https://github.com/poojakumari11228/employee-management',
  },
];

const education = [
  {
    title: 'Masters of Science in Computer Science',
    institute: 'Maharishi International University – Iowa, USA',
    icon: miu,
    date: 'Nov 2022 - Present (Via Distance Education)',
    grade: 'CGPA: 3.93'
  },  {
    title: 'Bachelors Of Software Engineer',
    institute: 'Mehran University of Engineering & Technology - Jamshoro, Pakistan',
    icon: muet,
    date: 'Nov 2016 - Jan 2021',
    grade: 'CGPA: 3.98'
  },
]

const blog = [
  {
    title: 'Unleashing the Potential of Amplify Studio',
    icon: awsAmplify,
    url: 'https://medium.com/@poojakumari11228/unleashing-the-potential-of-amplify-studio-building-full-stack-app-on-aws-ea3048f52bfc'
  },
  {
    title: 'Blockchain Fundamentals-The Easy Way',
    icon: blockchain,
    url: 'https://medium.com/@poojakumari11228/blockchain-fundamentals-the-easy-way-39259c1d06b6'
  },
  {
    title: 'Evolving API Problem',
    icon: api,
    url: 'https://medium.com/@poojakumari11228/evolving-api-problem-java-ea221847870a'
  },
  {
    title: 'Deep Dive into Java Interfaces',
    icon: javaInterface,
    url: 'https://medium.com/@poojakumari11228/evolving-api-problem-part2-a612488bb1d9'
  },
];

const publications = [
  {
    title: 'Conventional VS Blockchain Based E-Vote System" (APIC-IST 2020)',
    icon: voblock,
    url: 'https://www.researchgate.net/publication/343017419_Conventional_VS_Blockchain-Based_E-Vote_System'
  },
  {
    title: 'Artificial Intelligence Based Memory Stash Alzheimer\'s Aid (ICISCT 2020)',
    icon: alzApp,
    url: 'https://ieeexplore.ieee.org/document/9080030'
  },
  {
    title: 'Allrounder Property Management System (INCCST 2019)',
    icon: propertApp,
    url: 'https://drive.google.com/file/d/1fdtHHOdgSkzxryv9PaPoreFjSn8VdwAO/view'
  }
];

export { services, technologies, experiences, projects, education, blog, publications };
