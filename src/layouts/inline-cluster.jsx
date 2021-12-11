import React from "react";
import { spacingMap } from "../constant.js";
import styled from "styled-components";
import Menu from "../components/Menu";

const justifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const InlineCluster = styled.div`
  --gutter: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => justifyAlignMap[props.justify] ?? "flex-start"};
  align-items: ${(props) => justifyAlignMap[props.align] ?? "flex-start"};
  gap: var(--gutter);
`;

export default function MenuBar() {
  return (
    <Menu>
      <InlineCluster gutter="lg" justify="end" align="center">
        <span>Product</span>
        <span>Features</span>
        <span>Marketplace</span>
        <span>Company</span>
        <span>Log in</span>
      </InlineCluster>
    </Menu>
  );
}
