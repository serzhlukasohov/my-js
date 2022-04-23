/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyJavaScript',
  tagline:
    'Руководства, шпаргалки, вопросы и другие материалы по JavaScript, React, TypeScript, Node.js, Express, Prisma, Docker и множеству других технологий, связанных с разработкой веб-приложений.',
  url: 'https://my-js.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'harryheman', // Usually your GitHub org/user name.
  projectName: 'my-js', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/harryheman/my-js/tree/master/',
          breadcrumbs: false
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/harryheman/my-js/tree/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'MyJavaScript',
        logo: {
          alt: 'MyJavaScript Logo',
          src: 'img/logo.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'guide/intro-guide',
            position: 'left',
            label: 'Руководства'
          },
          {
            type: 'doc',
            docId: 'cheatsheet/intro-cheatsheet',
            position: 'left',
            label: 'Шпаргалки'
          },
          {
            type: 'doc',
            docId: 'other/intro-other',
            position: 'left',
            label: 'Другое'
          },
          {
            type: 'doc',
            docId: 'links/intro-links',
            position: 'left',
            label: 'Cсылки'
          },
          // { to: 'blog', label: 'Блог', position: 'left' },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/harryheman/my-js',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Контакты',
            items: [
              {
                html: '<p class="footer__link"><img src="../../img/github.png"> <a href="https://github.com/harryheman">harryheman</a></p>'
              },
              {
                html: '<p class="footer__link"><img src="../../img/telegram.png"> @igor_agapov</p>'
              },
              {
                html: '<p class="footer__link"><img src="../../img/email.png"> aio350@yahoo.com</p>'
              },
              {
                html: '<p class="footer__link"><img src="../../img/email.png"> aio350@mail.ru</p>'
              },
              {
                label: 'Habr',
                href: 'https://habr.com/ru/users/aio350'
              }
            ]
          }
        ],
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `
          Copyright © ${new Date().getFullYear()}. MyJavaScript. <br />
          Built by <a href="https://github.com/harryheman" target="_blank" rel="noopener noreferrer">Igor Agapov</a> with&nbsp;🖤&nbsp;&nbsp;&amp; <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>. <br />
          Deploy on <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>.
        `
      },
      hideableSidebar: true,
      autoCollapseSidebarCategories: true
    })
}

module.exports = config
