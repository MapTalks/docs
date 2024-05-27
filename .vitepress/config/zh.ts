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
          { text: "API", link: "/api/vector-tile-layer" },
          { text: "开发指南", link: "/guide/sdk/intro" },
          { text: "studio指南", link: "/guide/studio/intro" },
          { text: "designer指南", link: "/guide/designer/intro" },
          { text: "参与开发", link: "/guide/developer/intro" },
        ],
      },
      // { text: "示例", link: "/examples/" },
      { text: '演练场', link: '/playground/' },
      { text: "价格", link: "/pricing" },
    ],

    sidebar: {
      "/api/": { items: sidebarAPI(), base: "/api/" },
      "/guide/sdk/": { items: sidebarGuide(), base: "/guide/sdk/" },
      // "/examples/": { items: examplesZH, base: "/examples/" },
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

function sidebarAPI(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "webgl矢量图层",
      collapsed: true,
      items: [
        { text: "VectorTileLayer", link: "vector-tile-layer" },
        { text: "GeoJSONVectorTileLayer", link: "geojson-vector-tile-layer" },
        { text: "PointLayer", link: "point-layer" },
        { text: "LineStringLayer", link: "line-string-layer" },
        { text: "PolygonLayer", link: "polygon-layer" },
        { text: "ExtrudePolygonLayer", link: "extrude-polygon-layer" },
      ],
    },
    {
      text: "webgl矢量图层",
      collapsed: true,
      items: [
        { text: "GeoJSONVectorTileLayer", link: "geojson-vector-tile-layer" },
        { text: "PointLayer", link: "point-layer" },
        { text: "LineStringLayer", link: "line-string-layer" },
        { text: "PolygonLayer", link: "polygon-layer" },
        { text: "ExtrudePolygonLayer", link: "extrude-polygon-layer" },
      ],
    },
    {
      text: "webgl矢量图层",
      collapsed: true,
      items: [
        { text: "GeoJSONVectorTileLayer", link: "geojson-vector-tile-layer" },
        { text: "PointLayer", link: "point-layer" },
        { text: "LineStringLayer", link: "line-string-layer" },
        { text: "PolygonLayer", link: "polygon-layer" },
        { text: "ExtrudePolygonLayer", link: "extrude-polygon-layer" },
      ],
    },
    {
      text: "webgl矢量图层",
      collapsed: true,
      items: [
        { text: "GeoJSONVectorTileLayer", link: "geojson-vector-tile-layer" },
        { text: "PointLayer", link: "point-layer" },
        { text: "LineStringLayer", link: "line-string-layer" },
        { text: "PolygonLayer", link: "polygon-layer" },
        { text: "ExtrudePolygonLayer", link: "extrude-polygon-layer" },
      ],
    },
    {
      text: "webgl矢量图层",
      collapsed: true,
      items: [
        { text: "GeoJSONVectorTileLayer", link: "geojson-vector-tile-layer" },
        { text: "PointLayer", link: "point-layer" },
        { text: "LineStringLayer", link: "line-string-layer" },
        { text: "PolygonLayer", link: "polygon-layer" },
        { text: "ExtrudePolygonLayer", link: "extrude-polygon-layer" },
      ],
    },
    {
      text: "webgl矢量图层",
      collapsed: true,
      items: [
        { text: "GeoJSONVectorTileLayer", link: "geojson-vector-tile-layer" },
        { text: "PointLayer", link: "point-layer" },
        { text: "LineStringLayer", link: "line-string-layer" },
        { text: "PolygonLayer", link: "polygon-layer" },
        { text: "ExtrudePolygonLayer", link: "extrude-polygon-layer" },
      ],
    },
    {
      text: "webgl矢量图层",
      collapsed: true,
      items: [
        { text: "GeoJSONVectorTileLayer", link: "geojson-vector-tile-layer" },
        { text: "PointLayer", link: "point-layer" },
        { text: "LineStringLayer", link: "line-string-layer" },
        { text: "PolygonLayer", link: "polygon-layer" },
        { text: "ExtrudePolygonLayer", link: "extrude-polygon-layer" },
      ],
    },
    {
      text: "webgl矢量图层",
      collapsed: true,
      items: [
        { text: "GeoJSONVectorTileLayer", link: "geojson-vector-tile-layer" },
        { text: "PointLayer", link: "point-layer" },
        { text: "LineStringLayer", link: "line-string-layer" },
        { text: "PolygonLayer", link: "polygon-layer" },
        { text: "ExtrudePolygonLayer", link: "extrude-polygon-layer" },
      ],
    },
    {
      text: "webgl矢量图层",
      collapsed: true,
      items: [
        { text: "GeoJSONVectorTileLayer", link: "geojson-vector-tile-layer" },
        { text: "PointLayer", link: "point-layer" },
        { text: "LineStringLayer", link: "line-string-layer" },
        { text: "PolygonLayer", link: "polygon-layer" },
        { text: "ExtrudePolygonLayer", link: "extrude-polygon-layer" },
      ],
    },
  ];
}
