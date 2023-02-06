import { styled } from "../../../../styles/stitches.config";

export const CountdownContainer = styled("div", {
  fontFamily: "Roboto Mono, monospace",
  fontSize: "10rem",
  lineHeight: "8rem",
  color: "$gray-100",
  display: "flex",
  gap: "1rem",
  span: {
    background: "$gray-700",
    padding: "2rem 1rem",
    borderRadius: "8px",
  },
});

export const Separator = styled("div", {
  padding: "2rem 0",
  color: "$green-500",
  width: "4rem",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
});
