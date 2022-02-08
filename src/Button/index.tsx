import * as React from "react";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";

import 'antd/lib/button/style/index.css'
import "./style.css"

export type ButtonProps = AntButtonProps & {
  icon?:React.ReactDOM;
};

const Button: React.FC<ButtonProps> = (props:any) => {
  const {icon,children, ...restProps} = props;
  return <AntButton {...restProps} >
    <span className={props.iconDirection === "left" ? "left" : (restProps.iconDirection !==null ? "right" : "" )}>
      {children}
    </span>
    {icon && <span>icon</span>}
  </AntButton>
};

Button.propTypes = {
  icon:undefined
};


export default Button;