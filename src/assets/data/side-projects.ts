import type { ISideProjectProps } from 'src/types/side-project';

import { CONFIG } from 'src/config-global';

import { ProjectCategory } from 'src/types/project-category';

// ----------------------------------------------------------------------

export const _sideProjects: ISideProjectProps[] = [
  {
    id: '18a7b012-525b-43b4-9101-0b02b1e30a8f',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/StockerRemaster/cover.webp`,
    title: 'Stocker Remaster AI Chatbot',
    isAcademicProject: false,
    subtitle: 'Financial Advisor AI Agent Embedded in Stocker Remaster',
    description:
      'An advanced AI-powered financial assistant designed to deliver personalized investment insights and strategic recommendations. Equipped with a suite of self-engineered analytical tools, it leverages LangGraph to perform deep market analysis, interpret user input, and provide actionable feedback.',
    lastUpdatedAt: 'Jan 17, 2025',
    category: ProjectCategory.ai,
    links: [
      {
        url: 'https://apps.apple.com/hk/app/stocker-remaster/id6450699189',
        title: 'iOS',
      },
      {
        url: 'https://play.google.com/store/apps/details?id=com.nanistudio.stocker3',
        title: 'Android',
      },
    ],
    technicalSkills: [
      {
        category: 'Programming Language',
        skills: ['Python'],
      },
      { category: 'Library', skills: ['LangChain', 'Flask'] },
      { category: 'Tools', skills: ['Git', 'GCP'] },
    ],
  },
  {
    id: '1b534008-22ba-473d-a889-b4fe9559c661',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/BossMind/cover.png`,
    title: 'BossMind Media',
    subtitle: 'Hong Kong Financial and Business News Platform',
    description:
      "BossMind Media is a well-known Hong Kong digital platform focused on business and finance. It offers expert analysis on markets, IPOs, real estate, and economic trends, helping readers stay informed and financially literate. The site is popular for its insights into Hong Kong and China's financial landscape.",
    lastUpdatedAt: '20 Apr 2025',
    category: ProjectCategory.fullStackWeb,
    links: [
      {
        url: 'https://www.figma.com/design/sxzfSW1bB6pzghGukFqGC8/Bossmind-Wireframe?node-id=115-2666&t=AV3ehsnCUt7ZO6tO-1',
        title: 'Wireframe',
      },
      {
        url: 'http://bossmindmedia.com/',
        title: 'Website',
      },
    ],
    technicalSkills: [
      { category: 'Tools', skills: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'] },
    ],
  },
  {
    id: '886cd23d-cb44-4084-ad6b-12be055388d7',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/StockerRemaster/cover.webp`,
    title: 'Stocker Remaster',
    isAcademicProject: false,
    subtitle: 'Manage Your Global Investments with Ease',
    description:
      ' The ultimate investment tracker! Monitor stocks, bonds, crypto, and more. Compare performance with other stocks or ETFs, track daily, weekly, and yearly profits, view IRR, import broker statements, and automate dividends—all in one app!',
    lastUpdatedAt: 'May 14, 2020',
    category: ProjectCategory.fullStackMobile,
    links: [
      {
        url: 'https://apps.apple.com/hk/app/stocker-remaster/id6450699189',
        title: 'iOS',
      },
      {
        url: 'https://play.google.com/store/apps/details?id=com.nanistudio.stocker3',
        title: 'Android',
      },
    ],
    technicalSkills: [
      {
        category: 'Programming Language',
        skills: ['Flutter'],
      },
      { category: 'Backend Framework', skills: ['Node.JS', 'Express'] },
      { category: 'Tools', skills: ['GCP', 'Firebase', 'Git'] },
    ],
  },
  {
    id: '8a350818-3f7a-4fa4-bb36-75c9370e8531',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/TheFluffyLittleThings/cover.png`,
    title: 'The Fluffy Little Things',
    subtitle: 'Online Store for Premium Pet Supplies',
    description:
      'The Fluffy Little Things is an online store specializing in premium pet supplies. With a seamless WooCommerce platform, The Fluffy Little Things offers a smooth shopping experience, secure payments, and reliable shipping, making it easy for pet owners to find and order quality products for their beloved pets.',
    lastUpdatedAt: '9 July 2024',
    category: ProjectCategory.fullStackWeb,
    links: [{ url: 'https://thefluffylittlethings.com/', title: 'Website' }],
    technicalSkills: [
      {
        category: 'Programming Language',
        skills: ['HTML', 'CSS'],
      },
      { category: 'Database', skills: ['MySQL'] },
      { category: 'Library', skills: ['WordPress', 'WooCommerce'] },
      { category: 'Software Development', skills: ['REST APIs'] },
    ],
  },
  {
    id: '79404713-e2d3-49a3-8dbb-779aea05ca9c',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/Stocker2/cover.png`,
    title: 'Stocker',
    subtitle: 'Manage Your Global Investments with Ease',
    description:
      'Stocker is a comprehensive stock and cryptocurrency investment management app that allows you to build an all-in-one portfolio with Hong Kong, US, Taiwan, UK, Singapore, and China A shares. It also provides multi-currency conversion functionality and various charts to easily track daily price changes.',
    lastUpdatedAt: 'Aug 8, 2023',
    category: ProjectCategory.fullStackWeb,
    links: [{ url: 'https://dashboard.stocker.nanistudio.org/en/', title: 'Website' }],
    technicalSkills: [
      {
        category: 'Software Development',
        skills: [
          'TypeScript',
          'HTML',
          'CSS',
          'Next.js',
          'React.JS',
          'Material UI',
          'Git',
          'Firebase',
        ],
      },
    ],
  },
  {
    id: 'ca137da4-4c87-472d-8aa9-9d55d93483e5',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/PA-Reality/cover.webp`,
    title: 'PA-Reality',
    isAcademicProject: false,
    subtitle: 'Early Childhood Physical Education Program',
    description:
      'The mobile app was developed for the UGC-funded project, led by the Department of Sports Science and Physical Education, CUHK. The main feature of the application includes video submission for fundamental movement skill ratings and sharing of project information to end users.',
    lastUpdatedAt: 'May 14, 2020',
    category: ProjectCategory.fullStackMobile,
    links: [
      {
        url: 'https://apps.apple.com/hk/app/pa-reality/id1668991146',
        title: 'iOS',
      },
      {
        url: 'https://play.google.com/store/apps/details?id=hk.edu.cuhk.cse.pareality',
        title: 'Android',
      },
    ],
    technicalSkills: [
      {
        category: 'Programming Language',
        skills: ['Flutter'],
      },
      {
        category: 'Frontend Framework',
        skills: ['MediaPipe'],
      },
      { category: 'Backend Framework', skills: ['Node.JS', 'Express'] },
      {
        category: 'Library',
        skills: ['Numpy', 'Pandas', 'TensorFlow'],
      },
      { category: 'Database', skills: ['Microsoft SQL'] },
      { category: 'Tools', skills: ['Git', 'Postman'] },
    ],
  },
  {
    id: 'cd613c7e-bc46-4a71-8b82-b4cae8e6128b',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/SignChat/cover.png`,
    title: 'SignChat',
    isAcademicProject: true,
    subtitle: 'Sign Language Translation Solution Powered by AI',
    description:
      'An iOS app that translates sign language into text. Users can create a personalized sign language library and train their own model for accurate translation.',
    lastUpdatedAt: 'May 14, 2020',
    category: ProjectCategory.fullStackMobile,
    links: [
      {
        url: 'https://www.youtube.com/watch?v=MUFFbOvnvBU',
        title: 'Video',
      },
    ],
    technicalSkills: [
      {
        category: 'Programming Language',
        skills: ['Python', 'C#'],
      },
      {
        category: 'Frontend Framework',
        skills: ['MediaPipe'],
      },
      { category: 'Backend Framework', skills: ['ASP.NET Core'] },
      {
        category: 'Library',
        skills: ['Numpy', 'Pandas', 'TensorFlow'],
      },
      { category: 'Database', skills: ['MySQL'] },
      { category: 'Tools', skills: ['Git', 'Postman'] },
    ],
  },
];
