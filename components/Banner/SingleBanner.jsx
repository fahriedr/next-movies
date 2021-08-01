import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import StarRating from '../StarRating'

const BannerWrapper = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  background-color: transparent;
  padding-left: 60px;
  position: relative;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

const Gradient = styled.div`
  position: absolute;
  background-image: linear-gradient(to right, #000, #000, transparent);
  height: 400px;
  left: 0px;
  right: 10px;
  z-index: 1;
  width: 84%;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BannerImage = styled.img`
  width: 60%;
  height: 400px;
  cursor: pointer;
  float: right;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const BannerDetail = styled.div`
  bottom: 120px;
  padding-left: 50px;
  width: 30vw;
  height: auto;
  justify-content: center;
  background-color: teal;
  z-index: 2;
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  padding: 10px 12px;
  color: #fff;

  @media (max-width: 768px) {
    display: none;
  }
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

const SingleBanner = ({data}) => {
  return (
    <BannerWrapper>
      <Gradient />
      <BannerDetail>
        <h1 style={{ marginBottom: "-15px" }}>{data.title ?? data.name}</h1>
        {/* <StarRating data={data.vote_average} style={{ margin: '10px 0px' }}/> */}
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
        // onClick={() => alert(res.title ?? res.name)}
      />
    </BannerWrapper>
  );
};

export default SingleBanner;
