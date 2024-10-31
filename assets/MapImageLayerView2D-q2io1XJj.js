import{v as r,y as a,A as m,eC as g,aO as l,$ as d,a7 as u,aW as c}from"./index-CpEBwgYb.js";import{a as y}from"./BitmapContainer-BIfPcgnH.js";import{f,y as x}from"./LayerView-B6w9L9qi.js";import{V as _}from"./GraphicsView2D-vQ2Agngd.js";import{h as w}from"./HighlightGraphicContainer-D9Ggtauo.js";import{_ as v}from"./ExportStrategy-CeYAvA8U.js";import{i as H}from"./timeSupport-Ctgz6qqI.js";import{i as I}from"./RefreshableLayerView-BrCHqVK6.js";import{_ as $,r as V}from"./drapedUtils-BSPImQGj.js";import"./WGLContainer-BVk_EOCF.js";import"./definitions-Y_v3njP4.js";import"./LabelMetric-DBgjSCLj.js";import"./Texture-DRPvVVKX.js";import"./enums-BlUEVwJR.js";import"./Program-Bw42lM0I.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-r7-QpPxK.js";import"./ProgramTemplate-Bg3i-DR6.js";import"./vec3f32-nZdmKIgz.js";import"./Container-BcF0t0Be.js";import"./highlightReasons-BWwK8Xmo.js";import"./StyleDefinition-yfX2u20R.js";import"./config-MDUrh2eL.js";import"./earcut-C1Q5KFdX.js";import"./featureConversionUtils-CJYQdFhy.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./CIMSymbolHelper-Dc62DEV1.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-DuCZhugw.js";import"./GeometryUtils-ZQdssNyK.js";import"./Rect-CUzevAry.js";import"./AttributeStore-1zrDQTjG.js";import"./UpdateTracking2D-Dunhz78E.js";import"./BindType-BmZEZMMh.js";import"./Util-Bvc0ctSI.js";import"./TimeOnly-DUfmec6Z.js";import"./timeSupport-BdXBlSq1.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-DgKNXPxc.js";import"./constants-D5zmR9t2.js";import"./normalizeUtilsSync-DTAla0q_.js";import"./AGraphicContainer-JaQbPAal.js";import"./TechniqueInstance-DKbwDBt7.js";import"./TileContainer-qrGyg-bC.js";import"./Bitmap-D1eqX3Q-.js";import"./timeUtils-Drtj-p7v.js";import"./tagSymbols-BPcGfZon.js";import"./popupUtils-BRNhCijY.js";const E=t=>{let i=class extends t{initialize(){this.exportImageParameters=new g({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e;return((e=this.view)==null?void 0:e.floors)??null}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return H(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}canResume(){var e;return!!super.canResume()&&!((e=this.timeExtent)!=null&&e.isEmpty)}};return r([a()],i.prototype,"exportImageParameters",void 0),r([a({readOnly:!0})],i.prototype,"floors",null),r([a({readOnly:!0})],i.prototype,"exportImageVersion",null),r([a()],i.prototype,"layer",void 0),r([a()],i.prototype,"suspended",void 0),r([a({readOnly:!0})],i.prototype,"timeExtent",null),i=r([m("esri.views.layers.MapImageLayerView")],i),i};let s=class extends E(I(f(x))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch(e=>{d(e)||u.getLogger(this).error(e)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:e}=this.layer,o=e>=10.3,n=e>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new _({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new w(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new $({createFetchPopupFeaturesQueryGeometry:(p,h)=>V(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:o,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,e,o){return this.layer.fetchImage(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...o})}fetchImageBitmap(t,i,e,o){return this.layer.fetchImageBitmap(t,i,e,{timeExtent:this.timeExtent,floors:this.floors,...o})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([a()],s.prototype,"strategy",void 0),r([a()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const It=s;export{It as default};
