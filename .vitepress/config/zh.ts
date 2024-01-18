import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: 'maptalks三维场景制作软件.',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/what-is' },
      { text: '示例', link: '/examples/' }
    ],

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/examples/': {base: '/examples/', items: sidebarExamples() }
    }
  }
})


function sidebarGuide() {
  return [
    {
      text: '介绍',
      items: [
        { text: 'Index', link: 'what-is' }
      ]
    }
  ]
}

function sidebarExamples() {
  return [
    {
      text: '基础用法',
      items: [
        { text: 'hello', link: '#hello' },
        { text: 'hello2', link: '#hello2' }
      ]
    }
  ]
}
