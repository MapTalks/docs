// import Extent from '../geo/Extent';
// import Size from '../geo/Size';
export type Ctx = CanvasRenderingContext2D;
declare const Canvas: {
    getCanvas2DContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D;
    setHitTesting(testing: boolean): void;
    createCanvas(width: number, height: number, canvasClass?: any): any;
    prepareCanvasFont(ctx: Ctx, style: any): void;
    /**
     * Set canvas's fill and stroke style
     * @param {CanvasRenderingContext2D} ctx
     * @param {Object} style
     * @param {Object} resources
     * @param {Boolean} testing  - paint for testing, ignore stroke and fill patterns
     */
    prepareCanvas(ctx: Ctx, style: any, resources: any, testing?: boolean): void;

    _setStrokePattern(ctx: Ctx, strokePattern: string, strokeWidth: number, linePatternOffset: number, resources: any): void;
    clearRect(ctx: Ctx, x1: number, y1: number, x2: number, y2: number): void;
    fillCanvas(ctx: Ctx, fillOpacity: number, x?: number, y?: number): void;
    getRgba(color: any, op: number): any;
    normalizeColorToRGBA(fill: number[], opacity?: number): string;
    image(ctx: Ctx, img: CanvasImageSource, x: number, y: number, width?: number, height?: number): void;
    _textOnLine(ctx: Ctx, text: any, pt: any, textHaloRadius: number, textHaloFill: any, textHaloAlpha: number): void;
    fillText(ctx: any, text: any, pt: any, rgba?: any): void;
    _stroke(ctx: any, strokeOpacity: any, x?: any, y?: any): void;
    _path(ctx: any, points: any, lineDashArray?: any, lineOpacity?: any, ignoreStrokePattern?: any): void;
    path(ctx: any, points: any, lineOpacity: any, fillOpacity?: any, lineDashArray?: any): void;
    _multiClip(ctx: any, points: any): void;
    polygon(ctx: any, points: any, lineOpacity: any, fillOpacity: any, lineDashArray?: any, smoothness?: any): void;
    _ring(ctx: any, ring: any, lineDashArray: any, lineOpacity: any, ignorePattern?: any): void;
    paintSmoothLine(ctx: any, points: any, lineOpacity: any, smoothValue: any, close: any, tailIdx?: any, tailRatio?: any): void;
    /**
     * draw an arc from p1 to p2 with degree of (p1, center) and (p2, center)
     * @param  {Context} ctx    canvas context
     * @param  {Point} p1      point 1
     * @param  {Point} p2      point 2
     * @param  {Number} degree arc degree between p1 and p2
     */
    _arcBetween(ctx: CanvasRenderingContext2D, p1: any, p2: any, degree: any): any[];
    _lineTo(ctx: CanvasRenderingContext2D, p: any): void;
    bezierCurveAndFill(ctx: CanvasRenderingContext2D, points: any, lineOpacity: any, fillOpacity: any): void;
    _bezierCurveTo(ctx: CanvasRenderingContext2D, p1: any, p2: any, p3: any): void;
    ellipse(ctx: CanvasRenderingContext2D, pt: any, width: any, heightTop: any, heightBottom: any, lineOpacity: any, fillOpacity: any): void;
    rectangle(ctx: CanvasRenderingContext2D, pt: any, size: any, lineOpacity: any, fillOpacity: any): void;
    sector(ctx: CanvasRenderingContext2D, pt: any, size: any, angles: any, lineOpacity: any, fillOpacity: any): void;
    _isPattern(style: any): boolean;
    drawCross(ctx: CanvasRenderingContext2D, x: number, y: number, lineWidth: number, color: string | CanvasGradient | CanvasPattern): void;
    copy(canvas: HTMLCanvasElement, c?: HTMLCanvasElement): HTMLCanvasElement;
    pixelRect(ctx: CanvasRenderingContext2D, point: number[], lineOpacity: number, fillOpacity: number): void;
};
// export default Canvas;
export as namespace maptalks;
export {};