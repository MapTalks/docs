import { defineConfig } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import { en } from './config/en'
import { zh, search as zhSearch } from './config/zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "builder docs",
  description: "docs for 3d builder",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: 'github', link: 'https://github.com/maptalks/maptalks.js' }
    ]
  },

  locales: {
    root: { label: '简体中文', ...zh },
    en: { label: 'English', ...en }
  }
})
