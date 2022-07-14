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
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/12429652' }],
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
    },
  },
  theme: '@vuepress/blog',
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    nav: [
      { text: '首页', link: '/' },
      { text: '日志', link: '/_posts/' },
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/Giftia/',
        },
        {
          type: 'mail',
          link: 'admin@giftia.moe',
        },
      ],
    },
    footer: {
      copyright: [
        {
          text: 'About Me',
          link: 'https://giftia.moe/',
        },
        {
          text: 'CC-BY-SA-4.0 Licensed | Copyright © 2022-Present Giftina | Powered by VuePress',
        },
      ],
    },
    prevText: '上一页',
    nextText: '下一页',
    lengthPerPage: '5',
    layout: 'Pagination',
    hostname: 'https://i.giftia.moe/',
    smoothScroll: true,
  },
  markdown: {
    lineNumbers: false,
  },
}