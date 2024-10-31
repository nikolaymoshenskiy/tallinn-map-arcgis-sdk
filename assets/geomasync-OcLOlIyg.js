import{aI as ln,X as B,f2 as d,aB as L,J as I,aJ as b,aK as S,aL as H,eX as V,C as X,fo as on,b6 as dn}from"./index-CpEBwgYb.js";import{a0 as o,a as m,X as K,v as Q,w as _,m as E,b as i,r as s,U as v,Q as g,Z as T,B as U,P as w,af as G,ag as C,ah as q,g as R,F as wn,ai as mn,aj as hn,E as W,ak as yn,N,A as O,al as pn,am as vn,I as Y,an as gn,ao as Z}from"./arcadeUtils-gxQ4VWKh.js";import{c as P,r as J,b as y}from"./TimeOnly-DUfmec6Z.js";import{l as $}from"./portalUtils-BZdxMuG3.js";import{disjoint as Pn,intersects as In,touches as An,crosses as Fn,within as Rn,contains as xn,overlaps as bn,equals as Nn,relate as On,intersect as Sn,union as jn,difference as Dn,symmetricDifference as Ln,clip as Cn,cut as Jn,planarArea as nn,geodesicArea as en,planarLength as M,geodesicLength as z,distance as Tn,densify as rn,geodesicDensify as tn,generalize as Un,buffer as Zn,geodesicBuffer as Mn,offset as kn,rotate as an,simplify as sn,isSimple as En,convexHull as qn,nearestCoordinate as Wn,nearestVertex as zn}from"./geometryEngineAsync-Adm6gXrO.js";import"./ImmutableArray-BPVd6ESQ.js";import"./number-1Mz_8iO1.js";import"./featureConversionUtils-CJYQdFhy.js";import"./OptimizedFeature-7juV2tZm.js";import"./OptimizedGeometry-vU5jWBvU.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";async function un(a,e,r){var t,u;if(!((t=ln)==null?void 0:t.findCredential(a.restUrl)))return null;if(a.loadStatus==="loaded"&&e===""&&((u=a.user)!=null&&u.sourceJSON)&&r===!1)return a.user.sourceJSON;const l={responseType:"json",query:{f:"json"}};if(r&&(l.query.returnUserLicenseTypeExtensions=!0),e===""){const f=await B(a.restUrl+"/community/self",l);if(f.data){const h=f.data;if(h!=null&&h.username)return h}return null}const n=await B(a.restUrl+"/community/users/"+e,l);if(n.data){const f=n.data;return f.error?null:f}return null}function cn(a){return on.indexOf("4.")===0?S.fromExtent(a):new S({spatialReference:a.spatialReference,rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]})}function A(a,e,r){if(m(a,2,2,e,r),!(a[0]instanceof d&&a[1]instanceof d)){if(!(a[0]instanceof d&&a[1]===null)){if(!(a[1]instanceof d&&a[0]===null)){if(a[0]!==null||a[1]!==null)throw new i(e,s.InvalidParameter,r)}}}}async function fn(a,e){if(a.type!=="polygon"&&a.type!=="polyline"&&a.type!=="extent")return 0;let r=1;(a.spatialReference.vcsWkid||a.spatialReference.latestVcsWkid)&&(r=gn(a.spatialReference)/dn(a.spatialReference));let c=0;if(a.type==="polyline")for(const n of a.paths)for(let t=1;t<n.length;t++)c+=Z(n[t],n[t-1],r);else if(a.type==="polygon")for(const n of a.rings){for(let t=1;t<n.length;t++)c+=Z(n[t],n[t-1],r);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=Z(n[0],n[n.length-1],r))}else a.type==="extent"&&(c+=2*Z([a.xmin,a.ymin,0],[a.xmax,a.ymin,0],r),c+=2*Z([a.xmin,a.ymin,0],[a.xmin,a.ymax,0],r),c*=2,c+=4*Math.abs(w(a.zmax,0)*r-w(a.zmin,0)*r));const l=new I({hasZ:!1,hasM:!1,spatialReference:a.spatialReference,paths:[[0,0],[0,c]]});return M(l,e)}function ee(a){a.mode==="async"&&(a.functions.disjoint=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(A(n=o(n),e,r),n[0]===null||n[1]===null||Pn(n[0],n[1])))},a.functions.intersects=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(A(n=o(n),e,r),n[0]!==null&&n[1]!==null&&In(n[0],n[1])))},a.functions.touches=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(A(n=o(n),e,r),n[0]!==null&&n[1]!==null&&An(n[0],n[1])))},a.functions.crosses=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(A(n=o(n),e,r),n[0]!==null&&n[1]!==null&&Fn(n[0],n[1])))},a.functions.within=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(A(n=o(n),e,r),n[0]!==null&&n[1]!==null&&Rn(n[0],n[1])))},a.functions.contains=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(A(n=o(n),e,r),n[0]!==null&&n[1]!==null&&xn(n[0],n[1])))},a.functions.overlaps=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(A(n=o(n),e,r),n[0]!==null&&n[1]!==null&&bn(n[0],n[1])))},a.functions.equals=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(m(n,2,2,e,r),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?Nn(n[0],n[1]):(K(n[0])&&K(n[1])||!!(Q(n[0])&&Q(n[1])||_(n[0])&&_(n[1])))&&n[0].equals(n[1]))))},a.functions.relate=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,3,3,e,r),n[0]instanceof d&&n[1]instanceof d)return On(n[0],n[1],E(n[2]));if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new i(e,s.InvalidParameter,r)})},a.functions.intersection=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(A(n=o(n),e,r),n[0]===null||n[1]===null?null:Sn(n[0],n[1])))},a.functions.union=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{const t=[];if((n=o(n)).length===0)throw new i(e,s.WrongNumberOfParameters,r);if(n.length===1)if(v(n[0])){const u=o(n[0]);for(let f=0;f<u.length;f++)if(u[f]!==null){if(!(u[f]instanceof d))throw new i(e,s.InvalidParameter,r);t.push(u[f])}}else{if(!g(n[0])){if(n[0]instanceof d)return T(P(n[0]),e.spatialReference);if(n[0]===null)return null;throw new i(e,s.InvalidParameter,r)}{const u=o(n[0].toArray());for(let f=0;f<u.length;f++)if(u[f]!==null){if(!(u[f]instanceof d))throw new i(e,s.InvalidParameter,r);t.push(u[f])}}}else for(let u=0;u<n.length;u++)if(n[u]!==null){if(!(n[u]instanceof d))throw new i(e,s.InvalidParameter,r);t.push(n[u])}return t.length===0?null:jn(t)})},a.functions.difference=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(A(n=o(n),e,r),n[0]===null?null:n[1]===null?P(n[0]):Dn(n[0],n[1])))},a.functions.symmetricdifference=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>(A(n=o(n),e,r),n[0]===null&&n[1]===null?null:n[0]===null?P(n[1]):n[1]===null?P(n[0]):Ln(n[0],n[1])))},a.functions.clip=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,2,e,r),!(n[1]instanceof L)&&n[1]!==null)throw new i(e,s.InvalidParameter,r);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);return n[1]===null?null:Cn(n[0],n[1])})},a.functions.cut=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,2,e,r),!(n[1]instanceof I)&&n[1]!==null)throw new i(e,s.InvalidParameter,r);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);return n[1]===null?[P(n[0])]:Jn(n[0],n[1])})},a.functions.area=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(m(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(U(n[0])){const t=await n[0].sumArea(J(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,r);return t}if(v(n[0])||g(n[0])){const t=G(n[0],e.spatialReference);return t===null?0:nn(t,J(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);return nn(n[0],J(w(n[1],-1)))})},a.functions.areageodetic=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(m(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(U(n[0])){const t=await n[0].sumArea(J(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,r);return t}if(v(n[0])||g(n[0])){const t=G(n[0],e.spatialReference);return t===null?0:en(t,J(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);return en(n[0],J(w(n[1],-1)))})},a.functions.length=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(m(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(U(n[0])){const t=await n[0].sumLength(y(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,r);return t}if(v(n[0])||g(n[0])){const t=C(n[0],e.spatialReference);return t===null?0:M(t,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);return M(n[0],y(w(n[1],-1)))})},a.functions.length3d=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(m(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(v(n[0])||g(n[0])){const t=C(n[0],e.spatialReference);return t===null?0:t.hasZ===!0?fn(t,y(w(n[1],-1))):M(t,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);return n[0].hasZ===!0?fn(n[0],y(w(n[1],-1))):M(n[0],y(w(n[1],-1)))})},a.functions.lengthgeodetic=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(m(n,1,2,e,r),(n=o(n))[0]===null)return 0;if(U(n[0])){const t=await n[0].sumLength(y(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,r);return t}if(v(n[0])||g(n[0])){const t=C(n[0],e.spatialReference);return t===null?0:z(t,y(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);return z(n[0],y(w(n[1],-1)))})},a.functions.distance=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{n=o(n),m(n,2,3,e,r);let t=n[0];(v(n[0])||g(n[0]))&&(t=q(n[0],e.spatialReference));let u=n[1];if((v(n[1])||g(n[1]))&&(u=q(n[1],e.spatialReference)),!(t instanceof d))throw new i(e,s.InvalidParameter,r);if(!(u instanceof d))throw new i(e,s.InvalidParameter,r);return Tn(t,u,y(w(n[2],-1)))})},a.functions.distancegeodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{n=o(n),m(n,2,3,e,r);const t=n[0],u=n[1];if(!(t instanceof b))throw new i(e,s.InvalidParameter,r);if(!(u instanceof b))throw new i(e,s.InvalidParameter,r);const f=new I({paths:[],spatialReference:t.spatialReference});return f.addPath([t,u]),z(f,y(w(n[2],-1)))})},a.functions.densify=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);const t=R(n[1]);if(isNaN(t))throw new i(e,s.InvalidParameter,r);if(t<=0)throw new i(e,s.InvalidParameter,r);return n[0]instanceof S||n[0]instanceof I?rn(n[0],t,y(w(n[2],-1))):n[0]instanceof L?rn(cn(n[0]),t,y(w(n[2],-1))):n[0]})},a.functions.densifygeodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);const t=R(n[1]);if(isNaN(t))throw new i(e,s.InvalidParameter,r);if(t<=0)throw new i(e,s.InvalidParameter,r);return n[0]instanceof S||n[0]instanceof I?tn(n[0],t,y(w(n[2],-1))):n[0]instanceof L?tn(cn(n[0]),t,y(w(n[2],-1))):n[0]})},a.functions.generalize=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,4,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);const t=R(n[1]);if(isNaN(t))throw new i(e,s.InvalidParameter,r);return Un(n[0],t,wn(w(n[2],!0)),y(w(n[3],-1)))})},a.functions.buffer=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);const t=R(n[1]);if(isNaN(t))throw new i(e,s.InvalidParameter,r);return t===0?P(n[0]):Zn(n[0],t,y(w(n[2],-1)))})},a.functions.buffergeodetic=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);const t=R(n[1]);if(isNaN(t))throw new i(e,s.InvalidParameter,r);return t===0?P(n[0]):Mn(n[0],t,y(w(n[2],-1)))})},a.functions.offset=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,6,e,r),n[0]===null)return null;if(!(n[0]instanceof S||n[0]instanceof I))throw new i(e,s.InvalidParameter,r);const t=R(n[1]);if(isNaN(t))throw new i(e,s.InvalidParameter,r);const u=R(w(n[4],10));if(isNaN(u))throw new i(e,s.InvalidParameter,r);const f=R(w(n[5],0));if(isNaN(f))throw new i(e,s.InvalidParameter,r);return kn(n[0],t,y(w(n[2],-1)),E(w(n[3],"round")).toLowerCase(),u,f)})},a.functions.rotate=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,3,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);const t=n[0]instanceof L?S.fromExtent(n[0]):n[0],u=R(n[1]);if(isNaN(u))throw new i(e,s.InvalidParameter,r);const f=w(n[2],null);if(f===null)return an(t,u);if(f instanceof b)return an(t,u,f);throw new i(e,s.InvalidParameter,r)})},a.functions.centroid=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,1,1,e,r),n[0]===null)return null;let t=n[0];if((v(n[0])||g(n[0]))&&(t=q(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new i(e,s.InvalidParameter,r);return t instanceof b?T(P(t),e.spatialReference):t instanceof S?t.centroid:t instanceof I?mn(t):t instanceof H?hn(t):t instanceof L?t.center:null})},a.functions.measuretocoordinate=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,2,e,r),n[0]===null)return null;let t=n[0];if((v(n[0])||g(n[0]))&&(t=C(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new i(e,s.InvalidParameter,r);if(!(t instanceof I))throw new i(e,s.InvalidParameter,r);if(W(n[1]===!1))throw new i(e,s.InvalidParameter,r);const u=yn(t,n[1]);return u?N.convertObjectToArcadeDictionary(u,O(e),!1,!0):null})},a.functions.pointtocoordinate=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,2,e,r),n[0]===null)return null;let t=n[0];if((v(n[0])||g(n[0]))&&(t=C(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new i(e,s.InvalidParameter,r);if(!(t instanceof I))throw new i(e,s.InvalidParameter,r);const u=n[1];if(u===null)return null;if(!(u instanceof b))throw new i(e,s.InvalidParameter,r);if(W(n[1]===!1))throw new i(e,s.InvalidParameter,r);const f=pn(t,u);return f?N.convertObjectToArcadeDictionary(f,O(e),!1,!0):null})},a.functions.distancetocoordinate=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,2,2,e,r),n[0]===null)return null;let t=n[0];if((v(n[0])||g(n[0]))&&(t=C(n[0],e.spatialReference)),t===null)return null;if(!(t instanceof d))throw new i(e,s.InvalidParameter,r);if(!(t instanceof I))throw new i(e,s.InvalidParameter,r);if(W(n[1]===!1))throw new i(e,s.InvalidParameter,r);const u=vn(t,n[1]);return u?N.convertObjectToArcadeDictionary(u,O(e),!1,!0):null})},a.functions.multiparttosinglepart=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(n=o(n),m(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);if(n[0]instanceof b)return[T(P(n[0]),e.spatialReference)];if(n[0]instanceof L)return[T(P(n[0]),e.spatialReference)];const t=await sn(n[0]);if(t instanceof S){const u=[],f=[];for(let h=0;h<t.rings.length;h++)if(t.isClockwise(t.rings[h])){const F=V({rings:[t.rings[h]],hasZ:t.hasZ===!0,hasM:t.hasM===!0,spatialReference:t.spatialReference.toJSON()});u.push(F)}else f.push({ring:t.rings[h],pt:t.getPoint(h,0)});for(let h=0;h<f.length;h++)for(let F=0;F<u.length;F++)if(u[F].contains(f[h].pt)){u[F].addRing(f[h].ring);break}return u}if(t instanceof I){const u=[];for(let f=0;f<t.paths.length;f++){const h=V({paths:[t.paths[f]],hasZ:t.hasZ===!0,hasM:t.hasM===!0,spatialReference:t.spatialReference.toJSON()});u.push(h)}return u}if(n[0]instanceof H){const u=[],f=T(P(n[0]),e.spatialReference);for(let h=0;h<f.points.length;h++)u.push(f.getPoint(h));return u}return null})},a.functions.issimple=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,1,1,e,r),n[0]===null)return!0;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);return En(n[0])})},a.functions.simplify=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);return sn(n[0])})},a.functions.convexhull=function(e,r){return a.standardFunctionAsync(e,r,(c,l,n)=>{if(n=o(n),m(n,1,1,e,r),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(e,s.InvalidParameter,r);return qn(n[0])})},a.functions.getuser=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{var h,F;m(n,0,2,e,r);let t=w(n[1],""),u=t===!0;if(t=t===!0||t===!1?"":E(t),n.length===0||n[0]instanceof Y){let j;j=(h=e.services)!=null&&h.portal?e.services.portal:X.getDefault(),n.length>0&&(j=$(n[0],j));const D=await un(j,t,u);if(D){const x=JSON.parse(JSON.stringify(D));for(const p of["lastLogin","created","modified"])x[p]!==void 0&&x[p]!==null&&(x[p]=new Date(x[p]));return N.convertObjectToArcadeDictionary(x,O(e))}return null}let f=null;if(U(n[0])&&(f=n[0]),f){if(u=!1,t)return null;await f.load();const j=await f.getOwningSystemUrl();if(!j){if(!t){const p=await f.getIdentityUser();return p?N.convertObjectToArcadeDictionary({username:p},O(e)):null}return null}let D;D=(F=e.services)!=null&&F.portal?e.services.portal:X.getDefault(),D=$(new Y(j),D);const x=await un(D,t,u);if(x){const p=JSON.parse(JSON.stringify(x));for(const k of["lastLogin","created","modified"])p[k]!==void 0&&p[k]!==null&&(p[k]=new Date(p[k]));return N.convertObjectToArcadeDictionary(p,O(e))}return null}throw new i(e,s.InvalidParameter,r)})},a.functions.nearestcoordinate=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(n=o(n),m(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new i(e,s.InvalidParameter,r);if(!(n[1]instanceof b||n[1]===null))throw new i(e,s.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;const t=await Wn(n[0],n[1]);return t===null?null:N.convertObjectToArcadeDictionary({coordinate:t.coordinate,distance:t.distance,sideOfLine:t.distance===0?"straddle":t.isRightSide?"right":"left"},O(e),!1,!0)})},a.functions.nearestvertex=function(e,r){return a.standardFunctionAsync(e,r,async(c,l,n)=>{if(n=o(n),m(n,2,2,e,r),!(n[0]instanceof d||n[0]===null))throw new i(e,s.InvalidParameter,r);if(!(n[1]instanceof b||n[1]===null))throw new i(e,s.InvalidParameter,r);if(n[0]===null||n[1]===null)return null;const t=await zn(n[0],n[1]);return t===null?null:N.convertObjectToArcadeDictionary({coordinate:t.coordinate,distance:t.distance,sideOfLine:t.distance===0?"straddle":t.isRightSide?"right":"left"},O(e),!1,!0)})})}export{ee as registerFunctions};
