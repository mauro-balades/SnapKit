import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GlassElement, GlassElementProps } from '../src';
import { withReactContext } from 'storybook-react-context';

function Example(props: GlassElementProps.Props) {
    return (
        <>
            <div style={{ height: "200px",
                width: "200px",
                background: "linear-gradient(rgba(250,0,0,0.5),transparent)",
                backgroundColor: "orange" }}>
            </div>
            <GlassElement style={{ position: 'absolute', top: '0', left: '0', width: "200px", height: '100px' }} {...props}></GlassElement>
        </>
    )
}

const meta: Meta = {
  title: 'Glass wrapper',
  component: GlassElement,
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

const Template: Story<GlassElementProps.Props> = args => <Example {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: 'My content'
};
