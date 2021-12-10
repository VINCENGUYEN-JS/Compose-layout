import React from "react";
import ReactDOM from "react-dom";
import Center from "@bedrock-layout/center";
import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import "@bedrock-layout/css-reset/lib/reset.css";

// import Subscribe from "./components/stack";
// import FormSideBar from "./components/split";
import ContactList from "./components/grid";

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
    <PadBox
      as={Center}
      padding="lg"
      maxWidth="85rem"
      style={{ fontFamily: "sans-serif" }}
    >
      <ContactList />
    </PadBox>
  </React.StrictMode>,
  rootElement
);
