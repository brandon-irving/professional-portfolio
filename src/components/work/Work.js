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
       Thanks to PeakActivity, i've had the opportunity to work on several successful enterprise applications. I've either architected or assisted in
       building scalable, performant and reliable apps. Utilizing the some of the leading technologies at the time! Using React js i 
       built modular, clean and reusable UI components. To make the components look gorgeous, i used JSX, CSS, SASS or my personal favorite Styled-Components.
       I've also had the opportunity to create Restful API services using Node Js. Authenticating api calls with JWT and encryption handled using Bcrypt.
       Ive worked with plenty of databases, MongoDb, PostGress, MsSql, MySql, Firebase Firestore, etc. Im also familiar with graphQl and other querying languages used in the
       listed databases
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