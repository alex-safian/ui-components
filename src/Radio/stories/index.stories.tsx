import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Radio, RadioProps } from '../index'

export default {
  title: 'Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: RadioProps) => <Radio {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: 'Radio'
};