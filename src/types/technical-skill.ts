export type ProgrammingLanguage =
  | 'Python'
  | 'JavaScript'
  | 'TypeScript'
  | 'PHP'
  | 'HTML'
  | 'CSS'
  | 'C#'
  | 'Java'
  | 'Objective-C'
  | 'Dart';

export type Framework =
  | 'React.JS'
  | 'React Native'
  | 'Vite'
  | 'Next.js'
  | 'Material UI'
  | 'ASP.NET Core'
  | 'Bootstrap'
  | 'Express'
  | 'Node.JS'
  | 'NestJS'
  | 'Socket.IO'
  | 'Web3'
  | 'ethers.js'
  | 'Prisma'
  | 'Flutter'
  | 'VBA';

export type Database = 'MySQL' | 'MongoDB' | 'Microsoft SQL';

export type Cloud = 'Azure' | 'AWS';

export type Library =
  | 'LangChain'
  | 'MediaPipe'
  | 'Numpy'
  | 'Pandas'
  | 'TensorFlow'
  | 'WooCommerce'
  | 'Puppeteer'
  | 'Matplotlib'
  | 'Selenium';

export type Skill =
  | 'GCP'
  | 'Firebase'
  | 'REST APIs'
  | 'GraphQL'
  | 'Object-Oriented Programming'
  | 'Agile Methodologies'
  | 'WordPress'
  | 'Web Scraping';

export type Tool =
  | 'Git'
  | 'Postman'
  | 'Jira'
  | 'VS Code'
  | 'Figma'
  | 'Adobe Illustrator'
  | 'Adobe Photoshop'
  | 'Docker';

export type ITechnicalSkill = {
  category: string;
  skills: (ProgrammingLanguage | Framework | Database | Cloud | Skill | Library | Tool)[];
};
