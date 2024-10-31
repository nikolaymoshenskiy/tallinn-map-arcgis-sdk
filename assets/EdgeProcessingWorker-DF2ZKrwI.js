import{I as l}from"./InterleavedLayout-BdseWvEy.js";import{f,u as c,p as u,E as p,d,m as g}from"./edgeProcessing-B9jmXX8w.js";import"./BufferView-CpI7YL_H.js";import"./index-CpEBwgYb.js";import"./types-D0PSWh4d.js";import"./Util-Bvc0ctSI.js";import"./deduplicate-BSVZYM8c.js";import"./Indices-C4vNeC3e.js";import"./VertexAttribute-BlT9lbVY.js";import"./enums-BlUEVwJR.js";import"./VertexElementDescriptor-BOD-G50G.js";function a(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:new l(t.layout)}}class v{async extract(e){const i=o(e),n=f(i),s=[i.data.buffer];return{result:h(n,s),transferList:s}}async extractComponentsEdgeLocations(e){const i=o(e),n=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),s=u(n,w),r=[];return{result:a(s.regular.instancesData,r),transferList:r}}async extractEdgeLocations(e){const i=o(e),n=c(i.data,i.skipDeduplicate,i.indices,i.indicesLength),s=u(n,L),r=[];return{result:a(s.regular.instancesData,r),transferList:r}}}function o(t){return{data:p.createView(t.dataBuffer),indices:t.indicesType==="Uint32Array"?new Uint32Array(t.indices):t.indicesType==="Uint16Array"?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function h(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class m{allocate(e){return d.createBuffer(e)}trim(e,i){return e.slice(0,i)}write(e,i,n){e.position0.setVec(i,n.position0),e.position1.setVec(i,n.position1)}}class y{allocate(e){return g.createBuffer(e)}trim(e,i){return e.slice(0,i)}write(e,i,n){e.position0.setVec(i,n.position0),e.position1.setVec(i,n.position1),e.componentIndex.set(i,n.componentIndex)}}const L=new m,w=new y;export{v as default};
