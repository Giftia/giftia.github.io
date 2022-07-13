module.exports = {
  locales: {
    '/': {
      lang: 'zh-Hans',
      title: 'Giftia终端服务部',
      description: '愿你终有一天能和你重要的人重逢，希望这个世界能留下些我们存在过的痕迹。',
    }
  },
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  plugins: {
    '@vuepress/back-to-top': {},
    '@vuepress/nprogress': {},
    '@vuepress/active-header-links': {},
    '@vuepress/medium-zoom': {
      selector: 'img',
    },
    '@vuepress/last-updated': {
      dateOptions: {
        timeZone: "Asia/Shanghai",
        hour12: false,
      },
    },
    'vuepress-plugin-pixi-live2d-display': {
      model: "/xiaoye/xiaoye.model3.json",
      offsetX: 1000,
    },
  },
  themeConfig: {
    logo: '/favicon.ico',
    repo: 'Giftia/giftia.github.io',
    repoLabel: '查看仓库',
    lastUpdated: '最后更新',
    docsDir: 'docs',
    docsBranch: 'main',
    smoothScroll: true,
    sidebar: 'auto',
    displayAllHeaders: true,
    backToHome: "回到首页",
    activeHeaderLinks: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '日志', link: '/your-diary/' },
    ]
  },
  markdown: {
    lineNumbers: false,
  },
}