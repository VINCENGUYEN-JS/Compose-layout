import React from "react";
import styled from "styled-components";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { PadBox } from "@bedrock-layout/padbox";

import CustomPadBox from "../layouts/padbox.jsx";
import { Logo } from "./Logo.jsx";
import { Inline } from "../layouts/inline.jsx";

const MenuBar = styled(Inline).attrs(() => ({
  as: PadBox,
  padding: ["md", "xl"],
  stretch: 1,
  gutter: "lg",
  align: "center",
}))`
  background: black;
  color: white;
  border-block-end: 1px solid #303030;
`;

const MenuItem = styled(CustomPadBox).attrs(() => ({
  padding: ["sm", "md"],
  as: "li",
}))`
  background: ${(props) => (props.active ? "#303030" : "transparent")};
  border-radius: 0.25rem;
`;

const SearchInput = styled(CustomPadBox).attrs(() => ({
  as: "input",
  padding: ["sm", "lg"],
}))`
  border-radius: 0.25rem;
  background: #303030;
  border: none;
  color: white;
`;

export function Menu() {
  return (
    <MenuBar>
      <Logo size="2em" />
      <nav>
        <InlineCluster as="ul" gutter="sm">
          <MenuItem active>Dashboard</MenuItem>
          <MenuItem>Job</MenuItem>
          <MenuItem>Applicants</MenuItem>
          <MenuItem>Company</MenuItem>
        </InlineCluster>
      </nav>
      <SearchInput placeholder="Search" />
      <Logo square size="1.5rem" />
      <Logo size="2rem" />
    </MenuBar>
  );
}
