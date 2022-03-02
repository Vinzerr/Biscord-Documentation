const { description } = require('../../package')

module.exports = {
  title: 'Biscord',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  markdown: {
    lineNumbers: true
  },

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
        text: 'Documentations',
        ariaLabel: 'Documentations Menu',
        items: [
          {
            text: 'Biscord',
            link: '/biscord/'
          },{
            text: 'Utilitycord',
            link: '/utilitycord/'
          }
        ]
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Package',
        link: 'https://www.npmjs.com/package/biscord'
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
          collapsable: false,
          children: [
            '/guide/gettingstarted/installation.md',
            '/guide/gettingstarted/construction.md'
          ]
        },{
          title: 'Handlers',
          collapsable: false,
          children: [
            '/guide/handlers/databasehandler.md'
          ]
        },{
          title: 'Events',
          collapsable: false,
          children: [
            '/guide/events/emitters'
          ]
        }
      ],
      '/biscord/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [
            '/biscord/',
            '/biscord/introduction/changelog.md'
          ]
        },{
          title: 'Classes',
          collapsable: false,
          children: [
            '/biscord/classes/biscord.md'
          ]
        },{
          title: 'Managers & Handlers',
          collapsable: false,
          children: [
            '/biscord/managers/commandhandler.md',
            '/biscord/managers/eventhandler.md',
            '/biscord/managers/communityhandler.md',
            '/biscord/managers/databasehandler.md'
          ]
        },{
          title: 'Typedefs',
          collapsable: false,
          children: [ 
            '/biscord/typedefs/biscordconfiguration.md',
            '/biscord/typedefs/commandcodes.md',
            '/biscord/typedefs/commandsetup.md',
            '/biscord/typedefs/commandoptions.md',
            '/biscord/typedefs/eventsetup.md',
            '/biscord/typedefs/eventoptions.md',
            '/biscord/typedefs/slashregistryoptions.md',
            '/biscord/typedefs/communityoptions.md',
            '/biscord/typedefs/path.md',
          ]
        }
      ],
      '/utilitycord/': [
        {
          title: 'Classes',
          collapsable: false,
          children: [
            '/utilitycord/classes/embedpagination.md'
          ]
        },{
          title: 'Typedefs',
          collapsable: false,
          children: [
            '/utilitycord/typedefs/paginationoptions.md'
          ]
        }
      ]
    },
    themePlugins: {
      backToTop: true,
      mediumZoom: false,
    },
    algolia: {
      apiKey: 'TQDYBP463N',
      indexName: 'biscord'
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
