import{bo as j,bp as z,bq as G,br as q,bs as A,ad as B,bt as C,bu as D,ah as E,bv as L}from"./index-CpEBwgYb.js";import{r as k}from"./vec3f32-nZdmKIgz.js";import{n as F,h as H}from"./WGLContainer-BVk_EOCF.js";import{E as J}from"./Container-BcF0t0Be.js";class V extends F{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=j()}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const s of this.children)s.beforeRender(e)}prepareRenderPasses(e){const s=e.registerRenderPass({name:"overlay",brushes:[H.overlay],target:()=>this.children,drawPhase:J.MAP});return[...super.prepareRenderPasses(e),s]}_updateMatrices(e){const{state:s}=e,{id:a,size:c,pixelRatio:r,resolution:h,rotation:l,viewpoint:u,displayMat3:v}=s;if(this._viewStateId===a)return;const p=Math.PI/180*l,i=r*c[0],n=r*c[1];this._localOrigin=u.targetGeometry.clone();const{x:d,y:_}=this._localOrigin,M=z(d,s.spatialReference);this._localOrigin.x=M,this._localOrigin.y=_;const b=h*i,m=h*n,t=G(this._dvsMat3);q(t,t,v),A(t,t,B(i/2,n/2)),C(t,t,k(i/b,-n/m,1)),D(t,t,-p),this._viewStateId=a}_updateOverlays(e,s){const{state:a}=e,{rotation:c,spatialReference:r,worldScreenWidth:h,size:l,viewpoint:u}=a,v=this._localOrigin;let p,i=0;const n=E(r);if(n&&r.isWrappable){const d=l[0],_=l[1],M=180/Math.PI*c,b=Math.abs(Math.cos(M)),m=Math.abs(Math.sin(M)),t=Math.round(d*b+_*m),[R,x]=n.valid,o=L(r),{x:O,y:I}=u.targetGeometry,S=[O,I],g=[0,0];a.toScreen(g,S);const f=[0,0];let w;w=t>h?.5*h:.5*t;const P=Math.floor((O+.5*o)/o),$=R+P*o,W=x+P*o,y=[g[0]+w,0];a.toMap(f,y),f[0]>W&&(i=o),y[0]=g[0]-w,a.toMap(f,y),f[0]<$&&(i=-o),p={worldWidth:o,xBounds:[R,x]}}for(const d of s)d.updateDrawCoords(v,i,r,p)}}export{V as f};