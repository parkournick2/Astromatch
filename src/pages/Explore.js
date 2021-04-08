import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useSnackbar } from "notistack";
import Lottie from "react-lottie";
import animEmpty from "../animations/empty.json";
import animLoading from "../animations/loading.json";

const aluno = "nicolas-furtado-cruz";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  dislikeIcon: {
    color: theme.palette.primary.main,
    margin: "10px",
  },
  likeIcon: {
    color: "red",
    margin: "10px",
  },
}));

const MainContainer = styled.div`
  display: flex;
  height: 94vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  border-radius: 40px;
  width: 25vw;
  height: 50vh;
  min-width: 250px;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.5);
`;
const Name = styled.h3`
  font-size: 22px;
  margin-bottom: 0px;
`;
const Idade = styled.h3`
  font-size: 18px;
  margin: 0px;
  color: gray;
`;
const Describe = styled.p`
  width: 35vw;
  min-width: 250px;
  text-align: center;
`;

function Explore() {
  const [profile, setProfile] = useState("carregando");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (profile === "carregando") {
      setTimeout(() => {
        getProfiles();
      }, 500);
    }
  }, [profile]);

  const getProfiles = async () => {
    try {
      const res = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`
      );
      setProfile(res.data.profile);
    } catch (err) {
      console.log(err.data);
    }
  };

  const chooseProfile = async (choice) => {
    const variant = "success";

    const body = {
      id: profile.id,
      choice: choice,
    };
    try {
      axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`,
        body
      );
      setProfile("carregando");
      if (choice) {
        setTimeout(() => {
          enqueueSnackbar(`Solicitação para ${profile.name} enviada com sucesso!`, { variant, autoHideDuration: 1500 });
        }, 500);
      }
    } catch (err) {
      console.log(err.data);
    }
  };

  const classes = useStyles();

  const profileCard = () => {
    if (profile === null) {
      const animOptions = {
        loop: true,
        autoplay: true,
        animationData: animEmpty,
      };
      return (
        <Describe>
          <Lottie
            isClickToPauseDisabled={true}
            options={animOptions}
            isStopped={false}
            isPaused={false}
          />
          Você já viu todos os perfis! tente a opção reset no menu.
        </Describe>
      );
    } else if (profile === "carregando") {
      const animOptions = {
        loop: true,
        autoplay: true,
        animationData: animLoading,
      };
      return (
        <Describe>
          <Lottie
            isClickToPauseDisabled={true}
            options={animOptions}
            isStopped={false}
            isPaused={false}
          />
        </Describe>
      );
    } else {
      return (
        <>
          <Image src={profile.photo} />
          <Name>{profile.name}</Name>
          <Idade>{profile.age}</Idade>
          <Describe>{profile.bio}</Describe>
          <div>
            <IconButton
              className={classes.dislikeIcon}
              onClick={() => {
                chooseProfile(false);
              }}
              children={<CloseIcon fontSize="large" />}
            />
            <IconButton
              className={classes.likeIcon}
              onClick={() => {
                chooseProfile(true);
              }}
              children={<FavoriteIcon fontSize="large" />}
            />
          </div>
        </>
      );
    }
  };

  return <MainContainer className={classes.root}>{profileCard()}</MainContainer>;
}

export default Explore;
