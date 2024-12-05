/*! For license information please see stories-Slider-stories.100f9c9d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[356],{"./src/stories/Slider.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultSlider:()=>DefaultSlider,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Slider_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Slider_Slider=_ref=>{let{label="Default Slider",min=0,max=100,step=1,value,onChange}=_ref;return(0,jsx_runtime.jsxs)("div",{className:"slider-container",children:[(0,jsx_runtime.jsx)("label",{className:"slider-label",children:label}),(0,jsx_runtime.jsx)("input",{type:"range",className:"slider",min,max,step,value,onChange}),(0,jsx_runtime.jsx)("span",{className:"slider-value",children:value})]})},stories_Slider=Slider_Slider;Slider_Slider.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{label:{defaultValue:{value:'"Default Slider"',computed:!1},required:!1},min:{defaultValue:{value:"0",computed:!1},required:!1},max:{defaultValue:{value:"100",computed:!1},required:!1},step:{defaultValue:{value:"1",computed:!1},required:!1}}};const Slider_stories={title:"Components/Slider Component",component:stories_Slider,tags:["autodocs"]},DefaultSlider=(args=>{const[value,setValue]=(0,react.useState)(30);return(0,jsx_runtime.jsx)(stories_Slider,{...args,value,onChange:e=>{setValue(e.target.value)}})}).bind({});DefaultSlider.args={label:"Custom Slider",min:0,max:100,step:1},DefaultSlider.parameters={docs:{source:{code:'import React from \'react\';\nimport \'./Slider.css\'; // Assuming we have slider styles in this CSS file\n\nconst Slider = ({ label = "Default Slider", min = 0, max = 100, step = 1, value, onChange }) => {\n  return (\n    <div className="slider-container">\n      <label className="slider-label">{label}</label>\n      <input\n        type="range"\n        className="slider"\n        min={min}\n        max={max}\n        step={step}\n        value={value}\n        onChange={onChange}\n      />\n      <span className="slider-value">{value}</span>\n    </div>\n  );\n};\n\nexport default Slider;\n'}}};const __namedExportsOrder=["DefaultSlider"];DefaultSlider.parameters={...DefaultSlider.parameters,docs:{...DefaultSlider.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(30);\n  const handleChange = e => {\n    setValue(e.target.value);\n  };\n  return <Slider {...args} value={value} onChange={handleChange} />;\n}",...DefaultSlider.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);