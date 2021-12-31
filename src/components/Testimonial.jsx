import React from "react";
import styled from "styled-components";
import { Split } from "@bedrock-layout/split";
import { Frame } from "@bedrock-layout/frame";

import ronaldo from "../assets/ronaldo.jpg";

const LogoImg = styled.img`
  border-radius: 50%;
`;

const Wrapper = styled(Split)`
  align-items: center;
  > [data-bedrock-layout-frame] {
    min-width: 3rem;
  }
`;
const Attribution = () => (
  <Wrapper fraction="auto-start" gutter="lg">
    <Frame ratio={[1, 1]}>
      <LogoImg src={ronaldo} alt="" />
    </Frame>
    <span>Super football star </span>
  </Wrapper>
);

export default Attribution;
