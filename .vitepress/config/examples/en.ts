import { DefaultTheme } from "vitepress";

const examplesEN: DefaultTheme.SidebarItem[] = [
  {
    text: "Basic",
    items: [
      {
        text: "Map",
        items: [
          {
            text: "Display a map",
            link: "#basic/map/load",
          },
          {
            text: "Pitch and rotate",
            link: "#basic/map/pitch-rotate",
          },
          {
            text: "Drag to pitch and rotate",
            link: "#basic/map/drag-pitch-rotate",
          },
          {
            text: "Map panning",
            link: "#basic/map/panning",
          },
          {
            text: "Add common controls",
            link: "#basic/map/common-control",
          },
          {
            text: "Get map's status",
            link: "#basic/map/status",
          },
          {
            text: "Fit to extent",
            link: "#basic/map/fit-extent",
          },
          {
            text: "Limit map's extent",
            link: "#basic/map/limit-extent",
          },
          {
            text: "Limit map's zoom",
            link: "#basic/map/limit-zoom",
          },
          {
            text: "Fractional zoom",
            link: "#basic/map/fractional-zoom",
          },
          {
            text: "Load on Canvas",
            link: "#basic/map/canvas",
          },
          {
            text: "Listen map events",
            link: "#basic/map/map-events",
          },
          {
            text: "Sync map by events",
            link: "#basic/map/sync-map",
          },
          {
            text: "Convert to screen points",
            link: "#basic/map/coordinate-conversion",
          },
          {
            text: "Export map as images",
            link: "#basic/map/export-image",
          },
          {
            text: "Map's magnifier",
            link: "#basic/map/map-magnifier",
          },
          {
            text: "Customize map's resolutions",
            link: "#basic/map/custom-resolutions",
          },
          {
            text: "scale container for high resolution",
            link: "#basic/map/map-scale-container",
          },
        ],
      },
      {
        text: "TileLayer and Geo-Projections",
        items: [
          {
            text: "TileLayer with Canvas renderer",
            link: "#basic/tilelayer-projection/canvas-renderer",
          },
          {
            text: "Add multiple TileLayers",
            link: "#basic/tilelayer-projection/multi-tilelayer",
          },
          {
            text: "Add GroupTileLayer",
            link: "#basic/tilelayer-projection/grouptilelayer",
          },
          {
            text: "Add a WMS TileLayer",
            link: "#basic/tilelayer-projection/wms",
          },
          {
            text: "TileLayer projection wms reload",
            link: "#basic/tilelayer-projection/wms-reload",
          },
          {
            text: "Add a mapbox vector-tile Layer",
            link: "#basic/tilelayer-projection/vector-tile",
          },
          {
            text: "Add an ArcGIS TileLayer",
            link: "#basic/tilelayer-projection/arcgis-tile",
          },
          {
            text: "Add a WMTS TileLayer",
            link: "#basic/tilelayer-projection/wmts-tile",
          },
          {
            text: "LOD and custom TileLayer",
            link: "#basic/tilelayer-projection/custom-tile",
          },
          {
            text: "Load tiles with base64 encoding",
            link: "#basic/tilelayer-projection/base64",
          },
          {
            text: "Set TileLayer's opacity",
            link: "#basic/tilelayer-projection/tile-opacity",
          },
          {
            text: "Set a boundary mask to TileLayer",
            link: "#basic/tilelayer-projection/tile-mask",
          },
          {
            text: "TileLayer of EPSG:4326 projection",
            link: "#basic/tilelayer-projection/epsg4326",
          },
          {
            text: "TileLayer of IDENTITY projection",
            link: "#basic/tilelayer-projection/identity",
          },
          {
            text: "TileLayer of Baidu Projection",
            link: "#basic/tilelayer-projection/baidu",
          },
          {
            text: "TileLayer of custom projection by proj4js",
            link: "#basic/tilelayer-projection/proj4js",
          },
          {
            text: "D3 geo projection",
            link: "#basic/tilelayer-projection/d3-proj",
          },
          {
            text: "Load tilelayer with different projection",
            link: "#basic/tilelayer-projection/different-projection",
          },
          {
            text: "TileLayer's CSS filter",
            link: "#basic/tilelayer-projection/filter",
          },
          {
            text: "Custom processing of tile images",
            link: "#basic/tilelayer-projection/tile-image-custom",
          },
          {
            text: "Larger maxZoom of spatialReference",
            link: "#basic/tilelayer-projection/max-zoom",
          },
        ],
      },
      {
        text: "Geometry",
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
            text: "Rectangle, Circle, Ellipse and Sector",
            link: "#basic/geometry/rectangle-circle-ellipse-sector",
          },
          {
            text: "Arc and Bezier Curves",
            link: "#basic/geometry/curve",
          },
          {
            text: "Label",
            link: "#basic/geometry/label",
          },
          {
            text: "TextBox",
            link: "#basic/geometry/textbox",
          },
          {
            text: "Connector Lines",
            link: "#basic/geometry/connector-line",
          },
          {
            text: "Copy a geometry",
            link: "#basic/geometry/copy",
          },
          {
            text: "Listen geometry events",
            link: "#basic/geometry/events",
          },
          {
            text: "Flash a geometry",
            link: "#basic/geometry/flash-geometry",
          },
          {
            text: "Filter GeometryCollection by condition",
            link: "#basic/geometry/collection-filter",
          },
        ],
      },
      {
        text: "3D",
        items: [
          {
            text: "Marker with altitude",
            link: "#basic/3d/marker-altitude",
          },
          {
            text: "Draw marker's altitude",
            link: "#basic/3d/marker-draw-altitude",
          },
          {
            text: "LineString with altitude",
            link: "#basic/3d/line-altitude",
          },
          {
            text: "Draw line's altitude wall",
            link: "#basic/3d/line-draw-altitude",
          },
          {
            text: "Polygon with altitude",
            link: "#basic/3d/polygon-altitude",
          },
          {
            text: "Set geom altitude",
            link: "#basic/3d/set-altitude",
          },
        ],
      },
      {
        text: "Geometry Styles",
        items: [
          {
            text: "Image marker",
            link: "#basic/style/image-marker",
          },
          {
            text: "Multiple-image marker",
            link: "#basic/style/multi-image-marker",
          },
          {
            text: "Vector marker",
            link: "#basic/style/vector-marker",
          },
          {
            text: "Vector marker with pattern fill",
            link: "#basic/style/vector-pattern",
          },
          {
            text: "Vector marker with gradient fill",
            link: "#basic/style/vector-gradient",
          },
          {
            text: "SVG vector marker",
            link: "#basic/style/svg-path-marker",
          },
          {
            text: "Marker's horizontal and vertical alignment",
            link: "#basic/style/marker-alignment",
          },
          {
            text: "Rotate a marker",
            link: "#basic/style/rotate-marker",
          },
          {
            text: "Text marker",
            link: "#basic/style/text-marker",
          },
          {
            text: "Rotate a text marker",
            link: "#basic/style/rotate-text",
          },
          {
            text: "Image marker with texts",
            link: "#basic/style/image-text-marker",
          },
          {
            text: "Line symbol",
            link: "#basic/style/line-symbol",
          },
          {
            text: "Line pattern fill",
            link: "#basic/style/line-pattern",
          },
          {
            text: "Animation of line pattern fill",
            link: "#basic/style/line-pattern-animation",
          },
          {
            text: "Line gradient fill",
            link: "#basic/style/line-gradient",
          },
          {
            text: "Line with arrows",
            link: "#basic/style/line-arrow",
          },
          {
            text: "Line with texts",
            link: "#basic/style/line-text",
          },
          {
            text: "Line of vertex marker with auto rotation",
            link: "#basic/style/line-marker",
          },
          {
            text: "Smooth line with curve",
            link: "#basic/style/line-smoothness",
          },
          {
            text: "Polygon symbol",
            link: "#basic/style/polygon-symbol",
          },
          {
            text: "Polygon pattern fill",
            link: "#basic/style/polygon-pattern",
          },
          {
            text: "Polygon gradient fill",
            link: "#basic/style/polygon-gradient",
          },
          {
            text: "Polygon with vetex markers",
            link: "#basic/style/polygon-vertex-marker",
          },
          {
            text: "Composite symbol",
            link: "#basic/style/composite-symbol",
          },
          {
            text: "Update part of symbol",
            link: "#basic/style/update-symbol",
          },
          {
            text: "Symbol by map zoom",
            link: "#basic/style/symbol-by-zoom",
          },
          {
            text: "Symbol by geometry properties",
            link: "#basic/style/symbol-by-prop",
          },
          {
            text: "Color interpolate",
            link: "#basic/style/color-interpolate",
          },
          {
            text: "Marker with HTML content",
            link: "#basic/style/html-marker",
          },
          {
            text: "Marker with D3 chart",
            link: "#basic/style/d3-marker",
          },
          {
            text: "Marker with echarts",
            link: "#basic/style/echarts-marker",
          },
          {
            text: "Marker with highcharts",
            link: "#basic/style/highcharts-marker",
          },
        ],
      },
      {
        text: "Layer",
        items: [
          {
            text: "Add and remove layers",
            link: "#basic/layer/add-remove",
          },
          {
            text: "Show and hide layers",
            link: "#basic/layer/show-hide",
          },
          {
            text: "Set layer's opacity",
            link: "#basic/layer/opacity",
          },
          {
            text: "Bring layers to front or back",
            link: "#basic/layer/bring-front-back",
          },
          {
            text: "Sort layers",
            link: "#basic/layer/sort",
          },
          {
            text: "Set layer mask as mouse event",
            link: "#basic/layer/mask",
          },
          {
            text: "Layer's globalCompositeOperation",
            link: "#basic/layer/globalcompositeoperation",
          },
          {
            text: "VectorLayer: Batch add geometries",
            link: "#basic/layer/vectorlayer-batch-add",
          },
          {
            text: "VectorLayer: Get geometry by ID",
            link: "#basic/layer/vectorlayer-get-by-id",
          },
          {
            text: "VectorLayer: Filter geometries by property condition",
            link: "#basic/layer/vectorlayer-filter",
          },
          {
            text: "VectorLayer: Batch style geometries",
            link: "#basic/layer/vectorlayer-style",
          },
          {
            text: "VectorLayer: Set geomtries' z-index",
            link: "#basic/layer/vectorlayer-sort",
          },
          {
            text: "layer collision",
            link: "#basic/layer/collision",
          },
          {
            text: "CanvasLayer: an example",
            link: "#basic/layer/canvaslayer",
          },
          {
            text: "ParticleLayer: an example",
            link: "#basic/layer/particlelayer",
          },
          {
            text: "CanvasTileLayer: an example",
            link: "#basic/layer/canvastilelayer",
          },
          {
            text: "Layer swipe effect",
            link: "#basic/layer/swipe",
          },
          {
            text: "ImageLayer: an example",
            link: "#basic/layer/imagelayer",
          },
        ],
      },
      {
        text: "Utils/global",
        items: [
          {
            text: "Update options by Proxy",
            link: "#basic/utils/options-proxy",
          },
        ],
      },
      {
        text: "User Interactions",
        items: [
          {
            text: "Disable map's interaction",
            link: "#basic/interaction/map-off",
          },
          {
            text: "Turn on/off map interaction capabilities",
            link: "#basic/interaction/map-on-off",
          },
          {
            text: "Distance tool to measure distance",
            link: "#basic/interaction/distance-tool",
          },
          {
            text: "Area tool to measure area",
            link: "#basic/interaction/area-tool",
          },
          {
            text: "Draw tool to draw geometries",
            link: "#basic/interaction/draw-tool",
          },
          {
            text: "Drag geometries",
            link: "#basic/interaction/drag-geometries",
          },
          {
            text: "Edit marker",
            link: "#basic/interaction/edit-marker",
          },
          {
            text: "Edit LineString",
            link: "#basic/interaction/edit-line",
          },
          {
            text: "Edit Polygon",
            link: "#basic/interaction/edit-polygon",
          },
          {
            text: "Edit Rectangle/Circle/Elliipse",
            link: "#basic/interaction/edit-rectangle-circle-ellipse",
          },
          {
            text: "Edit TextBox's shape",
            link: "#basic/interaction/edit-textbox",
          },
          {
            text: "Edit Label and TextBox's content",
            link: "#basic/interaction/edit-label",
          },
          {
            text: "Identify geometries by mouse click",
            link: "#basic/interaction/mouse-identify",
          },
          {
            text: "Highlight a geometry by mouseover",
            link: "#basic/interaction/mouse-highlight",
          },
          {
            text: "Spatial relation between mouse and geometries",
            link: "#basic/interaction/mouse-contains",
          },
        ],
      },
      {
        text: "Animation",
        items: [
          {
            text: "Fly map's camera to a location",
            link: "#basic/animation/map-flyto",
          },
          {
            text: "Marker's shape animation",
            link: "#basic/animation/marker-anim",
          },
          {
            text: "Marker animation along a line",
            link: "#basic/animation/move-along",
          },
          {
            text: "Geometry.animate method",
            link: "#basic/animation/geometry-anim",
          },
          {
            text: "LineString's animateShow",
            link: "#basic/animation/line-animateshow",
          },
          {
            text: "Polygon's animateShow",
            link: "#basic/animation/polygon-animateshow",
          },
          {
            text: "Custom animation",
            link: "#basic/animation/custom-anim",
          },
          {
            text: "map-view-follow animation",
            link: "#basic/animation/map-view-follow",
          },
        ],
      },
      {
        text: "Control and UIComponents",
        items: [
          {
            text: "Map's context menu",
            link: "#basic/ui-control/ui-map-menu",
          },
          {
            text: "Geometry's context menu",
            link: "#basic/ui-control/ui-geo-menu",
          },
          {
            text: "Custom context menu",
            link: "#basic/ui-control/ui-custom-menu",
          },
          {
            text: "Map's InfoWindow",
            link: "#basic/ui-control/ui-map-infownd",
          },
          {
            text: "Geometry's InfoWindow",
            link: "#basic/ui-control/ui-geo-infownd",
          },
          {
            text: "Custom InfoWindow",
            link: "#basic/ui-control/ui-custom-infownd",
          },
          {
            text: "InfoWindow content support wheelscroll",
            link: "#basic/ui-control/infowindow-scroll",
          },
          {
            text: "UIMarker align",
            link: "#basic/ui-control/uimarker-align",
          },
          {
            text: "UI collision",
            link: "#basic/ui-control/ui-collision",
          },
          {
            text: "InfoWindow bind MVVM component",
            link: "#basic/ui-control/ui-geo-infownd-bind-mvvm-component",
          },
          {
            text: "UIMarker bind MVVM component",
            link: "#basic/ui-control/uimarker-mvvm-dynamic",
          },
          {
            text: "Toolbar Control",
            link: "#basic/ui-control/control-toolbar",
          },
          {
            text: "Panel Control",
            link: "#basic/ui-control/control-panel",
          },
          {
            text: "Overview Control",
            link: "#basic/ui-control/control-overview",
          },
          {
            text: "Zoom Control",
            link: "#basic/ui-control/control-zoom",
          },
          {
            text: "Compass Control",
            link: "#basic/ui-control/control-compass",
          },
          {
            text: "Scale Control",
            link: "#basic/ui-control/control-scale",
          },
          {
            text: "Attribution Control",
            link: "#basic/ui-control/control-attribution",
          },
          {
            text: "Show and hide controls",
            link: "#basic/ui-control/control-show-hide",
          },
          {
            text: "Layer Switcher",
            link: "#basic/ui-control/control-layer-switcher",
          },
        ],
      },
      {
        text: "JSON Serialization",
        items: [
          {
            text: "GeoJSON to geometries",
            link: "#basic/json/geojson-to-geometry",
          },
          {
            text: "Geometries to GeoJSON",
            link: "#basic/json/geometry-to-geojson",
          },
          {
            text: "Map to JSON",
            link: "#basic/json/map-to-json",
          },
          {
            text: "Map from JSON",
            link: "#basic/json/json-to-map",
          },
          {
            text: "Copy map by JSON",
            link: "#basic/json/copy-map",
          },
          {
            text: "Copy layer by JSON",
            link: "#basic/json/layer-json",
          },
          {
            text: "Copy geometry by JSON",
            link: "#basic/json/geometry-json",
          },
        ],
      },
      {
        text: "Common Plugins",
        items: [
          {
            text: "Mapbox gl Layer",
            link: "#basic/plugin/mapboxgl",
          },
          {
            text: "Heatmap Layer",
            link: "#basic/plugin/heatmaplayer",
          },
          {
            text: "Marker Cluster Layer",
            link: "#basic/plugin/clusterlayer",
          },
          {
            text: "THREE.js Layer",
            link: "#basic/plugin/three",
          },
          {
            text: "Echarts Layer",
            link: "#basic/plugin/echarts",
          },
        ],
      },
      {
        text: "Plugin development",
        items: [
          {
            text: "New control",
            link: "#basic/plugin-develop/control",
          },
          {
            text: "New UI Component",
            link: "#basic/plugin-develop/ui",
          },
          {
            text: "New MapTool",
            link: "#basic/plugin-develop/maptool",
          },
        ],
      },
      {
        text: "Layer development",
        items: [
          {
            text: "HelloLayer",
            link: "#basic/hellolayer/layer",
          },
          {
            text: "HelloLayer with drawOnInteracting",
            link: "#basic/hellolayer/drawoninteracting",
          },
          {
            text: "HelloLayer with animation",
            link: "#basic/hellolayer/animation",
          },
        ],
      },
    ],
  },
  {
    text: "Vector",
    items: [
      {
        text: "Layer operation",
        items: [
          {
            text: "Add and remove layer",
            link: "#vector/operation/add-remove",
          },
          {
            text: "Show and hide layer",
            link: "#vector/operation/show-hide",
          },
          {
            text: "Set layer zoom interval",
            link: "#vector/operation/zoom-interval",
          },
          {
            text: "Get feature data",
            link: "#vector/operation/features",
          },
          {
            text: "Set the max access zoom",
            link: "#vector/operation/available-zoom",
          },
          {
            text: "Layer to JSON",
            link: "#vector/operation/layer-json",
          },
          {
            text: "JSON to layer",
            link: "#vector/operation/json-layer",
          },
        ],
      },
      {
        text: "VectorTileLayer",
        items: [
          {
            text: "Load mapbox vector tile data",
            link: "#vector/vtlayer/load-mapbox",
          },
          {
            text: "Load maptiler vector tile data",
            link: "#vector/vtlayer/load-maptiler",
          },
          {
            text: "Load maptiler 4326 vector tile data",
            link: "#vector/vtlayer/load-maptiler-4326",
          },
        ],
      },
      {
        text: "Vector tile layer visualization",
        items: [
          {
            text: "Road",
            link: "#vector/vt-visual/road",
          },
          {
            text: "Post process",
            link: "#vector/vt-visual/process",
          },
        ],
      },
      {
        text: "GeoJSONVectorTileLayer",
        items: [
          {
            text: "Load GeoJSON object data",
            link: "#vector/geo/load-local",
          },
          {
            text: "Load remote GeoJSON data",
            link: "#vector/geo/load-remote",
          },
          {
            text: "Data transform function",
            link: "#vector/geo/transform-function",
          },
          {
            text: "Data load event",
            link: "#vector/geo/load-event",
          },
        ],
      },
      {
        text: "Style operation",
        items: [
          {
            text: "Filter data",
            link: "#vector/style/filter-data",
          },
          {
            text: "Change render plugin",
            link: "#vector/style/plugin",
          },
          {
            text: "Set style",
            link: "#vector/style/set-style",
          },
          {
            text: "Update symbol",
            link: "#vector/style/update-symbol",
          },
          {
            text: "Update data config",
            link: "#vector/style/update-data-config",
          },
          {
            text: "Update scene config",
            link: "#vector/style/update-scene-config",
          },
          {
            text: "Remove layer style",
            link: "#vector/style/remove-style",
          },
          {
            text: "Hide feature",
            link: "#vector/style/hide-feature",
          },
          {
            text: "Set feature style",
            link: "#vector/style/set-feature-style",
          },
          {
            text: "Update feature style",
            link: "#vector/style/update-feature-style",
          },
        ],
      },
      {
        text: "layer interactive",
        items: [
          {
            text: "highlight feature",
            link: "#vector/interactive/highlight",
          },
          {
            text: "highlight feature filter",
            link: "#vector/interactive/highlight-filter",
          },
          {
            text: "hide/show feature",
            link: "#vector/interactive/hide-feature",
          },
          {
            text: "get feature data",
            link: "#vector/interactive/identify",
          },
          {
            text: "highlight by mouseevent",
            link: "#vector/interactive/mousemove",
          },
          {
            text: "Simulate Tooltip",
            link: "#vector/interactive/tooltip",
          },
          {
            text: "multi layer",
            link: "#vector/interactive/multilayer",
          },
          {
            text: "fire layer event",
            link: "#vector/interactive/event-proxy",
          },
          {
            text: "merge geojson",
            link: "#vector/interactive/merge-data",
          },
          {
            text: "get geojson geometry",
            link: "#vector/interactive/geometry",
          },
          {
            text: "query altitude",
            link: "#vector/interactive/altitude",
          },
          {
            text: "query water altitude",
            link: "#vector/interactive/altitude-water",
          },
        ],
      },
      {
        text: "Point style",
        items: [
          {
            text: "Composite multiple icons",
            link: "#vector/pointstyle/multiple-icon",
          },
          {
            text: "Composite icon and text",
            link: "#vector/pointstyle/icon-text",
          },
          {
            text: "Scale with map",
            link: "#vector/pointstyle/scale",
          },
          {
            text: "Pitch with map",
            link: "#vector/pointstyle/pitch",
          },
          {
            text: "Rotate with map",
            link: "#vector/pointstyle/rotate",
          },
          {
            text: "Show only on specified levels",
            link: "#vector/pointstyle/specified-levels",
          },
          {
            text: "Different icons by props",
            link: "#vector/pointstyle/different-icons",
          },
          {
            text: "Read icon from props",
            link: "#vector/pointstyle/read-icon",
          },
          {
            text: "Read text from props",
            link: "#vector/pointstyle/read-text",
          },
          {
            text: "Collision detection across layers",
            link: "#vector/pointstyle/across-collision",
          },
        ],
      },
      {
        text: "Line style",
        items: [
          {
            text: "Set stroke style",
            link: "#vector/linestyle/stroke-style",
          },
          {
            text: "Draw text along the line",
            link: "#vector/linestyle/draw-text",
          },
          {
            text: "Width varies with zoom",
            link: "#vector/linestyle/width-zoom",
          },
          {
            text: "Color varies with zoom",
            link: "#vector/linestyle/color-zoom",
          },
          {
            text: "Set layer by property",
            link: "#vector/linestyle/property",
          },
          {
            text: "Texture animation",
            link: "#vector/linestyle/texture",
          },
          {
            text: "Enable bloom",
            link: "#vector/linestyle/bloom",
          },
        ],
      },
      {
        text: "Polygon style",
        items: [
          {
            text: "Set the border style of the polygon",
            link: "#vector/polygonstyle/border-style",
          },
          {
            text: "Set texture",
            link: "#vector/polygonstyle/texture",
          },
        ],
      },
      {
        text: "PointLayer",
        items: [
          {
            text: "Add and remove layer",
            link: "#vector/pointlayer/add-remove",
          },
          {
            text: "Show and hide layer",
            link: "#vector/pointlayer/show-hide",
          },
          {
            text: "Min and max zoom",
            link: "#vector/pointlayer/max-min-zoom",
          },
          {
            text: "Add Marker",
            link: "#vector/pointlayer/add-marker",
          },
          {
            text: "Add MultiPoint",
            link: "#vector/pointlayer/add-multi-point",
          },
          {
            text: "Batch add",
            link: "#vector/pointlayer/batch-add",
          },
          {
            text: "Get geometry by id",
            link: "#vector/pointlayer/get-by-id",
          },
          {
            text: "Filter data by property",
            link: "#vector/pointlayer/filter-by-property",
          },
          {
            text: "Get Extent",
            link: "#vector/pointlayer/get-extent",
          },
          {
            text: "Disable geometry events",
            link: "#vector/pointlayer/disable-events",
          },
          {
            text: "Disable hit detect",
            link: "#vector/pointlayer/hit-detect",
          },
          {
            text: "Set layer style",
            link: "#vector/pointlayer/set-style",
          },
          {
            text: "Style scale",
            link: "#vector/pointlayer/style-scale",
          },
          {
            text: "Image marker",
            link: "#vector/pointlayer/image-marker",
          },
          {
            text: "Multi image marker",
            link: "#vector/pointlayer/multi-image-marker",
          },
          {
            text: "Vector marker",
            link: "#vector/pointlayer/vector-marker",
          },
          {
            text: "Vector Gradient marker",
            link: "#vector/pointlayer/vector-gradient",
          },
          {
            text: "SVG vector marker",
            link: "#vector/pointlayer/svg-marker",
          },
          {
            text: "Marker middle alignment",
            link: "#vector/pointlayer/middle-alignment",
          },
          {
            text: "Rotation and pitch alignment",
            link: "#vector/pointlayer/rotation-pitch-alignment",
          },
          {
            text: "Rotate marker",
            link: "#vector/pointlayer/rotate-marker",
          },
          {
            text: "Rotate text",
            link: "#vector/pointlayer/rotate-text",
          },
          {
            text: "Image marker with texts",
            link: "#vector/pointlayer/image-text-marker",
          },
          {
            text: "Marker text fit",
            link: "#vector/pointlayer/text-fit",
          },
          {
            text: "Composite symbol",
            link: "#vector/pointlayer/composite-symbol",
          },
          {
            text: "Update symbol",
            link: "#vector/pointlayer/update-symbol",
          },
          {
            text: "Symbol by map zoom",
            link: "#vector/pointlayer/symbol-by-zoom",
          },
          {
            text: "Symbol by geometry properties",
            link: "#vector/pointlayer/symbol-by-prop",
          },
          {
            text: "Mass markers",
            link: "#vector/pointlayer/mass-data",
          },
          {
            text: "Identify markers by mouse click",
            link: "#vector/pointlayer/mouse-identify",
          },
          {
            text: "Highlight a marker by mouseover",
            link: "#vector/pointlayer/mouse-highlight",
          },
          {
            text: "Listen marker events",
            link: "#vector/pointlayer/marker-events",
          },
          {
            text: "Collision",
            link: "#vector/pointlayer/collision",
          },
          {
            text: "Highlight data",
            link: "#vector/pointlayer/highlight",
          },
          {
            text: "Geometries to JSON",
            link: "#vector/pointlayer/geometry-json",
          },
          {
            text: "Layer to JSON",
            link: "#vector/pointlayer/layer-json",
          },
          {
            text: "Marker to GeoJSON",
            link: "#vector/pointlayer/geometry-geojson",
          },
          {
            text: "GeoJSON to Marker",
            link: "#vector/pointlayer/geojson-marker",
          },
        ],
      },
      {
        text: "LineLayer",
        items: [
          {
            text: "Add a line",
            link: "#vector/linelayer/add-line",
          },
          {
            text: "Add multiple lines",
            link: "#vector/linelayer/add-multi-line",
          },
          {
            text: "Line basic style",
            link: "#vector/linelayer/line-style",
          },
          {
            text: "Dash line style",
            link: "#vector/linelayer/dash-style",
          },
          {
            text: "Outline style",
            link: "#vector/linelayer/outline-style",
          },
          {
            text: "Line pattern fill",
            link: "#vector/linelayer/pattern-file",
          },
          {
            text: "Line pattern gap",
            link: "#vector/linelayer/pattern-gap",
          },
          {
            text: "Animation of line pattern fill",
            link: "#vector/linelayer/pattern-animation",
          },
          {
            text: "Update symbol",
            link: "#vector/linelayer/update-symbol",
          },
          {
            text: "Set layer style",
            link: "#vector/linelayer/set-style",
          },
          {
            text: "Bind event",
            link: "#vector/linelayer/bind-event",
          },
          {
            text: "Highlight data",
            link: "#vector/linelayer/highlight",
          },
          {
            text: "Data to JSON",
            link: "#vector/linelayer/data-json",
          },
          {
            text: "Layer to JSON",
            link: "#vector/linelayer/layer-json",
          },
          {
            text: "LineString to GeoJSON",
            link: "#vector/linelayer/line-geojson",
          },
          {
            text: "GeoJSON to LineString",
            link: "#vector/linelayer/geojson-line",
          },
        ],
      },
      {
        text: "PolygonLayer",
        items: [
          {
            text: "Add a polygon",
            link: "#vector/polygonlayer/add-polygon",
          },
          {
            text: "Add MultiPolygon",
            link: "#vector/polygonlayer/add-multi-polygon",
          },
          {
            text: "Polygon basic style",
            link: "#vector/polygonlayer/basic-style",
          },
          {
            text: "Polygon pattern file",
            link: "#vector/polygonlayer/pattern-file",
          },
          {
            text: "Polygon vertex style",
            link: "#vector/polygonlayer/vertex-marker",
          },
          {
            text: "Polygon alignment style",
            link: "#vector/polygonlayer/alignment",
          },
          {
            text: "Update symbol",
            link: "#vector/polygonlayer/update-symbol",
          },
          {
            text: "Set layer style",
            link: "#vector/polygonlayer/set-style",
          },
          {
            text: "Highlight data",
            link: "#vector/polygonlayer/highlight",
          },
          {
            text: "Geometry to JSON",
            link: "#vector/polygonlayer/geometry-json",
          },
          {
            text: "Layer to JSON",
            link: "#vector/polygonlayer/layer-json",
          },
          {
            text: "Polygon to GeoJSON",
            link: "#vector/polygonlayer/geometry-geojson",
          },
          {
            text: "GeoJSON to Polygon",
            link: "#vector/polygonlayer/geojson-geometry",
          },
        ],
      },
    ],
  },
  {
    text: "GLTF",
    items: [
      {
        text: "GLTFMarker",
        items: [
          {
            text: "Add a GLTF Marker",
            link: "#gltf/gltf-marker/add-marker",
          },
          {
            text: "Copy a GLTF Marker",
            link: "#gltf/gltf-marker/copy-marker",
          },
          {
            text: "Animation model",
            link: "#gltf/gltf-marker/animation-model",
          },
          {
            text: "Show and hide model",
            link: "#gltf/gltf-marker/show-hide",
          },
          {
            text: "Translation, rotate and scale",
            link: "#gltf/gltf-marker/trs",
          },
          {
            text: "Set material",
            link: "#gltf/gltf-marker/material",
          },
          {
            text: "Change shader",
            link: "#gltf/gltf-marker/shader",
          },
          {
            text: "Update symbol",
            link: "#gltf/gltf-marker/update-symbol",
          },
          {
            text: "Info window",
            link: "#gltf/gltf-marker/info-window",
          },
          {
            text: "Mouse event",
            link: "#gltf/gltf-marker/mouse-event",
          },
          {
            text: "Outline",
            link: "#gltf/gltf-marker/outline",
          },
          {
            text: "Bloom",
            link: "#gltf/gltf-marker/bloom",
          },
          {
            text: "Shadow",
            link: "#gltf/gltf-marker/shadow",
          },
          {
            text: "Skeletal animation model",
            link: "#gltf/gltf-marker/skinning",
          },
          {
            text: "Context menu",
            link: "#gltf/gltf-marker/context-menu",
          },
          {
            text: "Anchor Z",
            link: "#gltf/gltf-marker/anchor",
          },
          {
            text: "Fix Size",
            link: "#gltf/gltf-marker/fix-size",
          },
          {
            text: "Update ModelMatrix",
            link: "#gltf/gltf-marker/model-matrix",
          },
          {
            text: "Set animation time frame",
            link: "#gltf/gltf-marker/time-frame",
          },
          {
            text: "Set and get property",
            link: "#gltf/gltf-marker/property",
          },
          {
            text: "Add draco",
            link: "#gltf/gltf-marker/draco",
          },
          {
            text: "Set altitude",
            link: "#gltf/gltf-marker/set-altitude",
          },
          {
            text: "Set height",
            link: "#gltf/gltf-marker/gltf-modelHeight",
          },
        ],
      },
      {
        text: "GLTFLayer",
        items: [
          {
            text: "Add layer to map",
            link: "#gltf/gltf-layer/add-to-map",
          },
          {
            text: "Search marker by id",
            link: "#gltf/gltf-layer/search-by-id",
          },
          {
            text: "Remove GLTFMarker",
            link: "#gltf/gltf-layer/remove-marker",
          },
          {
            text: "Clear layer",
            link: "#gltf/gltf-layer/clear",
          },
          {
            text: "Show and hide layer",
            link: "#gltf/gltf-layer/show-hide",
          },
          {
            text: "Create layer by json",
            link: "#gltf/gltf-layer/create-by-json",
          },
          {
            text: "Set layer style",
            link: "#gltf/gltf-layer/set-style",
          },
          {
            text: "Identify marker",
            link: "#gltf/gltf-layer/identify",
          },
          {
            text: "Custom shader",
            link: "#gltf/gltf-layer/custom-shader",
          },
          {
            text: "Fusion rendering of multiple layers",
            link: "#gltf/gltf-layer/blended-drawing",
          },
          {
            text: "Filter data by property",
            link: "#gltf/gltf-layer/filter-by-property",
          },
          {
            text: "Data load event",
            link: "#gltf/gltf-layer/load-event",
          },
        ],
      },
      {
        text: "MultiGLTFMarker",
        items: [
          {
            text: "Add MultiGLTFMarker",
            link: "#gltf/multi-gltf-marker/add",
          },
          {
            text: "Add data",
            link: "#gltf/multi-gltf-marker/add-data",
          },
          {
            text: "Remove data",
            link: "#gltf/multi-gltf-marker/remove-data",
          },
          {
            text: "Update data",
            link: "#gltf/multi-gltf-marker/update-data",
          },
          {
            text: "Listening for mouse events",
            link: "#gltf/multi-gltf-marker/mouse-event",
          },
        ],
      },
      {
        text: "GLTFLineString",
        items: [
          {
            text: "Add GLTFLineString",
            link: "#gltf/gltf-linestring/add",
          },
          {
            text: "Draw Model Scene",
            link: "#gltf/gltf-linestring/draw",
          },
        ],
      },
      {
        text: "TransformControl",
        items: [
          {
            text: "Control the translation, rotation, and scaling of the model",
            link: "#gltf/transform-control/trs",
          },
        ],
      },
    ],
  },
  {
    text: "3D",
    items: [
      {
        text: "Line data 3d Style",
        items: [
          {
            text: "Set textures",
            link: "#3d/line-3d-style/texture",
          },
          {
            text: "geojson has altitude",
            link: "#3d/line-3d-style/altitude",
          },
        ],
      },
      {
        text: "Polygon data 3d Style",
        items: [
          {
            text: "Set height",
            link: "#3d/polygon-3d-style/set-height",
          },
          {
            text: "Set different textures on the top and side",
            link: "#3d/polygon-3d-style/diffrent-textures",
          },
          {
            text: "Vertical color gradient",
            link: "#3d/polygon-3d-style/top-side-color",
          },
          {
            text: "Set side vertical uv mode",
            link: "#3d/polygon-3d-style/side-uv-mode",
          },
          {
            text: "Entry animation",
            link: "#3d/polygon-3d-style/entry",
          },
        ],
      },
      {
        text: "Water style",
        items: [
          {
            text: "Water style, reflection and text",
            link: "#3d/waterstyle/reflection",
          },
        ],
      },
      {
        text: "Terrain",
        items: [
          {
            text: "Load terrain",
            link: "#3d/terrain/load",
          },
          {
            text: "Stylized terrain",
            link: "#3d/terrain/stylized",
          },
          {
            text: "Vector terrain",
            link: "#3d/terrain/vector",
          },
        ],
      },
      {
        text: "Traffic",
        items: [
          {
            text: "Simulated traffic",
            link: "#3d/traffic/simulated-traffic",
          },
        ],
      },
      {
        text: "PostProcess",
        items: [
          {
            text: "scan effect ring",
            link: "#3d/post-process/scanEffect",
          },
        ],
      },
      {
        text: "3D Tiles",
        items: [
          {
            text: "Load data",
            link: "#3d/3dtiles/load",
          },
          {
            text: "Jump view",
            link: "#3d/3dtiles/view",
          },
          {
            text: "Rotating map",
            link: "#3d/3dtiles/rotate",
          },
          {
            text: "Manually adding icon",
            link: "#3d/3dtiles/manually-icon",
          },
          {
            text: "Point add icon",
            link: "#3d/3dtiles/point-icon",
          },
          {
            text: "Model entity",
            link: "#3d/3dtiles/model-entity",
          },
          {
            text: "Model room entity",
            link: "#3d/3dtiles/room-entity",
          },
          {
            text: "Model floor entity",
            link: "#3d/3dtiles/floor-entity",
          },
          {
            text: "Custom monomer",
            link: "#3d/3dtiles/custom-monomer",
          },
          {
            text: "Entity drawer effect",
            link: "#3d/3dtiles/drawer-entity",
          },
          {
            text: "view monomer",
            link: "#3d/3dtiles/view-monomer",
          },
          {
            text: "model flatten",
            link: "#3d/3dtiles/model-flatten",
          },
        ],
      },
      {
        text: "Pipeline",
        items: [
          {
            text: "Underground pipelines",
            link: "#3d/pipeline/underground",
          },
          {
            text: "Pipeline flow effect",
            link: "#3d/pipeline/flow",
          },
          {
            text: "Generate three-way and four-way connections",
            link: "#3d/pipeline/connections",
          },
        ],
      },
      {
        text: "Spatial analysis",
        items: [
          {
            text: "Spatial measure",
            link: "#3d/spatial-analysis/measure",
          },
          {
            text: "Skyline Analysis",
            link: "#3d/spatial-analysis/skyline",
          },
          {
            text: "InSight Analysis",
            link: "#3d/spatial-analysis/insight",
          },
          {
            text: "ViewShed Analysis",
            link: "#3d/spatial-analysis/viewshed",
          },
          {
            text: "Flood Analysis",
            link: "#3d/spatial-analysis/flood",
          },
          {
            text: "Cut Analysis",
            link: "#3d/spatial-analysis/cut",
          },
          {
            text: "Excavate analysis",
            link: "#3d/spatial-analysis/excavate",
          },
          {
            text: "Crosscut analysis",
            link: "#3d/spatial-analysis/crosscut",
          },
          {
            text: "Height limit analysis",
            link: "#3d/spatial-analysis/height-limit",
          },
          {
            text: "box clip",
            link: "#3d/spatial-analysis/box-clip",
          },
          {
            text: "Raycaster",
            link: "#3d/spatial-analysis/raycaster",
          },
        ],
      },
      {
        text: "Trajectory route",
        items: [
          {
            text: "Flying along trajectories and driving on the ground",
            link: "#3d/track/flying-driving",
          },
          {
            text: "Flying along ground trajectory",
            link: "#3d/track/ground-route",
          },
          {
            text: "Drone flight trajectory",
            link: "#3d/track/unmanned",
          },
          {
            text: "Orbiting around a point",
            link: "#3d/track/around-point",
          },
          {
            text: "Auto roaming",
            link: "#3d/track/auto-roaming",
          },
          {
            text: "Free roaming",
            link: "#3d/track/free-roaming",
          },
          {
            text: "Real time personnel positioning",
            link: "#3d/track/personnel-position",
          },
          {
            text: "Real time device positioning",
            link: "#3d/track/device-position",
          },
        ],
      },
      {
        text: "Video layer",
        items: [
          {
            text: "Add video",
            link: "#3d/video/add",
          },
        ],
      },
      {
        text: "Weather",
        items: [
          {
            text: "Fog",
            link: "#3d/weather/fog",
          },
          {
            text: "Rain",
            link: "#3d/weather/rain",
          },
          {
            text: "Snow",
            link: "#3d/weather/snow",
          },
          {
            text: "Sunny",
            link: "#3d/weather/sunny",
          },
        ],
      },
    ],
  },
];

export default examplesEN;
