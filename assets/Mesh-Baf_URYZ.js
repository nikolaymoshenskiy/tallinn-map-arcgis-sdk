const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loadGLTFMesh-DoYjS3NY.js","assets/index-CpEBwgYb.js","assets/index-RZTPpmbY.css","assets/mat3f64-q3fE-ZOt.js","assets/MeshVertexAttributes-DipqHyoc.js","assets/meshVertexSpaceUtils-JDXJMRJ1.js","assets/MeshLocalVertexSpace-HFc9jt7l.js","assets/BufferView-CpI7YL_H.js","assets/vec3-C1_bp-lC.js","assets/vec4-DEdHfHmo.js","assets/types-D0PSWh4d.js","assets/DefaultMaterial_COLOR_GAMMA-CjdCFHI9.js","assets/mat4f64-CSKppSlJ.js","assets/enums-BlUEVwJR.js","assets/quat-CYXHRxS0.js","assets/quatf64-Bdb9ZJJK.js","assets/resourceUtils-BGLg1hB1.js","assets/basicInterfaces-DngWxyLO.js","assets/Indices-C4vNeC3e.js","assets/vertexSpaceConversion-CCPVbQp2.js","assets/spatialReferenceEllipsoidUtils-CWjarewc.js","assets/computeTranslationToOriginAndRotation-Do3yxRCy.js","assets/projection-Bsk8oCIE.js","assets/DoubleArray-BL6-QkbM.js","assets/MeshTransform-BjrmimQ-.js","assets/infoFor3D-DsOdlPuA.js","assets/imageUtils-CkkYmpoB.js","assets/earcut-C1Q5KFdX.js","assets/plane-BDMnbLll.js","assets/deduplicate-BSVZYM8c.js","assets/gltfexport-CHtg7LoZ.js"])))=>i.map(i=>d[i]);
import{v as u,y as f,gh as Dt,F as Ot,E as Pt,A as z,B as ve,eo as De,D as Ae,bG as Ut,a2 as Qe,eT as Oe,a7 as le,bf as Te,s as oe,ga as Wt,ik as _,b6 as zt,hf as kt,fy as he,kW as ce,kX as Ht,bh as Vt,kY as Bt,aB as et,bM as Yt,dq as Gt,dt as Xt,cf as S,cg as Se,fT as tt,_ as Re,M as we,aJ as j,jU as Zt,kZ as qt,kK as Jt,ho as Kt,hq as Qt,iC as en,aY as tn,aT as nn,cX as Me,ce as rn,k_ as nt,ki as on,cZ as $e,c_ as rt,k$ as ot,g0 as st,l0 as it,l1 as at,cW as sn,ij as an,eg as ln,ds as cn,fJ as un,iW as pn,aW as hn,aK as fn,ff as mn,f2 as dn}from"./index-CpEBwgYb.js";import{u as Pe,y as gn,h as yn,b as lt,N as se,c as ct,d as fe,k as ut,w as xn}from"./MeshTransform-BjrmimQ-.js";import{c as vn}from"./imageUtils-CkkYmpoB.js";import{c as wn,l as me}from"./MeshVertexAttributes-DipqHyoc.js";import{a as _e,i as de}from"./MeshLocalVertexSpace-HFc9jt7l.js";import{a as ie,s as ge,g as pt,u as Ue}from"./meshVertexSpaceUtils-JDXJMRJ1.js";import{i as $n}from"./earcut-C1Q5KFdX.js";import{a as Tn,e as bn,t as ht}from"./DoubleArray-BL6-QkbM.js";import{t as ft}from"./Indices-C4vNeC3e.js";import{E as An,F as Sn,X as Rn}from"./plane-BDMnbLll.js";import{e as We}from"./deduplicate-BSVZYM8c.js";import{project as Mn,logProjectionError as T,loadProjectErrorMessage as P,projectToPCPF as mt,projectNormalToPCPF as dt,projectTangentToPCPF as gt,projectFromPCPF as yt,projectNormalFromPCPF as xt,projectTangentFromPCPF as vt}from"./projection-Bsk8oCIE.js";import{c as E,M as Fe,X as _n,N as wt}from"./vertexSpaceConversion-CCPVbQp2.js";import{e as $t}from"./mat3f64-q3fE-ZOt.js";import{e as Ne}from"./mat4f64-CSKppSlJ.js";import{I as Fn}from"./quat-CYXHRxS0.js";import{e as In,o as Cn}from"./quatf64-Bdb9ZJJK.js";import{a as Tt}from"./spatialReferenceEllipsoidUtils-CWjarewc.js";import{u as Ln}from"./computeTranslationToOriginAndRotation-Do3yxRCy.js";var Y;const be=new WeakMap;let Nn=0,L=Y=class extends ve{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,n,r){if(e instanceof HTMLImageElement){const o={type:"image-element",src:De(e.src,r),crossOrigin:e.crossOrigin};t[n]=o}else if(e instanceof HTMLCanvasElement){const o={type:"canvas-element",imageData:ze(e.getContext("2d").getImageData(0,0,e.width,e.height))};t[n]=o}else if(e instanceof HTMLVideoElement){const o={type:"video-element",src:De(e.src,r),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[n]=o}else if(e instanceof ImageData){const o={type:"image-data",imageData:ze(e)};t[n]=o}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=ke(e.imageData),n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n.getContext("2d").putImageData(t,0,0),n}case"image-data":return ke(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const e=this.data,t=this.url;if(e instanceof HTMLCanvasElement)return He(e.getContext("2d").getImageData(0,0,e.width,e.height));if(e instanceof ImageData)return He(e);if(t){const n=t.substr(t.length-4,4).toLowerCase(),r=t.substr(0,15).toLocaleLowerCase();if(n===".png"||r==="data:image/png;")return!0}return!1}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(n="")=>`d:${n},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(be.has(this.data)||be.set(this.data,++Nn),t(be.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=this.url!=null?this.url.length:0,this.data!=null){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new Y(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const n=this.clone();return e.set(this,n),n}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(e){return typeof e=="string"?new Y({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new Y({data:e}):Ae(Y,e)}};function ze(e){let t="";for(let n=0;n<e.data.length;n++)t+=String.fromCharCode(e.data[n]);return{data:btoa(t),width:e.width,height:e.height}}function ke(e){const t=atob(e.data),n=new Uint8ClampedArray(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return vn(n,e.width,e.height)}function He(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}u([f({type:String,json:{write:Dt}})],L.prototype,"url",null),u([f({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),f()],L.prototype,"data",null),u([Ot("data")],L.prototype,"writeData",null),u([Pt("data")],L.prototype,"readData",null),u([f({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],L.prototype,"transparent",null),u([f({json:{write:!0}})],L.prototype,"wrap",void 0),u([f({readOnly:!0})],L.prototype,"contentHash",null),L=Y=u([z("esri.geometry.support.MeshTexture")],L);const ne=L;let G=class extends Ut(ve){constructor(t){super(t),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};u([f({type:[Number],nonNullable:!0,json:{write:!0}})],G.prototype,"offset",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0}})],G.prototype,"rotation",void 0),u([f({type:[Number],nonNullable:!0,json:{write:!0}})],G.prototype,"scale",void 0),G=u([z("esri.geometry.support.MeshTextureTransform")],G);const re=G;var Ie;let F=Ie=class extends ve{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=e!=null?e.get(this):null;if(n)return n;const r=new Ie(this.clonePropertiesWithDeduplication(t));return e!=null&&e.set(this,r),r}clonePropertiesWithDeduplication(e){var t,n,r,o;return{color:this.color!=null?this.color.clone():null,colorTexture:(t=this.colorTexture)==null?void 0:t.cloneWithDeduplication(e),normalTexture:(n=this.normalTexture)==null?void 0:n.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:(r=this.colorTextureTransform)==null?void 0:r.clone(),normalTextureTransform:(o=this.normalTextureTransform)==null?void 0:o.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=this.color!=null?16:0,this.colorTexture!=null&&(e+=this.colorTexture.memoryUsage),e+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(e+=this.normalTexture.memoryUsage),e+=this.normalTextureTransform!=null?20:0,e}};u([f({type:Qe,json:{write:!0}})],F.prototype,"color",void 0),u([f({type:ne,json:{write:!0}})],F.prototype,"colorTexture",void 0),u([f({type:re,json:{write:!0}})],F.prototype,"colorTextureTransform",void 0),u([f({type:ne,json:{write:!0}})],F.prototype,"normalTexture",void 0),u([f({type:re,json:{write:!0}})],F.prototype,"normalTextureTransform",void 0),u([f({nonNullable:!0,json:{write:!0}})],F.prototype,"alphaMode",void 0),u([f({nonNullable:!0,json:{write:!0}})],F.prototype,"alphaCutoff",void 0),u([f({nonNullable:!0,json:{write:!0}})],F.prototype,"doubleSided",void 0),F=Ie=u([z("esri.geometry.support.MeshMaterial")],F);const je=F;var Ce;let R=Ce=class extends je{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=e!=null?e.get(this):null;if(n)return n;const r=new Ce(this.clonePropertiesWithDeduplication(t));return e!=null&&e.set(this,r),r}getMemoryUsage(){let e=super.getMemoryUsage();return e+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(e+=this.emissiveTexture.memoryUsage),e+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(e+=this.occlusionTexture.memoryUsage),e+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=this.metallicRoughnessTextureTransform!=null?20:0,e}clonePropertiesWithDeduplication(e){var t,n,r,o,s,i,a;return{...super.clonePropertiesWithDeduplication(e),emissiveColor:(t=this.emissiveColor)==null?void 0:t.clone(),emissiveTexture:(n=this.emissiveTexture)==null?void 0:n.cloneWithDeduplication(e),emissiveTextureTransform:(r=this.emissiveTextureTransform)==null?void 0:r.clone(),occlusionTexture:(o=this.occlusionTexture)==null?void 0:o.cloneWithDeduplication(e),occlusionTextureTransform:(s=this.occlusionTextureTransform)==null?void 0:s.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:(i=this.metallicRoughnessTexture)==null?void 0:i.cloneWithDeduplication(e),metallicRoughnessTextureTransform:(a=this.metallicRoughnessTextureTransform)==null?void 0:a.clone()}}};u([f({type:Qe,json:{write:!0}})],R.prototype,"emissiveColor",void 0),u([f({type:ne,json:{write:!0}})],R.prototype,"emissiveTexture",void 0),u([f({type:re,json:{write:!0}})],R.prototype,"emissiveTextureTransform",void 0),u([f({type:ne,json:{write:!0}})],R.prototype,"occlusionTexture",void 0),u([f({type:re,json:{write:!0}})],R.prototype,"occlusionTextureTransform",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],R.prototype,"metallic",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],R.prototype,"roughness",void 0),u([f({type:ne,json:{write:!0}})],R.prototype,"metallicRoughnessTexture",void 0),u([f({type:re,json:{write:!0}})],R.prototype,"metallicRoughnessTextureTransform",void 0),R=Ce=u([z("esri.geometry.support.MeshMaterialMetallicRoughness")],R);const jn=R;var ee;let N=ee=class extends ve{static from(e){return Ae(ee,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return wn(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},le.getLogger(this))}castMaterial(e){return Ae(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?jn:je,e)}clone(){return new ee({faces:Te(this.faces),shading:this.shading,material:Te(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const n={faces:Te(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new ee(n)}get memoryUsage(){let e=0;return this.faces!=null&&(e+=this.faces.byteLength),this.material!=null&&(e+=this.material.memoryUsage),e}};u([f({json:{write:!0}})],N.prototype,"faces",void 0),u([Oe("faces")],N.prototype,"castFaces",null),u([f({type:je,json:{write:!0}})],N.prototype,"material",void 0),u([Oe("material")],N.prototype,"castMaterial",null),u([f()],N.prototype,"name",void 0),u([f({type:String,json:{write:!0}})],N.prototype,"shading",void 0),u([f({type:Boolean})],N.prototype,"trustSourceNormals",void 0),N=ee=u([z("esri.geometry.support.MeshComponent")],N);const J=N,En="Mesh must be loaded before applying operations",Dn="Provided component is not part of the list of components",On="Expected polygon to be a Polygon instance",te="Expected location to be a Point instance";let Ve=class extends oe{constructor(){super("invalid-input:location",te)}};function Pn(e,t,n){const r=Un(Be,e,t,n)?Sn(Be):[0,0,1];return Math.abs(r[2])>Math.cos(Wt(80))?_.Z:Math.abs(r[1])>Math.abs(r[0])?_.Y:_.X}function Un(e,t,n,r){const o=(i=>!Array.isArray(i[0]))(t)?(i,a)=>t[3*i+a]:(i,a)=>t[i][a],s=r?zt(r)/kt(r):1;return Rn(e,(i,a)=>he(i,o(a,0)*s,o(a,1)*s,o(a,2)),n)}const Be=An();function Wn(e){const t=kn(e.rings,e.hasZ,ye.CCW_IS_HOLE,e.spatialReference),n=new Array;let r=0,o=0;for(const a of t.polygons){const c=a.count,l=a.index,h=Tn(t.position,3*l,3*c),d=a.holeIndices.map(p=>p-l),m=ft($n(h,d,3));n.push({position:h,faces:m}),r+=h.length,o+=m.length}const s=zn(n,r,o),i=Array.isArray(s.position)?We(s.position,3,{originalIndices:s.faces}):We(s.position.buffer,6,{originalIndices:s.faces});return s.position=bn(new Float64Array(i.buffer)),s.faces=i.indices,s}function zn(e,t,n){if(e.length===1)return e[0];const r=ht(t),o=new Array(n);let s=0,i=0,a=0;for(const c of e){for(let l=0;l<c.position.length;l++)r[s++]=c.position[l];for(const l of c.faces)o[i++]=l+a;a=s/3}return{position:r,faces:ft(o)}}function kn(e,t,n,r){const o=e.length,s=new Array(o),i=new Array(o),a=new Array(o);let c=0;for(let g=0;g<o;++g)c+=e[g].length;let l=0,h=0,d=0;const m=ht(3*c);let p=0;for(let g=o-1;g>=0;g--){const y=e[g],b=n===ye.CCW_IS_HOLE&&Hn(y,t,r);if(b&&o!==1)s[l++]=y;else{let I=y.length;for(let x=0;x<l;++x)I+=s[x].length;const w={index:p,pathLengths:new Array(l+1),count:I,holeIndices:new Array(l)};w.pathLengths[0]=y.length,y.length>0&&(a[d++]={index:p,count:y.length}),p=b?ue(y,y.length-1,-1,m,p,y.length,t):ue(y,0,1,m,p,y.length,t);for(let x=0;x<l;++x){const A=s[x];w.holeIndices[x]=p,w.pathLengths[x+1]=A.length,A.length>0&&(a[d++]={index:p,count:A.length}),p=ue(A,0,1,m,p,A.length,t)}l=0,w.count>0&&(i[h++]=w)}}for(let g=0;g<l;++g){const y=s[g];y.length>0&&(a[d++]={index:p,count:y.length}),p=ue(y,0,1,m,p,y.length,t)}return i.length=h,a.length=d,{position:m,polygons:i,outlines:a}}function ue(e,t,n,r,o,s,i){o*=3;for(let a=0;a<s;++a){const c=e[t];r[o++]=c[0],r[o++]=c[1],r[o++]=i?c[2]:0,t+=n}return o/3}function Hn(e,t,n){if(!t)return!ce(e);const r=e.length-1;switch(Pn(e,r,n)){case _.X:return!ce(e,_.Y,_.Z);case _.Y:return!ce(e,_.X,_.Z);case _.Z:return!ce(e,_.X,_.Y)}}var ye;(function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(ye||(ye={}));function Vn([e,t,n,r,o,s],i,a,c){Ye??(Ye=new Float64Array(24));const l=Ye;return l[0]=e,l[1]=t,l[2]=n,l[3]=e,l[4]=o,l[5]=n,l[6]=r,l[7]=o,l[8]=n,l[9]=r,l[10]=t,l[11]=n,l[12]=e,l[13]=t,l[14]=s,l[15]=e,l[16]=o,l[17]=s,l[18]=r,l[19]=o,l[20]=s,l[21]=r,l[22]=t,l[23]=s,Mn({positions:l,transform:i,vertexSpace:a,inSpatialReference:c,outSpatialReference:c,outPositions:l}),At(l,c)}let Ye=null;function bt(e){if(e.length===0)return Ht;const t=Vt([Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY]);return Bt(t,e),t}function At(e,t){const[n,r,o,s,i,a]=bt(e);return new et({xmin:n,ymin:r,zmin:o,xmax:s,ymax:i,zmax:a,spatialReference:t})}function Ee(e,t,n,r){if(r!==void 0){Yt(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const o=t.type==="local";if(!ie(t)||r===o)return n.isGeographic||n.isWebMercator&&r;e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return n.isGeographic;case"local":return n.isGeographic||n.isWebMercator}}const ae=()=>le.getLogger("esri.geometry.support.meshUtils.centerAt");function Bn(e,t,n){var i;if(!((i=e.vertexAttributes)!=null&&i.position))return;const{vertexSpace:r}=e,o=(n==null?void 0:n.origin)??e.anchor,s=Ee(ae,r,o.spatialReference,n==null?void 0:n.geographic);ie(r)?Yn(e,t,o):s?Gn(e,t,o):Xn(e,t,o)}function Yn(e,t,n){const{vertexSpace:r}=e;if(!ie(r))return;const o=Rt,s=St;if(!E(t,s,e.spatialReference))return void T(ae(),t.spatialReference,e.spatialReference,P);if(!E(n,o,e.spatialReference)){const a=e.origin;return o[0]=a.x,o[1]=a.y,o[2]=a.z,void T(ae(),n.spatialReference,e.spatialReference,P)}const i=Gt(qn,s,o);r.origin=Xt(S(),r.origin,i)}function Gn(e,t,n){const r=Se(n.x,n.y,n.z??0),o=Fe(e,new _e({origin:r}));if(!o)return;const s=Se(t.x,t.y,t.z??0),i=Fe({vertexAttributes:o,spatialReference:e.spatialReference,vertexSpace:new _e({origin:s})},new de);if(!i)return;const{position:a,normal:c,tangent:l}=i;e.vertexAttributes.position=a,e.vertexAttributes.normal=c,e.vertexAttributes.tangent=l,e.vertexAttributesChanged()}function Xn(e,t,n){const r=Rt,o=St;if(E(t,o,e.spatialReference)){if(!E(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void T(ae(),n.spatialReference,e.spatialReference,P)}Zn(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else T(ae(),t.spatialReference,e.spatialReference,P)}function Zn(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const St=S(),Rt=S(),qn=S();async function Jn(e,t,n){const{source:r}=t,{loadGLTFMesh:o}=await tt(Re(()=>import("./loadGLTFMesh-DoYjS3NY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])),n),s=await Qn(r,n);we(n);const i=o(new j({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:Kn(s),signal:n==null?void 0:n.signal,expectedType:s.type});i.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:a,components:c}=await i;e.vertexAttributes=a,e.components=c}function Kn(e){const t=Zt(e.url);return n=>{const r=qt(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function Qn(e,t){if(Array.isArray(e)){if(!e.length)throw new oe("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?tr(e):nr(e,t)}return Mt(e)}async function er(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(n.length===1)return new K(n[0].partUrl);const s=await e.toBlob(t);return we(t),K.fromBlob(s,Ct(o,r))}function Mt(e){return K.fromBlob(e,Ct(e.name,e.type))}function tr(e){return It(e.map(t=>({name:t.name,mimeType:t.type,source:Mt(t)})))}async function nr(e,t){const n=await Jt(e.map(async r=>{const o=await er(r);return we(t),{name:r.assetName,mimeType:r.assetMimeType,source:o}}));if(Kt(t))throw n.forEach(r=>r.source.dispose()),Qt();return It(n)}const _t=/^model\/gltf\+json$/,Ft=/^model\/gltf-binary$/,Le=/\.gltf$/i,rr=/\.glb$/i;function It(e){const t=new Map;let n,r=null;for(const{name:o,mimeType:s,source:i}of e)r===null&&(_t.test(s)||Le.test(o)?(r=i.url,n="gltf"):(Ft.test(s)||rr.test(o))&&(r=i.url,n="glb")),t.set(o,i.url),i.files.forEach((a,c)=>t.set(c,a));if(r==null)throw new oe("mesh-load-external:missing-files","Missing files to load external mesh source");return new K(r,()=>e.forEach(({source:o})=>o.dispose()),t,n)}class K{constructor(t,n=()=>{},r=new Map,o){this.url=t,this.dispose=n,this.files=r,this.type=o}static fromBlob(t,n){const r=URL.createObjectURL(t);return new K(r,()=>URL.revokeObjectURL(r),void 0,n)}}function Ct(e,t){return _t.test(t)||Le.test(e)?"gltf":Ft.test(t)||Le.test(e)?"glb":void 0}let O=class extends en{constructor(e){super(e),this.externalSources=new tn,this._explicitDisplaySource=null,this.addHandles(nn(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!Pe(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!gn(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>yn(t,e))}get _implicitDisplaySource(){return this.externalSources.find(Pe)}};u([f()],O.prototype,"externalSources",void 0),u([f()],O.prototype,"displaySource",null),u([f()],O.prototype,"_implicitDisplaySource",null),u([f()],O.prototype,"_explicitDisplaySource",void 0),O=u([z("esri.geometry.support.meshUtils.Metadata")],O);function or(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=fr,r=4*e.length,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(2*e.length*3);let c=0,l=0,h=0,d=0;for(let m=0;m<e.length;m++){const p=e[m],g=c/3;for(const b of t)a[d++]=g+b;const y=p.corners;for(let b=0;b<4;b++){const I=y[b];let w=0;i[h++]=.25*n[b][0]+p.uvOrigin[0],i[h++]=p.uvOrigin[1]-.25*n[b][1];for(let x=0;x<3;x++)p.axis[x]!==0?(o[c++]=.5*p.axis[x],s[l++]=p.axis[x]):(o[c++]=.5*I[w++],s[l++]=0)}}return{position:o,normal:s,uv:i,faces:a}}function sr(e,t){const n=e.components[0],r=n.faces,o=mr[t],s=6*o,i=new Array(6),a=new Array(r.length-6);let c=0,l=0;for(let h=0;h<r.length;h++)h>=s&&h<s+6?i[c++]=r[h]:a[l++]=r[h];if(e.vertexAttributes.uv!=null){const h=new Float32Array(e.vertexAttributes.uv),d=4*o*2,m=[0,1,1,1,1,0,0,0];for(let p=0;p<m.length;p++)h[d+p]=m[p];e.vertexAttributes.uv=h}return e.components=[new J({faces:i,material:n.material}),new J({faces:a})],e}function ir(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*((t-1)*n*2));let c=0,l=0,h=0,d=0;for(let m=0;m<=t;m++){const p=m/t*Math.PI+.5*Math.PI,g=Math.cos(p),y=Math.sin(p);v[2]=y;const b=m===0||m===t,I=b?n-1:n;for(let w=0;w<=I;w++){const x=w/I*2*Math.PI;v[0]=-Math.sin(x)*g,v[1]=Math.cos(x)*g;for(let A=0;A<3;A++)o[c]=.5*v[A],s[c]=v[A],++c;i[l++]=(w+(b?.5:0))/n,i[l++]=m/t,m!==0&&w!==n&&(m!==t&&(a[h++]=d,a[h++]=d+1,a[h++]=d-n),m!==1&&(a[h++]=d,a[h++]=d-n,a[h++]=d-n-1)),d++}}return{position:o,normal:s,uv:i,faces:a}}function ar(e=0){const n=Math.round(16*2**e),r=4*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),i=new Float32Array(2*r),a=new Uint32Array(3*(4*n));let c=0,l=0,h=0,d=0,m=0;for(let p=0;p<=5;p++){const g=p===0||p===5,y=p<=1||p>=4,b=p===2||p===4,I=g?n-1:n;for(let w=0;w<=I;w++){const x=w/I*2*Math.PI,A=g?0:.5;v[0]=A*Math.sin(x),v[1]=A*-Math.cos(x),v[2]=p<=2?.5:-.5;for(let k=0;k<3;k++)o[c++]=v[k],s[l++]=y?k===2?p<=1?1:-1:0:k===2?0:v[k]/A;i[h++]=(w+(g?.5:0))/n,i[h++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,b||p===0||w===n||(p!==5&&(a[d++]=m,a[d++]=m+1,a[d++]=m-n),p!==1&&(a[d++]=m,a[d++]=m-n,a[d++]=m-n-1)),m++}}return{position:o,normal:s,uv:i,faces:a}}function lr(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function cr(e){const t=Q.facingAxisOrderSwap[e],n=Q.position,r=Q.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let i=0;for(let a=0;a<4;a++){const c=i;for(let l=0;l<3;l++){const h=t[l],d=Math.abs(h)-1,m=h>=0?1:-1;o[i]=n[c+d]*m,s[i]=r[c+d]*m,i++}}return{position:o,normal:s,uv:new Float32Array(Q.uv),faces:new Uint32Array(Q.faces),isPlane:!0}}const H=1,V=2,B=3,Q={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[B,H,V],west:[-B,-H,V],north:[-H,B,V],south:[H,-B,V],up:[H,V,B],down:[H,-V,-B]}};function pe(e,t,n){e.isPlane||ur(e),hr(e,pr(n==null?void 0:n.size,n==null?void 0:n.unit,t.spatialReference));const r=ge(t,n),o=t.spatialReference.isGeographic?ge(t):r,s=Fe({vertexAttributes:e,vertexSpace:o,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new me({...s,uv:e.uv}),vertexSpace:r,components:[new J({faces:e.faces,material:(n==null?void 0:n.material)||null})],spatialReference:t.spatialReference}}function ur(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function pr(e,t,n){const r=_n(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const o=e*r;return[o,o,o]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function hr(e,t){if(t!=null){D[0]=t[0],D[4]=t[1],D[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)v[r]=e.position[n+r];Me(v,v,D);for(let r=0;r<3;r++)e.position[n+r]=v[r]}if(t[0]!==t[1]||t[1]!==t[2]){D[0]=1/t[0],D[4]=1/t[1],D[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)v[r]=e.normal[n+r];Me(v,v,D),rn(v,v);for(let r=0;r<3;r++)e.normal[n+r]=v[r]}}}}const fr={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},mr={south:0,east:1,north:2,west:3,up:4,down:5},v=S(),D=$t(),U=()=>le.getLogger("esri.geometry.support.meshUtils.rotate");function dr(e,t,n){var c;if(!((c=e.vertexAttributes)!=null&&c.position)||t[3]===0)return;const{spatialReference:r,vertexSpace:o}=e,s=(n==null?void 0:n.origin)??e.anchor,i=n==null?void 0:n.geographic,a=Ee(U,o,r,i);pt(e)?gr(e,t,s):a?yr(e,t,s):xr(e,t,s)}function gr(e,t,n){e.transform??(e.transform=new se);const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,c]=r.origin,l=new j({x:i,y:a,z:c,spatialReference:s}),h=X;if(l.equals(n))he(h,0,0,0);else if(!wt(h,n,e))return void T(U(),n.spatialReference,s,P);Fn(qe,fe(t),ct(t));const d=nt(Ge,qe,$e,on,h),{localMatrix:m}=o,p=rt(Ge,d,m);o.scale=ot(S(),p),st(p,p,it(X,o.scale));const g=o.rotationAxis;o.rotation=ut(p),o.rotationAngle===0&&(o.rotationAxis=g),o.translation=at(S(),p)}function yr(e,t,n){const r=e.spatialReference,o=Tt(r),s=Lt;if(!E(n,s,o)&&(T(U(),n.spatialReference,o,"Falling back to mesh origin"),!E(e.origin,s,o)))return void T(U(),e.origin.spatialReference,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),h=a!=null?new Float32Array(a.length):null,d=c!=null?new Float32Array(c.length):null;Ln(o,s,xe,o),sn(Ze,xe);const m=Xe;Me(fe(Xe),fe(t),Ze),m[3]=t[3],mt(i,r,l)&&(a==null||h==null||dt(a,i,l,r,h))&&(c==null||d==null||gt(c,i,l,r,d))?(q(l,m,3,s),yt(l,i,r)&&(a==null||h==null||(q(h,m,3),xt(h,i,l,r,a)))&&(c==null||d==null||(q(d,m,4),vt(d,i,l,r,c)))?e.vertexAttributesChanged():T(U(),o,r)):T(U(),r,o)}function xr(e,t,n){const r=Lt;if(!E(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void T(U(),n.spatialReference,e.spatialReference,P)}q(e.vertexAttributes.position,t,3,r),q(e.vertexAttributes.normal,t,3),q(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function q(e,t,n,r=$e){if(e!=null){an(xe,ct(t),fe(t));for(let o=0;o<e.length;o+=n){for(let s=0;s<3;s++)X[s]=e[o+s]-r[s];ln(X,X,xe);for(let s=0;s<3;s++)e[o+s]=X[s]+r[s]}}}const X=S(),Ge=Ne(),Xe=lt(),xe=Ne(),Ze=$t(),Lt=S(),qe=In(),W=()=>le.getLogger("esri.geometry.support.meshUtils.scale");function vr(e,t,n){var c;if(!((c=e.vertexAttributes)!=null&&c.position))return;const{vertexSpace:r,spatialReference:o}=e,s=(n==null?void 0:n.origin)??e.anchor,i=n==null?void 0:n.geographic,a=Ee(W,r,o,i);pt(e)?wr(e,t,s):a?$r(e,t,s):Tr(e,t,s)}function wr(e,t,n){e.transform??(e.transform=new se);const{vertexSpace:r,transform:o,spatialReference:s}=e,[i,a,c]=r.origin,l=new j({x:i,y:a,z:c,spatialReference:s}),h=Z;if(l.equals(n))he(h,0,0,0);else if(!wt(h,n,e))return void T(W(),n.spatialReference,s,P);const d=he(br,t,t,t),m=nt(Je,Cn,$e,d,h),{localMatrix:p}=o,g=rt(Je,m,p);o.scale=ot(S(),g),st(g,g,it(Z,o.scale));const y=o.rotationAxis;o.rotation=ut(g),o.rotationAngle===0&&(o.rotationAxis=y),o.translation=at(S(),g)}function $r(e,t,n){const r=e.spatialReference,o=Tt(r),s=jt;if(!E(n,s,o)&&(T(W(),n.spatialReference,o,"Falling back to mesh origin"),!E(e.origin,s,o)))return void T(W(),e.origin.spatialReference,o);const i=e.vertexAttributes.position,a=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(i.length),h=a!=null?new Float32Array(a.length):null,d=c!=null?new Float32Array(c.length):null;mt(i,r,l)&&(a==null||h==null||dt(a,i,l,r,h))&&(c==null||d==null||gt(c,i,l,r,d))?(Nt(l,t,s),yt(l,i,r)&&(a==null||h==null||xt(h,i,l,r,a))&&(c==null||d==null||vt(d,i,l,r,c))?e.vertexAttributesChanged():T(W(),o,r)):T(W(),r,o)}function Tr(e,t,n){const r=jt;if(!E(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void T(W(),n.spatialReference,e.spatialReference,P)}Nt(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function Nt(e,t,n=$e){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)Z[o]=e[r+o]-n[o];cn(Z,Z,t);for(let o=0;o<3;o++)e[r+o]=Z[o]+n[o]}}const Z=S(),br=S(),Je=Ne(),jt=S();var M;const Et="esri.geometry.Mesh";function C(){return le.getLogger(Et)}const Ar={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:de,local:_e}};let $=M=class extends un.LoadableMixin(pn(dn)){constructor(e){super(e),this.components=null,this.vertexSpace=new de,this.transform=null,this.metadata=new O,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new me,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(hn(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):((e=this.metadata.displaySource)==null?void 0:e.extent)!=null}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,o=n.position;if(o.length===0||e&&e.length===0)return new et({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if(ie(r)){const{_untransformedBounds:s,transform:i}=this;return Vn(s,i,r,t)}return At(o,t)}get _untransformedBounds(){return bt(this.vertexAttributes.position)}get anchor(){const e=Ue(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new j({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){const e=Ue(this.vertexSpace,this.spatialReference);return e??this._transformedExtent.center}get extent(){var e,t;return this.loaded||((t=(e=this.metadata)==null?void 0:e.displaySource)==null?void 0:t.extent)==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(J.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}C().error("removeComponent()",Dn)}}rotate(e,t,n,r){return xn(e,t,n,Ke),dr(this,Ke,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:o}=this,s=o==null?void 0:o.position;if(!s)return this;if(ie(r)){const[i,a,c]=r.origin;r.origin=Se(i+e,a+t,c+n)}else{for(let i=0;i<s.length;i+=3)s[i]+=e,s[i+1]+=t,s[i+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(vr(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Bn(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(Jn(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone())}cloneAndModifyVertexAttributes(e,t){var o;let n=null;if(this.components){const s=new Map,i=new Map;n=this.components.map(a=>a.cloneWithDeduplication(s,i))}const r={components:n,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:((o=this.transform)==null?void 0:o.clone())??null,metadata:this.metadata.clone()};return new M(r)}cloneShallow(){return new M({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([Re(()=>import("./gltfexport-CHtg7LoZ.js"),__vite__mapDeps([30,1,2,14,3,15,19,12,20,21,5,6,8,22,23,7,9,13,16,17,24,25,26,4,27,18,28,29])),this.load(e)]);return we(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(C().error(e,En),!1)}static createBox(e,t){if(!(e instanceof j))return C().error(".createBox()",te),null;const n=new M(pe(or(),e,t));return t!=null&&t.imageFace&&t.imageFace!=="all"?sr(n,t.imageFace):n}static createSphere(e,t){return e instanceof j?new M(pe(ir((t==null?void 0:t.densificationFactor)||0),e,t)):(C().error(".createSphere()",te),null)}static createCylinder(e,t){return e instanceof j?new M(pe(ar((t==null?void 0:t.densificationFactor)||0),e,t)):(C().error(".createCylinder()",te),null)}static createPlane(e,t){if(!(e instanceof j))return C().error(".createPlane()",te),null;const n=(t==null?void 0:t.facing)??"up",r=lr(n,t==null?void 0:t.size);return new M(pe(cr(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof fn))return C().error(".createFromPolygon()",On),null;const n=Wn(e);return new M({vertexAttributes:new me({position:n.position}),components:[new J({faces:n.faces,shading:"flat",material:(t==null?void 0:t.material)??null})],spatialReference:e.spatialReference,vertexSpace:new de})}static async createFromGLTF(e,t,n){if(!(e instanceof j)){const o=new Ve;throw C().error(".createfromGLTF()",o.message),o}const{loadGLTFMesh:r}=await tt(Re(()=>import("./loadGLTFMesh-DoYjS3NY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29])),n);return new M(await r(e,t,n))}static async createFromFiles(e,t,n){mn(C(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const r=o=>C().error(".createFromFiles()",o.message);if(!(e instanceof j)){const o=new Ve;throw r(o),o}if(!(n!=null&&n.layer))throw new oe("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){var l;const r=(n==null?void 0:n.extent)??null,{spatialReference:o}=e,s=((l=n==null?void 0:n.transform)==null?void 0:l.clone())??new se,i=ge(e,n),a={source:t,extent:r},c=new O;return c.externalSources.push(a),new M({metadata:c,transform:s,vertexSpace:i,spatialReference:o})}static createIncomplete(e,t){var i;const{spatialReference:n}=e,r=((i=t==null?void 0:t.transform)==null?void 0:i.clone())??new se,o=ge(e,t),s=new M({transform:r,vertexSpace:o,spatialReference:n});return s.addResolvingPromise(Promise.reject(new oe("mesh-incomplete","Mesh resources are not complete"))),s}};u([f({type:[J],json:{write:!0}})],$.prototype,"components",void 0),u([f({nonNullable:!0,types:Ar,constructOnly:!0,json:{write:!0}})],$.prototype,"vertexSpace",void 0),u([f({type:se,json:{write:!0}})],$.prototype,"transform",void 0),u([f({constructOnly:!0})],$.prototype,"metadata",void 0),u([f()],$.prototype,"hasExtent",null),u([f()],$.prototype,"_transformedExtent",null),u([f()],$.prototype,"_untransformedBounds",null),u([f()],$.prototype,"anchor",null),u([f()],$.prototype,"origin",null),u([f({readOnly:!0,json:{read:!1}})],$.prototype,"extent",null),u([f({readOnly:!0,json:{read:!1,write:!0,default:!0}})],$.prototype,"hasZ",void 0),u([f({readOnly:!0,json:{read:!1,write:!0,default:!1}})],$.prototype,"hasM",void 0),u([f({type:me,nonNullable:!0,json:{write:!0}})],$.prototype,"vertexAttributes",void 0),$=M=u([z(Et)],$);const Ke=lt(),Yr=$;export{Yr as $,re as c,J as h,jn as m,ne as w};
