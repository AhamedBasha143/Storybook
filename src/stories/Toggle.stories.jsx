import React, { useState } from 'react';
import Toggle from './Toggle';

export default {
  title: 'Components/Toggle Component',
  component: Toggle,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return <Toggle {...args} checked={checked} onChange={handleChange} />;
};

export const DefaultToggle = Template.bind({});
DefaultToggle.args = {
  label: 'Custom Toggle',
};
