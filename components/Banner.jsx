import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getGenre } from "../utils/helpers/global-helpers";

const BannerWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
`;

const BannerImage = styled.img`
  /* width: 70%; */
  height: 400px;
  cursor: pointer;
`;

const BannerDetail = styled.div`
  /* position: absolute; */
  bottom: 120px;
  padding-left: 50px;
  /* width: 600px; */
  height: auto;
  justify-content: space-between;
  background-color: #000;
  z-index: 100;
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  padding: 10px 12px;
  color: #fff;
`;

const ButtonWatch = styled.button`
  font-family: "Poppins", sans-serif;
  border: none;
  background-color: #e8313c;
  color: #fff;
  width: auto;
  padding: 4px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

const ButtonWishlist = styled.button`
  font-family: "Poppins", sans-serif;
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  width: auto;
  padding: 4px 20px;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #fff;
    color: #e8313c;
    border: 1px solid #e8313c;
  }
`;

const Banner = ({ data }) => {
  if (data.length > 1) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        {data.map((res, index) => {
          return (
            <BannerWrapper key={index}>
              <BannerImage
                src={`http://image.tmdb.org/t/p/original${res.backdrop_path}`}
                onClick={() => alert(res.title ?? res.name)}
              />
              <BannerDetail>
                <h1 style={{ marginBottom: "-15px" }}>
                  {res.title ?? res.name}
                </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "-15px",
                  }}
                >
                  <FaStar
                    size="20px"
                    color="yellow"
                    style={{ marginRight: "6px" }}
                  />
                  <p style={{ marginRight: "8px" }}>{res.vote_average}</p>
                  {/* &#8226; */}
                </div>
                <p style={{ marginRight: "8px", fontSize: "12px" }}>
                  {res.overview}
                </p>
                <div
                  style={{
                    display: "flex",
                    width: "50%",
                    justifyContent: "space-between",
                  }}
                >
                  <ButtonWatch>Watch Now</ButtonWatch>
                  <ButtonWishlist>Add to Wishlist</ButtonWishlist>
                </div>
              </BannerDetail>
            </BannerWrapper>
          );
        })}
      </Slider>
    );
  } else {
    return (
      <BannerWrapper>
        <BannerDetail>
          <h1 style={{ marginBottom: "-15px" }}>{data.title ?? data.name}</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "-15px",
            }}
          >
            <FaStar size="20px" color="yellow" style={{ marginRight: "6px" }} />
            <p style={{ marginRight: "8px" }}>{data.vote_average}</p>
            {/* &#8226; */}
          </div>
          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
            }}
          >
            <ButtonWatch>Watch Now</ButtonWatch>
            <ButtonWishlist>Add to Wishlist</ButtonWishlist>
          </div>
        </BannerDetail>
        <BannerImage
          src={`http://image.tmdb.org/t/p/original${data.backdrop_path}`}
          onClick={() => alert(data.title ?? data.name)}
        />
      </BannerWrapper>
    );
  }
};

export default Banner;
