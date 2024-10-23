import React from 'react';
import { SearchBoxWithIcon } from './SearchBox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Search Box',
  component: SearchBoxWithIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    onSearch: { action: 'changed' },
    showIcon: { control: 'boolean' },
    primary: { control: 'boolean' },
    buttonSize:{ control: 'text'},
    noBorderRadius:{ control: 'boolean' }
  },
};

const Template = (args) => <SearchBoxWithIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search here...',
  onSearch: action('Search term submitted'),
  showIcon:true,
  primary:true,
  buttonSize:'medium',
  noBorderRadius:true
};

export const SearchBox_With_Secondary_Button = Template.bind({});
SearchBox_With_Secondary_Button.args = {
  placeholder: 'Type to find something...',
  onSearch: action('Search term submitted'),
  showIcon:true,
  primary:false,
  buttonSize:'medium',
  noBorderRadius:false
};
