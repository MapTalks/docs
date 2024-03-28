import { defineConfig } from 'vitepress'
import StudioSidebarItems from './sidebar/studio'
import { getSidebarItems } from './sidebar/util'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: 'maptalks三维地图引擎.',

  themeConfig: {
    nav: [
      {
        text: '产品',
        items: [
          { text: 'maptalks.js', link: './examples'},
          { text: 'studio', link: 'https://studio.maptalks.com', target: '_blank'},
          { text: 'designer', link: 'https://designer.maptalks.com', target: '_blank'}
        ]
      },
      {
        text: '文档',
        items: [
          { text: '开发指南', link: '/guide/sdk/indtroduction.html' },
          { text: 'studio指南', link: '/guide/studio/intro' },
          { text: 'designer指南', link: '/guide/designer/indtroduction.html' }
        ]
      },
      { text: '示例', link: '/examples/' },
      { text: '价格', link: '/pricing' },
    ],

    sidebar: {
      '/guide/sdk/': { items: sidebarGuide() },
      '/examples/': { items: sidebarExamples() },
      '/guide/studio/': { items: sidebarStudio() },
      // '/guide/designer/': { items: sidebarDesigner() }
    }
  }
})


function sidebarGuide() {
  return [];
}

function sidebarStudio() {
  const items = getSidebarItems(StudioSidebarItems);
  JSON.stringify(items);
  return items;
}

function sidebarDesigner() {
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
