import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Checkbox, CheckboxProps } from '../index'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: 'Checkbox'
};