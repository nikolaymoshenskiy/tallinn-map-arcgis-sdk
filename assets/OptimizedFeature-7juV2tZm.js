import{e as i}from"./OptimizedGeometry-vU5jWBvU.js";class o{constructor(t=null,e={},s,h){this.geometry=t,this.attributes=e,this.centroid=s,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0}static fromJSON(t,e){const s=t.geometry?i.fromJSON(t.geometry):null,h=t.centroid?i.fromJSON(t.centroid):null,n=t.attributes[e];return new o(s,t.attributes,h,n)}weakClone(){const t=new o(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}clone(){var s,h;const t=(s=this.geometry)==null?void 0:s.clone(),e=new o(t,{...this.attributes},(h=this.centroid)==null?void 0:h.clone(),this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}}function c(r){var t,e;return!!((e=(t=r.geometry)==null?void 0:t.coords)!=null&&e.length)}export{o as e,c as s};