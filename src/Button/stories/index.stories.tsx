// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, {ButtonProps } from '../index'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: 'Button',
	children: 'button 1'
};