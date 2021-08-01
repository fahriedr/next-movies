import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../context/userContext";
import { useRouter } from "next/router";

const AboutPage = (props) => {
  const router = useRouter();

  console.log(router);
  console.log(props);

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  return {
    props: { id }, // will be passed to the page component as props
  };
}

export default AboutPage;
