"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[695],{"./src/stories/Dialog.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCustomContent:()=>WithCustomContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dialog_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Dialog_Dialog=_ref=>{let{isOpen,onClose,title,children}=_ref;return isOpen?(0,jsx_runtime.jsx)("div",{className:"dialog-overlay",children:(0,jsx_runtime.jsxs)("div",{className:"dialog-box",children:[(0,jsx_runtime.jsxs)("div",{className:"dialog-header",children:[(0,jsx_runtime.jsx)("h3",{children:title}),(0,jsx_runtime.jsx)("button",{className:"close-button",onClick:onClose,children:"X"})]}),(0,jsx_runtime.jsx)("div",{className:"dialog-content",children}),(0,jsx_runtime.jsxs)("div",{className:"dialog-footer",children:[(0,jsx_runtime.jsx)("button",{className:"footer-button",onClick:onClose,children:"OK"}),(0,jsx_runtime.jsx)("button",{className:"footer-button",onClick:onClose,children:"Cancel"})]})]})}):null},stories_Dialog=Dialog_Dialog;Dialog_Dialog.__docgenInfo={description:"",methods:[],displayName:"Dialog"};var Button=__webpack_require__("./src/stories/Button.jsx"),TextInput=__webpack_require__("./src/stories/TextInput.jsx");const Dialog_stories={title:"Components/Dialog",component:stories_Dialog,tags:["autodocs"]},Template=args=>{const[isOpen,setIsOpen]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.$,{primary:!0,size:"small",onClick:()=>setIsOpen(!0),label:"Open Dialog"}),(0,jsx_runtime.jsx)(stories_Dialog,{isOpen,onClose:()=>setIsOpen(!1),title:args.title,children:args.children})]})},Default=Template.bind({});Default.args={title:"Dialog Title",children:"This is the content of the dialog."};const WithCustomContent=Template.bind({});WithCustomContent.args={title:"Custom Dialog",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("p",{children:"Custom content inside the dialog."}),(0,jsx_runtime.jsx)(TextInput.A,{floatingLabelTxtInp:!0,placeholder:"Input field",value:"",labelPosition:"left",label:"User Name"})]})};const __namedExportsOrder=["Default","WithCustomContent"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [isOpen, setIsOpen] = useState(false);\n  const openDialog = () => setIsOpen(true);\n  const closeDialog = () => setIsOpen(false);\n  return <>\r\n      <Button primary size="small" onClick={openDialog} label="Open Dialog" />\r\n      <Dialog isOpen={isOpen} onClose={closeDialog} title={args.title}>\r\n        {args.children}\r\n      </Dialog>\r\n    </>;\n}',...Default.parameters?.docs?.source}}},WithCustomContent.parameters={...WithCustomContent.parameters,docs:{...WithCustomContent.parameters?.docs,source:{originalSource:'args => {\n  const [isOpen, setIsOpen] = useState(false);\n  const openDialog = () => setIsOpen(true);\n  const closeDialog = () => setIsOpen(false);\n  return <>\r\n      <Button primary size="small" onClick={openDialog} label="Open Dialog" />\r\n      <Dialog isOpen={isOpen} onClose={closeDialog} title={args.title}>\r\n        {args.children}\r\n      </Dialog>\r\n    </>;\n}',...WithCustomContent.parameters?.docs?.source}}}},"./src/stories/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{primary,backgroundColor,size,label,noBorderRadius,icon,iconPosition,...props}=_ref;const[isClicked,setIsClicked]=(0,react.useState)(!1),mode=primary?"storybook-button--primary":"storybook-button--secondary",borderRadiusClass=noBorderRadius?"storybook-button--no-border-radius":"storybook-button--border-radius";return(0,jsx_runtime.jsxs)("button",{type:"button",className:["storybook-button",`storybook-button--${size}`,mode,borderRadiusClass].join(" "),style:backgroundColor&&{backgroundColor},onClick:e=>{setIsClicked(!isClicked),props.onClick&&props.onClick(e)},...props,children:[icon&&"left"===iconPosition&&(0,jsx_runtime.jsx)("span",{className:"storybook-button__icon_right",children:icon}),label,icon&&"right"===iconPosition&&(0,jsx_runtime.jsx)("span",{className:"storybook-button__icon_left",children:icon})]})};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0,noBorderRadius:!1,icon:null,iconPosition:"left"},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},noBorderRadius:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},iconPosition:{defaultValue:{value:'"left"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},label:{description:"",type:{name:"string"},required:!0}}}},"./src/stories/TextInput.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>stories_TextInput});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  margin: 16px 0;
  width: 96%;
`,StyledInput=styled_components_browser_esm.Ay.input`
  width: 97%;
  padding: 16px 12px 8px;
  padding-bottom: 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translate(0, -28px);
    font-size: 20px;
    color: #007bff;
  }
`,FloatingLabel=styled_components_browser_esm.Ay.label`
  position: absolute;
  left: 12px;
  top: 16px;
  font-size: 16px;
  color: #999;
  background-color: white;
  padding: 0 4px;
  transition: 0.3s ease all;
  pointer-events: none;

  ${_ref=>{let{isFocused}=_ref;return isFocused&&styled_components_browser_esm.AH`
      transform: translate(0, -26px);
      font-size: 18px;
      color: #007bff;
    `}}
`,TextInput_TextInput=(styled_components_browser_esm.Ay.table`
  width: 100%;
  border-collapse: collapse;
`,_ref2=>{let{label,labelPosition,placeholder,value,onChange,required=!1,floatingLabelTxtInp}=_ref2;const[inputValue,setInputValue]=(0,react.useState)(""),[isFocused,setIsFocused]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:`text-input-container ${labelPosition}`,style:{visibility:floatingLabelTxtInp?"hidden":""},children:[(0,jsx_runtime.jsxs)("label",{children:[label," ",required&&(0,jsx_runtime.jsx)("span",{className:"required-asterisk",children:"*"})]}),(0,jsx_runtime.jsx)("input",{type:"text",placeholder,value,onChange,className:"text-input",required})]}),(0,jsx_runtime.jsxs)(InputContainer,{style:{visibility:floatingLabelTxtInp?"":"hidden"},children:[(0,jsx_runtime.jsx)(StyledInput,{type:"input",value:inputValue,onChange:event=>{setInputValue(event.target.value)},onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!!inputValue),placeholder:""}),(0,jsx_runtime.jsx)(FloatingLabel,{isFocused:isFocused||inputValue,children:label})]})]})}),stories_TextInput=TextInput_TextInput;TextInput_TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{required:{defaultValue:{value:"false",computed:!1},required:!1}}}}}]);
//# sourceMappingURL=stories-Dialog-stories.f6b18b3b.iframe.bundle.js.map