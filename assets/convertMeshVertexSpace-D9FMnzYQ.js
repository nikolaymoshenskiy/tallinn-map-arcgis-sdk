import{M as p,s,bf as i}from"./index-CpEBwgYb.js";import{l as n}from"./MeshVertexAttributes-DipqHyoc.js";import{M as c}from"./vertexSpaceConversion-CCPVbQp2.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-CWjarewc.js";import"./computeTranslationToOriginAndRotation-Do3yxRCy.js";import"./meshVertexSpaceUtils-JDXJMRJ1.js";import"./MeshLocalVertexSpace-HFc9jt7l.js";import"./vec3-C1_bp-lC.js";import"./projection-Bsk8oCIE.js";import"./DoubleArray-BL6-QkbM.js";import"./BufferView-CpI7YL_H.js";import"./vec4-DEdHfHmo.js";async function S(t,r,m){await Promise.resolve(),p(m);const o=c(t,r);if(!o)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const e=t.cloneAndModifyVertexAttributes(new n({...o,uv:i(t.vertexAttributes.uv),color:i(t.vertexAttributes.color)}),r);return e.transform=null,e}export{S as convertMeshVertexSpace};