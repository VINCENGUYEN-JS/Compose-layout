import React from "react";
import { PadBox } from "@bedrock-layout/padbox";
import { Split } from "@bedrock-layout/split";

import styled from "styled-components";

const Logo = styled.div`
  border-radius: 50%;
  background-color: black;
`;

const MenuContainer = styled(PadBox)`
  border: 1px solid black;
`;

const Menu = styled(Split)`
  > ${Logo} {
    inline-size: 3rem;
    max-inline-size: 3rem;
    block-size: 3rem;
  }
`;

export default (props) => (
  <MenuContainer padding="sm">
    <Menu gutter="lg" switchAt="35rem" fraction="auto-start">
      <Logo />
      {props.children}
    </Menu>
  </MenuContainer>
);
