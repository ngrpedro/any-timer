import { styled } from "../../styles/stitches.config";

export const HomeContainer = styled("main", {
  flex: "1",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3.5rem",
  },
});

export const FormContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "100%",
  gap: "0.5rem",
  color: "$gray-100",
  fontSize: "1.125re",
  fontWeight: "bold",
});

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

export const StartCountdownButton = styled("button", {
  width: "100%",
  border: "0",
  padding: "1rem",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  fontWeight: "bold",
  cursor: "pointer",
  background: "$green-500",
  color: "$gray-100",

  "&:disabled": {
    opacity: "0.7",
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    background: "$green-700",
  },
});

export const BaseInput = styled("input", {
  background: "transparent",
  height: "2.5rem",
  border: "0",
  borderBottom: "2px solid $gray-500",
  fontWeight: "bold",
  fontSize: "1.125rem",
  padding: "0 0.5rem",
  color: "$gray-100",

  "&:focus": {
    boxShadow: "none",
    borderColor: "green-500",
  },
  "&::placeholder": {
    color: "$gray-500",
  },
});

export const TaskInput = styled(BaseInput, {
  flex: 1,
});

export const MinutesAmountInput = styled(BaseInput, {
  width: "5rem",
});
