import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";

export const Button = styled(PadBox).attrs(() => ({
  padding: ["md", "xl"],
  as: "button",
}))`
  background: ${(props) => (props.primary ? "black" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  border: ${(props) => (props.primary ? "none" : "1px solid black")};
  border-radius: 0.25rem;
`;
