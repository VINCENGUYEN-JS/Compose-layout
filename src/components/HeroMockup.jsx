import React from "react";
import { Stack } from "@bedrock-layout/stack";
import { Split } from "@bedrock-layout/split";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { Cover } from "@bedrock-layout/cover";
import { Frame } from "@bedrock-layout/frame";

import { Inline } from "../layouts/inline.jsx";
import dataImage from "../assets/ronaldo.jpg";

export default function Hero() {
  return (
    <Stack as="header" gutter="sm">
      <Inline gutter="lg" align="center" stretch={1}>
        <h1>Arrow Data</h1>

        <nav>
          <InlineCluster as="ul" gutter="lg" justify="center">
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Docs</li>
            <li>More</li>
          </InlineCluster>
        </nav>

        <InlineCluster gutter="lg">
          <a href="/#">Sign in</a>
          <button>Sign up</button>
        </InlineCluster>
      </Inline>

      <Split gutter="sm">
        <Cover gutter="none" minHeight={`calc(100vh - 48px - 0.25rem)`}>
          <Stack as="selection" gutter="xl">
            <h2>Data Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              vel risus commodo viverra maecenas. Magna sit amet purus gravida
              quis blandit turpis cursus.
            </p>
            <InlineCluster gutter="xl">
              <button>Get Started</button>
              <button>Live Demo</button>
            </InlineCluster>
          </Stack>
        </Cover>

        <Frame>
          <img src={dataImage} alt="" />
        </Frame>
      </Split>
    </Stack>
  );
}
