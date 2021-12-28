import React from "react";
import styled from "styled-components";
import { spacingMap } from "../constant.js";

const PadBox = styled.div`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((padKey) => spacingMap[padKey])
      .join(" ");
  }};
`;
export default PadBox;
