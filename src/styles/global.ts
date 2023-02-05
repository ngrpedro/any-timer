import { globalCss } from "./stitches.config";

export const globaStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    background: "$gray-900",
    color: "$gray-300",
    "-webkit-font-smoothing": "antialised",
  },

  "body, input, textarea, button": {
    fontFamily: "Poppins",
    fontWeight: 400,
  },
});
