import React from "react";
import DataGridTable from "./DataGridTable"; // Adjust this path to your component location

export default {
  title: "Components/Table Component",
  component: DataGridTable,
  tags: ['autodocs'],
  argTypes: {
    // Configure controls for the props
    ShowSearchBox: { control: 'boolean' },
    ShowPDFDownloadBtn: { control: 'boolean' },
    ShowXLSXDownloadBtn: { control: 'boolean' },
    filename:{control:'text'}
  },
};

// Template for DataGridTable stories
const Template = (args) => <DataGridTable {...args} />;

// Example columns to match the image
const columnsExample = [
  { field: "Column_1", headerName: "Column 1", width: "150px" },
  { field: "Column_2", headerName: "Column 2", width: "300px" },
  { field: "Column_3", headerName: "Column 3", width: "200px" },
  { field: "Column_4", headerName: "Column 4", width: "200px" },
  { field: "Column_5", headerName: "Column 5", width: "200px" },
  {field: "Column_6", headerName: "", width: "200px" }
];

// Example rows to match the image
const rowsExample = [
  {
    id: "1",
    Column_1: "Sample Data",
    Column_2: "Sample Data",
    Column_3: "Sample Data",
    Column_4: "0",
    Column_5: "7",
  },
  {
    id: "2",
    Column_1: "Sample Data",
    Column_2: "Sample Data",
    Column_3: "Sample Data",
    Column_4: "0",
    Column_5: "7",
  },
  {
    id: "3",
    Column_1: "Sample Data",
    Column_2: "Sample Data",
    Column_3: "Sample Data",
    Column_4: "0",
    Column_5: "7",
  },
  {
    id: "4",
    Column_1: "Sample Data",
    Column_2: "Sample Data",
    Column_3: "Sample Data",
    Column_4: "0",
    Column_5: "7",
  },
  {
    id: "5",
    Column_1: "Sample Data",
    Column_2: "Sample Data",
    Column_3: "Sample Data",
    Column_4: "0",
    Column_5: "7",
  },
  {
    id: "6",
    Column_1: "Sample Data",
    Column_2: "Sample Data",
    Column_3: "Sample Data",
    Column_4: "0",
    Column_5: "7",
  },
  {
    id: "8",
    Column_1: "Sample Data",
    Column_2: "Sample Data",
    Column_3: "Sample Data",
    Column_4: "0",
    Column_5: "7",
  },
  // Add more rows as needed...
];

// Default Story
export const Default = Template.bind({});
Default.args = {
  columns: columnsExample,
  rows: rowsExample,
  onRowClick: (row) => console.log("Row clicked: ", row),
  ShowSearchBox:true,
  ShowXLSXDownloadBtn:true,
  ShowPDFDownloadBtn:true,
  filename:'sample'
};
