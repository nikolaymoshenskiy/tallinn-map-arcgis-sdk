import{v as e,y as i,cj as r,F as p,B as u,D as d,aB as y,f as w,A as v}from"./index-CpEBwgYb.js";var a;let t=a=class extends u{static from(o){return d(a,o)}constructor(o){super(o),this.gdbVersion=null,this.sessionID=null,this.validationType=null,this.validateArea=null,this.validationSet=null,this.outSpatialReference=null}writeOutSR(o,s,l){if(o!=null){const{wkid:n}=o;s[l]=JSON.stringify({wkid:n})}}};e([i({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),e([i({type:String,json:{write:!0}})],t.prototype,"sessionID",void 0),e([i({type:r.apiValues,json:{type:r.jsonValues,read:r.read,write:r.write}})],t.prototype,"validationType",void 0),e([i({type:y,json:{write:!0}})],t.prototype,"validateArea",void 0),e([i({type:[Object],json:{write:!0}})],t.prototype,"validationSet",void 0),e([i({type:w,json:{write:{allowNull:!0,target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),e([p("outSpatialReference")],t.prototype,"writeOutSR",null),t=a=e([v("esri.rest.networks.support.ValidateNetworkTopologyParameters")],t);const f=t;export{f as default};
