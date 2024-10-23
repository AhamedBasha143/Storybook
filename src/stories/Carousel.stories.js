import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Slide 1" />,
    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="Slide 2" />,
    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Slide 3" />,
  ],
};