import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import krit from "../../assets/krit.jpg";

const WorkCard = styled.div<{ isShowing: boolean }>`
  width: 200px;
  height: 250px;
  background-color: #647887;
  border-radius: 5px;
  position: relative;
  transition: opacity 0.5s;

  #card-image {
    transition: height 0.5s ease-in-out;
  }
  &:hover {
    color: #ec9929;
    cursor: pointer;
    #card-image {
      height: 100%;
    }
  }
  opacity: ${({ isShowing }) => (isShowing ? "1" : "0")};
`;

const Title = styled.div`
  background-color: #344855a1;
  padding: 1rem 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const Image = styled.div`
  background-color: #d9d9d9;
  border-radius: 5px;
  height: 90%;
  margin: 1rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const ImageWrapper = styled.div<{ image?: string }>`
  margin-top: auto;
  margin-bottom: auto;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

interface WorkCardProps {
  title: string;
  url: string;
  image?: string;
}

export const Card: FC<WorkCardProps> = ({ title, url, image }) => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setIsShowing(true);
  }, []);
  return (
    <WorkCard
      isShowing={isShowing}
      onClick={() => {
        window.open(`${url}`, "_blank", "noopener,noreferrer");
      }}
    >
      <Image id="card-image">
        <ImageWrapper image={image} />
      </Image>
      <Title> {title}</Title>
    </WorkCard>
  );
};
