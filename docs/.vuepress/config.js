const { description } = require('../../package')

module.exports = {
  title: 'Biscord',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  base: '/biscord-website/',

  themeConfig: {
    repo: 'https://github.com/Vinzerr/biscord',
    docsRepo: 'https://github.com/Vinzerr/biscord-website',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nextLinks: false,
    prevLinks: false,
    smoothScroll: true,
    nav: [
      {
        text: 'Biscord',
        link: '/'
      },
      {
        text: 'Documentation',
        link: '/doc/',
      },
      {
        text: 'Guide',
        link: '/guide/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '/guide/'
          ]
        },{
          title: 'Getting Started',
          collapsible: false,
          children: [
            '/guide/gettingstarted/installation'
          ]
        }
      ],
      '/doc/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '/doc/introduction/gettingstarted',
            '/doc/introduction/changelog.md'
          ]
        },{
          title: 'Classes',
          collapsable: false,
          children: [
            '/doc/classes/biscord.md',
            '/doc/classes/managers.md'
          ]
        },{
          title: 'Managers',
          collapsable: false,
          children: [
            '/doc/managers/commandhandler.md',
            '/doc/managers/eventhandler.md'
          ]
        },{
          title: 'Typedefs',
          collapsable: false,
          children: [
            '/doc/typedefs/path.md',
            '/doc/typedefs/events.md',
            '/doc/typedefs/commandsetup.md',
            '/doc/typedefs/commandsettings.md',
            '/doc/typedefs/eventsetup.md',
            '/doc/typedefs/eventsettings.md'
          ]
        }
      ],
    },
    themePlugins: {
      backToTop: true,
      mediumZoom: false,
    },
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
