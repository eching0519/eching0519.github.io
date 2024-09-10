import type { IProfessionalExperienceProps } from 'src/types/professional-experience';

import { CONFIG } from 'src/config-global';

export const _professionalExperience: IProfessionalExperienceProps[] = [
  {
    id: 'cbi',
    jobTitle: 'Application Developer',
    company: 'Central Business Information Limited',
    startDate: '1 Sep 2020',
    endDate: '1 Jun 2022',
    descriptions: [
      'Enhanced the search engine web scraping program, increasing its data collection efficiency by 10x, leading to significantly improved performance.',
      'Designed and implemented an automated Company Search Reports generation system with up to 80% accuracy, dramatically reducing manual work in financial data processing.',
      'Utilized web scraping techniques with Selenium and VBA to streamline various data collection and processing tasks across multiple projects.',
      'Researched and evaluated recent technologies, reporting on their viability for possible adoption.',
    ],
    location: 'Hong Kong SAR',
    converUrl: `${CONFIG.assetsDir}/assets/images/professional-experience/cbi.webp`,
    technicalSkills: [
      {
        category: 'Software Development',
        skills: ['VBA', 'Python', 'Selenium', 'Web Scraping'],
      },
    ],
  },
  {
    id: 'cuhk',
    jobTitle: 'Software Engineer',
    company: 'The Chinese University of Hong Kong',
    startDate: '1 Jun 2022',
    endDate: '1 Sep 2023',
    descriptions: [
      "Designed and developed a multi-platform mobile application for teachers and parents, featuring AI-powered assessment tools for evaluating children's fundamental movement skills through video analysis.",
      'Engineered and maintained robust backend systems, integrating basic AI analysis to support educational mobile applications and ensuring optimal performance through regular updates.',
      'Conducted in-depth research on advanced AI technologies to drive improvements in data analysis and application capabilities.',
      'Researched and visualized open-source 3D body recognition models using Numpy, Pandas, and Matplotlib, contributing to the development of innovative data analysis tools.',
    ],
    location: 'Hong Kong SAR',
    converUrl: `${CONFIG.assetsDir}/assets/images/professional-experience/cuhk.webp`,
    technicalSkills: [
      {
        category: 'Software Development',
        skills: [
          'Azure',
          'Node.JS',
          'TypeScript',
          'Express',
          'Flutter',
          'Numpy',
          'Pandas',
          'Matplotlib',
          'Git',
          'Postman',
          'REST APIs',
          'Object-Oriented Programming',
        ],
      },
    ],
  },
  {
    id: 'pastel',
    jobTitle: 'Analyst Programmer',
    company: 'Pastel Tech Limited',
    startDate: '1 Sep 2023',
    endDate: '1 Apr 2024',
    descriptions: [
      "Successfully developed a high-traffic web application for Wong Tai Sin Temple, handling 3,000+ daily devotees' blessing requests during peak season and completing the project within a strict 1-month timeline.",
      "Responsible for developing a complex backend workflow for Kerry Logistics' building management system, which involved syncing 100+ new jobs daily from a private API and managing 15 job statuses in correlation with 7 user roles and 76 distinct permissions.",
      'Oversee the full Software Development Life Cycle (SDLC) for comprehensive web-based applications, including design, development, maintenance, and testing.',
      "Conduct thorough code reviews and provide approvals for colleagues' contributions on GitHub, ensuring adherence to coding standards and best practices.",
      'Refactor and enhance in-house software packages to improve reusability and efficiency across multiple projects.',
    ],
    location: 'Hong Kong SAR',
    converUrl: `${CONFIG.assetsDir}/assets/images/professional-experience/pastel.webp`,
    technicalSkills: [
      {
        category: 'Software Development',
        skills: [
          'Node.JS',
          'NestJS',
          'React.JS',
          'React Native',
          'Material UI',
          'Azure',
          'AWS',
          'Microsoft SQL',
          'MySQL',
          'Prisma',
          'C#',
          'ASP.NET Core',
          'Jira',
          'Git',
          'Postman',
          'REST APIs',
          'Object-Oriented Programming',
          'Agile Methodologies',
          'Docker',
        ],
      },
    ],
  },
];
