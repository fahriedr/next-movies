import React from "react";
import StarRatings from "react-star-ratings";

const StarRating = ({ data }) => {

    const val = data / 2

  return <StarRatings rating={val} starDimension="22px" starSpacing="5px" starRatedColor="yellow" />;
};

export default StarRating;
