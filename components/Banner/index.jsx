import React from "react";
import MultiBanner from './MultiBanner'
import SingleBanner from './SingleBanner'

const Banner = ({ data }) => {

  if (data.length > 1) {
    return (
      <MultiBanner data={data} />
    )
  } else {
    return (
      <SingleBanner data={data} />
    )
  }
};

export default Banner;
