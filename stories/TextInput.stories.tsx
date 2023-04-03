import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput, TextInputProps } from '../src';
import { withReactContext } from 'storybook-react-context';

const meta: Meta = {
  title: 'Inputs/Text input',
  component: TextInput,
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

const Template: Story<TextInputProps.Props> = args => <TextInput {...args} />;
export const Default = Template.bind({});

Default.args = {
    placeholder: 'Example input',
    variant: 'primary',
};
