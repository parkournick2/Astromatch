import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    font-family:sans-serif
  }
`;

const MainContainer = styled.div``;

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <GlobalStyle />
        <MainContainer>Sou lindo</MainContainer>
      </>
    );
  }
}
