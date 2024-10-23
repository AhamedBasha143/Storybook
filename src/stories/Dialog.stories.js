import React, { useState } from 'react';
import Dialog from './Dialog';
import { Button } from './Button';
import TextInput from './TextInput';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <Button primary size="small" onClick={openDialog} label="Open Dialog" />
      <Dialog isOpen={isOpen} onClose={closeDialog} title={args.title}>
        {args.children}
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Dialog Title',
  children: 'This is the content of the dialog.',
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  title: 'Custom Dialog',
  children: (
    <div>
      <p>Custom content inside the dialog.</p>
      <TextInput floatingLabelTxtInp={true} placeholder="Input field" value='' labelPosition='left' label='User Name'/>
    </div>
  ),
};
