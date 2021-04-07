import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MatchCard from "../components/MatchCard";
import axios from "axios";

const aluno = "nicolas-furtado-cruz";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 50px 50px 50px;
`;

const Title = styled.h2``;

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = async () => {
    try {
      const res = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`
      );
      setMatches(res.data.matches);
    } catch (err) {
      console.log(err.data);
    }
  };

  const matchList = matches.map((match) => {
    return <MatchCard name={match.name} age={match.age} photo={match.photo} />;
  });

  return (
    <MainContainer>
      <Title>Matches</Title>
      {matches.length > 0 ? (
        <Grid container spacing={3}>
          {matchList}
        </Grid>
      ) : (
        <div>nada aqui!</div>
      )}
    </MainContainer>
  );
}

export default Matches;
