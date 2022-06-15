import React, { useState } from "react";
import styled from "styled-components";
import FavMusicListContainer from "./containers/FavMusicListContainer";
import { LanguageSwitcher } from "./components";
import { LanguageContext } from "./context/LanguageContext";

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
  const [language, setLanguage] = useState("english");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <StyledWrapper>
        <LanguageSwitcher />
        <FavMusicListContainer />
      </StyledWrapper>
    </LanguageContext.Provider>
  );
}

export default App;
