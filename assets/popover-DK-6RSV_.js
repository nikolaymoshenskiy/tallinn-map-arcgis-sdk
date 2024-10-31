import{ha as Pe,t as je,l as k,h as at,H as ct,k as ne,u as lt,r as ft}from"./index-CpEBwgYb.js";import{g as dt,k as ut,t as Ce,f as ht,q as pt,z as mt}from"./dom-BU34U0mN.js";import{d as gt}from"./debounce-BOqmhDXu.js";import{d as pe,a as ke,c as vt,u as wt}from"./focusTrapComponent-DSZHl6uF.js";import{o as Ae}from"./openCloseComponent-DnhsBUEZ.js";import{c as bt,d as yt}from"./locale-BYaRuQ3g.js";import{u as xt,c as Et,s as Pt,d as Ct}from"./t9n-CN-FVK-c.js";import{s as kt,a as At,c as Ot}from"./loadable-BIKpZKMA.js";import{c as Rt}from"./observers-x0U_jVIS.js";import{g as Lt}from"./component-6CIDVndn.js";import{i as Dt}from"./key-D63ExP77.js";import{d as Tt}from"./action-CBfTkDcz.js";import{d as St}from"./icon-CRf3kZbw.js";import{d as Ft}from"./loader-SQCCrQCX.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const qe=["top","right","bottom","left"],Oe=["start","end"],Re=qe.reduce((e,t)=>e.concat(t,t+"-"+Oe[0],t+"-"+Oe[1]),[]),K=Math.min,j=Math.max,oe=Math.round,ie=Math.floor,U=e=>({x:e,y:e}),Ht={left:"right",right:"left",bottom:"top",top:"bottom"},Bt={start:"end",end:"start"};function ve(e,t,n){return j(e,K(t,n))}function X(e,t){return typeof e=="function"?e(t):e}function N(e){return e.split("-")[0]}function $(e){return e.split("-")[1]}function Xe(e){return e==="x"?"y":"x"}function be(e){return e==="y"?"height":"width"}function le(e){return["top","bottom"].includes(N(e))?"y":"x"}function ye(e){return Xe(le(e))}function Ye(e,t,n){n===void 0&&(n=!1);const i=$(e),o=ye(e),s=be(o);let r=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=se(r)),[r,se(r)]}function Mt(e){const t=se(e);return[re(e),t,re(t)]}function re(e){return e.replace(/start|end/g,t=>Bt[t])}function $t(e,t,n){const i=["left","right"],o=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:i:t?i:o;case"left":case"right":return t?s:r;default:return[]}}function zt(e,t,n,i){const o=$(e);let s=$t(N(e),n==="start",i);return o&&(s=s.map(r=>r+"-"+o),t&&(s=s.concat(s.map(re)))),s}function se(e){return e.replace(/left|right|bottom|top/g,t=>Ht[t])}function _t(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ke(e){return typeof e!="number"?_t(e):{top:e,right:e,bottom:e,left:e}}function ae(e){const{x:t,y:n,width:i,height:o}=e;return{width:i,height:o,top:n,left:t,right:t+i,bottom:n+o,x:t,y:n}}function Le(e,t,n){let{reference:i,floating:o}=e;const s=le(t),r=ye(t),a=be(r),c=N(t),l=s==="y",u=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,p=i[a]/2-o[a]/2;let f;switch(c){case"top":f={x:u,y:i.y-o.height};break;case"bottom":f={x:u,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:d};break;case"left":f={x:i.x-o.width,y:d};break;default:f={x:i.x,y:i.y}}switch($(t)){case"start":f[r]-=p*(n&&l?-1:1);break;case"end":f[r]+=p*(n&&l?-1:1);break}return f}const Nt=async(e,t,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:s=[],platform:r}=n,a=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(t));let l=await r.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Le(l,i,c),p=i,f={},h=0;for(let m=0;m<a.length;m++){const{name:v,fn:g}=a[m],{x:w,y:b,data:x,reset:y}=await g({x:u,y:d,initialPlacement:i,placement:p,strategy:o,middlewareData:f,rects:l,platform:r,elements:{reference:e,floating:t}});u=w??u,d=b??d,f={...f,[v]:{...f[v],...x}},y&&h<=50&&(h++,typeof y=="object"&&(y.placement&&(p=y.placement),y.rects&&(l=y.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:o}):y.rects),{x:u,y:d}=Le(l,p,c)),m=-1)}return{x:u,y:d,placement:p,strategy:o,middlewareData:f}};async function Z(e,t){var n;t===void 0&&(t={});const{x:i,y:o,platform:s,rects:r,elements:a,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=X(t,e),h=Ke(f),v=a[p?d==="floating"?"reference":"floating":d],g=ae(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(v)))==null||n?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:l,rootBoundary:u,strategy:c})),w=d==="floating"?{x:i,y:o,width:r.floating.width,height:r.floating.height}:r.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),x=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},y=ae(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:b,strategy:c}):w);return{top:(g.top-y.top+h.top)/x.y,bottom:(y.bottom-g.bottom+h.bottom)/x.y,left:(g.left-y.left+h.left)/x.x,right:(y.right-g.right+h.right)/x.x}}const Wt=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:i,placement:o,rects:s,platform:r,elements:a,middlewareData:c}=t,{element:l,padding:u=0}=X(e,t)||{};if(l==null)return{};const d=Ke(u),p={x:n,y:i},f=ye(o),h=be(f),m=await r.getDimensions(l),v=f==="y",g=v?"top":"left",w=v?"bottom":"right",b=v?"clientHeight":"clientWidth",x=s.reference[h]+s.reference[f]-p[f]-s.floating[h],y=p[f]-s.reference[f],E=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l));let C=E?E[b]:0;(!C||!await(r.isElement==null?void 0:r.isElement(E)))&&(C=a.floating[b]||s.floating[h]);const O=x/2-y/2,T=C/2-m[h]/2-1,P=K(d[g],T),R=K(d[w],T),A=P,I=C-m[h]-R,L=C/2-m[h]/2+O,H=ve(A,L,I),B=!c.arrow&&$(o)!=null&&L!==H&&s.reference[h]/2-(L<A?P:R)-m[h]/2<0,_=B?L<A?L-A:L-I:0;return{[f]:p[f]+_,data:{[f]:H,centerOffset:L-H-_,...B&&{alignmentOffset:_}},reset:B}}});function Ut(e,t,n){return(e?[...n.filter(o=>$(o)===e),...n.filter(o=>$(o)!==e)]:n.filter(o=>N(o)===o)).filter(o=>e?$(o)===e||(t?re(o)!==o:!1):!0)}const Vt=function(e){return e===void 0&&(e={}),{name:"autoPlacement",options:e,async fn(t){var n,i,o;const{rects:s,middlewareData:r,placement:a,platform:c,elements:l}=t,{crossAxis:u=!1,alignment:d,allowedPlacements:p=Re,autoAlignment:f=!0,...h}=X(e,t),m=d!==void 0||p===Re?Ut(d||null,f,p):p,v=await Z(t,h),g=((n=r.autoPlacement)==null?void 0:n.index)||0,w=m[g];if(w==null)return{};const b=Ye(w,s,await(c.isRTL==null?void 0:c.isRTL(l.floating)));if(a!==w)return{reset:{placement:m[0]}};const x=[v[N(w)],v[b[0]],v[b[1]]],y=[...((i=r.autoPlacement)==null?void 0:i.overflows)||[],{placement:w,overflows:x}],E=m[g+1];if(E)return{data:{index:g+1,overflows:y},reset:{placement:E}};const C=y.map(P=>{const R=$(P.placement);return[P.placement,R&&u?P.overflows.slice(0,2).reduce((A,I)=>A+I,0):P.overflows[0],P.overflows]}).sort((P,R)=>P[1]-R[1]),T=((o=C.filter(P=>P[2].slice(0,$(P[0])?2:3).every(R=>R<=0))[0])==null?void 0:o[0])||C[0][0];return T!==a?{data:{index:g+1,overflows:y},reset:{placement:T}}:{}}}},It=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:o,middlewareData:s,rects:r,initialPlacement:a,platform:c,elements:l}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...v}=X(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const g=N(o),w=N(a)===a,b=await(c.isRTL==null?void 0:c.isRTL(l.floating)),x=p||(w||!m?[se(a)]:Mt(a));!p&&h!=="none"&&x.push(...zt(a,m,h,b));const y=[a,...x],E=await Z(t,v),C=[];let O=((i=s.flip)==null?void 0:i.overflows)||[];if(u&&C.push(E[g]),d){const A=Ye(o,r,b);C.push(E[A[0]],E[A[1]])}if(O=[...O,{placement:o,overflows:C}],!C.every(A=>A<=0)){var T,P;const A=(((T=s.flip)==null?void 0:T.index)||0)+1,I=y[A];if(I)return{data:{index:A,overflows:O},reset:{placement:I}};let L=(P=O.filter(H=>H.overflows[0]<=0).sort((H,B)=>H.overflows[1]-B.overflows[1])[0])==null?void 0:P.placement;if(!L)switch(f){case"bestFit":{var R;const H=(R=O.map(B=>[B.placement,B.overflows.filter(_=>_>0).reduce((_,st)=>_+st,0)]).sort((B,_)=>B[1]-_[1])[0])==null?void 0:R[0];H&&(L=H);break}case"initialPlacement":L=a;break}if(o!==L)return{reset:{placement:L}}}return{}}}};function De(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Te(e){return qe.some(t=>e[t]>=0)}const jt=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:i="referenceHidden",...o}=X(e,t);switch(i){case"referenceHidden":{const s=await Z(t,{...o,elementContext:"reference"}),r=De(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:Te(r)}}}case"escaped":{const s=await Z(t,{...o,altBoundary:!0}),r=De(s,n.floating);return{data:{escapedOffsets:r,escaped:Te(r)}}}default:return{}}}}};async function qt(e,t){const{placement:n,platform:i,elements:o}=e,s=await(i.isRTL==null?void 0:i.isRTL(o.floating)),r=N(n),a=$(n),c=le(n)==="y",l=["left","top"].includes(r)?-1:1,u=s&&c?-1:1,d=X(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof h=="number"&&(f=a==="end"?h*-1:h),c?{x:f*u,y:p*l}:{x:p*l,y:f*u}}const Xt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,i;const{x:o,y:s,placement:r,middlewareData:a}=t,c=await qt(t,e);return r===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:o+c.x,y:s+c.y,data:{...c,placement:r}}}}},Yt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:i,placement:o}=t,{mainAxis:s=!0,crossAxis:r=!1,limiter:a={fn:v=>{let{x:g,y:w}=v;return{x:g,y:w}}},...c}=X(e,t),l={x:n,y:i},u=await Z(t,c),d=le(N(o)),p=Xe(d);let f=l[p],h=l[d];if(s){const v=p==="y"?"top":"left",g=p==="y"?"bottom":"right",w=f+u[v],b=f-u[g];f=ve(w,f,b)}if(r){const v=d==="y"?"top":"left",g=d==="y"?"bottom":"right",w=h+u[v],b=h-u[g];h=ve(w,h,b)}const m=a.fn({...t,[p]:f,[d]:h});return{...m,data:{x:m.x-n,y:m.y-i}}}}};function fe(){return typeof window<"u"}function Q(e){return Ge(e)?(e.nodeName||"").toLowerCase():"#document"}function D(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function W(e){var t;return(t=(Ge(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ge(e){return fe()?e instanceof Node||e instanceof D(e).Node:!1}function S(e){return fe()?e instanceof Element||e instanceof D(e).Element:!1}function z(e){return fe()?e instanceof HTMLElement||e instanceof D(e).HTMLElement:!1}function Se(e){return!fe()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof D(e).ShadowRoot}function te(e){const{overflow:t,overflowX:n,overflowY:i,display:o}=F(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(o)}function Kt(e){return["table","td","th"].includes(Q(e))}function de(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function ue(e){const t=xe(),n=S(e)?F(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function Gt(e){let t=V(e);for(;z(t)&&!G(t);){if(ue(t))return t;if(de(t))return null;t=V(t)}return null}function xe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(e){return["html","body","#document"].includes(Q(e))}function F(e){return D(e).getComputedStyle(e)}function he(e){return S(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function V(e){if(Q(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Se(e)&&e.host||W(e);return Se(t)?t.host:t}function Qe(e){const t=V(e);return G(t)?e.ownerDocument?e.ownerDocument.body:e.body:z(t)&&te(t)?t:Qe(t)}function J(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Qe(e),s=o===((i=e.ownerDocument)==null?void 0:i.body),r=D(o);if(s){const a=Qt(r);return t.concat(r,r.visualViewport||[],te(o)?o:[],a&&n?J(a):[])}return t.concat(o,J(o,[],n))}function Qt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ze(e){const t=F(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=z(e),s=o?e.offsetWidth:n,r=o?e.offsetHeight:i,a=oe(n)!==s||oe(i)!==r;return a&&(n=s,i=r),{width:n,height:i,$:a}}function Ee(e){return S(e)?e:e.contextElement}function Y(e){const t=Ee(e);if(!z(t))return U(1);const n=t.getBoundingClientRect(),{width:i,height:o,$:s}=Ze(t);let r=(s?oe(n.width):n.width)/i,a=(s?oe(n.height):n.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const Zt=U(0);function Je(e){const t=D(e);return!xe()||!t.visualViewport?Zt:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Jt(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==D(e)?!1:t}function q(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),s=Ee(e);let r=U(1);t&&(i?S(i)&&(r=Y(i)):r=Y(e));const a=Jt(s,n,i)?Je(s):U(0);let c=(o.left+a.x)/r.x,l=(o.top+a.y)/r.y,u=o.width/r.x,d=o.height/r.y;if(s){const p=D(s),f=i&&S(i)?D(i):i;let h=p,m=h.frameElement;for(;m&&i&&f!==h;){const v=Y(m),g=m.getBoundingClientRect(),w=F(m),b=g.left+(m.clientLeft+parseFloat(w.paddingLeft))*v.x,x=g.top+(m.clientTop+parseFloat(w.paddingTop))*v.y;c*=v.x,l*=v.y,u*=v.x,d*=v.y,c+=b,l+=x,h=D(m),m=h.frameElement}}return ae({width:u,height:d,x:c,y:l})}function en(e){let{elements:t,rect:n,offsetParent:i,strategy:o}=e;const s=o==="fixed",r=W(i),a=t?de(t.floating):!1;if(i===r||a&&s)return n;let c={scrollLeft:0,scrollTop:0},l=U(1);const u=U(0),d=z(i);if((d||!d&&!s)&&((Q(i)!=="body"||te(r))&&(c=he(i)),z(i))){const p=q(i);l=Y(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x,y:n.y*l.y-c.scrollTop*l.y+u.y}}function tn(e){return Array.from(e.getClientRects())}function et(e){return q(W(e)).left+he(e).scrollLeft}function nn(e){const t=W(e),n=he(e),i=e.ownerDocument.body,o=j(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),s=j(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let r=-n.scrollLeft+et(e);const a=-n.scrollTop;return F(i).direction==="rtl"&&(r+=j(t.clientWidth,i.clientWidth)-o),{width:o,height:s,x:r,y:a}}function on(e,t){const n=D(e),i=W(e),o=n.visualViewport;let s=i.clientWidth,r=i.clientHeight,a=0,c=0;if(o){s=o.width,r=o.height;const l=xe();(!l||l&&t==="fixed")&&(a=o.offsetLeft,c=o.offsetTop)}return{width:s,height:r,x:a,y:c}}function rn(e,t){const n=q(e,!0,t==="fixed"),i=n.top+e.clientTop,o=n.left+e.clientLeft,s=z(e)?Y(e):U(1),r=e.clientWidth*s.x,a=e.clientHeight*s.y,c=o*s.x,l=i*s.y;return{width:r,height:a,x:c,y:l}}function Fe(e,t,n){let i;if(t==="viewport")i=on(e,n);else if(t==="document")i=nn(W(e));else if(S(t))i=rn(t,n);else{const o=Je(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return ae(i)}function tt(e,t){const n=V(e);return n===t||!S(n)||G(n)?!1:F(n).position==="fixed"||tt(n,t)}function sn(e,t){const n=t.get(e);if(n)return n;let i=J(e,[],!1).filter(a=>S(a)&&Q(a)!=="body"),o=null;const s=F(e).position==="fixed";let r=s?V(e):e;for(;S(r)&&!G(r);){const a=F(r),c=ue(r);!c&&a.position==="fixed"&&(o=null),(s?!c&&!o:!c&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||te(r)&&!c&&tt(e,r))?i=i.filter(u=>u!==r):o=a,r=V(r)}return t.set(e,i),i}function an(e){let{element:t,boundary:n,rootBoundary:i,strategy:o}=e;const r=[...n==="clippingAncestors"?de(t)?[]:sn(t,this._c):[].concat(n),i],a=r[0],c=r.reduce((l,u)=>{const d=Fe(t,u,o);return l.top=j(d.top,l.top),l.right=K(d.right,l.right),l.bottom=K(d.bottom,l.bottom),l.left=j(d.left,l.left),l},Fe(t,a,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function cn(e){const{width:t,height:n}=Ze(e);return{width:t,height:n}}function ln(e,t,n){const i=z(t),o=W(t),s=n==="fixed",r=q(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const c=U(0);if(i||!i&&!s)if((Q(t)!=="body"||te(o))&&(a=he(t)),i){const d=q(t,!0,s,t);c.x=d.x+t.clientLeft,c.y=d.y+t.clientTop}else o&&(c.x=et(o));const l=r.left+a.scrollLeft-c.x,u=r.top+a.scrollTop-c.y;return{x:l,y:u,width:r.width,height:r.height}}function me(e){return F(e).position==="static"}function He(e,t){return!z(e)||F(e).position==="fixed"?null:t?t(e):e.offsetParent}function nt(e,t){const n=D(e);if(de(e))return n;if(!z(e)){let o=V(e);for(;o&&!G(o);){if(S(o)&&!me(o))return o;o=V(o)}return n}let i=He(e,t);for(;i&&Kt(i)&&me(i);)i=He(i,t);return i&&G(i)&&me(i)&&!ue(i)?n:i||Gt(e)||n}const fn=async function(e){const t=this.getOffsetParent||nt,n=this.getDimensions,i=await n(e.floating);return{reference:ln(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function dn(e){return F(e).direction==="rtl"}const we={convertOffsetParentRelativeRectToViewportRelativeRect:en,getDocumentElement:W,getClippingRect:an,getOffsetParent:nt,getElementRects:fn,getClientRects:tn,getDimensions:cn,getScale:Y,isElement:S,isRTL:dn};function un(e,t){let n=null,i;const o=W(e);function s(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function r(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),s();const{left:l,top:u,width:d,height:p}=e.getBoundingClientRect();if(a||t(),!d||!p)return;const f=ie(u),h=ie(o.clientWidth-(l+d)),m=ie(o.clientHeight-(u+p)),v=ie(l),w={rootMargin:-f+"px "+-h+"px "+-m+"px "+-v+"px",threshold:j(0,K(1,c))||1};let b=!0;function x(y){const E=y[0].intersectionRatio;if(E!==c){if(!b)return r();E?r(!1,E):i=setTimeout(()=>{r(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(x,{...w,root:o.ownerDocument})}catch{n=new IntersectionObserver(x,w)}n.observe(e)}return r(!0),s}function hn(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,l=Ee(e),u=o||s?[...l?J(l):[],...J(t)]:[];u.forEach(g=>{o&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const d=l&&a?un(l,n):null;let p=-1,f=null;r&&(f=new ResizeObserver(g=>{let[w]=g;w&&w.target===l&&f&&(f.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(t)})),n()}),l&&!c&&f.observe(l),f.observe(t));let h,m=c?q(e):null;c&&v();function v(){const g=q(e);m&&(g.x!==m.x||g.y!==m.y||g.width!==m.width||g.height!==m.height)&&n(),m=g,h=requestAnimationFrame(v)}return n(),()=>{var g;u.forEach(w=>{o&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),d==null||d(),(g=f)==null||g.disconnect(),f=null,c&&cancelAnimationFrame(h)}}const pn=Xt,mn=Vt,gn=Yt,Be=It,vn=jt,wn=Wt,bn=(e,t,n)=>{const i=new Map,o={platform:we,...n},s={...o.platform,_c:i};return Nt(e,t,{...o,platform:s})};function yn(e){return xn(e)}function ge(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function xn(e){for(let t=e;t;t=ge(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ge(e);t;t=ge(t)){if(!(t instanceof Element))continue;const n=getComputedStyle(t);if(n.display!=="contents"&&(n.position!=="static"||ue(n)||t.tagName==="BODY"))return t}return null}(function(){if(je()){const t=we.getOffsetParent;we.getOffsetParent=n=>t(n,yn)}})();function Me(e){const t=window.devicePixelRatio||1;return Math.round(e*t)/t}const it=async(e,{referenceEl:t,floatingEl:n,overlayPositioning:i="absolute",placement:o,flipDisabled:s,flipPlacements:r,offsetDistance:a,offsetSkidding:c,arrowEl:l,type:u})=>{var y;if(!t||!n)return null;const d=dt(n)==="rtl",{x:p,y:f,placement:h,strategy:m,middlewareData:v}=await bn(t,n,{strategy:i,placement:o==="auto"||o==="auto-start"||o==="auto-end"?void 0:_e(o,d),middleware:Pn({placement:o,flipDisabled:s,flipPlacements:r==null?void 0:r.map(E=>_e(E,d)),offsetDistance:a,offsetSkidding:c,arrowEl:l,type:u})});if(l&&v.arrow){const{x:E,y:C}=v.arrow,O=h.split("-")[0],T=E!=null?"left":"top",P=On[O],R={left:"",top:"",bottom:"",right:""};"floatingLayout"in e&&(e.floatingLayout=O==="left"||O==="right"?"horizontal":"vertical"),Object.assign(l.style,{...R,[T]:`${T=="left"?E:C}px`,[O]:"100%",transform:P})}const w=((y=v.hide)==null?void 0:y.referenceHidden)?"hidden":null,b=w?"none":null;n.setAttribute(En,h);const{open:x}=e;Object.assign(n.style,{visibility:w,pointerEvents:b,position:m,transform:x?`translate(${Me(p)}px,${Me(f)}px)`:"",top:0,left:0})},En="data-placement",$e=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end","leading","trailing","leading-start","leading-end","trailing-start","trailing-end"],Jn="bottom-end",ze={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active",arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"};function Pn({placement:e,flipDisabled:t,flipPlacements:n,offsetDistance:i,offsetSkidding:o,arrowEl:s,type:r}){const a=[gn(),vn()];if(r==="menu")return[...a,Be({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(r==="popover"||r==="tooltip"){const c=[...a,pn({mainAxis:typeof i=="number"?i:0,crossAxis:typeof o=="number"?o:0})];return e==="auto"||e==="auto-start"||e==="auto-end"?c.push(mn({alignment:e==="auto-start"?"start":e==="auto-end"?"end":null})):t||c.push(Be(n?{fallbackPlacements:n}:{})),s&&c.push(wn({element:s})),c}return[]}function Cn(e,t){const n=e.filter(i=>$e.includes(i));return n.length!==e.length&&console.warn(`${t.tagName}: Invalid value found in: flipPlacements. Try any of these: ${$e.map(i=>`"${i}"`).join(", ").trim()}`,{el:t}),n}function _e(e,t=!1){const n=["left","right"];return t&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function kn(e,t,n=!1){if(!e.open||!t.floatingEl||!t.referenceEl)return;if(!ee.get(e))return ot(e,t.referenceEl,t.floatingEl);await(n?An(e):it)(e,t)}function An(e){let t=ce.get(e);return t||(t=gt(it,Pe.reposition,{leading:!0,maxWait:Pe.reposition}),ce.set(e,t),t)}const On={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},ee=new WeakMap,ce=new WeakMap;async function ot(e,t,n){if(!n.isConnected)return;const i=je()?hn:(r,a,c)=>(c(),()=>{});ee.set(e,{state:"pending"});let o;const s=i(t,n,()=>{const r=e.reposition();o||(o=r)});return ee.set(e,{state:"active",cleanUp:s}),o}async function Rn(e,t,n){if(!(!n||!t)&&(rt(e,t,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:e.overlayPositioning}),!!e.open))return ot(e,t,n)}function rt(e,t,n){var o;if(!n||!t)return;const i=ee.get(e);(i==null?void 0:i.state)==="active"&&i.cleanUp(),ee.delete(e),(o=ce.get(e))==null||o.cancel(),ce.delete(e)}const Ne=4,Ln=Math.ceil(Math.hypot(Ne,Ne));/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const Dn=(e,t)=>{const n=e.level?`h${e.level}`:"div";return delete e.level,k(n,{class:e.class,key:e.key},t)};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const We={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"},Tn={width:12,height:6,strokeWidth:1},Sn=({floatingLayout:e,key:t,ref:n})=>{const{width:i,height:o,strokeWidth:s}=Tn,r=i/2,a=e==="vertical",c=`M0,0 H${i} L${i-r},${o} Q${r},${o} ${r},${o} Z`;return k("svg",{"aria-hidden":"true",class:We.arrow,height:i,key:t,ref:n,viewBox:`0 0 ${i} ${i+(a?0:s)}`,width:i+(a?s:0)},s>0&&k("path",{class:We.arrowStroke,d:c,fill:"none","stroke-width":s+1}),k("path",{d:c,stroke:"none"}))};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */class Fn{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=t=>{const{registeredElements:n}=this,i=t.find(o=>n.has(o));return n.get(i)},this.togglePopovers=t=>{const n=t.composedPath(),i=this.queryPopover(n);i&&!i.triggerDisabled&&(i.open=!i.open),Array.from(this.registeredElements.values()).filter(o=>o!==i&&o.autoClose&&o.open&&!n.includes(o)).forEach(o=>o.open=!1)},this.keyDownHandler=t=>{t.defaultPrevented||(t.key==="Escape"?this.closeAllPopovers():Dt(t.key)&&this.togglePopovers(t))},this.clickHandler=t=>{mt(t)||this.togglePopovers(t)}}registerElement(t,n){this.registeredElementCount++,this.registeredElements.set(t,n),this.registeredElementCount===1&&this.addListeners()}unregisterElement(t){this.registeredElements.delete(t)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(t=>t.open=!1)}addListeners(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}const M={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContainer:"headerContainer",headerContent:"header-content",heading:"heading"},Hn="auto",Ue="aria-controls",Ve="aria-expanded",Bn=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",Mn=Bn,Ie=new Fn,$n=at(class extends ct{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=ne(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=ne(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=ne(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=ne(this,"calcitePopoverOpen",6),this.mutationObserver=Rt("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${ut()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=t=>{this.transitionEl=t},this.setFilteredPlacements=()=>{const{el:t,flipPlacements:n}=this;this.filteredFlipPlacements=n?Cn(n,t):null},this.setUpReferenceElement=(t=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),Rn(this,this.effectiveReferenceElement,this.el);const{el:n,referenceElement:i,effectiveReferenceElement:o}=this;t&&i&&!o&&console.warn(`${n.tagName}: reference-element id "${i}" was not found.`,{el:n}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:t,open:n}=this;t&&"setAttribute"in t&&t.setAttribute(Ve,Ce(n))},this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t)return;const n=this.getId();"setAttribute"in t&&t.setAttribute(Ue,n),Ie.registerElement(t,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;t&&("removeAttribute"in t&&(t.removeAttribute(Ue),t.removeAttribute(Ve)),Ie.unregisterElement(t))},this.hide=()=>{this.open=!1},this.storeArrowEl=t=>{this.arrowEl=t,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=Ln,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=Hn,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(t){this.open&&(t?pe(this):ke(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){Ae(this),this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){xt(this,this.effectiveLocale)}connectedCallback(){var t;(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),bt(this),Et(this),vt(this),requestAnimationFrame(()=>this.setUpReferenceElement(this.hasLoaded))}async componentWillLoad(){await Pt(this),kt(this)}componentDidLoad(){At(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.open&&Ae(this),this.hasLoaded=!0}disconnectedCallback(){var t;(t=this.mutationObserver)==null||t.disconnect(),this.removeReferences(),yt(this),Ct(this),rt(this,this.effectiveReferenceElement,this.el),pe(this)}async reposition(t=!1){const{el:n,effectiveReferenceElement:i,placement:o,overlayPositioning:s,flipDisabled:r,filteredFlipPlacements:a,offsetDistance:c,offsetSkidding:l,arrowEl:u}=this;return kn(this,{floatingEl:n,referenceEl:i,overlayPositioning:s,placement:o,flipDisabled:r,flipPlacements:a,offsetDistance:c,offsetSkidding:l,arrowEl:u,type:"popover"},t)}async setFocus(){await Ot(this),lt(this.el),ht(this.el)}async updateFocusTrapElements(){wt(this)}getReferenceElement(){const{referenceElement:t,el:n}=this;return(typeof t=="string"?pt(n,{id:t}):t)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),ke(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),pe(this)}renderCloseButton(){const{messages:t,closable:n}=this;return n?k("div",{class:M.closeButtonContainer,key:M.closeButtonContainer},k("calcite-action",{appearance:"transparent",class:M.closeButton,onClick:this.hide,ref:i=>this.closeButtonEl=i,scale:this.scale,text:t.close},k("calcite-icon",{icon:"x",scale:Lt(this.scale)}))):null}renderHeader(){const{heading:t,headingLevel:n}=this,i=t?k(Dn,{class:M.heading,level:n},t):null;return i?k("div",{class:M.header,key:M.header},i,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:t,heading:n,label:i,open:o,pointerDisabled:s,floatingLayout:r}=this,a=t&&o,c=!a,l=s?null:k(Sn,{floatingLayout:r,key:"floating-arrow",ref:this.storeArrowEl});return k(ft,{key:"a563d48090d6e6c0c138023e169667834f657c4c","aria-hidden":Ce(c),"aria-label":i,"aria-live":"polite","calcite-hydrated-hidden":c,id:this.getId(),role:"dialog"},k("div",{key:"73053dbdce2cfc68fcd42667089d611e81010955",class:{[M.container]:!0,[ze.animation]:!0,[ze.animationActive]:a},ref:this.setTransitionEl},l,k("div",{key:"1fbcd45ee42b10a67881ced74db2db051231c94d",class:{[M.hasHeader]:!!n,[M.headerContainer]:!0}},this.renderHeader(),k("div",{key:"522abe801b98787863aac14d990b948d2d286156",class:M.content},k("slot",{key:"022a8f690288acdbac4ec1b3eccf807ffe382d5d"})),n?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Mn}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]},void 0,{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}]);function zn(){if(typeof customElements>"u")return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(t=>{switch(t){case"calcite-popover":customElements.get(t)||customElements.define(t,$n);break;case"calcite-action":customElements.get(t)||Tt();break;case"calcite-icon":customElements.get(t)||St();break;case"calcite-loader":customElements.get(t)||Ft();break}})}zn();export{Dn as H,$n as P,Jn as a,zn as d};