import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardMovies from "./CardMovies";

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.hr`
  color: #b7b7b7;
  width: 85%;
  height: 1px;
`;

const Title = styled.span`
  font-weight: bold;
`;

const CarouselMovies = ({ title, data, style }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 5,
  };
  return (
    <Wrapper style={style}>
      <Header>
        <Title>{title}</Title>
        <Line />
      </Header>
      <Slider {...settings} style={{ marginTop: "10px" }}>
        {data.map((res, i) => (
          <CardMovies
            key={i}
            image_path={`http://image.tmdb.org/t/p/w500${res.poster_path}`}
            title={res.title ?? res.name}
          />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default CarouselMovies;
