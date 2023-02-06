import { styled } from "../../../../styles/stitches.config";

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
