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
      text: '制作模式',
      collapsed: false,
      items: [
        { text: '本地模式(数字孪生)', link: 'what-is' },
        { text: '地图模式', link: 'what-is' },
        { text: '视频教程', link: 'what-is' },
        { text: '名词解释', link: 'what-is' }
      ]
    },
    {
      text: '导入模型',
      collapsed: false,
      items: [
        { text: '导入3DMax模型', link: 'what-is' },
        { text: 'Vray材质支持说明', link: 'what-is' },
        { text: '导入BIM模型', link: 'what-is' },
        { text: '导入RVM模型', link: 'what-is' },
        { text: '导入其他常用三维格式', link: 'what-is' }
      ]
    },
    {
      text: '场景制作技巧',
      collapsed: false,
      items: [
        { text: '快速制作道路', link: 'what-is' },
        { text: '如何提升场景质感', link: 'what-is' },
        { text: '用倾斜摄影作基底', link: 'what-is' },
        { text: '用地形数据作基底', link: 'what-is' },
        { text: '解决场景卡顿', link: 'what-is' }
      ]
    },
    {
      text: '数据导出',
      collapsed: false,
      items: [
        { text: '数字孪生数据', link: 'what-is' },
        { text: 'GIS应用数据', link: 'what-is' },
        { text: 'BIM应用数据', link: 'what-is' },
        { text: '导出3DTiles格式', link: 'what-is' },
        // { text: '导出I3S格式', link: 'what-is' },
        // { text: '导出S3M格式', link: 'what-is' },
        { text: 'BIM的导出数据说明', link: 'what-is' },
        { text: '如何提高导出模型的性能', link: 'what-is' }
      ]
    },
    {
      text: '二次开发',
      collapsed: false,
      items: [
        { text: '基于Three.js的二次开发', link: 'what-is' },
        { text: '基于Cesium的二次开发', link: 'what-is' },
        { text: '基于maptalks的二次开发', link: 'what-is' }
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
