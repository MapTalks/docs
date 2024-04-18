import { defineConfig } from "vitepress";
import { en } from "./config/en";
import { zh } from "./config/zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MapTalks",
  description: "",
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: "github", link: "https://github.com/maptalks/maptalks.js" },
    ],
    editLink: {
      pattern: 'https://github.com/fuzhenn/builder-docs/edit/master/src/:path'
    }
  },

  locales: {
    root: { label: "简体中文", ...zh },
    en: { label: "English", ...en },
  },
});
