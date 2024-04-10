import { DefaultTheme, defineConfig } from "vitepress";

import DesignerSidebarItems from "./sidebar/designer";
import StudioSidebarItems from "./sidebar/studio";
import examplesZH from "./examples/zh";
import { getSidebarItems } from "./sidebar/util";

export const zh = defineConfig({
  lang: "zh-CN",
  description: "maptalks.",

  themeConfig: {
    nav: [
      {
        text: "产品",
        items: [
          { text: "maptalks.js", link: "./examples" },
          {
            text: "studio",
            link: "https://studio.maptalks.com",
            target: "_blank",
          },
          {
            text: "designer",
            link: "https://designer.maptalks.com",
            target: "_blank",
          },
        ],
      },
      {
        text: "文档",
        items: [
          { text: "开发指南", link: "/guide/sdk/indtroduction.html" },
          { text: "studio指南", link: "/guide/studio/intro" },
          { text: "designer指南", link: "/guide/designer/intro" },
        ],
      },
      { text: "示例", link: "/examples/" },
      { text: "价格", link: "/pricing" },
    ],

    sidebar: {
      "/guide/sdk/": { items: sidebarGuide(), base: "/guide/sdk/" },
      "/examples/": { items: examplesZH, base: "/examples/" },
      "/guide/studio/": { items: sidebarStudio(), base: "/guide/studio/" },
      "/guide/designer/": [
        {
          text: "Designer指南",
          items: sidebarDesigner(),
          base: "/guide/designer/",
        },
      ],
    },
  },
});

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
      text: "GLTF模型",
      items: [
        {
          text: "GLTFMarker",
          items: [
            { text: "添加GLTFMarker", link: "#gltf/gltf-layer/add-to-map" },
            { text: "复制GLTFMarker", link: "#copy-marker" },
          ],
        },
        { text: "hello2", link: "#hello2" },
        { text: "一个", items: [{ text: "hello3", link: "#hello3" }] },
      ],
    },
    {},
  ];
}
