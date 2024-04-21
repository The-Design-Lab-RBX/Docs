// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import prismLight from './src/util/prismLight';
import prismDark from './src/util/prismDark';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Design Lab",
  tagline: "Cool High quality assets at cheep prices.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://support.the-design-lab.tech",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "The-Design-Lab-RBX", // Usually your GitHub org/user name.
  projectName: "Docs", // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      navbar: {
        title: "Home",
        items: [
          {
            type: "docSidebar",
            sidebarId: "Free",
            position: "left",
            label: "Free Product's Documentation",
          },
          {
            type: "docSidebar",
            sidebarId: "Paid",
            position: "left",
            label: "Paid Product's Documentation Documentation",
          },
          {
            href: "https://status.the-design-lab.tech",
            label: "Status Page",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Free Product's Documentation",
                to: "/Free",
              },
              {
                label: "Paid Product's Documentation",
                to: "/Paid",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Whitehill Group Discord",
                href: "https://whitehill.club/discord",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/whitehillgroup",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Design Lab.`,
      },
      prism: {
        theme: prismLight,
        darkTheme: prismDark,
      },
    }),
};

export default config;