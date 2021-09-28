import React from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';
import { useTrail, animated } from 'react-spring';
import media from 'styles/media';
import Title from '../Title';
import Container from '../styled/Container';
import logo1 from 'images/logos/firebase.png';
import logo2 from 'images/logos/gcp.png';
import logo3 from 'images/logos/git.png';
import logo5 from 'images/logos/material-ui.png';
import logo6 from 'images/logos/node.png';
import logo7 from 'images/logos/react.png';
import logo8 from 'images/logos/ts.png';
import ToolCard from './ToolCard';

const favTools = [logo1, logo2, logo3, logo5, logo6, logo7, logo8];

const Section = styled.div`
  width: auto;
  height: auto;
  background: #ddd;
  border-radius: 4px;
  display: grid;
  margin: auto;
  margin-bottom: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  ${media.tablet`
    grid-template-columns: repeat(auto-fill, minmax(50%,1fr));
  `}
  ${media.phone`
    grid-template-columns: repeat(auto-fill, minmax(100%,1fr));
  `}
  align-items: center;
  justify-content: center;
`;

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

function Tools() {
  const languages = ['JavaScript', 'Python', 'Html & Css'];
  const frameworks = ['React Js', 'React Native', 'Next Js', 'Express Js'];
  const databases = ['MongoDB', 'Firebase', 'MsSql', 'MySql', 'PostGres'];
  const testing = ['Jest', 'Enzyme', 'React Testing Library', 'Cypress'];
  const cards = [
    { title: 'Languages', tools: languages },
    { title: 'Frameworks & Libraries ', tools: frameworks },
    { title: 'Databases', tools: databases },
    { title: 'Testing', tools: testing },
  ];

  const [trail, set] = useTrail(4, () => {
    return { opacity: 0, transform: 'scale(0)' };
  });

  return (
    <Container id="tools">
      <Title text="Toolbox" />
      <Waypoint onEnter={() => set({ opacity: 1, transform: 'scale(1)' })}>
        <Section>
          {trail.map((props, index) => (
            <div key={cards[index].title} style={{ alignSelf: 'start' }}>
              <animated.div style={props}>
                <ToolCard {...cards[index]} />
              </animated.div>
            </div>
          ))}
        </Section>
      </Waypoint>

      <FavoritesSection>
        {favTools.map(src => (
          <FavoriteContainer key={src}>
            <Favorite src={src} />
          </FavoriteContainer>
        ))}
      </FavoritesSection>
    </Container>
  );
}

export default Tools;
