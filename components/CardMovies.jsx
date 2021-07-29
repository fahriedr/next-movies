import React from "react";
import styled from "styled-components";

const Card = styled.div`
  cursor: pointer;
  text-align: center;
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  display: none;
  ${Card}:hover & {
    display: flex;
    background-color: #fff;
    height: auto;
    width: 100%;
    position: absolute;
    bottom: 20px;
    left: 0%;
    justify-content: center;
    align-items: center;
    color: #000;
    animation: slide-top 0.5s;
  }

  @keyframes slide-top {
    0% {
      bottom: 0px;
    }
    100% {
      bottom: 20px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  position: absolute;
  animation: zoomout 0.8s;

  ${Card} :hover & {
    transform: scale(1.1);
    animation: zooming 0.8s;
  }

  @keyframes zooming {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  @keyframes zoomout {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

`;

const CardMovies = ({ image_path, title, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Image src={image_path} />
      <TextWrapper>
        <p style={{ fontFamily: 'Poppins', fontSize: '18px' }}>{title}</p>
      </TextWrapper>
    </Card>
  );
};

export default CardMovies;
