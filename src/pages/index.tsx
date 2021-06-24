import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Background>
      <div>Stoom</div>
    </Background>
  );
};

const Background = styled.div`
  background: ${({ theme }) => theme.background};
`;

export default Home;
