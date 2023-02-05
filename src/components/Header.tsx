import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo-watch.png";
import { styled } from "../styles/stitches.config";

const HeaderContainer = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  nav: {
    display: "flex",
    gap: "1rem",

    a: {
      width: "2.5rem",
      height: "2.5rem",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      color: "$gray-100",

      borderTop: "3px solid transparent",
      borderBottom: "3px solid transparent",

      "&:hover": {
        borderBottom: "3px solid $green-500",
      },

      "&.active": {
        color: "$green-500",
        borderBottom: "3px solid $green-500",
      },
    },
  },
});

const LogoContent = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: ".5rem",

  span: {
    fontSize: "1.5rem",
    fontWeight: "800",
  },
});

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContent>
        <Timer size={44} />
        <span>Timmer</span>
      </LogoContent>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
