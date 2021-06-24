import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";

export default function Home() {
  return <div>Oie</div>;
}

const Title = styled.h1`
  position: relative;
  top: -2rem;
  width: 5rem;
  height: 10rem;
  color: "red";
  text-decoration: underline;
  border: 1px solid green;

  .classe {
    position: absolute;
  }
`;
