import React from "react";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { Stack } from "@bedrock-layout/stack";

import { Button } from "./Button";
import { Cover } from "../layouts/cover";

export default function Hero() {
  return (
    <Cover
      padding="lg"
      top={
        <InlineCluster gutter="xl" justify="end">
          <span>Places to stay</span>
          <span>Popular experiences</span>
          <span>Manage your booking</span>
          <span>List your property</span>
        </InlineCluster>
      }
      bottom={
        <InlineCluster gutter="xl" justify="center">
          <a href="/#">Keep Reading to learn more</a>
        </InlineCluster>
      }
    >
      <Stack gutter="lg">
        <h1>Home4Hire</h1>
        <span>Stay here and relax</span>
        <InlineCluster gutter="lg">
          <Button primary>Get started</Button>
          <Button>Sign in</Button>
        </InlineCluster>
      </Stack>
    </Cover>
  );
}
