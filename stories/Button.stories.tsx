import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';
import { withReactContext } from 'storybook-react-context';

const meta: Meta = {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps.Props> = args => <Button {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: 'Example button',
  variant: 'primary',
};
