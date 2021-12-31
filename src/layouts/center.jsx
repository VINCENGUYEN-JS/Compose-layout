import React from "react";
import styled from "styled-components";
import { Stack } from "@bedrock-layout/stack";

import Attribution from "../components/Testimonial";

export const Center = styled.div`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-inline-size: ${(props) => props.maxWidth};
  ${(props) => props.centerText && "text-align:center;"}
  display:flex;
  flex-direction: column;
  align-items: center;
`;

export default function Testimonial() {
  return (
    <Center maxWidth="100ch" centerText>
      <h2>Home4Hire</h2>
      <p>
        "Lorem ipsum dolor sit amet, nibh lorem convenire quo et. Usu ea libris
        omittantur. Dicta theophrastus ad mei. Dicat appetere at vis, qui ne
        scripta docendi."
      </p>
      <Attribution />
    </Center>
  );
}
