import{cw as z,ah as G,aJ as j,cx as A,cy as D,cz as v,cA as O,cB as V,cC as _,f as B,cD as L,cE as P}from"./index-CpEBwgYb.js";import{c as T,B as R}from"./utils-CChpq_dL.js";let m=null;const U=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Y(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function W(t,e,o,r){const a=z(o)?G(o):null,c=a?Math.round((a.valid[1]-a.valid[0])/e.scale[0]):null;return t.map(i=>{const s=new j(i.geometry);return A(e,s,s),i.geometry=a?Y(s,c??0,r[0]):s,i})}function k(t,e=18,o,r,a){const c=new Float64Array(r*a);e=Math.round(L(e));let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;const N=P(o);for(const{geometry:h,attributes:g}of t){const{x:$,y:u}=h,y=Math.max(0,$-e),M=Math.max(0,u-e),F=Math.min(a,u+e),I=Math.min(r,$+e),x=+N(g);for(let f=M;f<F;f++)for(let d=y;d<I;d++){const w=f*r+d,b=D(d-$,f-u,e)*x,l=c[w]+=b;i=Math.min(i,l),s=Math.max(s,l)}}return{min:i,max:s}}function Z(t){const e=U.exec(t);if(!e)return null;const{hh:o,mm:r,ss:a,ms:c}=e.groups;return Number(o)*v.hours+Number(r)*v.minutes+Number(a)*v.seconds+Number(c||0)}async function q(t,e,o=!0){if(!e)return[];const{field:r,field2:a,field3:c,fieldDelimiter:i,fieldInfos:s,timeZone:N}=t,h=r&&(s==null?void 0:s.find(l=>l.name.toLowerCase()===r.toLowerCase())),g=!!h&&O(h),$=!!h&&V(h),u=t.valueExpression,y=t.normalizationType,M=t.normalizationField,F=t.normalizationTotal,I=[],x=t.viewInfoParams;let f=null,d=null;if(u){if(!m){const{arcadeUtils:l}=await _();m=l}m.hasGeometryOperations(u)&&await m.enableGeometryOperations(),f=m.createFunction(u),d=x?m.getViewInfo({viewingMode:x.viewingMode,scale:x.scale,spatialReference:new B(x.spatialReference)}):null}const w=t.fieldInfos,b=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&w?{fields:w}:null;return e.forEach(l=>{const p=l.attributes;let n;if(u){const E=b?{...l,layer:b}:l,C=m.createExecContext(E,d,N);n=m.executeFunction(f,C)}else p&&(n=p[r],a?(n=`${T(n)}${i}${T(p[a])}`,c&&(n=`${n}${i}${T(p[c])}`)):typeof n=="string"&&o&&($?n=n?new Date(n).getTime():null:g&&(n=n?Z(n):null)));if(y&&typeof n=="number"&&isFinite(n)){const E=p&&parseFloat(p[M]);n=R(n,y,E,F)}I.push(n)}),I}export{q as b,W as j,Z as w,k as x};
