import{aY as i,bm as n,v as a,y as s,bn as l,A as o}from"./index-CpEBwgYb.js";import{f as h,y as d}from"./LayerView-B6w9L9qi.js";import"./Container-BcF0t0Be.js";import"./highlightReasons-BWwK8Xmo.js";import"./definitions-Y_v3njP4.js";import"./enums-BlUEVwJR.js";import"./Texture-DRPvVVKX.js";let t=class extends h(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,r)=>e+r.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,r)=>this.container.addChildAt(e.container,r))}};a([s({cast:l})],t.prototype,"layerViews",null),a([s({readOnly:!0})],t.prototype,"updatingProgress",null),t=a([o("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const V=t;export{V as default};