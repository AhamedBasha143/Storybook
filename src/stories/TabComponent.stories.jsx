import React from 'react';
import TabComponent from './TabComponent';

export default {
  title: 'Components/Tab Component',
  component: TabComponent,
  tags: ['autodocs'], 
};

const Template = (args) => <TabComponent {...args} />;

export const Default = Template.bind({});
