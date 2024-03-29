import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config, Transition } from "react-spring";
import media from "styles/media";
import "react-image-gallery/styles/css/image-gallery.css";
import "./imageGalleryOverrides.css";
import Tag from "components/styled/Tag";
import useCloseDialog from "hooks/useCloseDialog";
import LoadingSpinner from "./LoadingSpinner";

const Overlay = styled(animated.div)`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  touch-action: none;
  webkit-tap-highlight-color: transparent;
  width: 100%;
  z-index: 1;
`;

const OverlayBackground = styled.div`
  background: #2bc0e4; /* fallback for old browsers */
  background: ${(props) => props.background};
  height: 100%;
  left: 0;
  opacity: 0.95;
  position: fixed;
  top: 0;
  touch-action: none;
  webkit-tap-highlight-color: transparent;
  width: 100%;
  &::before {
    background-color: ${(props) => props.theme.background};
    content: "";
    display: block;
    height: 100%;
    opacity: ${(props) => (props.theme.mode === "dark" ? 0.7 : 0)};
    position: absolute;
    width: 100%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-areas: "images info";
  grid-template-columns: 50% 50%;
  height: 100%;
  position: relative;
  padding: 20px;
  ${media.tablet`
    grid-template-areas: "info" "images";
    grid-template-columns: 100%;
    grid-template-rows: 50%;
  `}
  ${media.phone`
    grid-template-areas: "info" "images";
    grid-template-columns: 100%;
    grid-template-rows: 50%;
  `}
`;

const ImagesContainer = styled(animated.div)`
  align-items: center;
  display: flex;
  grid-area: images;
  justify-content: center;
  padding 2em;
`;

const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  grid-area: info;
  justify-content: center;
`;

const TextContainer = styled(animated.div)`
  color: white;
  padding: 2em;
  text-align: center;
  width: 80%;
  ${media.phone`
    padding-top: 5em;
  `}
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
`;

const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
`;

const UrlSection = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 2.5em;
  margin-left: 0.5em;
  font-size: 1.6em;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: var(--dark-bg-color);
  }
`;

const ExitButton = styled(animated.div)`
  color: white;
  cursor: pointer;
  font-size: 2em;
  margin: 1em;
  position: absolute;
  right: 0;
  top: 10px;
  z-index: 3;
`;

const Tags = styled.p`
  text-align: center;
`;
function WorkModal({ toggleModalOpen, open, project }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useCloseDialog({ open, onClose: toggleModalOpen });

  useEffect(() => {
    setImagesLoaded(false);
  }, [project, open]);

  const onImageLoad = useCallback(() => {
    let count = 0;
    return () => {
      count += 1;
      if (count === project.images.length) {
        setImagesLoaded(true);
      }
    };
  }, [project]);

  if (!open) return null;

  return (
    <Overlay>
      <OverlayBackground id="overlay" background={project.background} />
      <ExitButton id="exit-button" onClick={toggleModalOpen}>
        <FontAwesomeIcon icon="times" />
      </ExitButton>
      <Container id="container">
        <InfoContainer id="info-container">
          <TextContainer>
            <Title>{project.projectTitle}</Title>
            <Info>{project.projectInfo}</Info>
            {project.appUrl && project.githubUrl && (
              <div>
                <UrlSection>
                  <Link href={project.githubUrl} target="_blank">
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </Link>
                  <Link href={project.appUrl} target="_blank">
                    <FontAwesomeIcon icon="external-link-alt" />
                  </Link>
                </UrlSection>
              </div>
            )}
          </TextContainer>
        </InfoContainer>
        <ImagesContainer id="image-container">
          <LoadingSpinner loaded={imagesLoaded} />
          <div style={{ display: imagesLoaded ? "block" : "none" }}>
            <ImageGallery
              onImageLoad={onImageLoad()}
              items={project.images}
              showBullets={true}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
            <Tags>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
          </div>
        </ImagesContainer>
      </Container>
    </Overlay>
  );
}

WorkModal.propTypes = {
  toggleModalOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired,
};

export default WorkModal;
