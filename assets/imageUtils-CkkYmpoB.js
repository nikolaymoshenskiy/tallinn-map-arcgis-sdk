const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gif-M-NLy_p6.js","assets/index-CpEBwgYb.js","assets/index-RZTPpmbY.css","assets/apng-B5wHE1Kg.js"])))=>i.map(i=>d[i]);
import{_ as u,Y as m,Z as w,X as f,$ as p,s as y}from"./index-CpEBwgYb.js";let i=null,s=!0;function T(n,a,t){if(!n||!a)throw new Error("Cannot construct image data without dimensions");if(s)try{return new ImageData(n,a)}catch{s=!1}return d(n,a,t)}function E(n,a,t,e){if(!a||!t)throw new Error("Cannot construct image data without dimensions");if(s)try{return new ImageData(n,a,t)}catch{s=!1}const r=d(a,t,e);return r.data.set(n,0),r}function g(){return i||(i=document.createElement("canvas"),i.width=1,i.height=1),i}function d(n,a,t){return t||(t=g()),t.getContext("2d").createImageData(n,a)}async function h(n,a){const t=window.URL.createObjectURL(n);try{const{data:e}=await f(t,{...a,responseType:"image"});return e}catch(e){throw p(e)?e:new y("invalid-image",`Could not fetch requested image at ${t}`)}finally{window.URL.revokeObjectURL(t)}}async function v(n,a){const{arrayBuffer:t,mediaType:e}=await _(n,a),r=e==="image/png";if(e==="image/gif"){const{isAnimatedGIF:o,parseGif:c}=await u(()=>import("./gif-M-NLy_p6.js"),__vite__mapDeps([0,1,2]));if(o(t))return c(t,a)}if(r){const{isAnimatedPNG:o,parseApng:c}=await u(()=>import("./apng-B5wHE1Kg.js"),__vite__mapDeps([3,1,2]));if(o(t))return c(t,a)}return h(new Blob([t],{type:e}),a)}async function _(n,a){var r;const t=m(n);if(t!=null&&t.isBase64)return{arrayBuffer:w(t.data),mediaType:t.mediaType};const e=await f(n,{responseType:"array-buffer",...a});return{arrayBuffer:e.data,mediaType:((r=e.getHeader)==null?void 0:r.call(e,"Content-Type"))??""}}export{E as c,v as p,T as s};