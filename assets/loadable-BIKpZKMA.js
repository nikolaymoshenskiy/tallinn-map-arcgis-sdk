import{t as a,u as s}from"./index-CpEBwgYb.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o=new WeakMap,t=new WeakMap;function p(e){t.set(e,new Promise(n=>o.set(e,n)))}function c(e){o.get(e)()}function r(e){return t.get(e)}async function u(e){if(await r(e),!!a())return s(e),new Promise(n=>requestAnimationFrame(()=>n()))}export{c as a,u as c,p as s};
