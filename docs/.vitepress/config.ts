import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "zh-CN",
  base: "/wordpress-study/",
  title: "WordPress 学习",
  description: "WordPress 学习记录",
  lastUpdated: true,
  themeConfig: {
    logo: "https://s.w.org/images/wmark.png",
    siteTitle: "WordPress 学习",
    outlineTitle: "章节导航",
    lastUpdatedText: "最后更新时间",
    editLink: {
      pattern: "https://github.com/curder/wordpress-study/edit/master/docs/:path",
      text: '编辑它'
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/curder/wordpress-study'}
    ],
    nav: nav(),
    sidebar: {
      "/guide": sidebarGuide(),
    }
  }
});

function nav() {
  return [
    {text: 'Guide', link: '/guide/basic/project-files', activeMatch: '/guide/'},
  ];
}

function sidebarGuide() {
  return [
    {
      text: "基础",
      collapsible: true,
      collapsed: false,
      items: [
        {text: "项目文件", link: "/guide/basic/project-files"},
      ]
    },
  ];
}
