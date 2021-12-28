import React from "react";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import { Stack } from "@bedrock-layout/stack";
import { Grid } from "@bedrock-layout/grid";
import PadBox from "../layouts/padbox.jsx";

import {
  Card,
  Top,
  Bottom,
  Button,
  Description,
  Price,
  PlanName,
} from "./card-parts";

function PricingPlan() {
  return (
    <Card>
      <PadBox padding={["sm", "xl"]}>
        <Top>
          <PlanName>Basic</PlanName>
          <Description>All the Basics for getting started</Description>
          <Price>$12/mo</Price>
          <InlineCluster gutter="none" justify="center">
            <Button>Buy Basic</Button>
          </InlineCluster>
        </Top>
      </PadBox>

      <Bottom>
        <Stack gutter="md">
          <span>What's included</span>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Mollis pretium lorem primis senectus habitasse</li>
            <li>Phasellus ante pellentesque erat</li>
          </ul>
        </Stack>
      </Bottom>
    </Card>
  );
}

export default function PlanList() {
  return (
    <Grid gutter="xl" minItemWidth="16rem">
      <PricingPlan />
      <PricingPlan />
      <PricingPlan />
      <PricingPlan />
    </Grid>
  );
}
