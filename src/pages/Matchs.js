import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MatchCard from "../components/MatchCard";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 50px 50px 50px;
`;

const Title = styled.h2``;

function Matchs() {
  return (
    <MainContainer>
      <Title>Matchs</Title>
      <Grid container spacing={3}>
        <MatchCard/>
        <MatchCard/>
        <MatchCard/>
        <MatchCard/>
        <MatchCard/>
      </Grid>
    </MainContainer>
  );
}

export default Matchs;
