import{v as t,y as l,A as V,bH as $,fx as d,eN as w,aK as E,fy as m,cX as g,fz as h,fu as c,br as x,fA as z,fB as i,cf as H}from"./index-CpEBwgYb.js";import{p as J}from"./normalizeUtilsSync-DTAla0q_.js";import{e as p}from"./mat3f64-q3fE-ZOt.js";let s=class extends ${constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:d(o.extent)}get coords(){var e;const o=(e=this.element.georeference)==null?void 0:e.coords;return w(o,this.spatialReference).geometry}get normalizedCoords(){return E.fromJSON(J(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([V("esri.layers.support.MediaElementView")],s);const r=H(),a=p(),u=p(),f=p();function X(o,e,n){return m(r,e[0],e[1],1),g(r,r,h(a,n)),r[2]===0?c(o,r[0],r[1]):c(o,r[0]/r[2],r[1]/r[2])}function k(o,e,n){return y(u,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),y(f,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),x(o,z(u,u),f),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function y(o,e,n,b,v,C,B,S,j){i(o,e,b,C,n,v,B,1,1,1),m(r,S,j,1),z(a,o);const[A,N,R]=g(r,r,h(a,a));return i(a,A,0,0,0,N,0,0,0,R),x(o,a,o)}export{k as j,s as m,X as p};
