import React from "react";
import styled from "styled-components";
import media from "styles/media";
import Title from "../Title";
import Container from "../styled/Container";
import logo1 from "images/logos/react.png";
import logo2 from "images/logos/react-native.png";
import logo3 from "images/logos/ts.png";
import logo5 from "images/logos/vercel.png";
import logo6 from "images/logos/node.png";
import logo7 from "images/logos/datadog.png";
import logo8 from "images/logos/cypress.png";

const favTools = [logo1, logo2, logo3, logo5, logo6, logo7, logo8];

const FavoritesSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  margin: 1rem;
  margin-bottom: 5rem;
  flex-wrap: wrap;
  margin-left: 20%;
  margin-right: 20%;
  ${media.tablet`
  margin-left: 0;
  margin-right: 0;
`}
  ${media.phone`
  margin-left: 0;
  margin-right: 0;
`}
`;

const FavoriteContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Favorite = styled.img`
  width: 100%;
  max-width: 8rem;
  max-height: 8rem;
  ${media.tablet`
    max-width: 5rem;
    max-height: 5rem;
  `}
`;

function Favorites() {
  return (
    <Container id="favorites">
      <Title text="Favorite Tech" />
      <FavoritesSection>
        {favTools.map((src) => (
          <FavoriteContainer key={src}>
            <Favorite src={src} />
          </FavoriteContainer>
        ))}
      </FavoritesSection>
    </Container>
  );
}

export default Favorites;
