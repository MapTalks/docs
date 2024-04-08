import { zh, search as zhSearch } from "./config/zh";

import type { Config as ThemeConfig } from "@vue/theme";
import { defineConfig } from "vitepress";
import { en } from "./config/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MapTalks",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: "github", link: "https://github.com/maptalks/maptalks.js" },
    ],
  },

  locales: {
    root: { label: "简体中文", ...zh },
    en: { label: "English", ...en },
  },
});
