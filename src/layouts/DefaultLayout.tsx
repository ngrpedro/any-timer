import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { styled } from "../styles/stitches.config";

const LayoutContainer = styled("div", {
  maxWidth: "74rem",
  margin: "5rem auto",
  padding: "2.5rem",

  background: "$gray-800",
  borderRadius: "8px",

  display: "flex",
  flexDirection: "column",
});

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default DefaultLayout;
