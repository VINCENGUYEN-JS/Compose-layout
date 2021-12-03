import React from "react";
import ReactDOM from "react-dom";
import Center from "@bedrock-layout/center";
import styled from "styled-components";

import "@bedrock-layout/css-reset/lib/reset.css";
import Subscribe from "./stack";

const BaseStyles = styled(Center)`
  input {
    border: 1px solid black;
    background: white;
  }

  button {
    color: white;
    background: black;
    border: none;
  }

  hr {
    margin: 0;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BaseStyles maxWidth="640px">
      <h1>Hi</h1>
    </BaseStyles>
  </React.StrictMode>,
  rootElement
);
