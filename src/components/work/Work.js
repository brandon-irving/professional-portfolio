import React from "react";
import styled from "styled-components";
import Title from "components/Title";
import Container from "components/styled/Container";

const WorkInfo = styled.p`
  color: ${({ theme }) => theme.titleColor};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.5em;
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: center;
`;

function Work() {
  return (
    <Container id="work">
      <Title text="Work" />
      <WorkInfo>
        As a seasoned Full Stack Engineer Team Lead with six years of
        professional experience, I possess a comprehensive skill set and
        hands-on understanding of the entire software development lifecycle. My
        expertise lies in crafting robust, scalable, and performant front-end
        systems using advanced technologies like React JS, Typescript, and
        Next.js, while simultaneously developing efficient backend services
        utilizing Node.js, GraphQL, and more.
        <br />
        <br />
        Throughout my career, I have spearheaded multiple initiatives and led
        teams to success in reputable companies such as Altruist, PeakActivity,
        City Furniture, YouFit, Planet Fitness, and Uptime Solutions. My
        proficiency lies in identifying innovative solutions, driving
        initiatives forward, and delivering sophisticated software that meets
        and exceeds expectations. I am committed to leveraging my expertise to
        continue creating impactful software and leading teams towards achieving
        exceptional results.
      </WorkInfo>
    </Container>
  );
}

export default Work;
