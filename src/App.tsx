import { styled } from "./styles/stitches.config";
import logo from "/logo-watch.png";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { CyclesContextProvider } from "./context/CyclesContext";


function App() {
  return (
    <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </BrowserRouter>
  );
}

export default App;
