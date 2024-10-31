import{f as B,e as P}from"./UpdateTracking2D-Dunhz78E.js";import{N as se,m as ne,S as O,g as oe,i as ce,a as he,T as le,s as ue,v as de,_ as me,c as fe,h as pe,o as _e,b as ge,d as xe,e as ye}from"./PieChartMeshWriter-DSCZrQkq.js";import{ir as ve,is as V,cD as Z,ad as X,it as Y,fu as L,iu as H,iv as W,iw as Me,ix as Q,iy as Pe,fq as $,b2 as E,bf as we,s as be,a7 as Ie}from"./index-CpEBwgYb.js";import{h as Se,r as J}from"./featureConversionUtils-CJYQdFhy.js";import{e as q}from"./OptimizedGeometry-vU5jWBvU.js";import{b as Le,c as $e}from"./CIMSymbolHelper-Dc62DEV1.js";import{i as ke}from"./BoundingBox-r7-QpPxK.js";import{r as A,o as ze}from"./LabelMetric-DBgjSCLj.js";import{t as D}from"./constants-D5zmR9t2.js";import{o as Be}from"./grouping-B91iExhI.js";import{s as Ee}from"./AttributeStore-1zrDQTjG.js";function K(c,e,r){return c[0]=e[0]-r[0],c[1]=e[1]-r[1],c}function re(c,e){return Math.sqrt(c*c+e*e)}function U(c){const e=re(c[0],c[1]);c[0]/=e,c[1]/=e}function Ae(c,e){return re(c[0]-e[0],c[1]-e[1])}function De(c,e){return c[e+1]}function ie(c){return c.length-1}function Re(c){let e=0;for(let r=0;r<ie(c);r++)e+=Te(c,r);return e}function Te(c,e,r=1){let[t,s]=De(c,e);return[t,s]=[Math.round(t),Math.round(s)],Math.sqrt(t*t+s*s)*r}class F{constructor(e,r,t,s,i){this._segments=e,this._index=r,this._distance=t,this._xStart=s,this._yStart=i,this._done=!1}static create(e){return new F(e,0,0,e[0][0],e[0][1])}clone(){return new F(this._segments,this._index,this._distance,this.xStart,this.yStart)}equals(e){return this._index===e._index||e._index===this._index-1&&(this._distance===0||e._distance===1)||e._index===this._index+1&&(this._distance===1||e._distance===0)}leq(e){return this._index<e._index||this._index===e._index&&this._distance<=e._distance}geq(e){return this._index>e._index||this._index===e._index&&this._distance>=e._distance}get _segment(){return this._segments[this._index+1]}get angle(){const e=this.dy,r=(0*e+-1*-this.dx)/(1*this.length);let t=Math.acos(r);return e>0&&(t=2*Math.PI-t),t}get xStart(){return this._xStart}get yStart(){return this._yStart}get x(){return this.xStart+this.distance*this.dx}get y(){return this.yStart+this.distance*this.dy}get dx(){return this._segment[0]}get dy(){return this._segment[1]}get xMidpoint(){return this.xStart+.5*this.dx}get yMidpoint(){return this.yStart+.5*this.dy}get xEnd(){return this.xStart+this.dx}get yEnd(){return this.yStart+this.dy}get length(){const{dx:e,dy:r}=this;return Math.sqrt(e*e+r*r)}get remainingLength(){return this.length*(1-this._distance)}get backwardLength(){return this.length*this._distance}get distance(){return this._distance}get done(){return this._done}hasPrev(){return this._index-1>=0}hasNext(){return this._index+1<ie(this._segments)}next(){return this.hasNext()?(this._xStart+=this.dx,this._yStart+=this.dy,this._distance=0,this._index+=1,this):null}prev(){return this.hasPrev()?(this._index-=1,this._xStart-=this.dx,this._yStart-=this.dy,this._distance=1,this):(this._done=!0,null)}_seekBackwards(e,r){const t=this.backwardLength;if(e<=t)return this._distance=(t-e)/this.length,this;let s=this.backwardLength;for(;this.prev();){if(s+this.length>e)return this._seekBackwards(e-s);s+=this.length}return this._distance=0,r?this:null}seek(e,r=!1){if(e<0)return this._seekBackwards(Math.abs(e),r);if(e<=this.remainingLength)return this._distance=(this.backwardLength+e)/this.length,this;let t=this.remainingLength;for(;this.next();){if(t+this.length>e)return this.seek(e-t,r);t+=this.length}return this._distance=1,r?this:null}}function C(c,e,r,t=!0){const s=Re(c),i=F.create(c),a=s/2;if(!t)return i.seek(a),void(Math.abs(i.x)<D&&Math.abs(i.y)<D&&r(i.clone(),0,a+0*e,s));const h=Math.max((s-e)/2,0),l=Math.floor(h/e),d=a-l*e;i.seek(d);for(let o=-l;o<=l;o++)Math.abs(i.x)<D&&Math.abs(i.y)<D&&r(i.clone(),o,a+o*e,s),i.seek(e)}function N(c,e){const r=e;for(let t=0;t<c.length;t++){let s=c[t];Fe(s,r);const i=[];i.push(s[0]);for(let a=1;a<s.length;a++){const[h,l]=s[a-1],[d,o]=s[a],n=d-h,u=o-l;i.push([n,u])}c[t]=i,s=i}return c}function Fe(c,e){if(e<=0)return;const t=c.length;if(t<3)return;const s=[];let i=0;s.push(0);for(let n=1;n<t;n++)i+=Ae(c[n],c[n-1]),s.push(i);e=Math.min(e,.2*i);const a=[];a.push(c[0][0]),a.push(c[0][1]);const h=c[t-1][0],l=c[t-1][1],d=K([0,0],c[0],c[1]);U(d),c[0][0]+=e*d[0],c[0][1]+=e*d[1],K(d,c[t-1],c[t-2]),U(d),c[t-1][0]+=e*d[0],c[t-1][1]+=e*d[1];for(let n=1;n<t;n++)s[n]+=e;s[t-1]+=e;const o=.5*e;for(let n=1;n<t-1;n++){let u=0,p=0,_=0;for(let m=n-1;m>=0&&!(s[m+1]<s[n]-o);m--){const f=o+s[m+1]-s[n],g=s[m+1]-s[m],x=s[n]-s[m]<o?1:f/g;if(Math.abs(x)<1e-6)break;const y=x*x,b=x*f-.5*y*g,M=x*g/e,v=c[m+1],I=c[m][0]-v[0],w=c[m][1]-v[1];u+=M/b*(v[0]*x*f+.5*y*(f*I-g*v[0])-y*x*g*I/3),p+=M/b*(v[1]*x*f+.5*y*(f*w-g*v[1])-y*x*g*w/3),_+=M}for(let m=n+1;m<t&&!(s[m-1]>s[n]+o);m++){const f=o-s[m-1]+s[n],g=s[m]-s[m-1],x=s[m]-s[n]<o?1:f/g;if(Math.abs(x)<1e-6)break;const y=x*x,b=x*f-.5*y*g,M=x*g/e,v=c[m-1],I=c[m][0]-v[0],w=c[m][1]-v[1];u+=M/b*(v[0]*x*f+.5*y*(f*I-g*v[0])-y*x*g*I/3),p+=M/b*(v[1]*x*f+.5*y*(f*w-g*v[1])-y*x*g*w/3),_+=M}a.push(u/_),a.push(p/_)}a.push(h),a.push(l);for(let n=0,u=0;n<t;n++)c[n][0]=a[u++],c[n][1]=a[u++]}const R=1,k=0,Ge=128,Oe=Pe(c=>{let e=0;if(c===0)return 1/0;for(;!(c%2);)e++,c/=2;return e});class Ve extends se{constructor(){super(...arguments),this._zoomLevel=0}_write(e,r,t,s){if(this._zoomLevel=s||0,t!=null)throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");switch(r.geometryType){case"esriGeometryPoint":{const i=r.readXForDisplay(),a=r.readYForDisplay();return this._writePoint(e,i,a,r)}case"esriGeometryEnvelope":case"esriGeometryPolygon":case"esriGeometryMultipoint":{const i=r.readCentroidForDisplay();if(!i)return;const[a,h]=i.coords;return this._writePoint(e,a,h,r)}case"esriGeometryPolyline":this._writeLines(e,r)}}_writePoint(e,r,t,s){var p,_;const i=this._getShaping();if(!i)return;let a=this._getPointReferenceBounds();a||(a={offsetX:0,offsetY:0,size:0});const h=i.boundsT,l=Le(this.evaluatedMeshParams.horizontalAlignment),d=$e(this.evaluatedMeshParams.verticalAlignment),o=((p=this.evaluatedMeshParams.scaleInfo)==null?void 0:p.maxScale)??0,n=((_=this.evaluatedMeshParams.scaleInfo)==null?void 0:_.minScale)??0,u=B(s.getDisplayId());e.metricStart(new A(u,r,t,l,d,o,n,a)),e.metricBoxWrite(h),this._writeGlyphs(e,s.getDisplayId(),r,t,i,0,a),e.metricEnd()}_getPointReferenceBounds(){if(!this._references)return null;for(const e of this._references){const r=e.getBoundsInfo();if(r)return r}return null}_writeLines(e,r){const{scaleInfo:t,verticalAlignment:s}=this.evaluatedMeshParams,i=this.evaluatedMeshParams.repeatLabelDistance||128,a=this._getShaping("middle");if(!a)return;const h=(d,o,n,u)=>this._placeSubdivGlyphs(d,o,n,u),l=(a.bounds.width+i)/(1<<R);this._current={out:e,id:r.getDisplayId(),shaping:a,zoomRange:ne(t,this.getTileInfo()),referenceBounds:this._getPointReferenceBounds()||{offsetX:0,offsetY:0,size:0},offsetDirection:null},this._verticalPlacement=s==="bottom"?"above":s==="top"?"below":null,this._verticalPlacement?this._writeAboveAndBelowAlong(r,h,l):this._writeCenterAlong(r,h,l)}_writeAboveAndBelowAlong(e,r,t){const{repeatLabel:s,fontSize:i}=this.evaluatedMeshParams,{shaping:a}=this._current,h=Z(i),l=e.readGeometryForDisplay();if(!l)return;const d=new q;Se(d,l,!1,!1,"esriGeometryPolyline",1);const o=ee(new q,d,h),n=ee(new q,d,-h),u=J(n,"esriGeometryPolyline",!1,!1),p=J(o,"esriGeometryPolyline",!1,!1),_=N(p.paths,a.bounds.width),m=N(u.paths,a.bounds.width);this._current.offsetDirection="above";for(const f of _)C(f,t,r,!!s);this._current.offsetDirection="below";for(const f of m)C(f,t,r,!!s)}_writeCenterAlong(e,r,t){const{repeatLabel:s}=this.evaluatedMeshParams,{shaping:i}=this._current,a=N(e.readLegacyGeometryForDisplay().paths,i.bounds.width);for(const h of a)C(h,t,r,!!s)}_placeSubdivGlyphs(e,r,t,s){const{allowOverrun:i,labelPosition:a,repeatLabelDistance:h}=this.evaluatedMeshParams,l=this._current.zoomRange[0],d=Oe(r),o=this._current.shaping.bounds.width/(1<<R),n=Math.sqrt(h||Ge)/(1<<R),u=Math.min(t,s-t),p=this._current.shaping.isMultiline?O:Math.log2(u/(n+o/2)),_=r===0?p:Math.min(d,p),m=Math.max(l,this._zoomLevel+R-_),f=this._zoomLevel-m,g=this._current.shaping.bounds.width/2*2**f;this._current.shaping.isMultiline?r===0&&this._placeStraight(e,m):i&&f<0?this._placeStraightAlong(e,l):a==="parallel"?this._placeStraightAlong(e,m):a==="curved"&&this._placeCurved(e,m,g)}_placeStraight(e,r){var _,m;const{out:t,id:s,shaping:i,referenceBounds:a}=this._current,{x:h,y:l}=e,d=B(s),o=((_=this.evaluatedMeshParams.scaleInfo)==null?void 0:_.maxScale)??0,n=((m=this.evaluatedMeshParams.scaleInfo)==null?void 0:m.minScale)??0;t.metricStart(new A(d,e.x,e.y,0,0,o,n,null)),t.metricBoxWrite(i.boundsT);const u=e.angle*(180/Math.PI)%360,p=(e.angle*(180/Math.PI)+180)%360;this._writeGlyphs(t,s,h,l,i,0,a,{clipAngle:u,mapAligned:!0,isLineLabel:!0,minZoom:r}),this._writeGlyphs(t,s,h,l,i,0,a,{clipAngle:p,mapAligned:!0,isLineLabel:!0,minZoom:r}),t.metricEnd()}_placeCurved(e,r,t){var u,p;const{out:s,id:i}=this._current,a=e.clone(),h=e.angle*(180/Math.PI)%360,l=(e.angle*(180/Math.PI)+180)%360,d=B(i),o=((u=this.evaluatedMeshParams.scaleInfo)==null?void 0:u.maxScale)??0,n=((p=this.evaluatedMeshParams.scaleInfo)==null?void 0:p.minScale)??0;s.metricStart(new A(d,e.x,e.y,0,0,o,n,null)),this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||(this._placeFirst(a,r,1,h),this._placeBack(e,a,r,t,1,h),this._placeForward(e,a,r,t,1,h)),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||(this._placeFirst(a,r,0,l),this._placeBack(e,a,r,t,0,l),this._placeForward(e,a,r,t,0,l)),s.metricEnd()}_placeStraightAlong(e,r){var f,g;const{out:t,id:s,shaping:i,zoomRange:a,referenceBounds:h}=this._current,{boxBorderLineColor:l,boxBackgroundColor:d}=this.evaluatedMeshParams,o=e.clone(),n=e.angle*(180/Math.PI)%360,u=(e.angle*(180/Math.PI)+180)%360;if(i.glyphs.length>0&&!(!l&&!d)){const x=Math.max(r,a[0],0),y=Math.min(O,a[1]),b=ve(V(),-e.angle),M={minZoom:x,maxZoom:y,clipAngle:n,mapAligned:!0,isLineLabel:!0},v=Z(this.evaluatedMeshParams.offsetX),I=Z(this.evaluatedMeshParams.offsetY);if(!this._verticalPlacement||this._verticalPlacement===this._current.offsetDirection){const w=X(v,-1*I),[S,G]=i.shapeBackground(Y(V(),b,w));t.recordStart(this.instanceId,this.attributeLayout,i.glyphs[0].textureBinding);const z=2*Math.max(S.width,S.height);t.recordBounds(e.x+S.x,e.y+S.y,z,z),this._writeTextBox(t,s,e.x,e.y,G,h,M),t.recordEnd()}if(!this._verticalPlacement||this._verticalPlacement!==this._current.offsetDirection){const w=X(v,I),[S,G]=i.shapeBackground(Y(V(),b,w));M.clipAngle=u,t.recordStart(this.instanceId,this.attributeLayout,i.glyphs[0].textureBinding);const z=2*Math.max(S.width,S.height);t.recordBounds(e.x+S.x,e.y+S.y,z,z),this._writeTextBox(t,s,e.x,e.y,G,h,M),t.recordEnd()}}const p=B(s),_=((f=this.evaluatedMeshParams.scaleInfo)==null?void 0:f.maxScale)??0,m=((g=this.evaluatedMeshParams.scaleInfo)==null?void 0:g.minScale)??0;t.metricStart(new A(p,e.x,e.y,0,0,_,m,null)),this._verticalPlacement&&this._verticalPlacement!==this._current.offsetDirection||this._placeFirst(o,r,1,n,!0),this._verticalPlacement&&this._verticalPlacement===this._current.offsetDirection||this._placeFirst(o,r,0,u,!0),t.metricEnd()}_placeBack(e,r,t,s,i,a){const h=e.clone();let l=e.backwardLength+k;for(;h.prev()&&!(l>=s);)this._placeOnSegment(h,r,l,t,-1,i,a),l+=h.length+k}_placeForward(e,r,t,s,i,a){const h=e.clone();let l=e.remainingLength+k;for(;h.next()&&!(l>=s);)this._placeOnSegment(h,r,l,t,1,i,a),l+=h.length+k}_placeFirst(e,r,t,s,i=!1){const{out:a,id:h,shaping:l,zoomRange:d,referenceBounds:o}=this._current,n=l.glyphs;for(const u of n){const p=u.x>l.bounds.x?t:1-t,_=p*e.remainingLength+(1-p)*e.backwardLength,m=Math.abs(u.x+u.width/2-l.bounds.x),f=Math.max(0,this._zoomLevel+Math.log2(m/(_+k))),g=Math.max(r,i?0:f);u.maxZoom=Math.min(d[1],O),u.angle=e.angle+(1-t)*Math.PI,u.minZoom=Math.max(d[0],g),this._writeLineGlyph(a,h,e.x,e.y,l.bounds,u,s,o,!0),t&&this._isVisible(u.minZoom,u.maxZoom)&&a.metricBoxWrite(u.bounds)}}_placeOnSegment(e,r,t,s,i,a,h){const{out:l,id:d,shaping:o,referenceBounds:n}=this._current,u=o.glyphs,p=e.dx/e.length,_=e.dy/e.length,m={x:e.x+t*-i*p,y:e.y+t*-i*_};for(const f of u){const g=f.x>o.bounds.x?a:1-a;if(!(g&&i===1||!g&&i===-1))continue;const x=Math.abs(f.x+f.width/2-o.bounds.x),y=Math.max(0,this._zoomLevel+Math.log2(x/t)-.1),b=Math.max(s,this._zoomLevel+Math.log2(x/(t+e.length+k)));if(y!==0&&(f.angle=e.angle+(1-a)*Math.PI,f.minZoom=b,f.maxZoom=y,this._writeLineGlyph(l,d,m.x,m.y,o.bounds,f,h,n,!0),a&&this._isVisible(f.minZoom,f.maxZoom))){const M=f.bounds,v=e.x-r.x,I=e.y-r.y,w=new ke(M.center[0]+v,M.center[1]+I,M.width,M.height);l.metricBoxWrite(w)}}}_writeLineGlyph(e,r,t,s,i,a,h,l,d){const o=t+i.x,n=s+i.y,u=2*(this.evaluatedMeshParams.minPixelBuffer?this.evaluatedMeshParams.minPixelBuffer/this._textMeshTransformProps.fontSize:1),p=Math.max(i.width,i.height)*u;e.recordStart(this.instanceId,this.attributeLayout,a.textureBinding),e.recordBounds(o,n,p,p);const{texcoords:_,offsets:m}=a,f=this._textMeshTransformProps.fontSize;this._writeQuad(e,r,t,s,{texcoords:_,offsets:m,fontSize:f,color:oe(this.evaluatedMeshParams.color),isBackground:!1,referenceBounds:l,minZoom:Math.max(this._current.zoomRange[0],a.minZoom),maxZoom:Math.min(this._current.zoomRange[1],a.maxZoom),clipAngle:h,mapAligned:d,isLineLabel:!0}),e.recordEnd()}_isVisible(e,r){const t=this._zoomLevel;return e<=t&&t<=r}}function ee(c,e,r){const{coords:t,lengths:s}=e,i=$(),a=$(),h=$(),l=$(),d=$(),o=$(),n=2;let u=0;for(let p=0;p<s.length;p++){const _=s[p];for(let m=0;m<_;m++){const f=n*(m+u-1),g=n*(m+u),x=n*(m+u+1);m>0?L(i,t[f],t[f+1]):L(i,0,0),L(a,t[g],t[g+1]),m<_-1?L(h,t[x],t[x+1]):L(h,0,0),m===0?L(l,0,0):(H(l,a,i),W(l,l),L(l,l[1],-l[0])),m===_-1?L(d,0,0):(H(d,h,a),W(d,d),L(d,d[1],-d[0])),Me(o,l,d),W(o,o);const y=o[0]*d[0]+o[1]*d[1];y!==0&&Q(o,o,y),Q(o,o,r),c.coords.push(a[0]+o[0],a[1]+o[1])}c.lengths.push(_),u+=_}return c}class Ze extends Ee{constructor(e){super(),this._value=e}resize(e){}read(e,r){return this._value}readWithDefault(e,r,t){return this._value}referencesScale(){return!1}referencesGeometry(){return!1}}const We=()=>Ie.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");async function T(c,e,r=!1){const{defaultValue:t,valueExpressionInfo:s,value:i}=e;if(s){const{expression:a}=s,h=await c.createComputedField({expression:a},r);return h?{...e,computed:h,defaultValue:t}:null}return{...e,computed:new Ze(i),defaultValue:t}}async function te(c,e){const{defaultValue:r,valueExpressionInfo:t}=e,{expression:s}=t,i=await c.createComputedField({expression:s});return i?{...e,computed:i,defaultValue:r}:null}const ae=c=>typeof c!="boolean"&&typeof c!="number"&&"valueExpressionInfo"in c,qe=c=>c.some(e=>{for(const r in e){const t=e[r];if(ae(t))return!0}return!1});class j{static async create(e,r,t){const s={},i=new Map,a=new Map,h=new Map,l=new Map,d=new Map;for(const o in t){const n=t[o];if(n!=null&&typeof n=="object")if(Array.isArray(n)){if(typeof n[0]=="object")throw new Error(`InternalError: Cannot handle ${o}. Nested array params are not supported`);s[o]=n}else if("valueExpressionInfo"in n){if(n.value){s[o]=n.value;continue}const u=await te(e,n);if(!u){s[o]=n.defaultValue;continue}i.set(o,u),s[o]=null}else switch(n.type){case"cim-effect-infos":if(n.effectInfos.some(u=>u.overrides.length)){a.set(o,{effects:await Promise.all(n.effectInfos.map(async u=>{const p=u.overrides.map(_=>T(e,_));return{effect:u.effect,compiledOverrides:(await Promise.all(p)).filter(E)}}))});break}s[o]=n.effectInfos.map(u=>u.effect);break;case"cim-marker-placement-param":n.overrides.length&&h.set(o,{placementInfo:n,compiledOverrides:(await Promise.all(n.overrides.map(u=>T(e,u)))).filter(E)}),s[o]=n.placement;break;case"text-rasterization-param":{if(n.overrides.length){const p=n.overrides.map(_=>T(e,_,n.useLegacyLabelEvaluationRules));l.set(o,{compiledOverrides:(await Promise.all(p)).filter(E),rasterizationParam:n,objectIdToResourceId:new Map});continue}const u={type:"cim-rasterization-info",resource:n.resource};s[o]=await r.fetchResourceImmediate(u)??null;break}case"sprite-rasterization-param":{if(n.overrides.length){const p=n.overrides.map(_=>T(e,_));l.set(o,{compiledOverrides:(await Promise.all(p)).filter(E),rasterizationParam:n,objectIdToResourceId:new Map});continue}if(n.resource.type==="animated"){l.set(o,{compiledOverrides:[],rasterizationParam:n,objectIdToResourceId:new Map});continue}const u={type:"cim-rasterization-info",resource:n.resource};s[o]=await r.fetchResourceImmediate(u)??null;break}case"cim-marker-transform-param":{const{params:u}=n;if(qe(u)){const p={compiledMarkerInfos:[]};await Promise.all(u.map(async _=>{const m={props:{}};for(const f in _)if(ae(_[f])){const g=await te(e,_[f]);m.compiledExpressionMap||(m.compiledExpressionMap=new Map);const x=m.compiledExpressionMap;g&&x.set(f,g)}else m.props[f]=_[f];p.compiledMarkerInfos.push(m)})),d.set(o,p)}else s[o]={type:"cim-marker-transform-info",infos:u};break}default:s[o]=n}else s[o]=n}return new j(t,s,i,a,h,l,d)}constructor(e,r,t,s,i,a,h){this.inputMeshParams=e,this._resolvedMeshParams=r,this._dynamicProperties=t,this._dynamicEffectProperties=s,this._dynamicPlacementProperties=i,this._dynamicAsyncProperties=a,this._dynamicTransformProperties=h,this.evaluator=l=>l}get hasDynamicProperties(){return!!(this._dynamicProperties.size||this._dynamicAsyncProperties.size||this._dynamicEffectProperties.size||this._dynamicTransformProperties.size||this._dynamicPlacementProperties.size)}get evaluatedMeshParams(){return this._evaluatedMeshParams||(this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams)),this._evaluatedMeshParams}enqueueRequest(e,r,t){for(const s of this._dynamicAsyncProperties.values()){const i=we(s.rasterizationParam.resource);s.rasterizationParam.resource.type==="animated"&&s.rasterizationParam.resource.randomizeStartTime&&(i.primitiveName="__RESERVED__PRIMITIVE__NAME__",i.startGroup=Be(r.getObjectId()||0));for(const{primitiveName:h,propertyName:l,computed:d,defaultValue:o,valueExpressionInfo:n}of s.compiledOverrides)try{const u=s.rasterizationParam.resource.type==="animated"?i.primitiveName:h;ze(i,u,l,d,r,t,o)}catch(u){We().errorOnce(new be("invalid-arcade-expression",`Encountered an error when evaluating the arcade expression '${n==null?void 0:n.expression}' (primitive: '${h}', property: '${l}')`,u))}const a=e.enqueueRequest({type:"cim-rasterization-info",resource:i});s.objectIdToResourceId.set(r.getObjectId(),a)}}evaluateMeshParams(e,r,t){for(const[s,i]of this._dynamicProperties.entries())this._resolvedMeshParams[s]=i.computed.readWithDefault(r,t,i.defaultValue);for(const[s,i]of this._dynamicPlacementProperties.entries())for(const{computed:a,defaultValue:h,propertyName:l}of i.compiledOverrides){const d=a.readWithDefault(r,t,h);i.placementInfo.placement[l]=d,this._resolvedMeshParams[s]=i.placementInfo.placement}for(const[s,i]of this._dynamicEffectProperties.entries())for(const a of i.effects){for(const{computed:h,defaultValue:l,propertyName:d}of a.compiledOverrides){const o=h.readWithDefault(r,t,l);a.effect[d]=o}this._resolvedMeshParams[s]=i.effects.map(h=>h.effect)}for(const[s,i]of this._dynamicTransformProperties.entries()){const a={type:"cim-marker-transform-info",infos:[]};for(const h of i.compiledMarkerInfos){const l={...h.props};if(h.compiledExpressionMap)for(const[d,o]of h.compiledExpressionMap){const n=o.computed.readWithDefault(r,t,o.defaultValue);l[d]=typeof n=="number"||typeof n=="boolean"?n:o.defaultValue}a.infos.push(l)}this._resolvedMeshParams[s]=a}for(const[s,i]of this._dynamicAsyncProperties.entries()){const a=i.objectIdToResourceId.get(r.getObjectId());if(a==null)continue;const h=e.getResource(a);this._resolvedMeshParams[s]=h}return this._evaluatedMeshParams=this.evaluator(this._resolvedMeshParams),this.evaluatedMeshParams}}class tt{async createMeshWriter(e,r,t,s){const i=this._getMeshWriter(s.techniqueType),a=await j.create(e,r,s.inputParams),h=new i(s.id,a,s.optionalAttributes,t);return await h.loadDependencies(),h}_getMeshWriter(e){switch(e){case P.Fill:return ye;case P.DotDensity:return xe;case P.ComplexFill:return ge;case P.PatternFill:return _e;case P.OutlineFill:return pe;case P.PatternOutlineFill:return fe;case P.ComplexOutlineFill:return me;case P.Marker:return de;case P.PieChart:return ue;case P.Text:return se;case P.Line:return le;case P.TexturedLine:return he;case P.Heatmap:return ce;case P.Label:return Ve;case P.Test:throw new Error("Internal Error: Found invalid mesh writer")}}}export{tt as W,Ze as r};
