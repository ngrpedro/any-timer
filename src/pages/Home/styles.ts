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

export const BaseCountdownButton = styled("button", {
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
  color: "$gray-100",

  "&:disabled": {
    opacity: "0.7",
    cursor: "not-allowed",
  },
});

export const StartCountdownButton = styled(BaseCountdownButton, {
  background: "$green-500",

  "&:not(:disabled):hover": {
    background: "$green-700",
  },
});

export const StopCountdownButton = styled(BaseCountdownButton, {
  background: "$red-500",

  "&:not(:disabled):hover": {
    background: "$red-700",
  },
});
