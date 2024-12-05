"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[125],{"./src/stories/DataGridTable.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DataGridTable_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),xlsx=__webpack_require__("./node_modules/xlsx/xlsx.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DialogOverlay=styled_components_browser_esm.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`,DialogContainer=styled_components_browser_esm.Ay.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  position: relative;
`,DialogHeader=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,CloseButton=styled_components_browser_esm.Ay.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
`,DialogFooter=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`,FooterButton=styled_components_browser_esm.Ay.button`
  margin-left: 10px;
`,CustomDialog=_ref=>{let{open,onClose,onOk}=_ref;return open?(0,jsx_runtime.jsx)(DialogOverlay,{children:(0,jsx_runtime.jsxs)(DialogContainer,{children:[(0,jsx_runtime.jsxs)(DialogHeader,{children:[(0,jsx_runtime.jsx)("h2",{children:"Dialog Header"}),(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,children:"X"})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("p",{children:"Content of the dialog goes here."})}),(0,jsx_runtime.jsxs)(DialogFooter,{children:[(0,jsx_runtime.jsx)(FooterButton,{onClick:onOk,children:"OK"}),(0,jsx_runtime.jsx)(FooterButton,{onClick:onClose,children:"Cancel"})]})]})}):null},stories_CustomDialog=CustomDialog;CustomDialog.__docgenInfo={description:"",methods:[],displayName:"CustomDialog"};var ri=__webpack_require__("./node_modules/react-icons/ri/index.mjs"),fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs"),jspdf_es_min=__webpack_require__("./node_modules/jspdf/dist/jspdf.es.min.js");__webpack_require__("./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");const TableContainer=styled_components_browser_esm.Ay.div`
  width: 100%;
  margin: 20px auto;
`,TableButtonContainer=styled_components_browser_esm.Ay.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3px;
  align-items: center;
`,ExcelContainer=styled_components_browser_esm.Ay.div`
  font-size: 28px;
  color: black;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`,PDFContainer=styled_components_browser_esm.Ay.div`
  font-size: 28px;
  color: black;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`,InputContainer=styled_components_browser_esm.Ay.div`
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
`,StyledTable=styled_components_browser_esm.Ay.table`
  width: 100%;
  border-collapse: collapse;
`,TableHead=styled_components_browser_esm.Ay.thead`
  background-color: #2b3e50;
  color: white;
`,TableHeader=styled_components_browser_esm.Ay.th`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  background-color: #2b3e50;
  color: white;
  width: ${_ref2=>{let{width}=_ref2;return width||"auto"}};
  font-weight: bold;
`,TableRow=styled_components_browser_esm.Ay.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`,TableCell=styled_components_browser_esm.Ay.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`,PaginationContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  font-size: 17px;
  border: 1px solid lightgray;
  border-top: 0px;
  padding: 6px;
`,RowsPerPageContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
`,PaginationButton=styled_components_browser_esm.Ay.button`
  color: black;
  font-size: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;

  &:disabled {
    color: black;
    background-color: none;
  }

  &:hover {
    background-color: #007bff;
    color: white;
  }
`,SelectRowsPerPage=styled_components_browser_esm.Ay.select`
  margin-left: 5px;
  padding: 5px;
`;function DataGridTable(_ref3){let{columns,rows,onRowClick,ShowSearchBox,ShowXLSXDownloadBtn,ShowPDFDownloadBtn,filename}=_ref3;const[inputValue,setInputValue]=(0,react.useState)(""),[isFocused,setIsFocused]=(0,react.useState)(!1),[currentPage,setCurrentPage]=(0,react.useState)(1),[rowsPerPage,setRowsPerPage]=(0,react.useState)(5),[dialogOpen,setDialogOpen]=(0,react.useState)(!1),[selectedRow,setSelectedRow]=(0,react.useState)(null),currentItems=inputValue.length>0?rows.filter((item=>item.Column_1.includes(inputValue))):rows,totalPages=Math.ceil(currentItems.length/rowsPerPage),handlePageChange=newPage=>{newPage>=1&&newPage<=totalPages&&setCurrentPage(newPage)},displayedRows=currentItems.slice((currentPage-1)*rowsPerPage,currentPage*rowsPerPage);return(0,jsx_runtime.jsxs)(TableContainer,{children:[(0,jsx_runtime.jsxs)(TableButtonContainer,{children:[(0,jsx_runtime.jsxs)(InputContainer,{style:{visibility:ShowSearchBox?"":"hidden"},children:[(0,jsx_runtime.jsx)(StyledInput,{type:"input",value:inputValue,onChange:event=>{setInputValue(event.target.value)},onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!!inputValue),placeholder:""}),(0,jsx_runtime.jsx)(FloatingLabel,{isFocused:isFocused||inputValue,children:"Search"})]}),(0,jsx_runtime.jsx)(ExcelContainer,{style:{visibility:ShowXLSXDownloadBtn?"":"hidden"},onClick:()=>{const headers=[{key:"Column_1",label:"Column 1"},{key:"Column_2",label:"Column 2"},{key:"Column_3",label:"Column 3"},{key:"Column_4",label:"Column 4"},{key:"Column_5",label:"Column 5"},{key:"Column_6",label:""}],workbook=xlsx.Wp.book_new(),worksheet=xlsx.Wp.json_to_sheet(currentItems,{header:headers.map((header=>header.key)),skipHeader:!1});for(let i=0;i<headers.length;i++){worksheet[xlsx.Wp.encode_cell({c:i,r:0})].v=headers[i].label}xlsx.Wp.book_append_sheet(workbook,worksheet,filename),xlsx._h(workbook,`${filename}.xlsx`)},children:(0,jsx_runtime.jsx)(ri.eLh,{})}),(0,jsx_runtime.jsx)(PDFContainer,{style:{visibility:ShowPDFDownloadBtn?"":"hidden"},onClick:()=>{const doc=new jspdf_es_min.default,tableColumnHeaders=columns.map((col=>col.headerName)),tableRows=currentItems.map((row=>columns.map((col=>row[col.field]))));doc.autoTable({head:[tableColumnHeaders],body:tableRows}),doc.save(`${filename}.pdf`)},children:(0,jsx_runtime.jsx)(fa.uNb,{})})]}),(0,jsx_runtime.jsxs)(StyledTable,{children:[(0,jsx_runtime.jsx)(TableHead,{children:(0,jsx_runtime.jsx)(TableRow,{children:columns.map((col=>(0,jsx_runtime.jsx)(TableHeader,{width:col.width,children:col.headerName},col.field)))})}),(0,jsx_runtime.jsx)("tbody",{children:displayedRows.map((row=>(0,jsx_runtime.jsx)(TableRow,{onClick:()=>onRowClick(row),children:columns.map((col=>(0,jsx_runtime.jsx)(TableCell,{children:"Column_3"===col.field?(0,jsx_runtime.jsx)("a",{href:"#",onClick:e=>{e.preventDefault(),(row=>{setSelectedRow(row),setDialogOpen(!0)})(row)},children:row[col.field]}):"Column_6"===col.field?(0,jsx_runtime.jsx)("button",{onClick:()=>console.log("Button clicked!"),children:"Action"}):row[col.field]},col.field)))},row.id)))})]}),(0,jsx_runtime.jsxs)(PaginationContainer,{children:[(0,jsx_runtime.jsxs)(RowsPerPageContainer,{children:["Rows per page:",(0,jsx_runtime.jsxs)(SelectRowsPerPage,{value:rowsPerPage,onChange:e=>setRowsPerPage(Number(e.target.value)),children:[(0,jsx_runtime.jsx)("option",{value:5,children:"5"}),(0,jsx_runtime.jsx)("option",{value:10,children:"10"}),(0,jsx_runtime.jsx)("option",{value:15,children:"15"})]})]}),(0,jsx_runtime.jsxs)("span",{children:[currentPage," of ",totalPages]}),(0,jsx_runtime.jsx)(PaginationButton,{onClick:()=>handlePageChange(currentPage-1),disabled:1===currentPage,children:(0,jsx_runtime.jsx)(md.l7J,{})}),(0,jsx_runtime.jsx)(PaginationButton,{onClick:()=>handlePageChange(currentPage+1),disabled:currentPage===totalPages,children:(0,jsx_runtime.jsx)(md.U7T,{})})]}),selectedRow&&(0,jsx_runtime.jsxs)(stories_CustomDialog,{open:dialogOpen,onClose:()=>setDialogOpen(!1),children:[(0,jsx_runtime.jsx)("h2",{children:"Row Details"}),(0,jsx_runtime.jsx)("pre",{children:JSON.stringify(selectedRow,null,2)})]})]})}const stories_DataGridTable=DataGridTable;DataGridTable.__docgenInfo={description:"",methods:[],displayName:"DataGridTable"};const DataGridTable_stories={title:"Components/Table Component",component:stories_DataGridTable,tags:["autodocs"],argTypes:{ShowSearchBox:{control:"boolean"},ShowPDFDownloadBtn:{control:"boolean"},ShowXLSXDownloadBtn:{control:"boolean"},filename:{control:"text"}}},Default=(args=>(0,jsx_runtime.jsx)(stories_DataGridTable,{...args})).bind({});Default.args={columns:[{field:"Column_1",headerName:"Column 1",width:"150px"},{field:"Column_2",headerName:"Column 2",width:"300px"},{field:"Column_3",headerName:"Column 3",width:"200px"},{field:"Column_4",headerName:"Column 4",width:"200px"},{field:"Column_5",headerName:"Column 5",width:"200px"},{field:"Column_6",headerName:"",width:"200px"}],rows:[{id:"1",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"2",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"3",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"4",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"5",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"6",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"},{id:"8",Column_1:"Sample Data",Column_2:"Sample Data",Column_3:"Sample Data",Column_4:"0",Column_5:"7"}],onRowClick:row=>console.log("Row clicked: ",row),ShowSearchBox:!0,ShowXLSXDownloadBtn:!0,ShowPDFDownloadBtn:!0,filename:"sample"};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <DataGridTable {...args} />",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-DataGridTable-stories.006ec450.iframe.bundle.js.map