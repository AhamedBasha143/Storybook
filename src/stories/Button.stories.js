import { fn } from '@storybook/test';
import { Button } from './Button';
import { LuSendHorizonal } from "react-icons/lu";

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const RoundedPrimaryButton = {
  args: {
    primary: true,
    label: 'Rounded Border Button',
  },
};

export const SquaredPrimaryButton = {
  args: {
    label: 'Button',
    primary: true,
    noBorderRadius: true,
  },
};

export const SquaredLargeButton = {
  args: {
    size: 'large',
    label: 'Large Button',
    noBorderRadius: true,
  },
};

export const SquaredSmallButton = {
  args: {
    size: 'small',
    label: 'Small Button',
    noBorderRadius: true,
  },
};

export const RoundedLargeButton = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const RoundedSmallButton = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

export const IconLeftButton = {
  args: {
    primary: true,
    label: 'Button',
    icon: <LuSendHorizonal />,
    iconPosition: 'left',
  },
};

export const IconRightButton = {
  args: {
    primary: true,
    label: 'Button',
    icon: <LuSendHorizonal />,
    iconPosition: 'right',
  },
};
