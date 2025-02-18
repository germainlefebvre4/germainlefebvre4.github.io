import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Germain Lefebvre',
  tagline: 'Blog d\'un techos qui aime partager',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.germainlefebvre.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'germainlefebvre4', // Usually your GitHub org/user name.
  projectName: 'germainlefebvre4.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },

    // announcementBar: {
    //   id: 'coming_soon',
    //   content:
    //     'La section <b>Blog</b> arrive très bientôt...',
    //   backgroundColor: '#eee',
    //   textColor: '#444',
    //   isCloseable: false,
    // },

    navbar: {
      title: 'Germain Lefebvre',
      // logo: {
      //   alt: 'Germain Lefebvre Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/cv', label: 'CV', position: 'right'},
        {
          href: 'https://github.com/germainlefebvre4',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sections',
          items: [
            {
              label: 'Accueil',
              to: '/',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            // {
            //   label: 'Qui suis-je ?',
            //   to: '/me',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/germainlefebvre4',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/germainlefebvre4',
            },
            {
              label: 'X',
              href: 'https://x.com/germainlefebvr4',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Germain Lefebvre. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,

  plugins: [
  ]
};

export default config;
