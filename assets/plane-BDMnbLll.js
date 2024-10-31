import{hH as V,fq as b,cf as f,hA as g,bN as l,dq as $,ce as p,cb as X}from"./index-CpEBwgYb.js";import{e as q}from"./mat3f64-q3fE-ZOt.js";import{e as x}from"./mat4f64-CSKppSlJ.js";import{e as C}from"./quatf64-Bdb9ZJJK.js";class r{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&V(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new r(b)}static createVec3f64(){return new r(f)}static createVec4f64(){return new r(g)}static createMat3f64(){return new r(q)}static createMat4f64(){return new r(x)}static createQuatf64(){return new r(C)}get test(){}}r.createVec2f64();const H=r.createVec3f64();r.createVec4f64();r.createMat3f64();const Y=r.createMat4f64(),Z=r.createQuatf64();function L(t=d){return[t[0],t[1],t[2],t[3]]}function j(t){return t}function y(t,e,c,s=L()){const h=c[0]-e[0],I=c[1]-e[1],a=c[2]-e[2],i=t[0]-e[0],w=t[1]-e[1],T=t[2]-e[2],_=I*T-a*w,E=a*i-h*T,P=h*w-I*i,A=_*_+E*E+P*P,F=Math.abs(A-1)>1e-5&&A>1e-12?1/Math.sqrt(A):1;return s[0]=_*F,s[1]=E*F,s[2]=P*F,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function O(t,e,c,s=0,h=Math.floor(c*(1/3)),I=Math.floor(c*(2/3))){if(c<3)return!1;e(N,s);let a=h,i=!1;for(;a<c-1&&!i;)e(n,a),a++,i=!l(N,n);if(!i)return!1;for(a=Math.max(a,I),i=!1;a<c&&!i;)e(o,a),a++,$(u,N,n),p(u,u),$(m,n,o),p(m,m),i=!l(N,o)&&!l(n,o)&&Math.abs(X(u,m))<Q;return i?(y(N,n,o,t),!0):(s!==0||h!==1||I!==2)&&O(t,e,c,0,1,2)}const Q=.99619469809,N=f(),n=f(),o=f(),u=f(),m=f(),d=[0,0,1,0];var M;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(M||(M={}));M.INFINITE_MIN|M.INFINITE_MAX;M.INFINITE_MAX;export{L as E,j as F,O as X,H as c,Y as f,Z as o};
