import React from "react";
import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import { InlineCluster } from "./inline-cluster.jsx";

const Button = styled(PadBox).attrs(() => {
  return {
    as: "button",
    padding: ["md", "lg"],
  };
})`
  background: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
`;
const Logo = styled.div.attrs(() => ({ size: "3rem" }))`
  border-radius: 50%;
  background-color: black;
  inline-size: ${({ size }) => size};
  block-size: ${({ size }) => size};
`;

const MenuContainer = styled(PadBox).attrs(() => ({ padding: "md" }))`
  border: 1px solid black;
`;

const stretchMap = {
  all: `> * {flex:1}`,
  start: `> :first-child {flex:1}`,
  end: `> :last-child {flex:1}`,
};

const Inline = styled(InlineCluster)`
  flex-wrap: nowrap;

  ${({ stretch }) => {
    if (typeof stretch === "number") {
      return `> :nth-child(${stretch + 1}) : {flex:1}`;
    }
    return stretchMap[stretch] ?? "";
  }}
`;

export default function MenuBar() {
  return (
    <MenuContainer>
      <Inline stretch="all" align="center">
        <div>
          <Logo />
        </div>
        <InlineCluster gutter="md" justify="center" align="center">
          <span>Product</span>
          <span>Features</span>
          <span>Marketplace</span>
          <span>Company</span>
        </InlineCluster>
        <div>
          <span>Sign in</span>
          <Button>Sign up</Button>
        </div>
      </Inline>
    </MenuContainer>
  );
}
