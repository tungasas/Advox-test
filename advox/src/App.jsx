import React from "react";
import styled from "styled-components";
import FavMusicListContainer from "./containers/FavMusicListContainer";

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  @media screen and (min-width: 576px) {
    padding: 0 24px;
  }
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

function App() {
  return (
    <StyledWrapper>
      <FavMusicListContainer />
    </StyledWrapper>
  );
}

export default App;
