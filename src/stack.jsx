import styled from "styled-components";

const spacingMap = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "4rem",
};

const Stack = styled.div`
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
