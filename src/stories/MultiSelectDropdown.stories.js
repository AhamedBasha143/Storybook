import React, { useState } from 'react';
import MultiSelectDropdown from './MultiSelectDropdown'; // Adjust the path according to your project structure

// Default export required by Storybook
export default {
  title: 'Components/Multi Select Dropdown',
  component: MultiSelectDropdown,
  parameters: {
    layout: 'centered', // Ensures the component is centered in Storybook
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'array' }, // Control for passing options in Storybook UI
    selectedOptions: { control: 'array' }, // Control for selected values
    onChange: { action: 'changed' }, // Storybook action to handle the onChange event
    placeholder: { control: 'text' }, // Control for placeholder text
    disabled: { control: 'boolean' }, // Control for disabled state
  },
};

// Template function for reusing in multiple stories
const Template = (args) => {
  const [selectedOptions, setSelectedOptions] = useState(args.selectedOptions);

  return (
    <MultiSelectDropdown
      {...args}
      selectedOptions={selectedOptions}
      onChange={setSelectedOptions}
    />
  );
};

// Default dropdown story
export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  selectedOptions: [], // No initial selection
  placeholder: 'Select options...',
  disabled: false, // Enabled
};

// Enabled dropdown story
export const Enabled = Template.bind({});
Enabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  selectedOptions: ['Option 1'], // Option 1 initially selected
  placeholder: 'Select options...',
  disabled: false, // Enabled
};

// Disabled dropdown story
export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  selectedOptions: ['Option 1', 'Option 2'], // Some options selected
  placeholder: 'Select options...',
  disabled: true, // Disabled state
};
