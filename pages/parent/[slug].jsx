import React, { useContext } from "react";
import { useRouter } from "next/router";

const Slug = (props) => {
  const router = useRouter();

  console.log(router);
  console.log(props);

  return (
    <div>
      <h1>Parent Page</h1>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Slug;
