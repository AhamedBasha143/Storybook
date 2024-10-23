import React, { useState } from 'react';
import Slider from './Slider';

export default {
  title: 'Components/Slider Component',
  component: Slider,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [value, setValue] = useState(30);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <Slider {...args} value={value} onChange={handleChange} />;
};

export const DefaultSlider = Template.bind({});
DefaultSlider.args = {
  label: 'Custom Slider',
  min: 0,
  max: 100,
  step: 1,
};
