"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[858],{"./src/stories/SearchBox.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,SearchBox_With_Secondary_Button:()=>SearchBox_With_Secondary_Button,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SearchBox_stories});var react=__webpack_require__("./node_modules/react/index.js"),fi=__webpack_require__("./node_modules/react-icons/fi/index.mjs"),Button=__webpack_require__("./src/stories/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SearchBoxWithIcon=_ref=>{let{placeholder,onSearch,showIcon,primary,buttonSize,noBorderRadius}=_ref;const[searchTerm,setSearchTerm]=(0,react.useState)("");return(0,jsx_runtime.jsxs)("form",{className:"searchbox-with-icon-form",onSubmit:event=>{event.preventDefault(),onSearch(searchTerm)},children:[(0,jsx_runtime.jsxs)("div",{className:"searchbox-with-icon",children:[showIcon?(0,jsx_runtime.jsx)(fi.CKj,{className:"searchbox-icon"}):"",(0,jsx_runtime.jsx)("input",{type:"text",className:"searchbox-input-icon",value:searchTerm,onChange:event=>{setSearchTerm(event.target.value)},placeholder})]}),primary?(0,jsx_runtime.jsx)(Button.$,{primary:!0,noBorderRadius,size:buttonSize,onClick:()=>{},label:"Search"}):(0,jsx_runtime.jsx)(Button.$,{size:buttonSize,noBorderRadius,onClick:()=>{},label:"Search"})]})};SearchBoxWithIcon.defaultProps={placeholder:"Search..."},SearchBoxWithIcon.__docgenInfo={description:"",methods:[],displayName:"SearchBoxWithIcon",props:{placeholder:{defaultValue:{value:"'Search...'",computed:!1},description:"",type:{name:"string"},required:!1},onSearch:{description:"",type:{name:"func"},required:!0},showIcon:{description:"",type:{name:"bool"},required:!1},noBorderRadius:{description:"",type:{name:"bool"},required:!1},buttonSize:{description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1}}};var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const SearchBox_stories={title:"Components/Search Box",component:SearchBoxWithIcon,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{placeholder:{control:"text"},onSearch:{action:"changed"},showIcon:{control:"boolean"},primary:{control:"boolean"},buttonSize:{control:"text"},noBorderRadius:{control:"boolean"}}},Template=args=>(0,jsx_runtime.jsx)(SearchBoxWithIcon,{...args}),Default=Template.bind({});Default.args={placeholder:"Search here...",onSearch:(0,dist.XI)("Search term submitted"),showIcon:!0,primary:!0,buttonSize:"medium",noBorderRadius:!0};const SearchBox_With_Secondary_Button=Template.bind({});SearchBox_With_Secondary_Button.args={placeholder:"Type to find something...",onSearch:(0,dist.XI)("Search term submitted"),showIcon:!0,primary:!1,buttonSize:"medium",noBorderRadius:!1};const __namedExportsOrder=["Default","SearchBox_With_Secondary_Button"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SearchBoxWithIcon {...args} />",...Default.parameters?.docs?.source}}},SearchBox_With_Secondary_Button.parameters={...SearchBox_With_Secondary_Button.parameters,docs:{...SearchBox_With_Secondary_Button.parameters?.docs,source:{originalSource:"args => <SearchBoxWithIcon {...args} />",...SearchBox_With_Secondary_Button.parameters?.docs?.source}}}},"./src/stories/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{primary,backgroundColor,size,label,noBorderRadius,icon,iconPosition,...props}=_ref;const[isClicked,setIsClicked]=(0,react.useState)(!1),mode=primary?"storybook-button--primary":"storybook-button--secondary",borderRadiusClass=noBorderRadius?"storybook-button--no-border-radius":"storybook-button--border-radius";return(0,jsx_runtime.jsxs)("button",{type:"button",className:["storybook-button",`storybook-button--${size}`,mode,borderRadiusClass].join(" "),style:backgroundColor&&{backgroundColor},onClick:e=>{setIsClicked(!isClicked),props.onClick&&props.onClick(e)},...props,children:[icon&&"left"===iconPosition&&(0,jsx_runtime.jsx)("span",{className:"storybook-button__icon_right",children:icon}),label,icon&&"right"===iconPosition&&(0,jsx_runtime.jsx)("span",{className:"storybook-button__icon_left",children:icon})]})};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0,noBorderRadius:!1,icon:null,iconPosition:"left"},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},noBorderRadius:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},icon:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},iconPosition:{defaultValue:{value:'"left"',computed:!1},description:"",type:{name:"enum",value:[{value:'"left"',computed:!1},{value:'"right"',computed:!1}]},required:!1},label:{description:"",type:{name:"string"},required:!0}}}}}]);