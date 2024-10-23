import React from 'react';
import Checkbox from './Checkbox';

// Default export defines metadata for the stories
export default {
  title: 'Components/Check Box',
  component: Checkbox,
  parameters: {
    layout: 'centered', // Center the component in Storybook
  },
  tags: ['autodocs'],
  argTypes: {
    // Configure controls for the props
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    labelPlacement:{control:'text'}
  },
};

// Create a template that all stories can use
const Template = (args) => <Checkbox {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  label: 'Default Checkbox',
  checked: false,
  disabled: false,
  onChange: () => alert('Checkbox toggled!'),
  labelPlacement:'left'
};

// Default story - top label
export const Top_Labled = Template.bind({});
Top_Labled.args = {
  label: 'Label placed at top',
  checked: true,
  disabled: false,
  onChange: () => alert('Checkbox toggled!'),
  labelPlacement:'top'
};

// Default story - bottom label
export const Bottom_Labled = Template.bind({});
Bottom_Labled.args = {
  label: 'Label placed at bottom',
  checked: true,
  disabled: false,
  onChange: () => alert('Checkbox toggled!'),
  labelPlacement:'bottom'
};

// Default story - start label
export const Start_Labled = Template.bind({});
Start_Labled.args = {
  label: 'Label placed at start',
  checked: true,
  disabled: false,
  onChange: () => alert('Checkbox toggled!'),
  labelPlacement:'start'
};

// Default story - left label
export const Left_Labled = Template.bind({});
Left_Labled.args = {
  label: 'Label placed at left',
  checked: true,
  disabled: false,
  onChange: () => alert('Checkbox toggled!'),
  labelPlacement:'left'
};

// Selected story
export const Selected = Template.bind({});
Selected.args = {
  label: 'Selected Checkbox',
  checked: true,
  disabled: false,
  onChange: () => alert('Checkbox toggled!'),
  labelPlacement:'left'
};

// Disabled story
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Checkbox',
  checked: true,
  disabled: true,
  onChange: () => {},
  labelPlacement:'left'
};
