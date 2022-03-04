import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 75 47" {...props}>
      <image width="75" height="47" href={'/darklogo.png'}/>
    </Svg>
  );
};

export default Icon;
