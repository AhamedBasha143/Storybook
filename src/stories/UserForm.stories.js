import React from 'react';
import UserForm from './UserForm';

export default {
  title: 'Components/Form',
  component: UserForm,
  tags: ['autodocs'],
};

const Template = (args) => <UserForm {...args} />;

export const DefaultForm = Template.bind({});
DefaultForm.args = {
  onSubmit: (data) => {
    alert(JSON.stringify(data, null, 2));
  },
  onCancel: () => {
    alert('Form canceled');
  },
};

