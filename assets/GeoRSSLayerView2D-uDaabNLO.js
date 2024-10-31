import{aW as l,aX as h,aM as g,aY as w,aZ as f,a_ as d,a$ as n,v as u,A as V}from"./index-CpEBwgYb.js";import{f as b,y as S}from"./LayerView-B6w9L9qi.js";import{t as _}from"./GraphicContainer-DcTUXJlr.js";import{V as T}from"./GraphicsView2D-vQ2Agngd.js";import"./Container-BcF0t0Be.js";import"./highlightReasons-BWwK8Xmo.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-DRPvVVKX.js";import"./AGraphicContainer-JaQbPAal.js";import"./TechniqueInstance-DKbwDBt7.js";import"./UpdateTracking2D-Dunhz78E.js";import"./BindType-BmZEZMMh.js";import"./Util-Bvc0ctSI.js";import"./Program-Bw42lM0I.js";import"./LabelMetric-DBgjSCLj.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-r7-QpPxK.js";import"./TileContainer-qrGyg-bC.js";import"./WGLContainer-BVk_EOCF.js";import"./ProgramTemplate-Bg3i-DR6.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-yfX2u20R.js";import"./config-MDUrh2eL.js";import"./earcut-C1Q5KFdX.js";import"./featureConversionUtils-CJYQdFhy.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-DgKNXPxc.js";import"./CIMSymbolHelper-Dc62DEV1.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-DuCZhugw.js";import"./GeometryUtils-ZQdssNyK.js";import"./Rect-CUzevAry.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-1zrDQTjG.js";import"./TimeOnly-DUfmec6Z.js";import"./timeSupport-BdXBlSq1.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-DTAla0q_.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const t=this._popupTemplates.get(i),p=i.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=t;return p}).map(i=>({type:"graphic",graphic:i,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:i}of e){const t=g.fromJSON(o),p=new w(t.features),s=i.drawingInfo,c=r?f.fromJSON(r):null,a=d(s.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ne=y;export{ne as default};