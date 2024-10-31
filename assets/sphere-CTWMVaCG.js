import{cb as E,hD as a,ig as L,hH as B,dn as y,cf as l,dp as F,dq as h,dt as M,ds as g,hA as T,ca as k,c0 as b,ih as v,b$ as G,ii as z,cc as A,ij as I,eg as J,dr as K,ik as d,ce as Q,il as R,fy as j,im as U,io as W,hE as tt}from"./index-CpEBwgYb.js";import{c as f,f as nt}from"./plane-BDMnbLll.js";function it(t,i){const n=E(t,i)/(a(t)*a(i));return-L(n)}class et{constructor(i){this._allocator=i,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&B(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const i=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*O);this._items.length=Math.min(i,this._items.length),this._itemsPtr=0}_grow(){for(let i=0;i<Math.max(8,Math.min(this._items.length,O));i++)this._items.push(this._allocator())}}const O=1024;function Z(t){return t?C(y(t.origin),y(t.direction)):C(l(),l())}function C(t,i){return{origin:t,direction:i}}function Ot(t,i){const n=ot.get();return n.origin=t,n.direction=i,n}function st(t,i,n=Z()){return F(n.origin,t),h(n.direction,i,t),n}function rt(t,i,n){const e=E(t.direction,h(n,i,t.origin));return M(n,t.origin,g(n,t.direction,e)),n}const ot=new et(()=>Z()),ct=w();function w(){return T()}const ut=k,at=k;function D(t,i){return b(i,t)}function ft(t,i){return v(t[0],t[1],t[2],i)}function ht(t){return t}function lt(t){t[0]=t[1]=t[2]=t[3]=0}function gt(t,i){return t[0]=t[1]=t[2]=0,t[3]=i,t}function $(t){return t[3]}function mt(t){return t}function dt(t,i,n,e){return v(t,i,n,e)}function _t(t,i,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+i,n}function Mt(t,i,n){return t!==n&&D(t,n),n}function p(t,i,n){if(i==null||!H(t,i,_))return!1;let{t0:e,t1:s}=_;if((e<0||s<e&&s>0)&&(e=s),e<0)return!1;if(n){const{origin:r,direction:o}=i;n[0]=r[0]+o[0]*e,n[1]=r[1]+o[1]*e,n[2]=r[2]+o[2]*e}return!0}function $t(t,i,n){const e=st(i,n);if(!H(t,e,_))return[];const{origin:s,direction:r}=e,{t0:o,t1:c}=_,u=m=>{const P=l();return tt(P,s,r,m),x(t,P,P)};return Math.abs(o-c)<G()?[u(o)]:[u(o),u(c)]}const _={t0:0,t1:0};function H(t,i,n){const{origin:e,direction:s}=i,r=pt;r[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2];const o=s[0]*s[0]+s[1]*s[1]+s[2]*s[2];if(o===0)return!1;const c=2*(s[0]*r[0]+s[1]*r[1]+s[2]*r[2]),u=c*c-4*o*(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]-t[3]*t[3]);if(u<0)return!1;const m=Math.sqrt(u);return n.t0=(-c-m)/(2*o),n.t1=(-c+m)/(2*o),!0}const pt=l();function Pt(t,i){return p(t,i,null)}function St(t,i,n){if(p(t,i,n))return n;const e=N(t,i,f.get());return M(n,i.origin,g(f.get(),i.direction,z(i.origin,e)/a(i.direction))),n}function N(t,i,n){const e=f.get(),s=nt.get();A(e,i.origin,i.direction);const r=$(t);A(n,e,i.origin),g(n,n,1/a(n)*r);const o=V(t,i.origin),c=it(i.origin,n);return I(s,c+o,e),J(n,n,s),n}function bt(t,i,n){return p(t,i,n)?n:(rt(i,t,n),x(t,n,n))}function x(t,i,n){const e=h(f.get(),i,t),s=g(f.get(),e,t[3]/a(e));return M(n,s,t)}function qt(t,i){const n=h(f.get(),i,t),e=K(n),s=t[3]*t[3];return Math.sqrt(Math.abs(e-s))}function V(t,i){const n=h(f.get(),i,t),e=a(n),s=$(t),r=s+Math.abs(s-e);return L(s/r)}const S=l();function X(t,i,n,e){const s=h(S,i,t);switch(n){case d.X:{const r=R(s,S)[2];return j(e,-Math.sin(r),Math.cos(r),0)}case d.Y:{const r=R(s,S),o=r[1],c=r[2],u=Math.sin(o);return j(e,-u*Math.cos(c),-u*Math.sin(c),Math.cos(o))}case d.Z:return Q(e,s);default:return}}function Y(t,i){const n=h(q,i,t);return a(n)-t[3]}function wt(t,i,n,e){const s=Y(t,i),r=X(t,i,d.Z,q),o=g(q,r,n-s);return M(e,i,o)}function xt(t,i){const n=U(t,i),e=$(t);return n<=e*e}function yt(t,i,n=T()){const e=z(t,i),s=t[3],r=i[3];return e+r<s?(b(n,t),n):e+s<r?(b(n,i),n):(W(n,t,i,(e+r-s)/(2*e)),n[3]=(e+s+r)/2,n)}const q=l(),At=w();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:ct,altitudeAt:Y,angleToSilhouette:V,axisAt:X,clear:lt,closestPoint:bt,closestPointOnSilhouette:N,containsPoint:xt,copy:D,create:w,distanceToSilhouette:qt,elevate:_t,equals:at,exactEquals:ut,fromCenterAndRadius:ft,fromRadius:gt,fromValues:dt,getCenter:mt,getRadius:$,intersectLine:$t,intersectRay:p,intersectRayClosestSilhouette:St,intersectsRay:Pt,projectPoint:x,setAltitudeAt:wt,setExtent:Mt,tmpSphere:At,union:yt,wrap:ht},Symbol.toStringTag,{value:"Module"}));export{Pt as H,$ as N,D as T,mt as V,w as _,xt as a,Ot as l,Z as m,et as s};
