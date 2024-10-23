import React from 'react';
import Map from './Map';

export default {
  title: 'Components/Map Component',
  component: Map,
  tags: ['autodocs'],
  argTypes: {
    center: { control: 'array', description: 'Center of the map (latitude, longitude).' },
    zoom: { control: 'number', description: 'Zoom level of the map.' },
    markers: { control: 'object', description: 'Array of markers with position and popup text.' },
  },
};

const Template = (args) => <Map {...args} />;

export const DefaultMap = Template.bind({});
DefaultMap.args = {
  center: [51.505, -0.09],
  zoom: 13,
  markers: [
    { position: [51.505, -0.09], popupText: 'Default Marker' },
  ],
};

export const MultipleMarkersMap = Template.bind({});
MultipleMarkersMap.args = {
  center: [51.505, -0.09],
  zoom: 10,
  markers: [
    { position: [51.505, -0.09], popupText: 'Marker 1' },
    { position: [51.515, -0.1], popupText: 'Marker 2' },
    { position: [51.52, -0.08], popupText: 'Marker 3' },
  ],
};

export const CustomZoomMap = Template.bind({});
CustomZoomMap.args = {
  center: [51.505, -0.09],
  zoom: 5,
  markers: [
    { position: [51.505, -0.09], popupText: 'Zoomed Out Marker' },
  ],
};
