import React from "react";
import ReactDOM from "react-dom";
import Center from "@bedrock-layout/center";
import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import "@bedrock-layout/css-reset/lib/reset.css";

// import Subscribe from "./layouts/stack";
// import FormSideBar from "./layouts/split";
// import ContactList from "./layouts/grid";
// import MenuBar from "./layouts/inline-cluster";
// import MenuBar from "./layouts/inline";
// import PricingPlan from "./components/PricingPlan";
// import Testimonial from "./layouts/center";
// import Hero from "./components/Hero.jsx";
// import HeroMockup from "./components/HeroMockup";
import App from "./components/App";

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

const AppStyles = styled(PadBox).attrs(() => ({
  as: Center,
  padding: "md",
  maxWidth: "85rem",
}))`
  font-family: sans-serif;
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
