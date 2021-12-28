import React from "react";
import styled from "styled-components";
import { Stack } from "@bedrock-layout/stack";

export const Card = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
`;

export const Top = (props) => <Stack {...props} gutter="md" />;

export const Bottom = styled.div`
  border-top: 1px solid black;
`;

export const Button = styled.div`
  background: black;
  color: white;
  border: none;
  border-radius: 0.25rem;
`;

export const Description = styled.p`
  color: gray;
`;

export const Price = styled.span`
  font-size: 1.5rem;
`;

export const PlanName = styled.strong`
  font-size: 1.25rem;
`;
