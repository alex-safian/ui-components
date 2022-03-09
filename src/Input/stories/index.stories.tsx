import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Input, InputProps } from '../index'

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: 'Input'
};