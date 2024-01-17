import React from "react";
import styled from "styled-components";
import Ink from "react-ink";
import media from "styles/media";
import NavigationButtonBase from "components/styled/NavigationButtonBase";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  position: fixed;
  box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.15);
  height: 100%;
  width: 4rem;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.nav.background};
  ${media.phone`display: none;`}
`;

const HomeButton = styled(NavigationButtonBase)`
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-family: "Space Mono", monospace;
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

function Navbar() {
  const handleClick = (id) => () => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper>
      <HomeButton onClick={handleClick("about")}>
        <Ink />
        <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon="home" />
      </HomeButton>
      <NavButton icon="toolbox" onClick={handleClick("tools")} />
      <NavButton icon="faHeart" onClick={handleClick("favorites")} />
      <NavButton icon="laptop-code" onClick={handleClick("work")} />
      <NavButton icon="faGlobe" onClick={handleClick("projects")} />
      <NavButton icon="paper-plane" onClick={handleClick("contact")} />
    </Wrapper>
  );
}

export default Navbar;
