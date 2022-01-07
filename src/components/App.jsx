import React from "react";
import styled from "styled-components";

import { Menu } from "./MenuApp";
import { Logo } from "./Logo";
import { Center } from "../layouts/center";
import { Stack } from "../layouts/stack";
import { Split } from "../layouts/split";
import { InlineCluster } from "../layouts/inline-cluster";
import PadBox from "../layouts/padbox";

const ContentArea = styled(PadBox).attrs(() => ({
  padding: "xl",
}))`
  background-image: linear-gradient(to bottom, black 14rem, whitesmoke 14rem);
`;

const SettingsHeader = styled.header`
  color: white;
`;

const SettingsPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`;

const SideMenuItem = styled(InlineCluster).attrs(() => ({
  as: PadBox,
  gutter: "lg",
  padding: ["md", "lg"],
  align: "center",
}))`
  border-inline-start: 0.25rem solid transparent;
  ${(props) =>
    props.active &&
    `
      border-inline-start-color: grey;
      background: gainsboro;
    `}
`;

export default function App() {
  return (
    <>
      <Menu />
      <ContentArea>
        <SettingsHeader>
          <h1>Settings</h1>
        </SettingsHeader>
        <SettingsPane as="main">
          <PadBox as="nav" padding={["lg", "none"]}>
            <Stack as="ul" gutter="xs">
              <li>
                <SideMenuItem active>
                  <Logo square inverse size="1rem" />
                  Profile
                </SideMenuItem>
              </li>
              <li>
                <SideMenuItem>
                  <Logo square inverse size="1rem" />
                  Acount
                </SideMenuItem>
              </li>
              <li>
                <SideMenuItem>
                  <Logo inverse size="1rem" />
                  Password
                </SideMenuItem>
              </li>
              <li>
                <SideMenuItem>
                  <Logo inverse size="1rem" />
                  Notifications
                </SideMenuItem>
              </li>
              <li>
                <SideMenuItem>
                  <Logo square inverse size="1rem" />
                  Billing
                </SideMenuItem>
              </li>
              <li>
                <SideMenuItem>
                  <Logo inverse size="1rem" />
                  Integrations
                </SideMenuItem>
              </li>
            </Stack>
          </PadBox>
          <div>Placeholder for right-hand side</div>
        </SettingsPane>
      </ContentArea>
    </>
  );
}
