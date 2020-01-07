import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import Container from 'components/styled/Container';
import media from 'styles/media';
import WorkCard from './WorkCard';
import workItems from 'data/workItems';
import GradientButton from 'components/GradientButton';

const Grid = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  ${media.tablet`
    grid-template-columns: repeat(auto-fit, minmax(60%, 1fr));
  `}
  ${media.phone`
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  `}
`;

const WorkInfo = styled.p`
  color: ${({ theme }) => theme.titleColor};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.5em;
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: center;
`;

const ViewMoreContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 3rem;
  padding-bottom: 0;
`;

function Work() {
  return (
    <Container id="work">
      <Title text="Work" />
      <WorkInfo>
       Thanks to PeakActivity, i've had the opportunity to work on many projects. This gained me tons of experience. I've used React Js to build 
       responsive and reusable components, along with the context api to create custom hooks that abstracts business logic into reusable components. I've used html5
       and css (as well as css libraries such as bootstrap and material) to make the components look visually pleasing. For the backend, i've primarily
       used Node js/Express, to create api endpoints, handle authentication, etc. The databases i've gotten to work with are MongoDb, FireBase and MsSql.

      </WorkInfo>
      <WorkInfo as="h4">Here are some projects:</WorkInfo>
      <Grid>
        {workItems.map(project => (
          <WorkCard
            key={project.projectTitle}
            project={project}
          />
        ))}
      </Grid>
      <ViewMoreContainer>
        <GradientButton
          icon={['fab', 'github']}
          text="view more on github"
          href="https://github.com/brandon-irving?tab=repositories"
        >
        </GradientButton>
      </ViewMoreContainer>
    </Container>
  );
};

export default Work;