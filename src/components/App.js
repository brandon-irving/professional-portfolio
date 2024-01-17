import React from "react";
import styled from "styled-components";
import Navbar from "./navigation/Navbar";
import About from "./about/About";
import Tools from "./tools/Tools";
import Work from "./work/Work";
import ThemeButton from "./ThemeButton";
import media from "styles/media";
import Testimonials from "components/testimonials/Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Favorites from "./favorites/Favorites";
import Projects from "./Projects/Projects";

const Main = styled.div`
  padding-left: 4rem;
  ${media.phone`padding-left: 0`}
  height: 100%;
`;

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <About />
        <Tools />
        <Favorites />
        <Work />
        <Projects />
        <Testimonials />
        <CallToAction />
        <Footer />
      </Main>
      <ThemeButton />
    </>
  );
}

export default App;
