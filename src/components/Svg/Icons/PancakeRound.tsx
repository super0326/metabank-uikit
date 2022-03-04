import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image width="90" height="90" href={ '/darklogo.png'}/>
    </Svg>
  );
};

export default Icon;

