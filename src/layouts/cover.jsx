import React from "react";
import styled from "styled-components";
import { spacingMap } from "../constant.js";

export const Cover = styled.div.attrs(({ children, top, bottom }) => {
  return {
    children: (
      <React.Fragment>
        {top && <div>{top}</div>}
        <div data-cover-child>{children}</div>
        {bottom && <div>{bottom}</div>}
      </React.Fragment>
    ),
  };
})`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
  min-block-size: ${(props) => props.minHeight ?? "100vh"};
  grid-template-rows: ${({ top, bottom }) =>
    top && bottom
      ? "auto 1fr auto"
      : top
      ? "auto 1fr"
      : bottom
      ? "1fr auto"
      : "1fr"};

  > [data-cover-child] {
    align-self: center;
  }
`;
