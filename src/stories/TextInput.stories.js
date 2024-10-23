import React from 'react';
import TextInput from './TextInput';

// Default export for Storybook
export default {
  title: 'Components/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    labelPosition: { 
      control: 'select', 
      options: ['top', 'left'], 
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'changed' },
    required: { control: 'boolean' },
  },
};

// Template for the component stories
const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'User Name',
  labelPosition: 'top',
  placeholder: 'Enter username',
  value: '',
  required: true, 
  floatingLabelTxtInp:false,
};

// Story for Top Label
export const LabelTop = Template.bind({});
LabelTop.args = {
  label: 'User Name',
  labelPosition: 'top',
  placeholder: 'Enter username',
  value: '',
  required: true, 
  floatingLabelTxtInp:false,
};

// Story for Left Label
export const LabelLeft = Template.bind({});
LabelLeft.args = {
  label: 'User Name',
  labelPosition: 'left',
  placeholder: 'Enter username',
  value: '',
  required: false, 
  floatingLabelTxtInp:false,
}

export const TextInputWithFloatingLabel = Template.bind({});
TextInputWithFloatingLabel.args = {
  label: 'User Name',
  labelPosition: 'left',
  placeholder: 'Enter username',
  value: '',
  required: false, 
  floatingLabelTxtInp:true,
}
