import * as React from "react";
import { Input as AntInput, InputProps as AntInputProps } from "antd";

import 'antd/lib/input/style/index.css'
import "./style.css"

export type InputProps = AntInputProps;

const Input: React.FC<InputProps> = (props) => {
  return <AntInput {...props} />;
};

Input.propTypes = {};

export default Input;