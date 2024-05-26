import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';

export function getCode() {
    const params = (new URL(document.location as any)).searchParams;
    const jsCode = params.get('code');
    const htmlCode = params.get('htmlcode');
    const cssCode = params.get('csscode');
    const esm = params.get('esm')
    return {
        htmlCode: htmlCode ? decompressFromEncodedURIComponent(htmlCode) : getDefaultHTMLCode(),
        cssCode: cssCode ? decompressFromEncodedURIComponent(cssCode) : getDefaultCSSCode(),
        jsCode: jsCode ? decompressFromEncodedURIComponent(jsCode) : getDefaultJSCode(),
        esm: esm === 'true'
    }

}

export function createShareUrl(jsCode: string, htmlCode: string, cssCode: string, esm: boolean) {
    const code = compressToEncodedURIComponent(jsCode);
    const htmlcode = compressToEncodedURIComponent(htmlCode);
    const csscode = compressToEncodedURIComponent(cssCode);
    const { origin, pathname } = window.location;
    return `${origin}${pathname}?esm=${esm}&code=${code}&htmlcode=${htmlcode}&csscode=${csscode}`;
}

export function generateHTMLCode(jsCode: string, htmlCode: string, cssCode: string, esm: boolean) {
    const html = getHTMLTemplate();
    const jsMode = esm ? 'module' : 'text/javascript';
    return html.replace('{css}', cssCode).replace('{html}', htmlCode).replace('{js}', jsCode).replace('{jsMode}', jsMode);
}

function getHTMLTemplate() {
    return `
    <!DOCTYPE html>
    <html>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <title>地图 - 显示</title>
    <style type='text/css'>
       {css}
    </style>
    
    <body>
    {html}
        <script type="{jsMode}">
           {js}
        </script>
    </body>
    
    </html>
    `
}

export function getMTKImPorts() {
    return `
   <link rel='stylesheet' href='https://maptalks.com/api/maptalks.css' />
    <!-- umd package -->
    <script type='text/javascript' src='https://maptalks.com/api/maptalks.min.js'></script>
    <script type='text/javascript' src='https://maptalks.com/api/maptalks-gl-layers.js'></script>
    <!-- esm package -->
    <script type="importmap">
    {
        "imports": {
            "maptalks": "https://cdn.jsdelivr.net/npm/maptalks/dist/maptalks.es.js"

        }
    }
   </script>
   `
}

export function getDefaultHTMLCode() {
    return `
     ${getMTKImPorts()}
    
   <div id="map" class="container"></div>
   
   `
}

export function getDefaultCSSCode() {
    return `
    html,
    body {
        margin: 0px;
        height: 100%;
        width: 100%;
    }

    .container {
        width: 100%;
        height: 100%;
    }
    `
}

function getDefaultJSCode() {
    return `
    const map = new maptalks.Map("map", {
        center: [-0.113049, 51.498568],
        zoom: 14,
        baseLayer: new maptalks.TileLayer("base", {
            urlTemplate:
                "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
            subdomains: ["a", "b", "c", "d"],
            attribution:
                '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
        }),
    });
    
    const layer = new maptalks.VectorLayer("layer").addTo(map);
    const point = new maptalks.Marker(map.getCenter(), {
        symbol: {
            textName: "Hello Maptalks",
            textSize: 40,
            textWeight: "bold",
        },
    }).addTo(layer);
    

  
   `
}

export function replaceCodeVariable(code: string) {
    const values: Record<string, string> = {
        '{res}': '/examples/resources',
        '{urlTemplate}': 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        '{attribution}': `&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>`
    };
    for (const key in values) {
        code = code.replaceAll(key, values[key]);
    }
    return code;
}



export const CDNURL = 'https://cdn.jsdelivr.net/npm/';

export function getExtraLibs() {
    return {
        libs: [
            {
                name: 'threejs',
                url: 'three@0.138.0/build/three.min.js'
            },
            {
                name: 'lil-gui',
                url: 'lil-gui@0.19.2/dist/lil-gui.umd.min.js'
            },
            {
                name: 'vue',
                url: 'vue/dist/vue.global.min.js'
            },
            {
                name: 'react',
                url: 'react/umd/react.production.min.js'
            },
            {
                name: 'react-dom',
                url: 'react-dom/umd/react-dom.production.min.js'
            },
            {
                name: 'jsts',
                url: 'jsts/dist/jsts.min.js'
            },
            {
                name: 'turfjs',
                url: '@turf/turf@6.5.0/turf.min.js'
            },
            {
                name: 'anime',
                url: 'animejs/lib/anime.min.js'
            }
        ].map(item => {
            return {
                name: item.name,
                url: `<script type='text/javascript' src='${CDNURL}${item.url}'></script>`
            }
        }),
        plugins: [
            {
                name: 'maptalks.three',
                url: 'maptalks.three/dist/maptalks.three.min.js'
            },
            {
                name: 'maptalks.snap',
                url: 'maptalks.snap/dist/maptalks.snap.min.js'
            },
            {
                name: 'maptalks.routeplayer',
                url: 'maptalks.routeplayer/dist/maptalks.routeplayer.min.js'
            },
            {
                name: 'maptalks.modelcontrol',
                url: 'maptalks.modelcontrol/dist/maptalks.modelcontrol.min.js'
            }
        ].map(item => {
            return {
                name: item.name,
                url: `<script type='text/javascript' src='${CDNURL}${item.url}'></script>`
            }
        })
    }
}