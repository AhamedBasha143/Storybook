import React from 'react';
import { BadgeComponent } from './BadgeComponent';
import { FaTruck } from 'react-icons/fa';  // Example icon from react-icons

export default {
  title: 'Components/Badge Component',
  component: BadgeComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    label: { control: 'text' },
    badgeCount: { control: 'number' },
    iconSize: { control: 'text' },
    labelColor: { control: 'color' },
    labelSize: { control: 'text' },
    backgroundColor:{control:'color'}
    },
};

const Template = (args) => <BadgeComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <FaTruck />,
  label: 'Badge Label',
  badgeCount: 2838,
  iconSize: '30px',
  backgroundColor:'white'
};

export const CustomBadge = Template.bind({});
CustomBadge.args = {
  icon: <FaTruck />,
  label: 'Badge Label',
  badgeCount: 50,
  iconSize: '30px',
  labelColor: '#1e90ff',
  labelSize: '1.2rem',
  backgroundColor:'lightgray'
};

export const NoBadge = Template.bind({});
NoBadge.args = {
  icon: <FaTruck />,
  label: 'Badge Label',
  badgeCount: 0,
  iconSize: '30px',
  labelColor: '#888',
};
