import React from "react";
import styled from "styled-components";

import { Stack } from "./stack.jsx";
import { spacingMap } from "./constant.js";

const fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

const Split = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
  grid-template-columns: ${({ fraction }) =>
    fractions[fraction] ?? fractions["1/2"]};
`;

export default function FormSideBar() {
  return (
    <Split gutter="xxl" fraction="1/3">
      <div>
        <h2>Personal Information</h2>
        <span>The information you provide will be displayed publicly.</span>
      </div>
      <Form />
    </Split>
  );
}

/**
 * Implementation Form
 */

function Form() {
  return (
    <Stack gutter="xl">
      <FormGroup htmlFor="firstName" label="First Name">
        <input type="text" id="firstName" />
      </FormGroup>
      <FormGroup htmlFor="lastName" label="Last Name">
        <input type="text" id="lastName" />
      </FormGroup>
      <FormGroup htmlFor="email" label="Email">
        <input type="text" id="email" />
      </FormGroup>
      <FormGroup htmlFor="address" label="Street Address">
        <input type="text" id="address" />
      </FormGroup>
      <FormGroup htmlFor="city" label="City">
        <input type="text" id="city" />
      </FormGroup>
      <FormGroup htmlFor="state" label="State">
        <input type="text" id="state" />
      </FormGroup>
      <FormGroup htmlFor="zipCode" label="Zip Code">
        <input type="text" id="zipCode" />
      </FormGroup>
    </Stack>
  );
}

function FormGroup(props) {
  return (
    <Stack gutter="md">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </Stack>
  );
}
