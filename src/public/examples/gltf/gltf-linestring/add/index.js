const map = new maptalks.Map("map", {
  center: [-74.01252272617671, 40.70709931736744],
  zoom: 16,
  pitch: 80,
  lights: {
    ambient: {
      resource: {
        url: {
          front: "{res}/hdr/gradient/front.png",
          back: "{res}/hdr/gradient/back.png",
          left: "{res}/hdr/gradient/left.png",
          right: "{res}/hdr/gradient/right.png",
          top: "{res}/hdr/gradient/top.png",
          bottom: "{res}/hdr/gradient/bottom.png",
        },
        prefilterCubeSize: 32
      },
      exposure: 1,
      hsv: [0, 1, -0.042],
      orientation: 0,
    },
    directional: {
      direction: [-0.1, 1, -1],
      color: [1, 1, 1],
    },
  },
});

/**start**/
const symbol = {
  url: "{res}/gltf/alien/alien.gltf",
  modelHeight:120,//model height,Unit is meters
};
const coordinates1 = [
  [-74.02252272617671, 40.70709931736744],
  [-74.00252272617671, 40.70709931736744]
];
const coordinates2 = [
  [-74.02252272617671, 40.70209931736744],
  [-74.00252272617671, 40.70209931736744]
];
const gltfLayer = new maptalks.GLTFLayer("gltf");
const gltfline1 = new maptalks.GLTFLineString(coordinates1, {
  symbol
});

const gltfline2 = new maptalks.GLTFLineString(coordinates2, {
  symbol,
  gapLength: 100,
  scaleVertex: false
});
gltfLayer.addGeometry([gltfline1, gltfline2]);
/**end**/

const groupLayer = new maptalks.GroupGLLayer("group", [gltfLayer], {
  sceneConfig: {
    environment: {
      enable: true,
      mode: 1,
      level: 0,
      brightness: 0,
    },
    ground: {
      enable: true,
      renderPlugin: {
        type: "lit",
      },
      symbol: {
        polygonFill: [0.54, 0.54, 0.54, 1],
        ssr: true,
        material: {
          baseColorTexture: "{res}/textures/rubber_roughness.png",
          baseColorFactor: [0.3450981, 0.3372549, 0.2117647, 1],
          hsv: [-0.468, 0, -0.128],
          baseColorIntensity: 1.372,
          contrast: 1.372,
          roughnessFactor: 1,
          metallicFactor: 0,
          normalTexture: "{res}/textures/rubber_roughness.png",
          uvScale: [0.09, 0.09],
          normalMapFactor: 0.68,
          emitColorFactor: 1.11,
          noiseTexture: "{res}/textures/noise.png",
        },
      },
    },
  },
}).addTo(map);
