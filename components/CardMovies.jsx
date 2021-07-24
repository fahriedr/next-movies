import React from "react";
import styled from "styled-components";

const Card = styled.div`
  cursor: pointer;
  text-align: center;
  position: relative;
  width: 200px;
`;

const Text = styled.div`
  display: none;
  ${Card}:hover & {
    display: flex;
    background-color: rgb(0, 0, 0, 0.4);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    color: #fff;
    animation: slide-top 0.5s;
    justify-content: center;
    align-items: center;
  }

  @keyframes slide-top {
    0% {
      top: 100%;
    }
    100% {
      top: 0%;
    }
  }
`;

const Image = styled.img`
  width: 100%;
`;

const CardMovies = ({ image_path, title }) => {
  return (
    <Card>
      <Image src={image_path} />
      <Text>
        <p style={{ fontFamily: 'Poppins', fontSize: '18px' }}>{title}</p>
      </Text>
    </Card>
  );
};

export default CardMovies;
