import{ap as c,s as V,a7 as v}from"./index-CpEBwgYb.js";import{L as o,k as $,q as k,E as M,y as U,z as L,B,C as F}from"./definitions-Y_v3njP4.js";import{f as y}from"./UpdateTracking2D-Dunhz78E.js";import{d as g,c as R}from"./LabelMetric-DBgjSCLj.js";import{D as w,L as z}from"./enums-BlUEVwJR.js";import{E as I}from"./Program-Bw42lM0I.js";import{e as D,c as E}from"./Texture-DRPvVVKX.js";import{i as O}from"./TileContainer-qrGyg-bC.js";const P=()=>v.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");class m{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:n}=t,a=g(r);this.blockIndex=i,this.pixelType=r,this.size=e,this.textureOnly=n,n||(this.data=new a(s)),this._resetRange()}destroy(){var t;(t=this._texture)==null||t.dispose();for(const e in this._fbos){const i=this._fbos[e];i&&(e==="0"&&i.detachColorTexture(),i.dispose()),this._fbos[e]=null}this._texture=null}get _textureDesc(){const t=new D;return t.wrapMode=w.CLAMP_TO_EDGE,t.samplingMode=z.NEAREST,t.dataType=this.pixelType,t.width=this.size,t.height=this.size,t}setData(t,e,i){const s=y(t),r=this.data,n=s*this.texelSize+e;!r||n>=r.length||(r[n]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,e){if(this.data==null)return null;const i=y(t)*this.texelSize+e;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(t){return this._texture??this._initTexture(t)}getFBO(t,e=0){if(!this._fbos[e]){const i=e===0?this.getTexture(t):this._textureDesc;this._fbos[e]=new I(t,i)}return this._fbos[e]}get hasDirty(){const t=this.dirtyStart;return this.dirtyEnd>=t}updateTexture(t,e){try{const i=this.dirtyStart,s=this.dirtyEnd;if(!this.hasDirty)return;c("esri-2d-update-debug")&&console.debug(`Version[${e}] AttributeStoreView.updateTexture`,{start:i,end:s,firstBytes:new Uint8Array(this.data.buffer.slice(0,16)),block:this}),this._resetRange();const r=this.data.buffer,n=this.getTexture(t),a=4,u=(i-i%this.size)/this.size,h=(s-s%this.size)/this.size,d=u,x=this.size,p=h,_=u*this.size*a,f=(x+p*this.size)*a-_,b=g(this.pixelType),S=new b(r,_*b.BYTES_PER_ELEMENT,f),A=this.size,T=p-d+1;if(T>this.size)return void P().error(new V("mapview-webgl","Out-of-bounds index when updating AttributeData"));n.updateData(0,0,d,A,T,S)}catch{}}update(t){const{data:e,start:i,end:s}=t;if(e!=null&&this.data!=null){const r=this.data,n=i*this.texelSize;for(let a=0;a<e.length;a++){const u=1<<a%this.texelSize;t.layout&u&&(r[n+a]=e[a])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,s)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=g(this.pixelType);this.destroy(),this.data=new s(t.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new E(t,this._textureDesc,this.data??void 0);if(this._lastTexture!=null&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,a=this.getFBO(t),u=R(r),h=new(g(r))(new ArrayBuffer(i*s*u*this.texelSize)),d=t.getBoundFramebufferObject(),{x,y:p,width:_,height:f}=t.getViewport();t.bindFramebuffer(a),a.readPixels(0,0,i,s,n,r,h),e.updateData(0,0,0,2*i,s/2,h),t.setViewport(x,p,_,f),t.bindFramebuffer(d)}return this.destroy(),this._texture=e,this._texture}}class q{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}_initialize(t){if(!t)throw new Error("InternalError: initArgs must be defined");const e=t.blockDescriptors;if(this.size=t.blockSize,c("esri-2d-update-debug")&&console.debug("AttributeStoreView.initialize",{message:t}),this._data==null)this._data=e.map((i,s)=>i!=null?new m(i,this.size,s):null);else for(let i=0;i<this._data.length;i++){const s=this._data[i],r=e[i];r!=null&&(s==null?this._data[i]=new m(r,this.size,i):s.resize(r,this.size))}}destroy(){var t;for(const e of this._data??[])e==null||e.destroy();(t=this._defaultTexture)==null||t.dispose(),this._defaultTexture=null,this._pendingAttributeUpdates=[]}isEmpty(){return this._data==null}getBlock(t){return this._data==null?null:this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,o.VV,0,0)}getData(t,e,i,s){if(!this._data)return 0;const r=this._data[e];if(r==null)return 0;const n=r.getData(t,i);return n??s}setData(t,e,i,s){this._data[e].setData(t,i,s)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}requestUpdate(t){this._version=t.version,this._pendingAttributeUpdates.push(t),c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`,{message:t})}get currentEpoch(){return this._epoch}update(){if(this._locked)return;const t=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(const e of t){const{blockData:i,initArgs:s,sendUpdateEpoch:r,version:n}=e;c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] Epoch[${r}] AttributeStoreView.applyUpdate`),this._version=n,this._epoch=r,s!=null&&this._initialize(s);const a=this._data;for(let u=0;u<i.length;u++){const h=i[u],d=a[u];d!=null&&h!=null&&(c("esri-2d-update-debug")&&console.debug(`Version[${this._version}] CpuBlock[${u}] AttributeStoreView.update`,{block:h}),d.update(h))}}}getUniforms(t){return{filterFlags:{texture:this._getTexture(t,o.FilterFlags),unit:$},animation:{texture:this._getTexture(t,o.Animation),unit:k},gpgpu:{texture:this._getTexture(t,o.GPGPU),unit:M},visualVariableData:{texture:this._getTexture(t,o.VV),unit:U},dataDriven0:{texture:this._getTexture(t,o.DD0),unit:L},dataDriven1:{texture:this._getTexture(t,o.DD1),unit:B},dataDriven2:{texture:this._getTexture(t,o.DD2),unit:F},size:this.size}}_getTexture(t,e){var s;const i=(s=this._data)==null?void 0:s[e];return i?(i.updateTexture(t,this._version),i.getTexture(t)):this._getDefaultTexture(t)}_getDefaultTexture(t){if(this._defaultTexture==null){const e=new D;e.wrapMode=w.CLAMP_TO_EDGE,e.samplingMode=z.NEAREST,e.width=1,e.height=1,this._defaultTexture=new E(t,e,new Uint8Array(4))}return this._defaultTexture}}let K=class extends O{constructor(t){super(t),this._statisticsByLevel=new Map,this.attributeView=new q}destroy(){this.children.forEach(t=>t.destroy()),this.removeAllChildren(),this.attributeView.destroy()}doRender(t){t.context.capabilities.enable("textureFloatLinear"),super.doRender(t)}createRenderParams(t){const e=super.createRenderParams(t);return e.attributeView=this.attributeView,e.instanceStore=this._instanceStore,e.statisticsByLevel=this._statisticsByLevel,e}};function W(l){return l}class X{constructor(t,e,i){this._instanceId=t,this.techniqueRef=e,this._input=i}get instanceId(){return this._instanceId}createMeshInfo(t){return{id:this._instanceId,techniqueType:this.techniqueRef.type,inputParams:t,optionalAttributes:this._input.optionalAttributes}}getInput(){return this._input}setInput(t){this._input=t}}export{K as a,X as i,W as r};
