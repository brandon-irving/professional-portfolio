import React from "react";
import styled from "styled-components";
import media from "styles/media";
import workItems from "data/workItems";
import Title from "components/Title";
import Container from "components/styled/Container";
import WorkCard from "components/work/WorkCard";
import GradientButton from "components/GradientButton";

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
const ViewMoreContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 3rem;
  padding-bottom: 0;
`;
export default function Projects() {
  return (
    <Container id="projects">
      <Title text="Projects" />
      <Grid>
        {workItems.map((project) => (
          <WorkCard key={project.projectTitle} project={project} />
        ))}
      </Grid>
      <ViewMoreContainer>
        <GradientButton
          icon={["fab", "github"]}
          text="view more on github"
          href="https://github.com/brandon-irving?tab=repositories"
        ></GradientButton>
      </ViewMoreContainer>
    </Container>
  );
}
