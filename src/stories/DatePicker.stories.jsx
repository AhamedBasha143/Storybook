// DatePicker.stories.jsx
import React, { useState } from 'react';
import DatePicker from './DatePicker';

export default {
  title: 'Components/Date Picker Component',
  component: DatePicker,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [date, setDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleChange = (value, type) => {
    if (type === 'from') {
      setStartDate(value);
    } else if (type === 'to') {
      setEndDate(value);
    } else {
      setDate(value);
    }
  };

  return (
    <div >
      <h4>Selected Date: {date}</h4>
      <DatePicker {...args} onChange={handleChange} />
    </div>
  );
};

export const DefaultDatePicker = Template.bind({});
DefaultDatePicker.args = {
  type: 'default',
  disableFuture: true,
};

export const DateTimePicker = Template.bind({});
DateTimePicker.args = {
  type: 'datetime',
  disableFuture: true,
};

