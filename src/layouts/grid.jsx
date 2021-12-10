import React from "react";
import Card from "../components/Card.jsx";
import styled from "styled-components";
import { spacingMap } from "../components/constant.js";

const Grid = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(prop) => prop.minItemWidth ?? "320px"}, 100%), 1fr)
  );
`;

export default function ContactList() {
  return (
    <Grid gutter="xl" minItemWidth="24rem">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
}
