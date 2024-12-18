"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[345],{"./src/stories/BadgeComponent.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomBadge:()=>CustomBadge,Default:()=>Default,NoBadge:()=>NoBadge,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BadgeComponent_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BadgeContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top:30px;
  background-color:aliceblue;
`,IconCircle=styled_components_browser_esm.Ay.div`
  width: 60px;
  height: 60px;
  border: 2px solid #aaa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props=>props.iconSize||"30px"};
  color: #555;
  position: relative;
  margin-top:30px;
  background-color: ${props=>props.backgroundColor||"white"};;
  &:hover {
    border-color: #0056b3; 
    background-color: #f0f8ff; 
    color: #0056b3;
  }
`,BadgeNumber=styled_components_browser_esm.Ay.span`
  position: absolute;
  top: -17px;
  right: -20px;
  color: black;
  border-radius: 50%;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`,LabelText=styled_components_browser_esm.Ay.p`
  margin-top: 8px;
  font-size: ${props=>props.labelSize||"1rem"};
  color: ${props=>props.labelColor||"#333"};
  text-align: center;
`,onClick=()=>{console.log("badge clicked")},BadgeComponent=_ref=>{let{icon,label,badgeCount,iconSize,labelColor,labelSize,backgroundColor}=_ref;return(0,jsx_runtime.jsxs)(BadgeContainer,{onClick,children:[(0,jsx_runtime.jsxs)(IconCircle,{iconSize,backgroundColor,children:[icon,badgeCount>0&&(0,jsx_runtime.jsx)(BadgeNumber,{children:badgeCount})]}),(0,jsx_runtime.jsx)(LabelText,{labelSize,labelColor,children:label})]})};BadgeComponent.defaultProps={badgeCount:0,iconSize:"60px",labelColor:"#333",labelSize:"1rem",backgroundColor:"white"},BadgeComponent.__docgenInfo={description:"",methods:[],displayName:"BadgeComponent",props:{badgeCount:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},iconSize:{defaultValue:{value:"'60px'",computed:!1},description:"",type:{name:"string"},required:!1},labelColor:{defaultValue:{value:"'#333'",computed:!1},description:"",type:{name:"string"},required:!1},labelSize:{defaultValue:{value:"'1rem'",computed:!1},description:"",type:{name:"string"},required:!1},backgroundColor:{defaultValue:{value:"'white'",computed:!1},description:"",type:{name:"string"},required:!1},icon:{description:"",type:{name:"node"},required:!0},label:{description:"",type:{name:"string"},required:!0}}};var fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs");const BadgeComponent_stories={title:"Components/Badge Component",component:BadgeComponent,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{label:{control:"text"},badgeCount:{control:"number"},iconSize:{control:"text"},labelColor:{control:"color"},labelSize:{control:"text"},backgroundColor:{control:"color"}}},Template=args=>(0,jsx_runtime.jsx)(BadgeComponent,{...args}),Default=Template.bind({});Default.args={icon:(0,jsx_runtime.jsx)(fa.dv1,{}),label:"Badge Label",badgeCount:2838,iconSize:"30px",backgroundColor:"white"};const CustomBadge=Template.bind({});CustomBadge.args={icon:(0,jsx_runtime.jsx)(fa.dv1,{}),label:"Badge Label",badgeCount:50,iconSize:"30px",labelColor:"#1e90ff",labelSize:"1.2rem",backgroundColor:"lightgray"};const NoBadge=Template.bind({});NoBadge.args={icon:(0,jsx_runtime.jsx)(fa.dv1,{}),label:"Badge Label",badgeCount:0,iconSize:"30px",labelColor:"#888"};const __namedExportsOrder=["Default","CustomBadge","NoBadge"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BadgeComponent {...args} />",...Default.parameters?.docs?.source}}},CustomBadge.parameters={...CustomBadge.parameters,docs:{...CustomBadge.parameters?.docs,source:{originalSource:"args => <BadgeComponent {...args} />",...CustomBadge.parameters?.docs?.source}}},NoBadge.parameters={...NoBadge.parameters,docs:{...NoBadge.parameters?.docs,source:{originalSource:"args => <BadgeComponent {...args} />",...NoBadge.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-BadgeComponent-stories.464c8487.iframe.bundle.js.map