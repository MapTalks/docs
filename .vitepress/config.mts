import { defineConfig } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
// import { en } from './config/en'
// import { zh, search as zhSearch } from './config/zh'

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: '',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    }
  ],
  '/examples/': [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "builder docs",
  description: "docs for 3d builder",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Samples', link: '/examples/' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maptalks/maptalks.js' }
    ]
  },

  // locales: {
  //   root: { label: 'English', ...en },
  //   zh: { label: '简体中文', ...zh }
  // }
})
