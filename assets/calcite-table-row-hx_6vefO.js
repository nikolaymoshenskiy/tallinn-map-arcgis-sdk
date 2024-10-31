import{h as m,H as p,k as u,l as n,r as f}from"./index-CpEBwgYb.js";import{a as d,t as R}from"./dom-BU34U0mN.js";import{i as g}from"./key-D63ExP77.js";import{u as y,I as T}from"./interactive-CBxqSRBJ.js";import{g as k}from"./component-6CIDVndn.js";import{d as A}from"./icon-CRf3kZbw.js";import{d as S}from"./table-cell-DgMbpvGL.js";import{d as E}from"./table-header-BmLa9-XT.js";import"./observers-x0U_jVIS.js";import"./loadable-BIKpZKMA.js";import"./t9n-CN-FVK-c.js";import"./locale-BYaRuQ3g.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const D={lastVisibleRow:"last-visible-row"},I=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background:var(--calcite-table-row-background, var(--calcite-color-foreground-1));--calcite-internal-table-row-border-color:var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}tr.last-visible-row{border-block-end:0}",M=I,b=m(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTableRowSelect=u(this,"calciteTableRowSelect",6),this.calciteInternalTableRowFocusRequest=u(this,"calciteInternalTableRowFocusRequest",6),this.rowCells=[],this.keyDownHandler=e=>{var a;if(this.interactionMode!=="interactive")return;const t=e.target,s=e.key,o=e.ctrlKey,i=this.rowCells;if(t.matches("calcite-table-cell")||t.matches("calcite-table-header"))switch(s){case"ArrowUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"previous"),e.preventDefault();break;case"ArrowDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"next"),e.preventDefault();break;case"PageUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"first"),e.preventDefault();break;case"PageDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"last"),e.preventDefault();break;case"ArrowLeft":d(i,t,"previous",!1),e.preventDefault();break;case"ArrowRight":d(i,t,"next",!1),e.preventDefault();break;case"Home":o?(this.emitTableRowFocusRequest(1,this.positionAll,"first"),e.preventDefault()):(d(i,t,"first",!1),e.preventDefault());break;case"End":o?(this.emitTableRowFocusRequest((a=this.rowCells)==null?void 0:a.length,this.positionAll,"last",!0),e.preventDefault()):(d(i,t,"last",!1),e.preventDefault());break}},this.emitTableRowFocusRequest=(e,t,s,o)=>{this.calciteInternalTableRowFocusRequest.emit({cellPosition:e,rowPosition:t,destination:s,lastCell:o})},this.updateCells=()=>{var i,a,c,r;const e=this.alignment?this.alignment:this.rowType!=="head"?"center":"start",t=(a=(i=this.tableRowSlotEl)==null?void 0:i.assignedElements({flatten:!0}))==null?void 0:a.filter(l=>l.matches("calcite-table-cell")||l.matches("calcite-table-header")),s=(r=Array.from((c=this.tableRowEl)==null?void 0:c.querySelectorAll("calcite-table-header, calcite-table-cell")))==null?void 0:r.filter(l=>l.numberCell||l.selectionCell),o=s?s.concat(t):t;o.length>0&&(o==null||o.forEach((l,h)=>{l.interactionMode=this.interactionMode,l.lastCell=h===o.length-1,l.parentRowAlignment=e,l.parentRowIsSelected=this.selected,l.parentRowType=this.rowType,l.positionInRow=h+1,l.scale=this.scale,l.nodeName==="CALCITE-TABLE-CELL"&&(l.readCellContentsToAT=this.readCellContentsToAT,l.disabled=this.disabled)})),this.rowCells=o||[],this.cellCount=o==null?void 0:o.length},this.handleSelectionOfRow=()=>{this.calciteTableRowSelect.emit()},this.handleKeyboardSelection=e=>{g(e.key)&&(e.key===" "&&e.preventDefault(),this.handleSelectionOfRow())},this.alignment=void 0,this.disabled=!1,this.selected=!1,this.cellCount=void 0,this.interactionMode="interactive",this.lastVisibleRow=void 0,this.rowType=void 0,this.numbered=!1,this.positionSection=void 0,this.positionSectionLocalized=void 0,this.positionAll=void 0,this.readCellContentsToAT=void 0,this.scale=void 0,this.selectionMode="none",this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.bodyRowCount=void 0,this.effectiveLocale=""}handleCellChanges(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}handleDelayedCellChanges(){this.tableRowEl&&this.rowCells.length>0&&requestAnimationFrame(()=>this.updateCells())}componentDidLoad(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}componentDidRender(){y(this)}calciteInternalTableRowFocusChangeHandler(e){var t;if(e.target.contains(this.el)){const s=e.detail.cellPosition,o=e.detail.rowPosition,i=e.detail.destination,a=e.detail.lastCell;if(o===this.positionAll){if(this.disabled){const r=i==="last"?"previous":i==="first"?"next":i;this.emitTableRowFocusRequest(s,this.positionAll,r);return}const c=a?this.rowCells[this.rowCells.length-1]:(t=this.rowCells)==null?void 0:t.find((r,l)=>l+1===s);c&&c.setFocus()}}}renderSelectionIcon(){const e=this.selectionMode==="multiple"&&this.selected?"check-square-f":this.selectionMode==="multiple"?"square":this.selected?"circle-f":"circle";return n("calcite-icon",{icon:e,scale:k(this.scale)})}renderSelectableCell(){return this.rowType==="head"?n("calcite-table-header",{alignment:"center",bodyRowCount:this.bodyRowCount,key:"selection-head",onClick:this.selectionMode==="multiple"&&this.handleSelectionOfRow,onKeyDown:this.selectionMode==="multiple"&&this.handleKeyboardSelection,parentRowAlignment:this.alignment,selectedRowCount:this.selectedRowCount,selectedRowCountLocalized:this.selectedRowCountLocalized,selectionCell:!0,selectionMode:this.selectionMode}):this.rowType==="body"?n("calcite-table-cell",{alignment:"center",key:"selection-body",onClick:this.handleSelectionOfRow,onKeyDown:this.handleKeyboardSelection,parentRowAlignment:this.alignment,parentRowIsSelected:this.selected,parentRowPositionLocalized:this.positionSectionLocalized,selectionCell:!0},this.renderSelectionIcon()):n("calcite-table-cell",{alignment:"center",key:"selection-foot",parentRowAlignment:this.alignment,selectionCell:!0})}renderNumberedCell(){return this.rowType==="head"?n("calcite-table-header",{alignment:"center",key:"numbered-head",numberCell:!0,parentRowAlignment:this.alignment}):this.rowType==="body"?n("calcite-table-cell",{alignment:"center",key:"numbered-body",numberCell:!0,parentRowAlignment:this.alignment},this.positionSectionLocalized):n("calcite-table-cell",{alignment:"center",key:"numbered-foot",numberCell:!0,parentRowAlignment:this.alignment})}render(){return n(f,{key:"fa3f14c832e7ed178ea338b01baebbe9a578689d"},n(T,{key:"c82f005db0a6247e45476c86d2eaefe698df2dd1",disabled:this.disabled},n("tr",{key:"452064805aa9685b75f3715bd45c42ce41f88368","aria-rowindex":this.positionAll+1,"aria-selected":R(this.selected),class:{[D.lastVisibleRow]:this.lastVisibleRow},onKeyDown:this.keyDownHandler,ref:e=>this.tableRowEl=e},this.numbered&&this.renderNumberedCell(),this.selectionMode!=="none"&&this.renderSelectableCell(),n("slot",{key:"bddf927a3129b20012ade6aa5415afcdeb8064a1",onSlotchange:this.updateCells,ref:e=>this.tableRowSlotEl=e}))))}get el(){return this}static get watchers(){return{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],interactionMode:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}}static get style(){return M}},[1,"calcite-table-row",{alignment:[513],disabled:[516],selected:[516],cellCount:[1026,"cell-count"],interactionMode:[1,"interaction-mode"],lastVisibleRow:[4,"last-visible-row"],rowType:[1,"row-type"],numbered:[4],positionSection:[2,"position-section"],positionSectionLocalized:[1,"position-section-localized"],positionAll:[2,"position-all"],readCellContentsToAT:[4,"read-cell-contents-to-a-t"],scale:[1],selectionMode:[1,"selection-mode"],selectedRowCount:[2,"selected-row-count"],selectedRowCountLocalized:[1,"selected-row-count-localized"],bodyRowCount:[2,"body-row-count"],effectiveLocale:[32]},[[4,"calciteInternalTableRowFocusChange","calciteInternalTableRowFocusChangeHandler"]],{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],interactionMode:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}]);function w(){if(typeof customElements>"u")return;["calcite-table-row","calcite-icon","calcite-table-cell","calcite-table-header"].forEach(e=>{switch(e){case"calcite-table-row":customElements.get(e)||customElements.define(e,b);break;case"calcite-icon":customElements.get(e)||A();break;case"calcite-table-cell":customElements.get(e)||S();break;case"calcite-table-header":customElements.get(e)||E();break}})}w();const B=b,U=w;export{B as CalciteTableRow,U as defineCustomElement};
