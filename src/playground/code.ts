import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';

export function getCode() {
    const params = (new URL(document.location as any)).searchParams;
    const code = params.get('code');
    if (!code) {
        return getDefaultCode();
    }
    return decompressFromEncodedURIComponent(code);

}

export function createShareUrl(codeStr: string) {
    const code = compressToEncodedURIComponent(codeStr);
    const { origin, pathname } = window.location;
    return `${origin}${pathname}?code=${code}`;
}

function getDefaultCode() {
    return `
    <!DOCTYPE html>
    <html>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <title>地图 - 显示</title>
    <style type='text/css'>
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
    </style>
    <link rel='stylesheet' href='https://maptalks.com/api/maptalks.css' />
    <script type='text/javascript' src='https://maptalks.com/api/maptalks.min.js'></script>
    <script type='text/javascript' src='https://maptalks.com/api/maptalks-gl-layers.js'></script>
    
    <body>
        <div id="map" class="container"></div>
    
        <script>
            const map = new maptalks.Map("map", {
            center: [-0.113049, 51.498568],
            zoom: 14,
            baseLayer: new maptalks.TileLayer("base", {
              urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
              subdomains: ["a", "b", "c", "d"],
              attribution: "&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors, &copy; <a href='https://carto.com/'>CARTO</a>",
            }),
          });
        </script>
    </body>
    
    </html>
    `
}