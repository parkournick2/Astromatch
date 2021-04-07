import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MatchCard from "../components/MatchCard";
import axios from "axios";
import Lottie from "react-lottie";
import animLoading from "../animations/loading.json";
import animSad from "../animations/sad.json";

const aluno = "nicolas-furtado-cruz";

const Msg = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  color: gray;
  gap: 20px;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 50px 50px 50px;
`;

const Title = styled.h2``;

function Matches() {
  const [matches, setMatches] = useState("carregando");

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = async () => {
    try {
      const res = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`
      );
      setTimeout(() => {
        setMatches(res.data.matches);
      }, 500);
    } catch (err) {
      console.log(err.data);
    }
  };

  const content = () => {
    if (matches === "carregando") {
      const animOptions = {
        loop: true,
        autoplay: true,
        animationData: animLoading,
      };
      return (
        <Msg>
          <Lottie
            isClickToPauseDisabled={true}
            options={animOptions}
            width={200}
            height={200}
            isStopped={false}
            isPaused={false}
          />
        </Msg>
      );
    } else if (matches.length === 0) {
      const animOptions = {
        loop: true,
        autoplay: true,
        animationData: animSad,
      };
      return (
        <Msg>
          <Lottie
            isClickToPauseDisabled={true}
            options={animOptions}
            width={100}
            height={100}
            isStopped={false}
            isPaused={false}
          />
          Você ainda não tem matches
        </Msg>
      );
    } else {
      const matchList = matches.map((match) => {
        return (
          <MatchCard name={match.name} age={match.age} photo={match.photo} />
        );
      });
      return (
        <Grid container spacing={3}>
          {matchList}
        </Grid>
      );
    }
  };

  return (
    <MainContainer>
      <Title>Matches</Title>
      {content()}
    </MainContainer>
  );
}

export default Matches;
