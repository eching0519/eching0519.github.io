import type { Profile } from 'src/types/profile';
import type { IEducationProps } from 'src/types/education';
import type { ITechnicalSkill } from 'src/types/technical-skill';
import type { ICertificationProps } from 'src/types/certification';

import { CONFIG } from 'src/config-global';

export const _profile: Profile = {
  name: 'Yanni',
  jobTitle: 'Full Stack Developer',
  location: 'Calgary, AB',
  description:
    'Based in Calgary. Focusing on writing clean, efficient code and a keen eye for detail. I excel at identifying potential issues early in the development process, enabling the delivery of high-quality, scalable solutions.',
  socialMedias: [
    {
      value: 'linkedin',
      label: 'Linkedin',
      link: 'https://www.linkedin.com/in/eching0519/',
    },
    {
      value: 'github',
      label: 'GitHub',
      link: 'https://github.com/eching0519',
    },
  ],
};

export const _technicalSkills: ITechnicalSkill[] = [
  {
    category: 'Programming Language',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C#', 'Java', 'PHP'],
  },
  {
    category: 'Frontend Framework',
    skills: ['React.JS', 'React Native', 'Vite', 'Material UI'],
  },
  {
    category: 'Backend Framework',
    skills: ['Express', 'Node.JS', 'ASP.NET Core'],
  },
  {
    category: 'Plugin',
    skills: ['WooCommerce'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'Microsoft SQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Postman', 'Jira', 'VS Code'],
  },
  {
    category: 'Cloud',
    skills: ['Azure'],
  },
  {
    category: 'Software Development',
    skills: ['REST APIs', 'Agile Methodologies', 'Object-Oriented Programming', 'Firebase'],
  },
];

export const _educationRecords: IEducationProps[] = [
  {
    id: 'ive',
    title: 'Higher Diploma in Software Engineering',
    institution: 'Hong Kong Institute of Vocational Education (Sha Tin)',
    startDate: '1 Sep 2018',
    endDate: '1 Aug 2020',
    location: 'Hong Kong SAR',
    logo: `${CONFIG.assetsDir}/assets/icons/brands/ive.png`,
    wesVerified: true,
  },
  {
    id: 'cuhk',
    title: 'Bachelor of Science in Computer Science',
    institution: 'The Chinese University of Hong Kong',
    startDate: '1 Sep 2020',
    endDate: '1 Aug 2022',
    location: 'Hong Kong SAR',
    logo: `${CONFIG.assetsDir}/assets/icons/brands/cuhk.png`,
    descriptions: [
      'Ranked #26 in QS World University Rankings for Computer Science & Information Systems 2022',
    ],
    wesVerified: true,
  },
];

export const _certifications: ICertificationProps[] = [
  {
    id: 'azure-foundamentals',
    title: 'Microsoft Certified: Azure Fundamentals',
    organization: 'Microsoft',
    logo: `${CONFIG.assetsDir}/assets/icons/brands/azure.png`,
    date: '29 Apr 2023',
    image: `${CONFIG.assetsDir}/assets/images/certification/azure-fundamentals.jpg`,
  },
  {
    id: 'aset-tt',
    title: 'Technologist in Training (TT)',
    organization: 'ASET',
    logo: `${CONFIG.assetsDir}/assets/icons/brands/aset.jpg`,
    date: '11 Jun 2024',
  },
];
