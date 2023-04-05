import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../src';
import { withReactContext } from 'storybook-react-context';

const meta: Meta = {
  title: 'Inputs/Text input',
  component: Input,
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

const Template: Story<InputProps.Props> = args => <Input {...args} />;
export const Default = Template.bind({});

Default.args = {
    placeholder: 'Example input',
    variant: 'primary',
};
