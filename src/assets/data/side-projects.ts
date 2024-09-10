import type { ISideProjectProps } from 'src/types/side-project';

import { CONFIG } from 'src/config-global';

import { ProjectCategory } from 'src/types/project-category';

// ----------------------------------------------------------------------

export const _sideProjects: ISideProjectProps[] = [
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
        skills: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      },
      { category: 'Database', skills: ['MySQL'] },
      { category: 'Library', skills: ['WordPress', 'WooCommerce'] },
      { category: 'Software Development', skills: ['REST APIs'] },
    ],
  },
  {
    id: '09e0706b-d22a-42e1-93b4-4388f30f6883',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/NailCrafted/cover.png`,
    title: 'NailCrafted',
    subtitle: 'Online Store for Handmade Nail Patches',
    description:
      'NailCrafted is an online store specializing in handmade nail patches. With a seamless WooCommerce platform, NailCrafted provides an easy shopping experience, secure payments, and reliable shipping, making it convenient for customers to find and order the perfect set of nails.',
    lastUpdatedAt: '12 Jun 2024',
    category: ProjectCategory.fullStackWeb,
    links: [{ url: 'https://nailcrafted.com/', title: 'Website' }],
    technicalSkills: [
      {
        category: 'Programming Language',
        skills: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      },
      { category: 'Database', skills: ['MySQL'] },
      { category: 'Library', skills: ['WordPress', 'WooCommerce'] },
      { category: 'Software Development', skills: ['REST APIs'] },
    ],
  },
  {
    id: 'b3b1942c-35ef-4983-8b10-6f85b39ef335',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/OpenSeaGraphQL/cover.png`,
    title: 'OpenSea GraphQL',
    subtitle: 'OpenSea GraphQL data scraping service',
    description:
      "This backend service leverages web scraping techniques to retrieve data from OpenSea's internal GraphQL API, providing real-time access to NFT marketplace data. Hosted on Azure Functions for scalability and efficiency, the service is integrated with the RapidAPI platform to enable monetization. It allows developers and users to access OpenSea data seamlessly while benefiting from the robust infrastructure of Azure cloud services.",
    lastUpdatedAt: 'Sep 5, 2023',
    category: ProjectCategory.backend,
    links: [
      {
        url: 'https://rapidapi.com/nft-tools1-nft-tools-default/api/opensea-graphql3',
        title: 'API Hub',
      },
    ],
    technicalSkills: [
      {
        category: 'Programming Language',
        skills: ['TypeScript'],
      },
      {
        category: 'Backend Framework',
        skills: ['Express'],
      },
      { category: 'Library', skills: ['Puppeteer'] },
      { category: 'Cloud', skills: ['Azure'] },
      {
        category: 'Software Development',
        skills: ['Docker', 'Postman', 'Web Scraping'],
      },
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
    category: ProjectCategory.frontend,
    links: [{ url: 'https://dashboard.stocker.nanistudio.org/en/', title: 'Website' }],
    technicalSkills: [
      {
        category: 'Software Development',
        skills: [
          'JavaScript',
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
    id: 'b3b1942c-35ef-4983-8b10-6f85b39ef335',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/OneNFT/cover.png`,
    title: 'OneNFT',
    subtitle: 'Borrow & Lend on the NFT Liquidity Protocol',
    description:
      'OneNFT is a platform designed to facilitate borrowing and lending through the NFT Liquidity Protocol. Users can use their NFTs as collateral to secure crypto loans, with the ability to reclaim their NFTs once the loan is repaid. The next stage of development is pending client initiation.',
    lastUpdatedAt: 'Sep 5, 2023',
    pending: true,
    category: ProjectCategory.frontend,
    links: [{ url: 'https://one-nft-react.vercel.app/', title: 'Demo Website' }],
    technicalSkills: [
      {
        category: 'Programming Language',
        skills: ['TypeScript', 'HTML', 'CSS'],
      },
      {
        category: 'Frontend Framework',
        skills: ['Next.js', 'React.JS', 'Material UI', 'Web3', 'ethers.js'],
      },
      { category: 'Software Development', skills: ['Git', 'Postman'] },
    ],
  },
  {
    id: '398c5a8e-adae-4dd8-81cc-2023d836a34e',
    coverUrl: `${CONFIG.assetsDir}/assets/images/side-project/Friends@HK/1.png`,
    title: 'Friends@HK',
    isAcademicProject: true,
    subtitle: 'Connect, Chat, and Make Friends in Groups of Three',
    description:
      'A friend-making web application inspired by We3, designed to match three users at a time and open a group chat. Users can set preferences, add others to their friend list, and block unwanted contacts for a personalized experience. ',
    lastUpdatedAt: 'Apr 24, 2022',
    category: ProjectCategory.fullStackWeb,
    links: [
      {
        url: 'https://github.com/eching0519/Friends-HK',
        title: 'GitHub',
      },
      {
        url: 'https://www.youtube.com/watch?v=WIw6h7JHln4',
        title: 'Video',
      },
    ],
    technicalSkills: [
      {
        category: 'Programming Language',
        skills: ['JavaScript', 'HTML', 'CSS'],
      },
      {
        category: 'Frontend Framework',
        skills: ['React.JS', 'Bootstrap'],
      },
      {
        category: 'Backend Framework',
        skills: ['Express', 'Node.JS', 'Socket.IO'],
      },
      { category: 'Database', skills: ['MongoDB'] },
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
        skills: ['Python', 'PHP', 'Objective-C', 'C#'],
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
