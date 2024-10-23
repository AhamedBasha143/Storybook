import React from 'react';
import Graph from './Graph';

export default {
  title: 'Components/Graph Component',
  tags: ['autodocs'],
  component: Graph,
};

const Template = (args) => <Graph {...args} />;

export const BarChart = Template.bind({});
BarChart.args = {
  graphType: 'bar',
};

export const LineChart = Template.bind({});
LineChart.args = {
  graphType: 'line',
};

export const PieChart = Template.bind({});
PieChart.args = {
  graphType: 'pie',
};

export const DonutChart = Template.bind({});
DonutChart.args = {
  graphType: 'donut',
};

export const AreaChart = Template.bind({});
AreaChart.args = {
  graphType: 'area',
};

export const StackedBarChart = Template.bind({});
StackedBarChart.args = {
  graphType: 'stackedBar',
};

export const VerticalBarChart = Template.bind({});
VerticalBarChart.args = {
  graphType: 'verticalBar',
};
