import{h as a,H as s,k as r,l as t,r as l}from"./index-CpEBwgYb.js";import{b as d,t as h}from"./dom-BU34U0mN.js";import{c as b,d as m,H as p}from"./form-CxffAK1K.js";import{u,I as k}from"./interactive-CBxqSRBJ.js";import{i as f}from"./key-D63ExP77.js";import{c as v,d as y,g as w}from"./label-z1qOuNbx.js";import{c as g,s as x,a as z}from"./loadable-BIKpZKMA.js";import"./component-6CIDVndn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const o={container:"container",track:"track",handle:"handle"},C=`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-2);vertical-align:top;outline-color:transparent}.container:focus .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}.container:hover .handle,.container:focus .handle{border-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([checked]) .track{border-color:var(--calcite-color-brand-hover);background-color:var(--calcite-color-brand)}:host([checked]) .handle{border-color:var(--calcite-color-brand);inset-inline:auto -1px}:host([checked]) .container:hover .handle{border-color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`,S=C,i=a(class extends s{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSwitchChange=r(this,"calciteSwitchChange",6),this.keyDownHandler=e=>{!this.disabled&&f(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.setSwitchEl=e=>{this.switchEl=e},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.scale="m",this.checked=!1,this.value=void 0}async setFocus(){await g(this),d(this.switchEl)}syncHiddenFormInput(e){e.type="checkbox"}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit()}connectedCallback(){v(this),b(this)}componentWillLoad(){x(this)}componentDidLoad(){z(this)}disconnectedCallback(){y(this),m(this)}componentDidRender(){u(this)}render(){return t(l,{key:"7731df888262acc136e2099fe599c6290967fea7",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},t(k,{key:"6bc3781eb46221cbe022c6e6b3e7bad267e4d2c6",disabled:this.disabled},t("div",{key:"1670db00b1cdb4ad8f013ff0dae914683db2004c","aria-checked":h(this.checked),"aria-label":w(this),class:o.container,ref:this.setSwitchEl,role:"switch",tabIndex:0},t("div",{key:"3c6e6d5abc6df9d745e361a65d06f4e7c1a3da16",class:o.track},t("div",{key:"0973b399396b9bd44ac9d2c17b374e2fbfe77b5e",class:o.handle})),t(p,{key:"7776a1881b7b6d43c543e4f388ae6cb4301b4181",component:this}))))}get el(){return this}static get style(){return S}},[1,"calcite-switch",{disabled:[516],form:[513],label:[1],name:[513],scale:[513],checked:[1540],value:[8],setFocus:[64]}]);function c(){if(typeof customElements>"u")return;["calcite-switch"].forEach(e=>{switch(e){case"calcite-switch":customElements.get(e)||customElements.define(e,i);break}})}c();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const T=i,B=c;export{T as CalciteSwitch,B as defineCustomElement};
