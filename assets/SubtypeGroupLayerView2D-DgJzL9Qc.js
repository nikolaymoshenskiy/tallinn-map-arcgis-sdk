import{v as s,A as n,aW as d,aX as u,ap as l}from"./index-CpEBwgYb.js";import{r as g}from"./FeatureLayerView2D-BnOfhczp.js";import"./featureConversionUtils-CJYQdFhy.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-Ctgz6qqI.js";import"./timeUtils-Drtj-p7v.js";import"./tagSymbols-BPcGfZon.js";import"./highlightReasons-BWwK8Xmo.js";import"./LayerView-B6w9L9qi.js";import"./Container-BcF0t0Be.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-DRPvVVKX.js";import"./TechniqueInstance-DKbwDBt7.js";import"./UpdateTracking2D-Dunhz78E.js";import"./BindType-BmZEZMMh.js";import"./Util-Bvc0ctSI.js";import"./Program-Bw42lM0I.js";import"./LabelMetric-DBgjSCLj.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-r7-QpPxK.js";import"./TileContainer-qrGyg-bC.js";import"./WGLContainer-BVk_EOCF.js";import"./ProgramTemplate-Bg3i-DR6.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-yfX2u20R.js";import"./config-MDUrh2eL.js";import"./earcut-C1Q5KFdX.js";import"./CircularArray-CujHzHWW.js";import"./tileUtils-B7X19rIS.js";import"./CIMSymbolHelper-Dc62DEV1.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-DuCZhugw.js";import"./GeometryUtils-ZQdssNyK.js";import"./Rect-CUzevAry.js";import"./SDFHelper-UI0jGGDX.js";import"./floatRGBA-Du6eSb2_.js";import"./FeatureCommandQueue-DgKNXPxc.js";import"./constants-D5zmR9t2.js";import"./HighlightCounter-B_0I_j4U.js";import"./popupUtils-BRNhCijY.js";import"./RefreshableLayerView-BrCHqVK6.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(a=>a.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=s([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const pi=i;export{pi as default};
