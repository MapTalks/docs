import { DefaultTheme, defineConfig } from 'vitepress'
import StudioSidebarItems from './sidebar/studio'
import DesignerSidebarItems from './sidebar/designer';
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
          { text: 'designer指南', link: '/guide/designer/intro' }
        ]
      },
      { text: '示例', link: '/examples/' },
      { text: '价格', link: '/pricing' },
    ],

    sidebar: {
      '/guide/sdk/': { items: sidebarGuide(), base: '/guide/sdk/' },
      '/examples/': { items: sidebarExamples(), base: '/examples/' },
      '/guide/studio/': { items: sidebarStudio(), base: '/guide/studio/' },
      '/guide/designer/': { items: sidebarDesigner(), base: '/guide/designer/' }
    }
  }
})


function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [];
}

function sidebarStudio(): DefaultTheme.SidebarItem[] {
  const items = getSidebarItems(StudioSidebarItems);
  return items;
}

function sidebarDesigner(): DefaultTheme.SidebarItem[] {
  return getSidebarItems(DesignerSidebarItems);
}

function sidebarExamples(): DefaultTheme.SidebarItem[] {
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
