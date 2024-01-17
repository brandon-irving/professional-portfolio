import React from "react";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";
import { useTrail, animated } from "react-spring";
import media from "styles/media";
import Title from "../Title";
import Container from "../styled/Container";
import ToolCard from "./ToolCard";

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

function Tools() {
  const languages = [
    "JavaScript",
    "Typescript",
    "Html & Css",
    "SQL",
    "GraphQl",
  ];
  const frameworks = ["React Js", "React Native", "Expo", "Next Js", "Node JS"];
  const databases = [
    "MongoDB",
    "Firebase",
    "Vercel Postgres",
    "MySql",
    "PostGres",
  ];
  const testing = [
    "Jest",
    "Enzyme",
    "React Testing Library",
    "Cypress",
    "Selenium",
    "QA Wolf",
  ];
  const cicd = ["GitLab", "Jenkins", "CircleCI", "BitBucket"];
  const cloudServices = [
    "Google Cloud Platform (GCP)",
    "Amazon Web Service (AWS)",
    "Vercel",
    "Netlify",
    "Microsoft Azure",
  ];
  const analytics = [
    "Amplitude",
    "Google Analytics",
    "Hotjar",
    "New Relic",
    "Full Story",
  ];
  const telemetry = ["Sentry", "Datadog", "Prometheus", "Grafana", "Kibana"];

  const cards = [
    { title: "Languages", tools: languages },
    { title: "Frameworks & Libraries ", tools: frameworks },
    { title: "Databases", tools: databases },
    { title: "Testing", tools: testing },
    { title: "CI/CD", tools: cicd },
    { title: "Cloud Services", tools: cloudServices },
    { title: "Analytics and Insight", tools: analytics },
    { title: "Telemetry", tools: telemetry },
  ];

  const [trail, set] = useTrail(8, () => {
    return { opacity: 0, transform: "scale(0)" };
  });

  return (
    <Container id="tools">
      <Title text="Toolbox" />
      <Waypoint onEnter={() => set({ opacity: 1, transform: "scale(1)" })}>
        <Section>
          {trail.map((props, index) => (
            <div key={cards[index].title} style={{ alignSelf: "start" }}>
              <animated.div style={props}>
                <ToolCard {...cards[index]} />
              </animated.div>
            </div>
          ))}
        </Section>
      </Waypoint>
    </Container>
  );
}

export default Tools;
