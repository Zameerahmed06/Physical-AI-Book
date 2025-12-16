import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Book',
  tagline: 'Designing smart, real-world interactive machines',
  favicon: 'img/h3.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ai-robotic-book-bay.vercel.app', // Replace with your actual domain
  // Set the /<baseUrl>/ pathname under which your site is served
  // For Vercel deployment, use '/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AI-Robotic-Book', // Usually your GitHub org/user name.
  projectName: 'AI-Robotic-Book', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Internationalization - English only for professional textbook layout
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Zameerahmed06/AI-Robotic-Book/tree/main/Physical-Book/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Robotic AI',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/h3.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/Zameerahmed06/AI-Robotic-Book',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/physical-ai',
          label: 'Community',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Chapters',
          items: [
            {
              label: 'Chapter 1: Introduction',
              to: '/docs/chapter-1-introduction-to-physical-ai',
            },
            {
              label: 'Chapter 2: Humanoid Robotics',
              to: '/docs/chapter-2-basics-of-humanoid-robotics',
            },
            {
              label: 'Chapter 3: ROS 2 Fundamentals',
              to: '/docs/chapter-3-ros-2-fundamentals',
            },
            {
              label: 'Chapter 4: Digital Twin Simulation',
              to: '/docs/chapter-4-digital-twin-simulation',
            },
            {
              label: 'Chapter 5: Vision-Language-Action',
              to: '/docs/chapter-5-vision-language-action-systems',
            },
            {
              label: 'Chapter 6: Final Project',
              to: '/docs/chapter-6-capstone-ai-robot-pipeline',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'ROS 2 Documentation',
              href: 'https://docs.ros.org/',
            },
            {
              label: 'Gazebo Simulator',
              href: 'https://gazebosim.org/',
            },

            {
              label: 'Python Robotics',
              href: 'https://pypi.org/project/robotics-toolbox-python/',
            },
            {
              label: 'OpenAI Gym',
              href: 'https://gym.openai.com/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Zameerahmed06/AI-Robotic-Book',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/physical-ai',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/physical_ai',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/physical-ai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Research Papers',
              href: 'https://scholar.google.com/scholar?q=physical+ai',
            },
            {
              label: 'Contribute',
              href: 'https://github.com/Zameerahmed06/AI-Robotic-Book',
            },
          ],
        },
      ],
      copyright: `<div style="text-align: center; padding-top: 2rem;">
        <p>Copyright © ${new Date().getFullYear()} Physical AI Textbook. All rights reserved.</p>
        <p style="margin-top: 0.5rem; font-size: 0.85rem; color: #94a3b8;">
          Designed with Zameer Ahmed ❤️ for the robotics community
        </p>
      </div>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'typescript', 'yaml', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
