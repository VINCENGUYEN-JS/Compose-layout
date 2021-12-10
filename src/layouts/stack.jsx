import styled from "styled-components";
import { spacingMap } from "../constant.js";

export const Stack = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
`;

export default function Subscribe() {
  return (
    <Stack>
      <Stack>
        <h2>Subscribe To Our Newsletter</h2>
        <p>
          Subscribe to our newsletter to keep up to date on all our amazing
          products.
        </p>
      </Stack>

      <Stack>
        <Stack gutter="sm">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </Stack>

        <Stack gutter="sm">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </Stack>

        <button>Subscribe</button>
      </Stack>
    </Stack>
  );
}
