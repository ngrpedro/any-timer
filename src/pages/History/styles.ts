import { styled } from "../../styles/stitches.config";

export const HistoryContainer = styled("main", {
  flex: "1",
  padding: "3.5rem",
  display: "flex",
  flexDirection: "column",
  h1: {
    fontsize: "1.5rem",
    color: "$gray-100",
  },
});

export const HistoryList = styled("div", {
  flex: "1",
  overflow: "auto",
  marginTop: "2rem",

  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "600px",

    th: {
      backgroundColor: "$gray-600",
      padding: "1rem",
      textAlign: "left",
      color: "$gray-100",
      fontSize: "0.875rem",
      lineHeight: "1.6",

      "&:[first-child]": {
        borderTopLeftRadius: "8px",
        paddingLeft: "1.5rem",
      },

      "&:[last-child]": {
        borderTopRightRadius: "8px",
        paddingRight: "1.5rem",
      },
    },

    td: {
      backgroundColor: "$gray-700",
      borderTop: "4px solid $gray-800",
      padding: "1rem",
      fontSize: "0.875rem",
      lineHeight: "1.6",

      "&:[first-child]": {
        width: "50%",
        paddingLeft: "1.5rem",
      },

      "&:[last-child]": {
        paddingRight: "1.5rem",
      },
    },
  },
});

export const Status = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  borderRadius: 4,

  variants: {
    color: {
      yellow: {
        backgroundColor: "$yellow-500",
        color: "$gray-900",
      },

      green: {
        backgroundColor: "$green-500",
      },

      red: {
        backgroundColor: "$red-500",
      },
    },
  },
});
