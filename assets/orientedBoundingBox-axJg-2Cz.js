import{ds as it,dt as lt,cf as d,fq as Lt,cg as Pt,cZ as kt,fy as W,gc as w,ht as mt,hu as At,hv as Ut,hw as yt,bt as ta,cX as aa,hx as sa,hy as Ct,cT as xt,hz as Xt,hA as ea,ej as Bt,ei as ia,hB as na,hC as ha,eh as oa,hD as Ft,hE as gt,hF as ra,hG as ca,hi as vt}from"./index-CpEBwgYb.js";import{t as ua,e as da}from"./mat3f64-q3fE-ZOt.js";import{e as fa}from"./mat4f64-CSKppSlJ.js";import{X as la,O as U,x as ma}from"./quat-CYXHRxS0.js";import{o as Rt,e as St}from"./quatf64-Bdb9ZJJK.js";import{a as _t}from"./spatialReferenceEllipsoidUtils-CWjarewc.js";import{u as _a}from"./computeTranslationToOriginAndRotation-Do3yxRCy.js";import{c as Tt,o as ga,F as pt}from"./plane-BDMnbLll.js";class Nt{constructor(t,a,s=a){this.data=t,this.size=a,this.stride=s}}class Wa extends Nt{constructor(t,a,s,n=!1,h=s){super(t,s,h),this.indices=a,this.exclusive=n}}const nt=1e-6,ht=d(),bt=d();function ba(e,t){const{data:a,size:s}=e,n=a.length/s;if(n<=0)return;const h=new Ia(e);qt(ht,h.minProj,h.maxProj),dt(ht,ht,.5),N(bt,h.maxProj,h.minProj);const o=It(bt),c=new qa;c.quality=o,n<14&&(e=new Nt(new Float64Array(h.buffer,112,42),3));const i=d(),r=d(),b=d(),m=d(),z=d(),A=d(),M=d();switch(Ma(h,e,M,i,r,b,m,z,A,c)){case 1:return void Yt(ht,bt,t);case 2:return void pa(e,m,t)}$a(e,M,i,r,b,m,z,A,c),Zt(e,c.b0,c.b1,c.b2,at,st);const Q=d();N(Q,st,at),c.quality=It(Q),c.quality<o?Dt(c.b0,c.b1,c.b2,at,st,Q,t):Yt(ht,bt,t)}function Ma(e,t,a,s,n,h,o,c,i,r){return Pa(e,s,n),wt(s,n)<nt?1:(N(o,s,n),g(o,o),ja(t,s,o,h)<nt?2:(N(c,n,h),g(c,c),N(i,h,s),g(i,i),V(a,c,o),g(a,a),D(t,a,o,c,i,r),0))}const ot=d(),rt=d(),p=d(),y=d(),I=d(),O=d(),X=d(),B=d();function $a(e,t,a,s,n,h,o,c,i){xa(e,t,a,ot,rt),ot[0]!==void 0&&(N(p,ot,a),g(p,p),N(y,ot,s),g(y,y),N(I,ot,n),g(I,I),V(O,y,h),g(O,O),V(X,I,o),g(X,X),V(B,p,c),g(B,B),D(e,O,h,y,p,i),D(e,X,o,I,y,i),D(e,B,c,p,I,i)),rt[0]!==void 0&&(N(p,rt,a),g(p,p),N(y,rt,s),g(y,y),N(I,rt,n),g(I,I),V(O,y,h),g(O,O),V(X,I,o),g(X,X),V(B,p,c),g(B,B),D(e,O,h,y,p,i),D(e,X,o,I,y,i),D(e,B,c,p,I,i))}function Pa(e,t,a){let s=wt(e.maxVert[0],e.minVert[0]),n=0;for(let h=1;h<7;++h){const o=wt(e.maxVert[h],e.minVert[h]);o>s&&(s=o,n=h)}S(t,e.minVert[n]),S(a,e.maxVert[n])}const q=[0,0,0];function ja(e,t,a,s){const{data:n,size:h}=e;let o=Number.NEGATIVE_INFINITY,c=0;for(let i=0;i<n.length;i+=h){q[0]=n[i]-t[0],q[1]=n[i+1]-t[1],q[2]=n[i+2]-t[2];const r=a[0]*q[0]+a[1]*q[1]+a[2]*q[2],b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],m=q[0]*q[0]+q[1]*q[1]+q[2]*q[2]-r*r/b;m>o&&(o=m,c=i)}return S(s,n,c),o}const _=Lt();function xa(e,t,a,s,n){za(e,t,_,n,s);const h=Jt(a,t);_[1]-nt<=h&&(s[0]=void 0),_[0]+nt>=h&&(n[0]=void 0)}const Et=d(),Qt=d(),Gt=d(),J=d(),K=d(),Mt=d();function D(e,t,a,s,n,h){if(Wt(t)<nt)return;V(Et,a,t),V(Qt,s,t),V(Gt,n,t),tt(e,t,_),K[1]=_[0],J[1]=_[1],Mt[1]=J[1]-K[1];const o=[a,s,n],c=[Et,Qt,Gt];for(let i=0;i<3;++i){tt(e,o[i],_),K[0]=_[0],J[0]=_[1],tt(e,c[i],_),K[2]=_[0],J[2]=_[1],Mt[0]=J[0]-K[0],Mt[2]=J[2]-K[2];const r=It(Mt);r<h.quality&&(S(h.b0,o[i]),S(h.b1,t),S(h.b2,c[i]),h.quality=r)}}const Sa=d();function tt(e,t,a){const{data:s,size:n}=e;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let h=0;h<s.length;h+=n){const o=s[h]*t[0]+s[h+1]*t[1]+s[h+2]*t[2];a[0]=Math.min(a[0],o),a[1]=Math.max(a[1],o)}}function za(e,t,a,s,n){const{data:h,size:o}=e;S(s,h),S(n,s),a[0]=Jt(Sa,t),a[1]=a[0];for(let c=o;c<h.length;c+=o){const i=h[c]*t[0]+h[c+1]*t[1]+h[c+2]*t[2];i<a[0]&&(a[0]=i,S(s,h,c)),i>a[1]&&(a[1]=i,S(n,h,c))}}function Yt(e,t,a){a.center=e,a.halfSize=it(t,t,.5),a.quaternion=Rt}const G=d(),L=d(),ct=d(),at=d(),st=d(),Ht=d();function pa(e,t,a){S(G,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?G[0]=0:Math.abs(t[1])>Math.abs(t[2])?G[1]=0:G[2]=0,Wt(G)<nt&&(G[0]=G[1]=G[2]=1),V(L,t,G),g(L,L),V(ct,t,L),g(ct,ct),Zt(e,t,L,ct,at,st),N(Ht,st,at),Dt(t,L,ct,at,st,Ht,a)}function Zt(e,t,a,s,n,h){tt(e,t,_),n[0]=_[0],h[0]=_[1],tt(e,a,_),n[1]=_[0],h[1]=_[1],tt(e,s,_),n[2]=_[0],h[2]=_[1]}const R=d(),ut=d(),$t=d(),T=ua(1,0,0,0,1,0,0,0,1),ya=St();function Dt(e,t,a,s,n,h,o){T[0]=e[0],T[1]=e[1],T[2]=e[2],T[3]=t[0],T[4]=t[1],T[5]=t[2],T[6]=a[0],T[7]=a[1],T[8]=a[2],o.quaternion=wa(ya,T),qt(R,s,n),dt(R,R,.5),dt(ut,e,R[0]),dt($t,t,R[1]),qt(ut,ut,$t),dt($t,a,R[2]),o.center=lt(ut,ut,$t),o.halfSize=it(R,h,.5)}const P=7;let Ia=class{constructor(t){this.minVert=new Array(P),this.maxVert=new Array(P);const a=64*P;this.buffer=new ArrayBuffer(a);let s=0;this.minProj=new Float64Array(this.buffer,s,P),s+=8*P,this.maxProj=new Float64Array(this.buffer,s,P),s+=8*P;for(let i=0;i<P;++i)this.minVert[i]=new Float64Array(this.buffer,s,3),s+=24;for(let i=0;i<P;++i)this.maxVert[i]=new Float64Array(this.buffer,s,3),s+=24;for(let i=0;i<P;++i)this.minProj[i]=Number.POSITIVE_INFINITY,this.maxProj[i]=Number.NEGATIVE_INFINITY;const n=new Array(P),h=new Array(P),{data:o,size:c}=t;for(let i=0;i<o.length;i+=c){let r=o[i];r<this.minProj[0]&&(this.minProj[0]=r,n[0]=i),r>this.maxProj[0]&&(this.maxProj[0]=r,h[0]=i),r=o[i+1],r<this.minProj[1]&&(this.minProj[1]=r,n[1]=i),r>this.maxProj[1]&&(this.maxProj[1]=r,h[1]=i),r=o[i+2],r<this.minProj[2]&&(this.minProj[2]=r,n[2]=i),r>this.maxProj[2]&&(this.maxProj[2]=r,h[2]=i),r=o[i]+o[i+1]+o[i+2],r<this.minProj[3]&&(this.minProj[3]=r,n[3]=i),r>this.maxProj[3]&&(this.maxProj[3]=r,h[3]=i),r=o[i]+o[i+1]-o[i+2],r<this.minProj[4]&&(this.minProj[4]=r,n[4]=i),r>this.maxProj[4]&&(this.maxProj[4]=r,h[4]=i),r=o[i]-o[i+1]+o[i+2],r<this.minProj[5]&&(this.minProj[5]=r,n[5]=i),r>this.maxProj[5]&&(this.maxProj[5]=r,h[5]=i),r=o[i]-o[i+1]-o[i+2],r<this.minProj[6]&&(this.minProj[6]=r,n[6]=i),r>this.maxProj[6]&&(this.maxProj[6]=r,h[6]=i)}for(let i=0;i<P;++i){let r=n[i];S(this.minVert[i],o,r),r=h[i],S(this.maxVert[i],o,r)}}},qa=class{constructor(){this.b0=Pt(1,0,0),this.b1=Pt(0,1,0),this.b2=Pt(0,0,1),this.quality=0}};function It(e){return e[0]*e[1]+e[0]*e[2]+e[1]*e[2]}function qt(e,t,a){e[0]=t[0]+a[0],e[1]=t[1]+a[1],e[2]=t[2]+a[2]}function N(e,t,a){e[0]=t[0]-a[0],e[1]=t[1]-a[1],e[2]=t[2]-a[2]}function dt(e,t,a){e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a}function S(e,t,a=0){e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2]}function V(e,t,a){const s=t[0],n=t[1],h=t[2],o=a[0],c=a[1],i=a[2];e[0]=n*i-h*c,e[1]=h*o-s*i,e[2]=s*c-n*o}function g(e,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s}}function Wt(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]}function wt(e,t){const a=t[0]-e[0],s=t[1]-e[1],n=t[2]-e[2];return a*a+s*s+n*n}function Jt(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function wa(e,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);e[3]=.5*s,s=.5/s,e[0]=(t[5]-t[7])*s,e[1]=(t[6]-t[2])*s,e[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const n=(s+1)%3,h=(s+2)%3;let o=Math.sqrt(t[3*s+s]-t[3*n+n]-t[3*h+h]+1);e[s]=.5*o,o=.5/o,e[3]=(t[3*n+h]-t[3*h+n])*o,e[n]=(t[3*n+s]+t[3*s+n])*o,e[h]=(t[3*h+s]+t[3*s+h])*o}return e}class ft{constructor(t=kt,a=Ga,s=Rt){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new ft;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new ft;return a._data=t.slice(),a}static fromJSON(t){return new ft(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return W(Tt.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return W(Tt.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return la(ga.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=l,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let n=0;n<8;++n){const h=t[n];h[0]=(1&n?-1:1)*s[3],h[1]=(2&n?-1:1)*s[4],h[2]=(4&n?-1:1)*s[5],w(h,h,a),h[0]+=s[0],h[1]+=s[1],h[2]+=s[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){u[0]=this._data[0]-t[0],u[1]=this._data[1]-t[1],u[2]=this._data[2]-t[2];const a=this.getQuaternion(H);return U(l,a),w(u,u,l),mt(u,u),Y[0]=Math.min(u[0],this._data[3]),Y[1]=Math.min(u[1],this._data[4]),Y[2]=Math.min(u[2],this._data[5]),At(Y,u)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;u[0]=s[0]-t[0],u[1]=s[1]-t[1],u[2]=s[2]-t[2];const n=t[3],h=n+a;return!(Ut(u)>h*h)&&(l[0]=-s[6],l[1]=-s[7],l[2]=-s[8],l[3]=s[9],w(u,u,l),mt(u,u),Y[0]=Math.min(u[0],s[3]),Y[1]=Math.min(u[1],s[4]),Y[2]=Math.min(u[2],s[5]),At(Y,u)<n*n)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(pt(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const n=this._data,h=l;h[0]=-n[6],h[1]=-n[7],h[2]=-n[8],h[3]=n[9],u[0]=t[0]-n[0],u[1]=t[1]-n[1],u[2]=t[2]-n[2];const o=w(u,u,l),c=w(Y,a,l);let i=-1/0,r=1/0;const b=this.getHalfSize(et);for(let m=0;m<3;m++){const z=o[m],A=c[m],M=b[m]+s;if(Math.abs(A)>1e-6){const Q=(M-z)/A,$=(-M-z)/A;i=Math.max(i,Math.min(Q,$)),r=Math.min(r,Math.max(Q,$))}else if(z>M||z<-M)return!1}return i<=r}projectedArea(t,a,s,n){const h=this.getQuaternion(H);U(l,h),u[0]=t[0]-this._data[0],u[1]=t[1]-this._data[1],u[2]=t[2]-this._data[2],w(u,u,l);const o=this.getHalfSize(et),c=u[0]<-o[0]?-1:u[0]>o[0]?1:0,i=u[1]<-o[1]?-1:u[1]>o[1]?1:0,r=u[2]<-o[2]?-1:u[2]>o[2]?1:0,b=Math.abs(c)+Math.abs(i)+Math.abs(r);if(b===0)return 1/0;const m=b===1?4:6,z=6*(c+3*i+9*r+13);yt(k,h),ta(k,k,o);const A=this.getCenter(v);for(let $=0;$<m;$++){const zt=Aa[z+$];W(u,((1&zt)<<1)-1,(2&zt)-1,((4&zt)>>1)-1),aa(u,u,k),lt(Z,A,u),Z[3]=1,sa(Z,Z,a);const Vt=1/Math.max(1e-6,Z[3]);C[2*$]=Z[0]*Vt,C[2*$+1]=Z[1]*Vt}const M=2*m-2;let Q=C[0]*(C[3]-C[M+1])+C[M]*(C[1]-C[M-1]);for(let $=2;$<M;$+=2)Q+=C[$]*(C[$+3]-C[$-1]);return Math.abs(Q)*s*n*.125}projectedRadius(t){const a=this.getQuaternion(H);return U(l,a),w(u,t,l),Math.abs(u[0]*this._data[3])+Math.abs(u[1]*this._data[4])+Math.abs(u[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(pt(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(pt(t))}toAaBoundingBox(t){const a=this.getQuaternion(H),s=yt(k,a),n=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),h=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),o=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-n,t[1]=this._data[1]-h,t[2]=this._data[2]-o,t[3]=this._data[0]+n,t[4]=this._data[1]+h,t[5]=this._data[2]+o}transform(t,a,s,n=0,h=_t(s),o=_t(a),c=Xt(a,o)){if(s===h)a.isGeographic?Ta(this,t,a,n,o):va(this,t,a,n,o,c);else if(a.isWGS84&&(s.isWebMercator||Ct(s)))Ca(a,this,s,t,n);else if(a.isWebMercator&&Ct(s))Fa(a,this,s,t,n);else{const i=this.getCenter(v);i[2]+=n,xt(i,a,0,i,s,0,1),t.center=i,this!==t&&(t.quaternion=this.getQuaternion(H),t.halfSize=this.getHalfSize(et))}}}const l=St(),H=St(),Na=St(),u=d(),Y=d(),Z=ea();function Va(e,t=new ft){return ba(e,t),t}const C=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Aa=(()=>{const e=new Int8Array(162);let t=0;const a=s=>{for(let n=0;n<s.length;n++)e[t+n]=s[n];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),e})();function La(e,t,a,s,n){const h=e.getQuaternion(H);n.quaternion=h,U(l,h);const o=e.getCenter(v),c=e.getHalfSize(et);if(s===ha.Global){w(f,o,l),mt(F,f),oa(x,F,c),Bt(x,F,x);const i=Ft(x);lt(x,F,c);const r=Ft(x);if(i<a)n.center=o,W(f,a,a,a),n.halfSize=lt(f,c,f);else{const b=r>0?1+t/r:1,m=i>0?1+a/i:1,z=(m+b)/2,A=(m-b)/2;it(x,F,A),n.halfSize=gt(x,x,c,z),it(x,F,z),gt(x,x,c,A),ra(f,f),ca(f,x,f);const M=e.getQuaternion(Na);n.center=w(f,f,M)}}else{n.center=gt(f,o,vt,(a+t)/2);const i=w(f,vt,l);mt(i,i),n.halfSize=gt(F,c,i,(a-t)/2)}return n}function Ca(e,t,a,s,n){t.getCenter(v),v[2]+=n;const h=_t(a);xt(v,e,0,v,h,0,1),Kt(h,t,v,a,s)}function Fa(e,t,a,s,n){t.getCenter(v),v[2]+=n,Kt(e,t,v,a,s)}function Kt(e,t,a,s,n){const h=t.getQuaternion(H),o=yt(k,h),c=t.getHalfSize(et);for(let i=0;i<8;++i){for(let r=0;r<3;++r)E[r]=c[r]*(i&1<<r?-1:1);for(let r=0;r<3;++r){let b=a[r];for(let m=0;m<3;++m)b+=E[m]*o[3*m+r];jt[3*i+r]=b}}xt(jt,e,0,jt,s,0,8),Va(Ea,n)}function va(e,t,a,s,n=_t(a),h=Xt(a,n)){e.getCorners(Ot),e.getCenter(E),E[2]+=s,_a(a,E,j,n),t.setCenter(j[12],j[13],j[14]);const o=2*Math.sqrt(1+j[0]+j[5]+j[10]);l[0]=(j[6]-j[9])/o,l[1]=(j[8]-j[2])/o,l[2]=(j[1]-j[4])/o,l[3]=.25*o;const c=e.getQuaternion(H);t.quaternion=ma(l,l,c),U(l,l),W(F,0,0,0);const i=t.getCenter(Qa);for(const r of Ot)r[2]+=s,h(r,0,r,0),Bt(f,r,i),w(f,f,l),mt(f,f),ia(F,F,f);t.halfSize=F}function Ta(e,t,a,s,n=_t(a)){const h=na(a),o=1+Math.max(0,s)/(h.radius+e.centerZ);e.getCenter(E),E[2]+=s,xt(E,a,0,E,n,0,1),t.center=E;const c=e.getQuaternion(H);t.quaternion=c,U(l,c),W(f,0,0,1),w(f,f,l);const i=e.getHalfSize(et);W(f,i[0]*Math.abs(f[0]),i[1]*Math.abs(f[1]),i[2]*Math.abs(f[2])),it(f,f,h.inverseFlattening),lt(f,i,f),t.halfSize=it(f,f,o)}const jt=new Array(24),Ea=new Nt(jt,3),E=d(),v=d(),Qa=d(),et=d(),k=da(),j=fa(),Ot=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],f=d(),F=d(),x=d(),Ga=Pt(-1,-1,-1);export{ft as I,La as L,Wa as t};