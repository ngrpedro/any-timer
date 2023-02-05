import { styled } from "./styles/stitches.config";
import logo from "/logo-watch.png";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const Heading = styled("h1", {
  color: "$green-500",
});

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
