import React from "react";
import ReactDOM from "react-dom";
import Center from "@bedrock-layout/center";
import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import "@bedrock-layout/css-reset/lib/reset.css";

// import Subscribe from "./layouts/stack";
// import FormSideBar from "./layouts/split";
// import ContactList from "./layouts/grid";
import MenuBar from "./layouts/inline-cluster";

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
      <MenuBar />
    </PadBox>
  </React.StrictMode>,
  rootElement
);
