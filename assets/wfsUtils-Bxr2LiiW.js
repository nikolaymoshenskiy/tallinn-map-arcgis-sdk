import{X as b,dv as M,s as l,dw as V,dx as E,dy as R,dz as S,f as A,G as j,dA as L,b5 as O,dB as m,dC as X,dD as Y,aB as W,d4 as z,d8 as F}from"./index-CpEBwgYb.js";import{u as q}from"./geojson-CAWmqOF6.js";import{o as x,n as g}from"./xmlUtils-CtUoQO7q.js";const C="xlink:href",f="2.0.0",k="__esri_wfs_id__",_="wfs-layer:getWFSLayerTypeInfo-error",B="wfs-layer:empty-service",N="wfs-layer:feature-type-not-found",J="wfs-layer:geojson-not-supported",K="wfs-layer:kvp-encoding-not-supported",Q="wfs-layer:malformed-json",G="wfs-layer:unknown-geometry-type",H="wfs-layer:unknown-field-type",Z="wfs-layer:unsupported-spatial-reference",ee="wfs-layer:unsupported-wfs-version";async function Se(r,t){const e=te((await b(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:f,...t==null?void 0:t.customParameters},signal:t==null?void 0:t.signal})).data);return ne(r,e),e}function te(r){const t=I(r);we(t),U(t);const e=t.firstElementChild,a=M(oe(e));return{operations:re(e),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const ae=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function P(r){for(const t of ae){const e=r.findIndex(a=>a.toLowerCase()===t);if(e>=0)return r[e]}return null}function re(r){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},a=[],n=[];if(x(r,{OperationsMetadata:{Parameter:o=>{if(o.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:s})=>{s&&a.push(s)}}}},Operation:o=>{switch(o.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:s=>{e.GetCapabilities.url=s.getAttribute(C)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:s=>{e.DescribeFeatureType.url=s.getAttribute(C)}}}};case"GetFeature":return{DCP:{HTTP:{Get:s=>{e.GetFeature.url=s.getAttribute(C)}}},Parameter:s=>{if(s.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:i})=>{i&&n.push(i)}}}}}}},Constraint:o=>{switch(o.getAttribute("name")){case"KVPEncoding":return{DefaultValue:s=>{t=s.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:s=>{e.GetFeature.supportsPagination=s.textContent.toLowerCase()==="true"}}}}}}),e.GetFeature.outputFormat=P(n)??P(a),!t)throw new l(K,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new l(J,"WFS service doesn't support GeoJSON output format");return e}function ne(r,t){V(r)&&(E(r,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=R(t.operations.DescribeFeatureType.url)),E(r,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=R(t.operations.GetFeature.url)))}function $(r){var e,a,n;const t=parseInt(((n=(a=(e=r.textContent)==null?void 0:e.match(/(?<wkid>\d+$)/i))==null?void 0:a.groups)==null?void 0:n.wkid)??"",10);if(!Number.isNaN(t))return t}function oe(r){return g(r,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},a=new Set;return x(t,{Name:n=>{const{name:o,prefix:s}=w(n.textContent);e.typeName=`${s}:${o}`,e.name=o,e.namespacePrefix=s,e.namespaceUri=n.lookupNamespaceURI(s)},Abstract:n=>{e.description=n.textContent},Title:n=>{e.title=n.textContent},WGS84BoundingBox:n=>{e.extent=W.fromJSON(se(n))},DefaultCRS:n=>{const o=$(n);o&&(e.defaultSpatialReference=o,a.add(o))},OtherCRS:n=>{const o=$(n);o&&a.add(o)}}),e.title||(e.title=e.name),a.add(4326),e.supportedSpatialReferences.push(...a),e}}})}function se(r){let t,e,a,n;for(const o of r.children)switch(o.localName){case"LowerCorner":[t,e]=o.textContent.split(" ").map(s=>Number.parseFloat(s));break;case"UpperCorner":[a,n]=o.textContent.split(" ").map(s=>Number.parseFloat(s))}return{xmin:t,ymin:e,xmax:a,ymax:n,spatialReference:z}}function ie(r,t,e){return S(r,a=>e?a.name===t&&a.namespaceUri===e:a.typeName===t||a.name===t)}async function xe(r,t,e,a={}){const{featureType:n,extent:o}=await ue(r,t,e,a),{spatialReference:s}=be(r.operations.GetFeature.url,n,a.spatialReference),{fields:i,geometryType:p,swapXY:c,objectIdField:u,geometryField:d}=await pe(r,n,s,a);return{url:r.operations.GetCapabilities.url,name:n.name,namespaceUri:n.namespaceUri,fields:i,geometryField:d,geometryType:p,objectIdField:u,spatialReference:a.spatialReference??new A({wkid:n.defaultSpatialReference}),extent:o,swapXY:c,wfsCapabilities:r,customParameters:a.customParameters}}async function ue(r,t,e,a={}){const n=r.readFeatureTypes(),o=t?ie(n,t,e):n.next().value,{spatialReference:s=new A({wkid:o==null?void 0:o.defaultSpatialReference})}=a;if(o==null)throw t?new l(N,`The type '${t}' could not be found in the service`):new l(B,"The service is empty");let i=o.extent;if(i&&!j(i.spatialReference,s))try{await L(i.spatialReference,s,void 0,a),i=O(i,s)}catch{throw new l(Z,"Projection not supported")}return{extent:i,spatialReference:s,featureType:o}}async function pe(r,t,e,a={}){var y,T,h;const{typeName:n}=t,[o,s]=await Promise.allSettled([de(r.operations.DescribeFeatureType.url,n,a),ce(r,n,e,a)]),i=D=>new l(_,`An error occurred while getting info about the feature type '${n}'`,{error:D});if(o.status==="rejected")throw i(o.reason);if(s.status==="rejected")throw i(s.reason);const{fields:p,errors:c}=o.value??{},u=((y=o.value)==null?void 0:y.geometryType)||((T=s.value)==null?void 0:T.geometryType),d=((h=s.value)==null?void 0:h.swapXY)??!1;if(u==null)throw new l(G,`The geometry type could not be determined for type '${n}`,{typeName:n,geometryType:u,fields:p,errors:c});return{...le(p??[]),geometryType:u,swapXY:d}}function le(r){const t=r.find(a=>a.type==="geometry");let e=r.find(a=>a.type==="oid");return r=r.filter(a=>a.type!=="geometry"),e||(e=new m({name:k,type:"oid",alias:k}),r.unshift(e)),{geometryField:(t==null?void 0:t.name)??null,objectIdField:e.name,fields:r}}async function ce(r,t,e,a={}){var c;let n,o=!1;const[s,i]=await Promise.all([ge(r.operations.GetFeature.url,t,e,r.operations.GetFeature.outputFormat,{...a,count:1}),b(r.operations.GetFeature.url,{responseType:"text",query:v(t,e,void 0,{...a,count:1}),signal:a==null?void 0:a.signal})]),p=s.type==="FeatureCollection"&&((c=s.features[0])==null?void 0:c.geometry);if(p){let u;switch(n=X.fromJSON(q(p.type)),p.type){case"Point":u=p.coordinates;break;case"LineString":case"MultiPoint":u=p.coordinates[0];break;case"MultiLineString":case"Polygon":u=p.coordinates[0][0];break;case"MultiPolygon":u=p.coordinates[0][0][0]}const d=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(d){const y=u[0].toFixed(3),T=u[1].toFixed(3),h=parseFloat(d[1]).toFixed(3);y===parseFloat(d[2]).toFixed(3)&&T===h&&(o=!0)}}return{geometryType:n,swapXY:o}}async function de(r,t,e){return ye(t,(await b(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:f,TYPENAME:t,TYPENAMES:t,...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal})).data)}function ye(r,t){const{name:e}=w(r),a=I(t);U(a);const n=S(g(a.firstElementChild,{element:o=>o}),o=>o.getAttribute("name")===e);if(n!=null){const o=n.getAttribute("type"),s=o?S(g(a.firstElementChild,{complexType:i=>i}),i=>i.getAttribute("name")===w(o).name):S(g(n,{complexType:i=>i}),()=>!0);if(s)return fe(s)}throw new l(N,`Type '${r}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}const me=new Set(["objectid","fid"]);function fe(r){const t=[],e=[];let a;const n=g(r,{complexContent:{extension:{sequence:{element:o=>o}}}});for(const o of n){const s=o.getAttribute("name");if(!s)continue;let i,p;if(o.hasAttribute("type")?i=w(o.getAttribute("type")).name:x(o,{simpleType:{restriction:d=>(i=w(d.getAttribute("base")).name,{maxLength:y=>{p=+y.getAttribute("value")}})}}),!i)continue;const c=o.getAttribute("nillable")==="true";let u=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new m({name:s,alias:s,type:"integer",nullable:c,length:F("integer")}));break;case"float":case"double":case"decimal":e.push(new m({name:s,alias:s,type:"double",nullable:c,length:F("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new m({name:s,alias:s,type:"string",nullable:c,length:p??F("string")}));break;case"datetime":case"date":e.push(new m({name:s,alias:s,type:"date",nullable:c,length:p??F("date")}));break;case"pointpropertytype":a="point",u=!0;break;case"multipointpropertytype":a="multipoint",u=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",u=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",u=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":u=!0,t.push(new l(G,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(r)}));break;default:t.push(new l(H,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(r)}))}u&&e.push(new m({name:s,alias:s,type:"geometry",nullable:c}))}for(const o of e)if(o.type==="integer"&&!o.nullable&&me.has(o.name.toLowerCase())){o.type="oid";break}return{geometryType:a,fields:e,errors:t}}async function ge(r,t,e,a,n){let{data:o}=await b(r,{responseType:"text",query:v(t,e,a,n),signal:n==null?void 0:n.signal});o=o.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(o)}catch(s){throw new l(Q,"Error while parsing the response",{response:o,error:s})}}function v(r,t,e,a){const n=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:f,TYPENAMES:r,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+n,STARTINDEX:a==null?void 0:a.startIndex,COUNT:a==null?void 0:a.count,...a==null?void 0:a.customParameters}}async function Ce(r,t,e){const a=await b(r,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:f,TYPENAMES:t,RESULTTYPE:"hits",...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal}),n=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);if(n!=null&&n.groups)return+n.groups.numberMatched}function I(r){return new DOMParser().parseFromString(r.trim(),"text/xml")}function w(r){const[t,e]=r.split(":");return{prefix:e?t:"",name:e??t}}function we(r){var e;const t=(e=r.firstElementChild)==null?void 0:e.getAttribute("version");if(t&&t!==f)throw new l(ee,`Unsupported WFS version ${t}. Supported version: ${f}`)}function U(r){let t="",e="";if(x(r.firstElementChild,{Exception:a=>(t=a.getAttribute("exceptionCode"),{ExceptionText:n=>{e=n.textContent}})}),t)throw new l(`wfs-layer:${t}`,e)}function be(r,t,e){const a={wkid:t.defaultSpatialReference},n=(e==null?void 0:e.wkid)!=null?{wkid:e.wkid}:a;return{spatialReference:n,getFeatureSpatialReference:Y(r)||n.wkid&&t.supportedSpatialReferences.includes(n.wkid)?{wkid:n.wkid}:{wkid:t.defaultSpatialReference}}}export{ge as K,k as S,xe as W,ie as Y,Ce as e,be as o,Se as v,le as z};