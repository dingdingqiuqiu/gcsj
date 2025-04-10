import { defineConfig } from 'vitepress'
import sidebar from './sideBarData.json'
// https://vitepress.dev/reference/site-config


export default defineConfig({
  base: '/gcsj', 
  head: [['link', { rel: 'icon' ,href: '/gcsj/logo.svg' }]],
  title: "大河飞剑",
  description: "大河飞剑--无人机障碍物检测技术项目",
  cleanUrls: true, //从 URL 中删除 .html 后缀
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo.svg',
      dark: '/logo.svg',
      alt: '网站 Logo'
    },
    nav: [
      { text: 'Home', link: '/' },
    ],
    search: {
      provider: 'local'
    },
    sidebar,
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dingdingqiuqiu' }
    ],

    lastUpdated: {
      text: '最后一次编辑于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },
  markdown: {
    math: true,
    image: {
      lazyLoading: true
    }
  },
  lastUpdated: true //时间戳
})

