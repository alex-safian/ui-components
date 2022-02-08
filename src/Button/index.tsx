// eslint-disable-next-line no-use-before-define
import * as React from "react";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";

import 'antd/lib/button/style/index.css'
import "./style.css"

export type ButtonProps = AntButtonProps;

const Button: React.FC<ButtonProps> = (props) => {
  return <AntButton {...props} />;
};

Button.propTypes = {};

export default Button;