import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button,{ ButtonProps } from '../index';
import {MagnifyingGlass,CaretRight,CaretLeft,Plus} from "phosphor-react";

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;


export const Primary = Template.bind({});

Primary.args = {
	label: 'Button',
  children:"Button",
  type:"primary",
  size:"large",
};

export const PrimaryIconLeft = Template.bind({});

PrimaryIconLeft.args = {
	label: 'Button',
  iconDirection:"left",
  children:<><CaretRight size={24} className="icon"/> Button</>,
  type:"primary",
  size:"large",
};

export const PrimaryIconRight = Template.bind({});

PrimaryIconRight.args = {
	label: 'Button',
  iconDirection:"right",
  children:<>Button <MagnifyingGlass size={24} className="icon"/></>,
  type:"primary",
  size:"large",
};

export const Text = Template.bind({});

Text.args = {
	label: 'Button',
  children:"Button",
  type:"text",
  size:"large",
};

export const TextIconLeft = Template.bind({});

TextIconLeft.args = {
	label: 'Button',
  iconDirection:"left",
  children:<><CaretRight size={24} className="icon"/> Button</>,
  size:"large",
};

export const TextIconRight = Template.bind({});

TextIconRight.args = {
	label: 'Button',
  iconDirection:"right",
  children:<>Button <MagnifyingGlass size={24} className="icon"/></>,
  size:"large",
};

export const IconSearch = Template.bind({});

IconSearch.args = {
	label: 'Button',
  children:<><MagnifyingGlass size={16} className="circle"/></>,
  shape:"circle",
  size:"large",
};

export const IconCaretLeft = Template.bind({});

IconCaretLeft.args = {
	label: 'Button',
  children:<><CaretLeft size={16} className="circle"/></>,
  shape:"circle",
  size:"large",
};

export const IconPlus = Template.bind({});

IconPlus.args = {
	label: 'Button',
  children:<><Plus size={16} className="circle"/></>,
  type:"primary",
  shape:"circle",
  size:"large",
};
