import * as maptalks from "maptalks";

const map = new maptalks.Map("map", {
  center: [-0.113049, 51.498568],
  zoom: 14,
  baseLayer: new maptalks.TileLayer("base", {
    urlTemplate:
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    attribution:
      "&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>",
  }),
  layers: [new maptalks.VectorLayer("v")],
});


const center = map.getCenter();
const polygon = new maptalks.Polygon(
  [
    center.add(-0.005, 0.005),
    center.add(0.005, 0.005),
    center.add(0.005, -0.005),
    center.add(-0.005, -0.005),
  ],
  {
    symbol: {
      polygonFill: "#fff",
      polygonOpacity: 0.5,
    },
  }
);

function fitExtent() {
  // fit map's extent to polygon's
  // 0 is the zoom offset
  map.fitExtent(polygon.getExtent(), 0);
}
map.getLayer("v").addGeometry(polygon);
