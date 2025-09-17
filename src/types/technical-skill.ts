export type ProgrammingLanguage = 'Python' | 'TypeScript' | 'HTML' | 'CSS' | 'C#' | 'Dart';

export type Framework =
  | 'React.JS'
  | 'Vite'
  | 'Next.js'
  | 'Material UI'
  | 'ASP.NET Core'
  | 'Bootstrap'
  | 'Express'
  | 'Node.JS'
  | 'NestJS'
  | 'Socket.IO'
  | 'Flutter'
  | 'Flask';

export type Database = 'MySQL' | 'Microsoft SQL';

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
