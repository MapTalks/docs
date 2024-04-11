import { DefaultTheme } from "vitepress";

const examplesZH: DefaultTheme.SidebarItem[] = [
  {
    text: "基础功能",
    collapsed: false,
    link: "#basic",
    items: [
      {
        text: "地图",
        collapsed: true,
        items: [
          {
            text: "显示",
            link: "#basic/map/load",
          },
          {
            text: "倾斜与旋转",
            link: "#basic/map/pitch-rotate",
          },
          {
            text: "拖动倾斜与旋转",
            link: "#basic/map/drag-pitch-rotate",
          },
          {
            text: "移动地图",
            link: "#basic/map/panning",
          },
          {
            text: "添加常用控件",
            link: "#basic/map/common-control",
          },
          {
            text: "获取地图状态",
            link: "#basic/map/status",
          },
          {
            text: "自动适配区域",
            link: "#basic/map/fit-extent",
          },
          {
            text: "限制地图区域",
            link: "#basic/map/limit-extent",
          },
          {
            text: "限制缩放级别",
            link: "#basic/map/limit-zoom",
          },
          {
            text: "细微缩放(Fractional Zoom)",
            link: "#basic/map/fractional-zoom",
          },
          {
            text: "在Canvas容器中加载",
            link: "#basic/map/canvas",
          },
          {
            text: "监听地图事件",
            link: "#basic/map/map-events",
          },
          {
            text: "同步地图",
            link: "#basic/map/sync-map",
          },
          {
            text: "屏幕坐标转换",
            link: "#basic/map/coordinate-conversion",
          },
          {
            text: "导出为图片",
            link: "#basic/map/export-image",
          },
          {
            text: "地图放大镜",
            link: "#basic/map/map-magnifier",
          },
          {
            text: "自定义地图LOD",
            link: "#basic/map/custom-resolutions",
          },
          {
            text: "缩放地图容器解决高分辨率地图卡顿",
            link: "#basic/map/map-scale-container",
          },
        ],
      },
      {
        text: "瓦片图层与地理投影",
        collapsed: true,
        items: [
          {
            text: "Canvas渲染方式的瓦片图层",
            link: "#basic/tilelayer-projection/canvas-renderer",
          },
          {
            text: "添加多个瓦片图层",
            link: "#basic/tilelayer-projection/multi-tilelayer",
          },
          {
            text: "添加瓦片图层组",
            link: "#basic/tilelayer-projection/grouptilelayer",
          },
          {
            text: "WMS瓦片图层",
            link: "#basic/tilelayer-projection/wms",
          },
          {
            text: "TileLayer强制重载",
            link: "#basic/tilelayer-projection/wms-reload",
          },
          {
            text: "ArcGIS瓦片图层",
            link: "#basic/tilelayer-projection/arcgis-tile",
          },
          {
            text: "WMTS瓦片图层",
            link: "#basic/tilelayer-projection/wmts-tile",
          },
          {
            text: "LOD和自定义瓦片图层",
            link: "#basic/tilelayer-projection/custom-tile",
          },
          {
            text: "用base64编码载入瓦片",
            link: "#basic/tilelayer-projection/base64",
          },
          {
            text: "设置瓦片图层透明度",
            link: "#basic/tilelayer-projection/tile-opacity",
          },
          {
            text: "只显示指定范围内的瓦片",
            link: "#basic/tilelayer-projection/tile-mask",
          },
          {
            text: "4326投影底图",
            link: "#basic/tilelayer-projection/epsg4326",
          },
          {
            text: "IDENTITY投影底图",
            link: "#basic/tilelayer-projection/identity",
          },
          {
            text: "百度投影底图",
            link: "#basic/tilelayer-projection/baidu",
          },
          {
            text: "Proj4js自定义投影底图",
            link: "#basic/tilelayer-projection/proj4js",
          },
          {
            text: "D3投影",
            link: "#basic/tilelayer-projection/d3-proj",
          },
          {
            text: "载入不同投影的TileLayer",
            link: "#basic/tilelayer-projection/different-projection",
          },
          {
            text: "底图风格滤镜",
            link: "#basic/tilelayer-projection/filter",
          },
          {
            text: "自定义处理瓦片图片",
            link: "#basic/tilelayer-projection/tile-image-custom",
          },
          {
            text: "增大空间参考的maxZoom",
            link: "#basic/tilelayer-projection/max-zoom",
          },
        ],
      },
      {
        text: "图形",
        collapsed: true,
        items: [
          {
            text: "Marker",
            link: "#basic/geometry/marker",
          },
          {
            text: "LineString",
            link: "#basic/geometry/linestring",
          },
          {
            text: "Polygon",
            link: "#basic/geometry/polygon",
          },
          {
            text: "GeometryCollection",
            link: "#basic/geometry/collection",
          },
          {
            text: "MultiPoint",
            link: "#basic/geometry/multipoint",
          },
          {
            text: "MultiLineString",
            link: "#basic/geometry/multilinestring",
          },
          {
            text: "MultiPolygon",
            link: "#basic/geometry/multipolygon",
          },
          {
            text: "矩形, 圆形, 椭圆和扇形",
            link: "#basic/geometry/rectangle-circle-ellipse-sector",
          },
          {
            text: "圆弧和贝塞尔曲线",
            link: "#basic/geometry/curve",
          },
          {
            text: "文字标签(Label)",
            link: "#basic/geometry/label",
          },
          {
            text: "文本框(TextBox)",
            link: "#basic/geometry/textbox",
          },
          {
            text: "连接线",
            link: "#basic/geometry/connector-line",
          },
          {
            text: "克隆",
            link: "#basic/geometry/copy",
          },
          {
            text: "监听图形事件",
            link: "#basic/geometry/events",
          },
          {
            text: "闪烁",
            link: "#basic/geometry/flash-geometry",
          },
          {
            text: "GeometryCollection的条件查询",
            link: "#basic/geometry/collection-filter",
          },
        ],
      },
      {
        text: "三维",
        collapsed: true,
        items: [
          {
            text: "有高度的Marker",
            link: "#basic/3d/marker-altitude",
          },
          {
            text: "绘制Marker的高度线",
            link: "#basic/3d/marker-draw-altitude",
          },
          {
            text: "有高度的线",
            link: "#basic/3d/line-altitude",
          },
          {
            text: "绘制Line的高度面",
            link: "#basic/3d/line-draw-altitude",
          },
          {
            text: "有高度的多边形",
            link: "#basic/3d/polygon-altitude",
          },
          {
            text: "设置图形高度",
            link: "#basic/3d/set-altitude",
          },
        ],
      },
      {
        text: "图形样式",
        collapsed: true,
        items: [
          {
            text: "图片标注",
            link: "#basic/style/image-marker",
          },
          {
            text: "多图片标注",
            link: "#basic/style/multi-image-marker",
          },
          {
            text: "矢量标注",
            link: "#basic/style/vector-marker",
          },
          {
            text: "矢量标注模式填充",
            link: "#basic/style/vector-pattern",
          },
          {
            text: "矢量标注渐变填充",
            link: "#basic/style/vector-gradient",
          },
          {
            text: "SVG矢量标注",
            link: "#basic/style/svg-path-marker",
          },
          {
            text: "标注水平和垂直对齐",
            link: "#basic/style/marker-alignment",
          },
          {
            text: "旋转标注",
            link: "#basic/style/rotate-marker",
          },
          {
            text: "文字标注",
            link: "#basic/style/text-marker",
          },
          {
            text: "旋转文字标注",
            link: "#basic/style/rotate-text",
          },
          {
            text: "带文字的图片标注",
            link: "#basic/style/image-text-marker",
          },
          {
            text: "线样式",
            link: "#basic/style/line-symbol",
          },
          {
            text: "线的模式填充",
            link: "#basic/style/line-pattern",
          },
          {
            text: "线的模式填充动画",
            link: "#basic/style/line-pattern-animation",
          },
          {
            text: "线的渐变填充",
            link: "#basic/style/line-gradient",
          },
          {
            text: "带箭头的线",
            link: "#basic/style/line-arrow",
          },
          {
            text: "带文字的线",
            link: "#basic/style/line-text",
          },
          {
            text: "端点沿线自动旋转Marker",
            link: "#basic/style/line-marker",
          },
          {
            text: "线的曲线平滑",
            link: "#basic/style/line-smoothness",
          },
          {
            text: "面样式",
            link: "#basic/style/polygon-symbol",
          },
          {
            text: "面的模式填充",
            link: "#basic/style/polygon-pattern",
          },
          {
            text: "面的渐变填充",
            link: "#basic/style/polygon-gradient",
          },
          {
            text: "面的端点样式",
            link: "#basic/style/polygon-vertex-marker",
          },
          {
            text: "组合样式",
            link: "#basic/style/composite-symbol",
          },
          {
            text: "样式的部分更新",
            link: "#basic/style/update-symbol",
          },
          {
            text: "根据zoom设置样式",
            link: "#basic/style/symbol-by-zoom",
          },
          {
            text: "根据属性数据设置样式",
            link: "#basic/style/symbol-by-prop",
          },
          {
            text: "颜色插值",
            link: "#basic/style/color-interpolate",
          },
          {
            text: "HTML自定义标注",
            link: "#basic/style/html-marker",
          },
          {
            text: "D3图表样式",
            link: "#basic/style/d3-marker",
          },
          {
            text: "Echarts图表样式",
            link: "#basic/style/echarts-marker",
          },
          {
            text: "Highcharts图表样式",
            link: "#basic/style/highcharts-marker",
          },
        ],
      },
      {
        text: "图层",
        collapsed: true,
        items: [
          {
            text: "添加图层和移除图层",
            link: "#basic/layer/add-remove",
          },
          {
            text: "隐藏显示图层",
            link: "#basic/layer/show-hide",
          },
          {
            text: "设置图层透明度",
            link: "#basic/layer/opacity",
          },
          {
            text: "图层置顶或置底",
            link: "#basic/layer/bring-front-back",
          },
          {
            text: "改变图层叠加顺序",
            link: "#basic/layer/sort",
          },
          {
            text: "用鼠标设置图层遮罩",
            link: "#basic/layer/mask",
          },
          {
            text: "globalCompositeOperation",
            link: "#basic/layer/globalcompositeoperation",
          },
          {
            text: "VectorLayer: 批量添加图形",
            link: "#basic/layer/vectorlayer-batch-add",
          },
          {
            text: "VectorLayer:根据 ID 获取图形",
            link: "#basic/layer/vectorlayer-get-by-id",
          },
          {
            text: "VectorLayer: 根据属性条件筛选图形",
            link: "#basic/layer/vectorlayer-filter",
          },
          {
            text: "VectorLayer: 批量设置图形样式",
            link: "#basic/layer/vectorlayer-style",
          },
          {
            text: "VectorLayer: 设置图形的z-index",
            link: "#basic/layer/vectorlayer-sort",
          },
          {
            text: "碰撞",
            link: "#basic/layer/collision",
          },
          {
            text: "CanvasLayer: 画板图层示例",
            link: "#basic/layer/canvaslayer",
          },
          {
            text: "ParticleLayer: 粒子图层示例",
            link: "#basic/layer/particlelayer",
          },
          {
            text: "CanvasTileLayer: 画板瓦片图层示例",
            link: "#basic/layer/canvastilelayer",
          },
          {
            text: "图层卷帘效果",
            link: "#basic/layer/swipe",
          },
          {
            text: "ImageLayer: 图片图层示例",
            link: "#basic/layer/imagelayer",
          },
        ],
      },
      {
        text: "工具/全局功能",
        collapsed: true,
        items: [
          {
            text: "通过Proxy更新options",
            link: "#basic/utils/options-proxy",
          },
        ],
      },
      {
        text: "交互",
        collapsed: true,
        items: [
          {
            text: "禁用所有交互",
            link: "#basic/interaction/map-off",
          },
          {
            text: "地图功能开关",
            link: "#basic/interaction/map-on-off",
          },
          {
            text: "测距工具",
            link: "#basic/interaction/distance-tool",
          },
          {
            text: "测面工具",
            link: "#basic/interaction/area-tool",
          },
          {
            text: "绘制工具",
            link: "#basic/interaction/draw-tool",
          },
          {
            text: "拖拽图形",
            link: "#basic/interaction/drag-geometries",
          },
          {
            text: "编辑标注",
            link: "#basic/interaction/edit-marker",
          },
          {
            text: "编辑线",
            link: "#basic/interaction/edit-line",
          },
          {
            text: "编辑多边形",
            link: "#basic/interaction/edit-polygon",
          },
          {
            text: "编辑矩形/圆形/椭圆",
            link: "#basic/interaction/edit-rectangle-circle-ellipse",
          },
          {
            text: "编辑文本框",
            link: "#basic/interaction/edit-textbox",
          },
          {
            text: "编辑文本内容",
            link: "#basic/interaction/edit-label",
          },
          {
            text: "鼠标点选图形",
            link: "#basic/interaction/mouse-identify",
          },
          {
            text: "鼠标悬停高亮图形",
            link: "#basic/interaction/mouse-highlight",
          },
          {
            text: "鼠标与图形的空间关系",
            link: "#basic/interaction/mouse-contains",
          },
        ],
      },
      {
        text: "动画",
        collapsed: true,
        items: [
          {
            text: "地图飞行到指定位置",
            link: "#basic/animation/map-flyto",
          },
          {
            text: "Marker的变形动画",
            link: "#basic/animation/marker-anim",
          },
          {
            text: "点的沿线动画",
            link: "#basic/animation/move-along",
          },
          {
            text: "Geometry.animate方法",
            link: "#basic/animation/geometry-anim",
          },
          {
            text: "线的动画展现",
            link: "#basic/animation/line-animateshow",
          },
          {
            text: "面的动画展现",
            link: "#basic/animation/polygon-animateshow",
          },
          {
            text: "自定义动画",
            link: "#basic/animation/custom-anim",
          },
          {
            text: "地图跟随动画",
            link: "#basic/animation/map-view-follow",
          },
        ],
      },
      {
        text: "空间与UI组件",
        collapsed: true,
        items: [
          {
            text: "地图右键菜单",
            link: "#basic/ui-control/ui-map-menu",
          },
          {
            text: "图形右键菜单",
            link: "#basic/ui-control/ui-geo-menu",
          },
          {
            text: "自定义右键菜单",
            link: "#basic/ui-control/ui-custom-menu",
          },
          {
            text: "地图信息框",
            link: "#basic/ui-control/ui-map-infownd",
          },
          {
            text: "图形信息框",
            link: "#basic/ui-control/ui-geo-infownd",
          },
          {
            text: "自定义信息框",
            link: "#basic/ui-control/ui-custom-infownd",
          },
          {
            text: "信息框内容支持滚动",
            link: "#basic/ui-control/infowindow-scroll",
          },
          {
            text: "UIMarker 对齐",
            link: "#basic/ui-control/uimarker-align",
          },
          {
            text: "UI碰撞",
            link: "#basic/ui-control/ui-collision",
          },
          {
            text: "信息框绑定MVVM组件",
            link: "#basic/ui-control/ui-geo-infownd-bind-mvvm-component",
          },
          {
            text: "UIMarker绑定MVVM组件",
            link: "#basic/ui-control/uimarker-mvvm-dynamic",
          },
          {
            text: "Toolbar控件",
            link: "#basic/ui-control/control-toolbar",
          },
          {
            text: "Panel控件",
            link: "#basic/ui-control/control-panel",
          },
          {
            text: "鹰眼控件",
            link: "#basic/ui-control/control-overview",
          },
          {
            text: "Zoom控件",
            link: "#basic/ui-control/control-zoom",
          },
          {
            text: "指北针控件",
            link: "#basic/ui-control/control-compass",
          },
          {
            text: "Scale控件",
            link: "#basic/ui-control/control-scale",
          },
          {
            text: "Attribution控件",
            link: "#basic/ui-control/control-attribution",
          },
          {
            text: "控件显示与隐藏",
            link: "#basic/ui-control/control-show-hide",
          },
          {
            text: "图层选择控件",
            link: "#basic/ui-control/control-layer-switcher",
          },
        ],
      },
      {
        text: "JSON序列化",
        collapsed: true,
        items: [
          {
            text: "GeoJSON转化为Geometry",
            link: "#basic/json/geojson-to-geometry",
          },
          {
            text: "Geometry转化为GeoJSON",
            link: "#basic/json/geometry-to-geojson",
          },
          {
            text: "地图转化为JSON",
            link: "#basic/json/map-to-json",
          },
          {
            text: "用JSON载入地图",
            link: "#basic/json/json-to-map",
          },
          {
            text: "用JSON复制地图",
            link: "#basic/json/copy-map",
          },
          {
            text: "用JSON复制Layer",
            link: "#basic/json/layer-json",
          },
          {
            text: "用JSON复制Geometry",
            link: "#basic/json/geometry-json",
          },
        ],
      },
      {
        text: "常用插件",
        collapsed: true,
        items: [
          {
            text: "Mapbox gl 图层",
            link: "#basic/plugin/mapboxgl",
          },
          {
            text: "HeatLayer: 热力图层示例",
            link: "#basic/plugin/heatmaplayer",
          },
          {
            text: "ClusterLayer: 点聚合图层示例",
            link: "#basic/plugin/clusterlayer",
          },
          {
            text: "Three.js 图层",
            link: "#basic/plugin/three",
          },
          {
            text: "Echarts 图层",
            link: "#basic/plugin/echarts",
          },
        ],
      },
      {
        text: "插件开发示例",
        collapsed: true,
        items: [
          {
            text: "创建新的控件",
            link: "#basic/plugin-develop/control",
          },
          {
            text: "创建新的UI组件",
            link: "#basic/plugin-develop/ui",
          },
          {
            text: "创建地图工具",
            link: "#basic/plugin-develop/maptool",
          },
        ],
      },
      {
        text: "图层开发示例",
        collapsed: true,
        items: [
          {
            text: "HelloLayer",
            link: "#basic/hellolayer/layer",
          },
          {
            text: "HelloLayer交互绘制",
            link: "#basic/hellolayer/drawoninteracting",
          },
          {
            text: "HelloLayer动画图层",
            link: "#basic/hellolayer/animation",
          },
        ],
      },
    ],
  },
  {
    text: "矢量瓦片及点线面图层",
    collapsed: true,
    items: [
      {
        text: "图层操作",
        collapsed: true,
        items: [
          {
            text: "添加和移除图层",
            link: "#vector/operation/add-remove",
          },
          {
            text: "显示和隐藏图层",
            link: "#vector/operation/show-hide",
          },
          {
            text: "设置图层缩放区间",
            link: "#vector/operation/zoom-interval",
          },
          {
            text: "获取瓦片feature数据",
            link: "#vector/operation/features",
          },
          {
            text: "设置图层最大可访问级别",
            link: "#vector/operation/available-zoom",
          },
          {
            text: "图层转化为JSON",
            link: "#vector/operation/layer-json",
          },
          {
            text: "用JSON载入图层",
            link: "#vector/operation/json-layer",
          },
        ],
      },
      {
        text: "矢量瓦片图层",
        collapsed: true,
        items: [
          {
            text: "载入mapbox矢量瓦片数据",
            link: "#vector/vtlayer/load-mapbox",
          },
          {
            text: "载入maptiler矢量瓦片数据",
            link: "#vector/vtlayer/load-maptiler",
          },
          {
            text: "载入maptiler4326瓦片数据",
            link: "#vector/vtlayer/load-maptiler-4326",
          },
        ],
      },
      {
        text: "矢量瓦片图层可视化",
        collapsed: true,
        items: [
          {
            text: "道路",
            link: "#vector/vt-visual/road",
          },
          {
            text: "地图后处理",
            link: "#vector/vt-visual/process",
          },
        ],
      },
      {
        text: "GeoJSONVectorTileLayer",
        collapsed: true,
        items: [
          {
            text: "载入GeoJSON对象数据",
            link: "#vector/geo/load-local",
          },
          {
            text: "载入远程GeoJSON数据",
            link: "#vector/geo/load-remote",
          },
          {
            text: "数据转换函数",
            link: "#vector/geo/transform-function",
          },
          {
            text: "数据加载完成",
            link: "#vector/geo/load-event",
          },
        ],
      },
      {
        text: "样式操作",
        collapsed: true,
        items: [
          {
            text: "筛选符合条件的数据",
            link: "#vector/style/filter-data",
          },
          {
            text: "选择渲染插件样式",
            link: "#vector/style/plugin",
          },
          {
            text: "样式整体更新",
            link: "#vector/style/set-style",
          },
          {
            text: "样式部分更新",
            link: "#vector/style/update-symbol",
          },
          {
            text: "更新dataConfig",
            link: "#vector/style/update-data-config",
          },
          {
            text: "更新sceneConfig",
            link: "#vector/style/update-scene-config",
          },
          {
            text: "移除图层样式",
            link: "#vector/style/remove-style",
          },
          {
            text: "单独隐藏Feature",
            link: "#vector/style/hide-feature",
          },
          {
            text: "单独设置Feature的样式",
            link: "#vector/style/set-feature-style",
          },
          {
            text: "更新Feature的样式",
            link: "#vector/style/update-feature-style",
          },
        ],
      },
      {
        text: "图层交互",
        collapsed: true,
        items: [
          {
            text: "高亮元素",
            link: "#vector/interactive/highlight",
          },
          {
            text: "高亮元素-filter",
            link: "#vector/interactive/highlight-filter",
          },
          {
            text: "元素显示与隐藏",
            link: "#vector/interactive/hide-feature",
          },
          {
            text: "获取元素信息",
            link: "#vector/interactive/identify",
          },
          {
            text: "鼠标动态交互",
            link: "#vector/interactive/mousemove",
          },
          {
            text: "模拟 Tooltip",
            link: "#vector/interactive/tooltip",
          },
          {
            text: "多个图层",
            link: "#vector/interactive/multilayer",
          },
          {
            text: "给图层派发事件",
            link: "#vector/interactive/event-proxy",
          },
          {
            text: "合并geojson",
            link: "#vector/interactive/merge-data",
          },
          {
            text: "获取geojson geometry",
            link: "#vector/interactive/geometry",
          },
          {
            text: "查询高程",
            link: "#vector/interactive/altitude",
          },
          {
            text: "查询高程-水",
            link: "#vector/interactive/altitude-water",
          },
        ],
      },
      {
        text: "点类型数据样式",
        collapsed: true,
        items: [
          {
            text: "组合多个图标",
            link: "#vector/pointstyle/multiple-icon",
          },
          {
            text: "组合图标和文字",
            link: "#vector/pointstyle/icon-text",
          },
          {
            text: "图标和文字随地图缩放",
            link: "#vector/pointstyle/scale",
          },
          {
            text: "图标和文字随地图倾斜",
            link: "#vector/pointstyle/pitch",
          },
          {
            text: "图标和文字随地图旋转",
            link: "#vector/pointstyle/rotate",
          },
          {
            text: "只在指定的级别上显示",
            link: "#vector/pointstyle/specified-levels",
          },
          {
            text: "不同属性显示不同的图标",
            link: "#vector/pointstyle/different-icons",
          },
          {
            text: "从属性数据中读取图标",
            link: "#vector/pointstyle/read-icon",
          },
          {
            text: "从属性数据中读取文字",
            link: "#vector/pointstyle/read-text",
          },
          {
            text: "跨图层的碰撞检测",
            link: "#vector/pointstyle/across-collision",
          },
        ],
      },
      {
        text: "线类型数据样式",
        collapsed: true,
        items: [
          {
            text: "设置描边样式",
            link: "#vector/linestyle/stroke-style",
          },
          {
            text: "沿线绘制文字",
            link: "#vector/linestyle/draw-text",
          },
          {
            text: "宽度随地图级别变化",
            link: "#vector/linestyle/width-zoom",
          },
          {
            text: "颜色随地图级别变化",
            link: "#vector/linestyle/color-zoom",
          },
          {
            text: "根据属性数据设置样式",
            link: "#vector/linestyle/property",
          },
          {
            text: "纹理动画",
            link: "#vector/linestyle/texture",
          },
          {
            text: "开启泛光",
            link: "#vector/linestyle/bloom",
          },
        ],
      },
      {
        text: "面类型数据样式",
        collapsed: true,
        items: [
          {
            text: "设置面的边框样式",
            link: "#vector/polygonstyle/border-style",
          },
          {
            text: "设置纹理",
            link: "#vector/polygonstyle/texture",
          },
        ],
      },
      {
        text: "点图层",
        collapsed: true,
        items: [
          {
            text: "添加和移除图层",
            link: "#vector/pointlayer/add-remove",
          },
          {
            text: "隐藏显示图层",
            link: "#vector/pointlayer/show-hide",
          },
          {
            text: "图层最小和最大级别",
            link: "#vector/pointlayer/max-min-zoom",
          },
          {
            text: "添加Marker",
            link: "#vector/pointlayer/add-marker",
          },
          {
            text: "添加MultiPoint",
            link: "#vector/pointlayer/add-multi-point",
          },
          {
            text: "批量添加图形",
            link: "#vector/pointlayer/batch-add",
          },
          {
            text: "通过ID获取图形",
            link: "#vector/pointlayer/get-by-id",
          },
          {
            text: "根据属性条件筛选图形",
            link: "#vector/pointlayer/filter-by-property",
          },
          {
            text: "获取所有图形的Extent",
            link: "#vector/pointlayer/get-extent",
          },
          {
            text: "禁用图形事件",
            link: "#vector/pointlayer/disable-events",
          },
          {
            text: "禁用鼠标样式检测",
            link: "#vector/pointlayer/hit-detect",
          },
          {
            text: "设置图层style",
            link: "#vector/pointlayer/set-style",
          },
          {
            text: "图层数据整体放大",
            link: "#vector/pointlayer/style-scale",
          },
          {
            text: "图片标注",
            link: "#vector/pointlayer/image-marker",
          },
          {
            text: "多图片标注",
            link: "#vector/pointlayer/multi-image-marker",
          },
          {
            text: "矢量标注",
            link: "#vector/pointlayer/vector-marker",
          },
          {
            text: "矢量标注渐变填充",
            link: "#vector/pointlayer/vector-gradient",
          },
          {
            text: "SVG矢量标注",
            link: "#vector/pointlayer/svg-marker",
          },
          {
            text: "标注水平和垂直对齐",
            link: "#vector/pointlayer/middle-alignment",
          },
          {
            text: "旋转对齐与倾斜对齐",
            link: "#vector/pointlayer/rotation-pitch-alignment",
          },
          {
            text: "旋转标注",
            link: "#vector/pointlayer/rotate-marker",
          },
          {
            text: "旋转文字标注",
            link: "#vector/pointlayer/rotate-text",
          },
          {
            text: "带文字的图片标注",
            link: "#vector/pointlayer/image-text-marker",
          },
          {
            text: "图标尺寸自动适应文字",
            link: "#vector/pointlayer/text-fit",
          },
          {
            text: "组合样式",
            link: "#vector/pointlayer/composite-symbol",
          },
          {
            text: "样式的部分更新",
            link: "#vector/pointlayer/update-symbol",
          },
          {
            text: "根据zoom设置样式",
            link: "#vector/pointlayer/symbol-by-zoom",
          },
          {
            text: "根据属性数据设置样式",
            link: "#vector/pointlayer/symbol-by-prop",
          },
          {
            text: "海量点标注性能",
            link: "#vector/pointlayer/mass-data",
          },
          {
            text: "鼠标点选数据",
            link: "#vector/pointlayer/mouse-identify",
          },
          {
            text: "鼠标悬停高亮数据",
            link: "#vector/pointlayer/mouse-highlight",
          },
          {
            text: "监听Marker事件",
            link: "#vector/pointlayer/marker-events",
          },
          {
            text: "碰撞检测",
            link: "#vector/pointlayer/collision",
          },
          {
            text: "数据高亮",
            link: "#vector/pointlayer/highlight",
          },
          {
            text: "数据JSON序列化",
            link: "#vector/pointlayer/geometry-json",
          },
          {
            text: "图层JSON序列化",
            link: "#vector/pointlayer/layer-json",
          },
          {
            text: "Marker转成GeoJSON",
            link: "#vector/pointlayer/geometry-geojson",
          },
          {
            text: "GeoJSON转成Marker",
            link: "#vector/pointlayer/geojson-marker",
          },
        ],
      },
      {
        text: "线图层",
        collapsed: true,
        items: [
          {
            text: "添加线",
            link: "#vector/linelayer/add-line",
          },
          {
            text: "添加MultiLineString",
            link: "#vector/linelayer/add-multi-line",
          },
          {
            text: "线的基础样式",
            link: "#vector/linelayer/line-style",
          },
          {
            text: "线的虚线样式",
            link: "#vector/linelayer/dash-style",
          },
          {
            text: "有描边的线",
            link: "#vector/linelayer/outline-style",
          },
          {
            text: "线的填充模式",
            link: "#vector/linelayer/pattern-file",
          },
          {
            text: "有间隔的模式填充",
            link: "#vector/linelayer/pattern-gap",
          },
          {
            text: "线的模式填充动画",
            link: "#vector/linelayer/pattern-animation",
          },
          {
            text: "线样式部分更新",
            link: "#vector/linelayer/update-symbol",
          },
          {
            text: "设置图层style",
            link: "#vector/linelayer/set-style",
          },
          {
            text: "监听LineString事件",
            link: "#vector/linelayer/bind-event",
          },
          {
            text: "数据高亮",
            link: "#vector/linelayer/highlight",
          },
          {
            text: "数据JSON序列化",
            link: "#vector/linelayer/data-json",
          },
          {
            text: "图层JSON序列化",
            link: "#vector/linelayer/layer-json",
          },
          {
            text: "LineString转成GeoJSON",
            link: "#vector/linelayer/line-geojson",
          },
          {
            text: "GeoJSON转成LineString",
            link: "#vector/linelayer/geojson-line",
          },
        ],
      },
      {
        text: "面图层",
        collapsed: true,
        items: [
          {
            text: "添加面",
            link: "#vector/polygonlayer/add-polygon",
          },
          {
            text: "添加MultiPolygon",
            link: "#vector/polygonlayer/add-multi-polygon",
          },
          {
            text: "面的基本样式",
            link: "#vector/polygonlayer/basic-style",
          },
          {
            text: "面的填充模式",
            link: "#vector/polygonlayer/pattern-file",
          },
          {
            text: "面的端点样式",
            link: "#vector/polygonlayer/vertex-marker",
          },
          {
            text: "面的内部样式",
            link: "#vector/polygonlayer/alignment",
          },
          {
            text: "面样式部分更新",
            link: "#vector/polygonlayer/update-symbol",
          },
          {
            text: "设置图层style",
            link: "#vector/polygonlayer/set-style",
          },
          {
            text: "数据高亮",
            link: "#vector/polygonlayer/highlight",
          },
          {
            text: "数据JSON序列化",
            link: "#vector/polygonlayer/geometry-json",
          },
          {
            text: "图层JSON序列化",
            link: "#vector/polygonlayer/layer-json",
          },
          {
            text: "Polygon转成GeoJSON",
            link: "#vector/polygonlayer/geometry-geojson",
          },
          {
            text: "GeoJSON转成Polygon",
            link: "#vector/polygonlayer/geojson-geometry",
          },
        ],
      },
    ],
  },
  {
    text: "GLTF模型",
    collapsed: true,
    items: [
      {
        text: "GLTFMarker",
        collapsed: true,
        items: [
          {
            text: "添加GLTFMarker",
            link: "#gltf/gltf-marker/add-marker",
          },
          {
            text: "复制GLTFMarker",
            link: "#gltf/gltf-marker/copy-marker",
          },
          {
            text: "动画模型",
            link: "#gltf/gltf-marker/animation-model",
          },
          {
            text: "模型的显示与隐藏",
            link: "#gltf/gltf-marker/show-hide",
          },
          {
            text: "模型的平移，旋转与缩放",
            link: "#gltf/gltf-marker/trs",
          },
          {
            text: "模型材质调节",
            link: "#gltf/gltf-marker/material",
          },
          {
            text: "着色器切换",
            link: "#gltf/gltf-marker/shader",
          },
          {
            text: "模型的symbol设置",
            link: "#gltf/gltf-marker/update-symbol",
          },
          {
            text: "设置信息弹出框",
            link: "#gltf/gltf-marker/info-window",
          },
          {
            text: "鼠标事件监听",
            link: "#gltf/gltf-marker/mouse-event",
          },
          {
            text: "模型设置外轮廓",
            link: "#gltf/gltf-marker/outline",
          },
          {
            text: "模型泛光效果",
            link: "#gltf/gltf-marker/bloom",
          },
          {
            text: "阴影设置",
            link: "#gltf/gltf-marker/shadow",
          },
          {
            text: "加载有骨骼动画的模型",
            link: "#gltf/gltf-marker/skinning",
          },
          {
            text: "右键菜单",
            link: "#gltf/gltf-marker/context-menu",
          },
          {
            text: "锚点的设置",
            link: "#gltf/gltf-marker/anchor",
          },
          {
            text: "固定模型的大小不随地图缩放",
            link: "#gltf/gltf-marker/fix-size",
          },
          {
            text: "更新模型的ModelMatrix",
            link: "#gltf/gltf-marker/model-matrix",
          },
          {
            text: "setAnimationTimeFrame",
            link: "#gltf/gltf-marker/time-frame",
          },
          {
            text: "设置/获取属性",
            link: "#gltf/gltf-marker/property",
          },
          {
            text: "添加draco压缩模型",
            link: "#gltf/gltf-marker/draco",
          },
          {
            text: "GLTFMarker设置海拔高度",
            link: "#gltf/gltf-marker/set-altitude",
          },
          {
            text: "设置模型高度",
            link: "#gltf/gltf-marker/gltf-modelHeight",
          },
        ],
      },
      {
        text: "GLTFLayer",
        collapsed: true,
        items: [
          {
            text: "添加图层到地图上",
            link: "#gltf/gltf-layer/add-to-map",
          },
          {
            text: "根据id查找GLTFMarker",
            link: "#gltf/gltf-layer/search-by-id",
          },
          {
            text: "移除某个GLTFMarker",
            link: "#gltf/gltf-layer/remove-marker",
          },
          {
            text: "清空图层",
            link: "#gltf/gltf-layer/clear",
          },
          {
            text: "图层的显示与隐藏",
            link: "#gltf/gltf-layer/show-hide",
          },
          {
            text: "通过json数据创建图层",
            link: "#gltf/gltf-layer/create-by-json",
          },
          {
            text: "为图层设置样式条件",
            link: "#gltf/gltf-layer/set-style",
          },
          {
            text: "识别图层内的GLTFMarker",
            link: "#gltf/gltf-layer/identify",
          },
          {
            text: "自定义着色器",
            link: "#gltf/gltf-layer/custom-shader",
          },
          {
            text: "多个GLTFLayer的融合绘制",
            link: "#gltf/gltf-layer/blended-drawing",
          },
          {
            text: "根据属性条件筛选",
            link: "#gltf/gltf-layer/filter-by-property",
          },
          {
            text: "模型载入完成事件",
            link: "#gltf/gltf-layer/load-event",
          },
        ],
      },
      {
        text: "MultiGLTFMarker",
        collapsed: true,
        items: [
          {
            text: "添加MultiGLTFMarker",
            link: "#gltf/multi-gltf-marker/add",
          },
          {
            text: "增加一个数据项",
            link: "#gltf/multi-gltf-marker/add-data",
          },
          {
            text: "移除一个数据项",
            link: "#gltf/multi-gltf-marker/remove-data",
          },
          {
            text: "更新一个数据项",
            link: "#gltf/multi-gltf-marker/update-data",
          },
          {
            text: "监听鼠标事件",
            link: "#gltf/multi-gltf-marker/mouse-event",
          },
        ],
      },
      {
        text: "GLTFLineString",
        collapsed: true,
        items: [
          {
            text: "添加GLTFLineString",
            link: "#gltf/gltf-linestring/add",
          },
          {
            text: "绘制模型场景",
            link: "#gltf/gltf-linestring/draw",
          },
        ],
      },
      {
        text: "TransformControl",
        collapsed: true,
        items: [
          {
            text: "控制模型的平移、旋转、缩放",
            link: "#gltf/transform-control/trs",
          },
        ],
      },
    ],
  },
  {
    text: "三维功能",
    collapsed: true,
    items: [
      {
        text: "线数据三维样式",
        collapsed: true,
        items: [
          {
            text: "设置纹理",
            link: "#3d/line-3d-style/texture",
          },
          {
            text: "数据里包含海拔值",
            link: "#3d/line-3d-style/altitude",
          },
        ],
      },
      {
        text: "三维白模样式",
        collapsed: true,
        items: [
          {
            text: "设置高度",
            link: "#3d/polygon-3d-style/set-height",
          },
          {
            text: "顶面和侧面设置不同的纹理",
            link: "#3d/polygon-3d-style/diffrent-textures",
          },
          {
            text: "垂直颜色渐变",
            link: "#3d/polygon-3d-style/top-side-color",
          },
          {
            text: "设置侧面纹理模式",
            link: "#3d/polygon-3d-style/side-uv-mode",
          },
          {
            text: "进场动画",
            link: "#3d/polygon-3d-style/entry",
          },
        ],
      },
      {
        text: "水体渲染",
        collapsed: true,
        items: [
          {
            text: "水体渲染，倒影及水面文字",
            link: "#3d/waterstyle/reflection",
          },
        ],
      },
      {
        text: "地形",
        collapsed: true,
        items: [
          {
            text: "加载地形",
            link: "#3d/terrain/load",
          },
          {
            text: "风格化地形",
            link: "#3d/terrain/stylized",
          },
          {
            text: "矢量贴地形",
            link: "#3d/terrain/vector",
          },
        ],
      },
      {
        text: "交通",
        collapsed: true,
        items: [
          {
            text: "模拟交通",
            link: "#3d/traffic/simulated-traffic",
          },
        ],
      },
      {
        text: "后处理特效",
        collapsed: true,
        items: [
          {
            text: "扫描光效果",
            link: "#3d/post-process/scanEffect",
          },
        ],
      },
      {
        text: "3dtiles功能示例",
        collapsed: true,
        items: [
          {
            text: "加载倾斜摄影数据",
            link: "#3d/3dtiles/load",
          },
          {
            text: "跳转视角",
            link: "#3d/3dtiles/view",
          },
          {
            text: "旋转地图",
            link: "#3d/3dtiles/rotate",
          },
          {
            text: "手动添加图标",
            link: "#3d/3dtiles/manually-icon",
          },
          {
            text: "定点添加图标",
            link: "#3d/3dtiles/point-icon",
          },
          {
            text: "模型单体化",
            link: "#3d/3dtiles/model-entity",
          },
          {
            text: "模型房间单体化",
            link: "#3d/3dtiles/room-entity",
          },
          {
            text: "模型楼层单体化",
            link: "#3d/3dtiles/floor-entity",
          },
          {
            text: "自定义单体化的绘制",
            link: "#3d/3dtiles/custom-monomer",
          },
          {
            text: "单体化抽屉效果",
            link: "#3d/3dtiles/drawer-entity",
          },
          {
            text: "查看单体化",
            link: "#3d/3dtiles/view-monomer",
          },
          {
            text: "模型压平",
            link: "#3d/3dtiles/model-flatten",
          },
        ],
      },
      {
        text: "管线",
        collapsed: true,
        items: [
          {
            text: "地下管线",
            link: "#3d/pipeline/underground",
          },
          {
            text: "管线流动效果",
            link: "#3d/pipeline/flow",
          },
          {
            text: "自动生成三通和四通",
            link: "#3d/pipeline/connections",
          },
        ],
      },
      {
        text: "空间分析",
        collapsed: true,
        items: [
          {
            text: "空间测量",
            link: "#3d/spatial-analysis/measure",
          },
          {
            text: "天际线分析",
            link: "#3d/spatial-analysis/skyline",
          },
          {
            text: "通视分析",
            link: "#3d/spatial-analysis/insight",
          },
          {
            text: "可视域分析",
            link: "#3d/spatial-analysis/viewshed",
          },
          {
            text: "水淹分析",
            link: "#3d/spatial-analysis/flood",
          },
          {
            text: "平面裁剪",
            link: "#3d/spatial-analysis/cut",
          },
          {
            text: "挖方分析",
            link: "#3d/spatial-analysis/excavate",
          },
          {
            text: "剖面分析",
            link: "#3d/spatial-analysis/crosscut",
          },
          {
            text: "限高分析",
            link: "#3d/spatial-analysis/height-limit",
          },
          {
            text: "盒子裁剪",
            link: "#3d/spatial-analysis/box-clip",
          },
          {
            text: "光线投射",
            link: "#3d/spatial-analysis/raycaster",
          },
        ],
      },
      {
        text: "轨迹路线",
        collapsed: true,
        items: [
          {
            text: "沿轨迹飞行与地面行驶",
            link: "#3d/track/flying-driving",
          },
          {
            text: "沿地面轨迹飞行",
            link: "#3d/track/ground-route",
          },
          {
            text: "无人机飞行轨迹",
            link: "#3d/track/unmanned",
          },
          {
            text: "绕点环绕飞行",
            link: "#3d/track/around-point",
          },
          {
            text: "自动漫游",
            link: "#3d/track/auto-roaming",
          },
          {
            text: "自由漫游",
            link: "#3d/track/free-roaming",
          },
          {
            text: "人员实时定位",
            link: "#3d/track/personnel-position",
          },
          {
            text: "设备实时定位",
            link: "#3d/track/device-position",
          },
        ],
      },
      {
        text: "视频图层",
        collapsed: true,
        items: [
          {
            text: "添加视频对象",
            link: "#3d/video/add",
          },
        ],
      },
      {
        text: "天气系统",
        collapsed: true,
        items: [
          {
            text: "雾",
            link: "#3d/weather/fog",
          },
          {
            text: "雨",
            link: "#3d/weather/rain",
          },
          {
            text: "雪",
            link: "#3d/weather/snow",
          },
          {
            text: "晴天",
            link: "#3d/weather/sunny",
          },
        ],
      },
    ],
  },
];

export default examplesZH;
