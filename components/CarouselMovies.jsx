import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardMovies from "./CardMovies";
import { stringToSlug } from "../utils/helpers/global-helpers";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Line = styled.hr`
  color: #b7b7b7;
  width: 100%;
  height: 1px;
`;

const Title = styled.span`
  font-weight: bold;
`;

const CarouselMovies = ({ title, data, style, type}) => {

  let slide

  if( type.mobile == true ) {
    slide = 2
  } else if ( type.tablet == true ) {
    slide = 3
  } else if ( type.desktop == true ) {
    slide = 5
  } else if ( type.bigDesktop == true ) {
    slide = 7
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: slide,
  };

  const router = useRouter()

  const onClickMovie = async (data) => {
    const slug = await stringToSlug(data.title)
    const id = data.id

    router.push({
      pathname: `/[type]/[id]/[slug]`,
      query: { type: 'movie', id: id, slug: slug }
    })
  }

  return (
    <Wrapper style={style}>
      <Header>
        <Title>{title}</Title>
        <Title style={{ color: "#e8313c", cursor: 'pointer'}}>See More</Title>
      </Header>
      <Line />
      <Slider {...settings} style={{ marginTop: "10px" }}>
        {data.map((res, i) => (
          <CardMovies
            key={i}
            image_path={`http://image.tmdb.org/t/p/w500${res.poster_path}`}
            title={res.title ?? res.name}
            onClick={() => onClickMovie(res)}
          />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default CarouselMovies;
